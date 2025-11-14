import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const PartialResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  useEffect(() => {
    if (!location.state?.score) {
      navigate("/");
    }
  }, [location.state, navigate]);

  return (
    <div className="min-h-screen bg-gradient-warm py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 md:p-12 shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">🎉</div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Você completou o quiz!
            </h1>

            <div className="bg-muted rounded-2xl p-8 my-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                Seu pet tem <span className="font-bold text-primary">MUITA sorte</span> de ter você! 💛
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
                Com base nas suas respostas, já dá para ver que você tem um{" "}
                <span className="font-semibold text-foreground">vínculo especial e único</span>{" "}
                com seu companheiro. 🐾
              </p>
            </div>

            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6 my-8">
              <p className="text-2xl font-bold text-primary mb-2">
                Seu score está acima da média! 👀
              </p>
              <p className="text-muted-foreground">
                Seu resultado completo está quase pronto...
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg text-muted-foreground mb-6">
                Com seu <span className="font-semibold text-foreground">score real</span>, seu{" "}
                <span className="font-semibold text-foreground">nível oficial de tutor</span> e{" "}
                <span className="font-semibold text-foreground">dicas personalizadas</span>{" "}
                para deixar seu pet ainda mais feliz.
              </p>

              <Button
                size="lg"
                onClick={() => navigate("/payment", { state: { score } })}
                className="text-xl px-12 py-6 h-auto shadow-medium hover:shadow-soft transition-all duration-300"
              >
                🧡 Ver meu Score Completo
              </Button>
            </div>

            <div className="mt-8 flex justify-center gap-3 opacity-40">
              <span className="text-4xl">🐾</span>
              <span className="text-4xl">🐾</span>
              <span className="text-4xl">🐾</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartialResult;
