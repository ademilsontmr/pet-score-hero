import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useCallback } from "react";
import { Check, Copy, QrCode } from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const score = location.state?.score || 0;
    const petImage = location.state?.petImage || null;
    const petName = location.state?.petName || "";
    const petGender = location.state?.petGender || "";
    const tutorName = location.state?.tutorName || "";
    const tutorPhone = location.state?.tutorPhone || "";

    const [showPix, setShowPix] = useState(false);
    const [pixCode, setPixCode] = useState<string>("");
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
    const [isLoading, setIsLoading] = useState(false);

    // Determine the correct article based on gender
    const article = petGender === "female" ? "da" : "do";

    useEffect(() => {
        document.title = showPix ? "Pagamento Pix | PetScore" : "Finalizar Compra | PetScore";
        if (!location.state?.score) {
            navigate("/");
        }
    }, [location.state, navigate, showPix]);

    // Contador regressivo
    useEffect(() => {
        if (!showPix || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    toast.error("Tempo de pagamento expirado. Gere um novo QR Code.");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [showPix, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    // Simula verificação de status do pagamento
    const startPaymentPolling = useCallback(() => {
        // Simula confirmação após 10 segundos
        const timer = setTimeout(() => {
            toast.success("Pagamento confirmado! Redirecionando...");
            navigate("/resultado-completo", {
                state: {
                    score,
                    paid: true,
                    petImage,
                    petName,
                    petGender
                }
            });
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigate, score, petImage, petName, petGender]);

    const generatePixCode = useCallback(async () => {
        setIsLoading(true);
        try {
            // Simulação de geração de PIX (Mock)
            await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay

            const mockPixCode = `00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540519.905802BR5925PETSCORE COMERCIO LTDA6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 15)}`;

            setPixCode(mockPixCode);
            setShowPix(true);
            setTimeLeft(300);

            toast.success("QR Code gerado com sucesso!");

            // Inicia "polling" simulado
            startPaymentPolling();

        } catch (error) {
            console.error("Erro ao gerar Pix:", error);
            toast.error("Erro ao gerar código Pix. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    }, [startPaymentPolling]);

    const handlePayment = () => {
        generatePixCode();
    };

    const copyPixCode = async () => {
        if (!pixCode) {
            toast.error("Código Pix não disponível");
            return;
        }

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(pixCode);
                toast.success("Código Pix copiado!");
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = pixCode;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    const successful = document.execCommand("copy");
                    if (successful) {
                        toast.success("Código Pix copiado!");
                    } else {
                        throw new Error("Falha ao copiar");
                    }
                } catch (err) {
                    toast.error("Erro ao copiar. Selecione o código manualmente.");
                } finally {
                    document.body.removeChild(textArea);
                }
            }
        } catch (error) {
            console.error("Erro ao copiar código Pix:", error);
            toast.error("Erro ao copiar. Selecione o código manualmente.");
        }
    };

    // Tela PIX
    if (showPix) {
        return (
            <div className="min-h-screen bg-gradient-warm py-8 px-4 flex items-center justify-center">
                <div className="max-w-md w-full space-y-6">
                    {/* Header com Valor e Contador */}
                    <div className="text-center space-y-3">
                        <h1 className="text-2xl font-bold text-foreground">Pagamento Pix</h1>
                        <div className="flex items-center justify-center gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Valor</p>
                                <p className="text-2xl font-bold text-orange-600">R$ 19,90</p>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div>
                                <p className="text-sm text-gray-600">Tempo</p>
                                <p className={`text-2xl font-bold ${timeLeft < 60 ? "text-red-600" : "text-orange-600"}`}>
                                    {formatTime(timeLeft)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* QR Code */}
                    <Card className="p-6 bg-white shadow-medium">
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-3 rounded-lg border-2 border-gray-200">
                                {pixCode ? (
                                    <QRCodeSVG
                                        value={pixCode}
                                        size={240}
                                        level="M"
                                        includeMargin={true}
                                    />
                                ) : (
                                    <div className="w-60 h-60 bg-gray-100 flex items-center justify-center rounded">
                                        <QrCode className="w-24 h-24 text-gray-400" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>

                    {/* Código Copiável */}
                    <Card className="p-4 bg-white shadow-medium">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">
                                    Código Pix
                                </label>
                                <Button
                                    onClick={copyPixCode}
                                    size="sm"
                                    className="gap-2 bg-orange-600 hover:bg-orange-700"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copiar
                                </Button>
                            </div>
                            <div className="bg-gray-50 p-3 rounded border border-gray-200">
                                <p
                                    id="pix-code-text"
                                    className="text-xs font-mono text-gray-800 break-all select-all cursor-text"
                                    onClick={(e) => {
                                        const range = document.createRange();
                                        range.selectNodeContents(e.currentTarget);
                                        const selection = window.getSelection();
                                        selection?.removeAllRanges();
                                        selection?.addRange(range);
                                    }}
                                >
                                    {pixCode || "Gerando código Pix..."}
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Mensagem informativa */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Após a confirmação do pagamento, você será redirecionado automaticamente para a página do resultado completo.
                        </p>
                        <Button
                            variant="ghost"
                            className="mt-4 text-xs text-muted-foreground"
                            onClick={() => {
                                navigate("/resultado-completo", {
                                    state: {
                                        score,
                                        paid: true,
                                        petImage,
                                        petName,
                                        petGender
                                    }
                                });
                            }}
                        >
                            (Simular Pagamento Confirmado)
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Tela inicial de pagamento
    return (
        <div className="min-h-screen bg-gradient-warm py-12 px-4">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-2">
                        <span className="text-4xl">✨</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        {petName ? `Relatório ${article} ${petName}` : "Seu Relatório Completo"}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Desbloqueie insights personalizados para o bem-estar do seu pet
                    </p>
                </div>

                {/* What's Included */}
                <Card className="p-8 md:p-10 shadow-medium bg-white">
                    <h2 className="text-xl font-bold text-foreground mb-6 text-center">O que está incluído</h2>

                    <div className="space-y-4 max-w-lg mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">Score detalhado de 0 a 100</p>
                                <p className="text-sm text-gray-600">Entenda exatamente onde você está</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">Plano de ação personalizado</p>
                                <p className="text-sm text-gray-600">Dicas práticas baseadas nas suas respostas</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">Certificado oficial {petName && `do ${petName}`}</p>
                                <p className="text-sm text-gray-600">
                                    {petImage ? "Com a foto que você escolheu" : "Para compartilhar nas redes sociais"}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">Guias de saúde e nutrição</p>
                                <p className="text-sm text-gray-600">Informações validadas por veterinários</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">Planner Protocolo de Saúde Preventiva</p>
                                <p className="text-sm text-gray-600">Checklist completo para acompanhar vacinas, exames e vermífugos</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Emotional Copy */}
                <div className="text-center max-w-2xl mx-auto px-4">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                        Por um valor simbólico, você transforma a vida {petName ? `${article} ${petName}` : "do seu pet"} e fortalece o vínculo que os une. Cada insight vale anos de alegria juntos.
                    </p>
                </div>

                {/* Pricing */}
                <Card className="p-8 md:p-10 shadow-medium bg-white border-2 border-orange-200">
                    <div className="text-center space-y-6">
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Pagamento único</p>
                            <div className="flex items-baseline justify-center gap-3">
                                <span className="text-2xl text-gray-400 line-through">R$ 97</span>
                                <span className="text-5xl md:text-6xl font-bold text-orange-600">R$ 19,90</span>
                            </div>
                            <p className="text-sm text-green-600 font-medium mt-2">Economia de 80%</p>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 pt-4 border-t border-gray-200">
                            <p>✓ Acesso imediato após o pagamento</p>
                            <p>✓ Pagamento 100% seguro</p>
                        </div>

                        <Button
                            size="lg"
                            onClick={handlePayment}
                            disabled={isLoading}
                            className="w-full text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Gerando código Pix..." : "Desbloquear Resultado Completo"}
                        </Button>

                        <p className="text-xs text-muted-foreground/80 italic">
                            Você será redirecionado para a tela de pagamento seguro com nosso parceiro e, após a confirmação, voltará automaticamente para ver seu resultado completo.
                        </p>

                        <p className="text-xs text-gray-500">
                            Ao continuar, você concorda com nossos{" "}
                            <a href="/termos" className="underline hover:text-gray-700">Termos</a> e{" "}
                            <a href="/privacidade" className="underline hover:text-gray-700">Privacidade</a>
                        </p>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Payment;
