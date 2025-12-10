import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useCallback } from "react";
import { Check, Copy, QrCode, Shield, Clock, Zap, Star, Heart, Award, FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const petImage = location.state?.petImage || null;
  const petName = location.state?.petName || "";
  const petGender = location.state?.petGender || "";
  const tutorName = location.state?.tutorName || "";
  const tutorPhone = location.state?.tutorPhone || "";

  // Form state
  const [formData, setFormData] = useState({
    name: tutorName,
    phone: tutorPhone,
    email: "",
    cpf: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [showPix, setShowPix] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string>("");
  const [quizResultId, setQuizResultId] = useState<string>("");
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

  // Format CPF input
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  // Format phone input
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 3) {
      errors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    const phoneNumbers = formData.phone.replace(/\D/g, "");
    if (!phoneNumbers) {
      errors.phone = "Telefone é obrigatório";
    } else if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      errors.phone = "Telefone inválido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "E-mail é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "E-mail inválido";
    }

    const cpfNumbers = formData.cpf.replace(/\D/g, "");
    if (!cpfNumbers) {
      errors.cpf = "CPF é obrigatório";
    } else if (cpfNumbers.length !== 11) {
      errors.cpf = "CPF deve ter 11 dígitos";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Check payment status periodically
  const startPaymentPolling = useCallback((resultId: string) => {
    const pollInterval = setInterval(async () => {
      try {
        const { data, error } = await supabase
          .from("quiz_results")
          .select("payment_status")
          .eq("id", resultId)
          .maybeSingle();

        if (data?.payment_status === "paid") {
          clearInterval(pollInterval);
          toast.success("Pagamento confirmado! Redirecionando...");
          navigate("/resultado-completo", {
            state: {
              score,
              paid: true,
              petImage,
              petName,
              petGender,
              quizResultId: resultId,
            },
          });
        }
      } catch (err) {
        console.error("Error polling payment status:", err);
      }
    }, 5000);

    // Stop polling after 5 minutes
    setTimeout(() => clearInterval(pollInterval), 300000);

    return () => clearInterval(pollInterval);
  }, [navigate, score, petImage, petName, petGender]);

  const handleGenerateQRCode = async () => {
    if (!validateForm()) {
      toast.error("Por favor, preencha todos os campos corretamente.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.replace(/\D/g, ""),
          email: formData.email.trim().toLowerCase(),
          cpf: formData.cpf.replace(/\D/g, ""),
          petName: petName,
          score: score,
        },
      });

      if (error) {
        console.error("Error creating payment:", error);
        toast.error("Erro ao gerar pagamento. Tente novamente.");
        return;
      }

      if (data?.paymentUrl) {
        setPaymentUrl(data.paymentUrl);
        setQuizResultId(data.quizResultId);
        setShowPix(true);
        setTimeLeft(300);
        toast.success("QR Code gerado com sucesso!");
        startPaymentPolling(data.quizResultId);
      } else {
        toast.error("Erro ao gerar QR Code. Tente novamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Erro ao processar pagamento. Tente novamente.");
    } finally {
      setIsLoading(false);
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
                {paymentUrl ? (
                  <QRCodeSVG
                    value={paymentUrl}
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

          {/* Link para pagamento */}
          {paymentUrl && (
            <Card className="p-4 bg-card shadow-medium">
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground text-center">
                  Ou clique no botão abaixo para pagar:
                </p>
                <Button
                  onClick={() => window.open(paymentUrl, "_blank")}
                  className="w-full gap-2 bg-primary hover:bg-primary/90"
                >
                  <Zap className="w-4 h-4" />
                  Abrir Página de Pagamento
                </Button>
              </div>
            </Card>
          )}

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
                    petGender,
                    quizResultId,
                  },
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

  // Tela inicial de pagamento com formulário
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

        {/* Form Card */}
        <Card className="p-4 sm:p-6 shadow-medium bg-card">
          <h2 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Seus Dados
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nome Completo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-12 ${formErrors.name ? "border-destructive" : ""}`}
              />
              {formErrors.name && <p className="text-xs text-destructive">{formErrors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Telefone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                maxLength={15}
                className={`h-12 ${formErrors.phone ? "border-destructive" : ""}`}
              />
              {formErrors.phone && <p className="text-xs text-destructive">{formErrors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                E-mail <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`h-12 ${formErrors.email ? "border-destructive" : ""}`}
              />
              {formErrors.email && <p className="text-xs text-destructive">{formErrors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf" className="text-sm font-medium">
                CPF <span className="text-destructive">*</span>
              </Label>
              <Input
                id="cpf"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: formatCPF(e.target.value) })}
                maxLength={14}
                className={`h-12 ${formErrors.cpf ? "border-destructive" : ""}`}
              />
              {formErrors.cpf && <p className="text-xs text-destructive">{formErrors.cpf}</p>}
            </div>
          </div>
        </Card>

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
                <span>Pagamento seguro</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleGenerateQRCode}
              disabled={isLoading}
              size="lg"
              className="w-full h-14 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Gerando QR Code...
                </>
              ) : (
                <>
                  <QrCode className="w-5 h-5 mr-2" />
                  Gerar QR Code
                </>
              )}
            </Button>

            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Ao clicar, você concorda com nossos{" "}
              <a href="/termos" className="underline hover:text-foreground">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="/privacidade" className="underline hover:text-foreground">
                Política de Privacidade
              </a>
            </p>
          </div>
        </Card>

        {/* Trust Footer */}
        <div className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            <span>Dados protegidos</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4" />
            <span>Entrega instantânea</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
