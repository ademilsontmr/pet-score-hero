import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useCallback } from "react";
import { Check, Copy, QrCode, Shield, Clock, Zap, Star, Heart, Award, FileText } from "lucide-react";
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
    const [timeLeft, setTimeLeft] = useState(300);
    const [isLoading, setIsLoading] = useState(false);

    const article = petGender === "female" ? "da" : "do";

    useEffect(() => {
        document.title = showPix ? "Pagamento Pix | PetScore" : "Finalizar Compra | PetScore";
        if (!location.state?.score) {
            navigate("/");
        }
    }, [location.state, navigate, showPix]);

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

    const startPaymentPolling = useCallback(() => {
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
            await new Promise(resolve => setTimeout(resolve, 1500));

            const mockPixCode = `00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540519.905802BR5925PETSCORE COMERCIO LTDA6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 15)}`;

            setPixCode(mockPixCode);
            setShowPix(true);
            setTimeLeft(300);

            toast.success("QR Code gerado com sucesso!");
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
            <div className="min-h-screen bg-gradient-warm py-6 px-4 flex items-center justify-center">
                <div className="max-w-md w-full space-y-5">
                    {/* Header com Valor e Contador */}
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-2">
                            <QrCode className="w-7 h-7 text-primary" />
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold text-foreground">Pagamento Pix</h1>
                        <div className="flex items-center justify-center gap-4 sm:gap-6">
                            <div className="text-center">
                                <p className="text-xs text-muted-foreground">Valor</p>
                                <p className="text-xl sm:text-2xl font-bold text-primary">R$ 19,90</p>
                            </div>
                            <div className="h-10 w-px bg-border"></div>
                            <div className="text-center">
                                <p className="text-xs text-muted-foreground">Tempo restante</p>
                                <p className={`text-xl sm:text-2xl font-bold ${timeLeft < 60 ? "text-destructive" : "text-primary"}`}>
                                    {formatTime(timeLeft)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* QR Code */}
                    <Card className="p-4 sm:p-6 bg-card shadow-medium">
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 sm:p-3 rounded-xl border-2 border-border">
                                {pixCode ? (
                                    <QRCodeSVG
                                        value={pixCode}
                                        size={200}
                                        level="M"
                                        includeMargin={true}
                                        className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]"
                                    />
                                ) : (
                                    <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] bg-muted flex items-center justify-center rounded">
                                        <QrCode className="w-20 h-20 text-muted-foreground" />
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 text-center">
                                Escaneie o QR Code com o app do seu banco
                            </p>
                        </div>
                    </Card>

                    {/* Código Copiável */}
                    <Card className="p-4 bg-card shadow-medium">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-foreground">
                                    Ou copie o código Pix
                                </label>
                                <Button
                                    onClick={copyPixCode}
                                    size="sm"
                                    className="gap-2 bg-primary hover:bg-primary/90"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copiar
                                </Button>
                            </div>
                            <div className="bg-muted p-3 rounded-lg border border-border">
                                <p
                                    id="pix-code-text"
                                    className="text-xs font-mono text-foreground break-all select-all cursor-text leading-relaxed"
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

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Shield className="w-3.5 h-3.5" />
                            <span>100% Seguro</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5" />
                            <span>Liberação instantânea</span>
                        </div>
                    </div>

                    {/* Mensagem informativa */}
                    <div className="text-center">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            Após a confirmação, você será redirecionado automaticamente.
                        </p>
                        <Button
                            variant="ghost"
                            className="mt-3 text-xs text-muted-foreground/60 underline"
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
                            (Simular Pagamento)
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Tela inicial de pagamento
    return (
        <div className="min-h-screen bg-gradient-warm py-6 sm:py-12 px-4">
            <div className="max-w-2xl mx-auto space-y-6">

                {/* Header com Pet Image */}
                <div className="text-center space-y-4">
                    {petImage && (
                        <div className="relative inline-block">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mx-auto">
                                <img src={petImage} alt={petName} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md">
                                <Heart className="w-4 h-4 text-primary-foreground fill-current" />
                            </div>
                        </div>
                    )}
                    {!petImage && (
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                            <span className="text-3xl">✨</span>
                        </div>
                    )}
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            {petName ? `Relatório ${article} ${petName}` : "Seu Relatório Completo"}
                        </h1>
                        <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-md mx-auto">
                            Desbloqueie insights personalizados para o bem-estar do seu pet
                        </p>
                    </div>
                </div>

                {/* Urgency Banner */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-center gap-2 text-center">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-foreground font-medium">
                            <span className="text-primary font-bold">Oferta especial:</span> 80% de desconto por tempo limitado
                        </p>
                    </div>
                </div>

                {/* What's Included - Compact */}
                <Card className="p-4 sm:p-6 shadow-medium bg-card overflow-hidden">
                    <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        O que você vai receber
                    </h2>

                    <div className="grid gap-3">
                        {[
                            { icon: Star, title: "Score detalhado de 0 a 100", desc: "Análise completa do seu cuidado" },
                            { icon: FileText, title: "Plano de ação personalizado", desc: "Dicas práticas para melhorar" },
                            { icon: Award, title: `Certificado oficial${petName ? ` ${article} ${petName}` : ""}`, desc: petImage ? "Com a foto do seu pet" : "Para compartilhar" },
                            { icon: Heart, title: "Guias de saúde e nutrição", desc: "Conteúdo validado por especialistas" },
                            { icon: Shield, title: "Planner de Saúde Preventiva", desc: "Vacinas, exames e vermífugos" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 p-2 sm:p-3 bg-muted/50 rounded-lg">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Pricing Card */}
                <Card className="p-4 sm:p-6 shadow-medium bg-card border-2 border-primary/30 relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute -top-0 -right-0">
                        <div className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-bl-lg">
                            MAIS VENDIDO
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        {/* Price */}
                        <div className="pt-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pagamento único</p>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-lg sm:text-xl text-muted-foreground/60 line-through">R$ 97</span>
                                <span className="text-4xl sm:text-5xl font-bold text-primary">R$ 19,90</span>
                            </div>
                            <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full mt-2">
                                <Zap className="w-3 h-3" />
                                Economia de R$ 77,10
                            </div>
                        </div>

                        {/* Trust signals */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-3 border-y border-border text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5 text-primary" />
                                <span>Acesso imediato</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Shield className="w-3.5 h-3.5 text-primary" />
                                <span>100% seguro</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="w-3.5 h-3.5 text-primary" />
                                <span>Sem criar conta</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            size="lg"
                            onClick={handlePayment}
                            disabled={isLoading}
                            className="w-full text-base sm:text-lg px-6 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                                    Gerando Pix...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Desbloquear Resultado
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            )}
                        </Button>

                        <p className="text-[10px] sm:text-xs text-muted-foreground/70 leading-relaxed">
                            Pagamento via Pix. Após confirmação, acesso liberado instantaneamente.
                        </p>
                    </div>
                </Card>

                {/* Emotional Copy */}
                <div className="text-center px-2">
                    <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                        "Por menos que um cafezinho, você transforma a vida {petName ? `${article} ${petName}` : "do seu pet"} e fortalece o vínculo que os une."
                    </p>
                </div>

                {/* Legal links */}
                <p className="text-[10px] sm:text-xs text-center text-muted-foreground/60">
                    Ao continuar, você concorda com nossos{" "}
                    <a href="/termos" className="underline hover:text-foreground transition-colors">Termos</a> e{" "}
                    <a href="/privacidade" className="underline hover:text-foreground transition-colors">Privacidade</a>
                </p>

            </div>
        </div>
    );
};

export default Payment;