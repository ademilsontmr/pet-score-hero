import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Quiz = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Quiz | PetScore";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-warm py-8 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card className="p-6 md:p-10 shadow-medium animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
              <span className="text-3xl">📋</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Critérios de Avaliação
            </h1>
            <p className="text-muted-foreground">
              Seu score será calculado com base em 5 pilares fundamentais do bem-estar animal:
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-red-50 rounded-2xl border border-red-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-sm flex-shrink-0">🩺</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h3 className="font-bold text-red-900 text-sm md:text-base">Saúde Preventiva</h3>
                  <span className="text-xs font-bold bg-red-200 text-red-800 px-2 py-1 rounded-full flex-shrink-0">30%</span>
                </div>
                <p className="text-xs md:text-sm text-red-700">Veterinário, vacinas, prevenção e emergências</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-2xl border border-green-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-sm flex-shrink-0">🥗</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h3 className="font-bold text-green-900 text-sm md:text-base">Nutrição e Hidratação</h3>
                  <span className="text-xs font-bold bg-green-200 text-green-800 px-2 py-1 rounded-full flex-shrink-0">15%</span>
                </div>
                <p className="text-xs md:text-sm text-green-700">Qualidade da ração, água e petiscos</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-sm flex-shrink-0">🎾</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h3 className="font-bold text-blue-900 text-sm md:text-base">Bem-estar e Comportamento</h3>
                  <span className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-1 rounded-full flex-shrink-0">25%</span>
                </div>
                <p className="text-xs md:text-sm text-blue-700">Exercícios, enriquecimento e socialização</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-sm flex-shrink-0">🛁</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h3 className="font-bold text-purple-900 text-sm md:text-base">Higiene e Cuidados</h3>
                  <span className="text-xs font-bold bg-purple-200 text-purple-800 px-2 py-1 rounded-full flex-shrink-0">15%</span>
                </div>
                <p className="text-xs md:text-sm text-purple-700">Banho, dentes e ambiente seguro</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-sm flex-shrink-0">🧡</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <h3 className="font-bold text-orange-900 text-sm md:text-base">Vínculo e Afeto</h3>
                  <span className="text-xs font-bold bg-orange-200 text-orange-800 px-2 py-1 rounded-full flex-shrink-0">15%</span>
                </div>
                <p className="text-xs md:text-sm text-orange-700">Tempo de qualidade e conexão emocional</p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => navigate("/quiz/1")}
            className="w-full text-base md:text-lg py-6 md:py-7 rounded-2xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
          >
            Começar Avaliação Oficial
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
