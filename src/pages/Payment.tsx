import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Check } from "lucide-react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  useEffect(() => {
    if (!location.state?.score) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const handlePayment = () => {
    // Simulate payment - in real app, integrate payment gateway
    navigate("/complete-result", { state: { score, paid: true } });
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Header with gradient */}
          <div className="bg-gradient-hero text-white p-8 md:p-12 text-center">
            <div className="text-5xl mb-4">🔥</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Descubra seu Score Completo
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              e o Nível Oficial de Pai/Mãe de Pet!
            </p>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-2xl text-center font-semibold text-foreground mb-4">
              Seu pet merece o melhor — e você também. 💛
            </p>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Desbloqueie agora seu resultado completo e receba:
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4 items-start">
                <div className="bg-accent text-accent-foreground rounded-full p-2 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Seu Score Real (0–100)</h3>
                  <p className="text-muted-foreground">
                    Descubra o quão incrível é sua conexão com seu pet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent text-accent-foreground rounded-full p-2 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Seu Nível Oficial de Tutor</h3>
                  <p className="text-muted-foreground">
                    "Herói do Lar", "Tutor Nota 10", "Esforçado", etc.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent text-accent-foreground rounded-full p-2 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Dicas Personalizadas</h3>
                  <p className="text-muted-foreground">
                    Cuidado, segurança, diversão, saúde e vínculo emocional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent text-accent-foreground rounded-full p-2 shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Imagem para Compartilhar</h3>
                  <p className="text-muted-foreground">
                    Mostre para seus amigos o seu nível! 🐾 Perfeita para Instagram e WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Emotional copy */}
            <div className="bg-muted rounded-2xl p-8 mb-8">
              <p className="text-lg text-center leading-relaxed text-foreground">
                Você já mostrou o quanto ama seu pet. 💚<br />
                <span className="font-semibold">
                  Agora descubra exatamente onde você se destaca e como pode cuidar ainda melhor
                </span>{" "}
                — com um relatório completo feito especialmente pra você e para o seu melhor amigo.
              </p>
              <p className="text-center text-muted-foreground mt-4 italic">
                Um pequeno valor para um impacto enorme na vida do seu pet.
              </p>
            </div>

            {/* Price and CTA */}
            <div className="text-center space-y-6">
              <div className="inline-block bg-gradient-success text-white rounded-2xl px-12 py-6">
                <p className="text-sm uppercase tracking-wider mb-1">Pagamento Único</p>
                <p className="text-5xl font-bold">R$ 19,90</p>
              </div>

              <Button
                size="lg"
                onClick={handlePayment}
                className="text-xl px-16 py-8 h-auto shadow-medium hover:shadow-soft transition-all duration-300 w-full md:w-auto"
              >
                🧡 Quero ver meu Score Completo
              </Button>

              <p className="text-sm text-muted-foreground">
                🔒 Pagamento seguro e processado instantaneamente
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
