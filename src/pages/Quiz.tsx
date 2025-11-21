import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS } from "@/types/quiz";
import { ChevronLeft } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Quiz | PetScore";
  }, []);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    const newScore = newAnswers.reduce((sum, pts) => sum + pts, 0);
    setTotalScore(newScore);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, go to partial result
      navigate("/partial-result", { state: { score: newScore } });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-warm py-8 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <Card className="p-8 md:p-10 shadow-medium animate-in fade-in zoom-in duration-500">
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
              <div className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🩺</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-red-900">Saúde Preventiva</h3>
                    <span className="text-xs font-bold bg-red-200 text-red-800 px-2 py-1 rounded-full">30%</span>
                  </div>
                  <p className="text-sm text-red-700">Veterinário, vacinas, prevenção e emergências</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🥗</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-green-900">Nutrição e Hidratação</h3>
                    <span className="text-xs font-bold bg-green-200 text-green-800 px-2 py-1 rounded-full">15%</span>
                  </div>
                  <p className="text-sm text-green-700">Qualidade da ração, água e petiscos</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🎾</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-blue-900">Bem-estar e Comportamento</h3>
                    <span className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-1 rounded-full">25%</span>
                  </div>
                  <p className="text-sm text-blue-700">Exercícios, enriquecimento e socialização</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🛁</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-purple-900">Higiene e Cuidados</h3>
                    <span className="text-xs font-bold bg-purple-200 text-purple-800 px-2 py-1 rounded-full">15%</span>
                  </div>
                  <p className="text-sm text-purple-700">Banho, dentes e ambiente seguro</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">🧡</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-orange-900">Vínculo e Afeto</h3>
                    <span className="text-xs font-bold bg-orange-200 text-orange-800 px-2 py-1 rounded-full">15%</span>
                  </div>
                  <p className="text-sm text-orange-700">Tempo de qualidade e conexão emocional</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setQuizStarted(true)}
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              Começar Avaliação Oficial
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              Pergunta {currentQuestion + 1} de {QUESTIONS.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>



        {/* Question Card */}
        <Card className="p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option.points)}
                variant="outline"
                className="w-full h-auto py-4 px-6 text-left justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-base"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </Card>
        {/* Back Button (moved below quiz) */}
        {currentQuestion > 0 && (
          <div className="mt-4">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
          </div>
        )}

        {/* Decorative paw prints */}
        <div className="mt-8 flex justify-center gap-4 opacity-30">
          <span className="text-3xl">🐾</span>
          <span className="text-3xl">🐾</span>
          <span className="text-3xl">🐾</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
