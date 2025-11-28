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
  const responseId = location.state?.responseId || null;

  const [showPix, setShowPix] = useState(false);
  const [pixCode, setPixCode] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [isLoading, setIsLoading] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);

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

  // Verifica status do pagamento periodicamente
  const startPaymentPolling = useCallback((paymentId: string) => {
    const workerUrl = import.meta.env.VITE_PIX_WORKER_URL || "https://petscore-checkout.ademilson.workers.dev";
    
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`${workerUrl}/status-pagamento?id=${paymentId}`);
        if (!response.ok) return;

        const data = await response.json();
        if (data.status === "CONFIRMED") {
          clearInterval(interval);
          toast.success("Pagamento confirmado! Redirecionando...");
          
          // Redireciona para URL única do resultado completo
          if (responseId) {
            navigate(`/resultado-completo/${responseId}`);
          } else {
            navigate("/resultado-completo", { 
              state: { 
                score, 
                paid: true, 
                petImage, 
                petName, 
                petGender 
              } 
            });
          }
        }
      } catch (error) {
        console.error("Erro ao verificar status:", error);
      }
    }, 5000); // Verifica a cada 5 segundos

    // Para o polling após 5 minutos
    setTimeout(() => {
      clearInterval(interval);
    }, 300000);
  }, [responseId, navigate, score, petImage, petName, petGender]);

  const generatePixCode = useCallback(async () => {
    setIsLoading(true);
    try {
      // Chama o Worker para criar pagamento
      const workerUrl = import.meta.env.VITE_PIX_WORKER_URL || "https://petscore-checkout.ademilson.workers.dev";
      const tutorName = location.state?.tutorName || "";
      const tutorPhone = location.state?.tutorPhone || "";

      const response = await fetch(`${workerUrl}/criar-pagamento`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: tutorName,
          whatsapp: tutorPhone,
          value: 19.90
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao criar pagamento");
      }

      const data = await response.json();
      setPixCode(data.pixCode);
      setPaymentId(data.id);
      setShowPix(true);
      setTimeLeft(300); // Resetar contador para 5 minutos

      // Inicia verificação de status do pagamento
      startPaymentPolling(data.id);
    } catch (error) {
      console.error("Erro ao gerar Pix:", error);
      toast.error("Erro ao gerar código Pix. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }, [location.state, startPaymentPolling]);

  const handlePayment = () => {
    generatePixCode();
  };

  const copyPixCode = async () => {
    if (!pixCode) {
      toast.error("Código Pix não disponível");
      return;
    }

    try {
      // Tentar usar a API moderna do Clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(pixCode);
        toast.success("Código Pix copiado!");
      } else {
        // Fallback para navegadores mais antigos
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
