import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Check } from "lucide-react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;
  const petImage = location.state?.petImage || null;
  const petName = location.state?.petName || "";
  const petGender = location.state?.petGender || "";

  // Determine the correct article based on gender
  const article = petGender === "female" ? "da" : "do";

  useEffect(() => {
    document.title = "Finalizar Compra | PetScore";
    if (!location.state?.score) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const handlePayment = () => {
    // Simulate payment - in real app, integrate payment gateway
    navigate("/complete-result", { state: { score, paid: true, petImage, petName, petGender } });
  };

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
              className="w-full text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-600 hover:bg-orange-700"
            >
              Desbloquear Resultado Completo
            </Button>

            <p className="text-xs text-muted-foreground/80 italic">
              Você será redirecionado para o pagamento seguro com a InfinitePay
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
