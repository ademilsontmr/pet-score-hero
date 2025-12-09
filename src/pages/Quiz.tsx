import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS } from "@/types/quiz";
import { ChevronLeft, Clock, Shield, Sparkles, ArrowRight } from "lucide-react";
const Quiz = () => {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<{
    question: number;
    index: number;
  } | null>(null);
  const [isProcessingAnswer, setIsProcessingAnswer] = useState(false);
  const [questionKey, setQuestionKey] = useState(0);
  useEffect(() => {
    document.title = showIntro ? "Quiz | PetScore" : `Pergunta ${currentQuestion + 1} | PetScore`;
  }, [showIntro, currentQuestion]);
  useLayoutEffect(() => {
    // Reset seleção e processamento ao trocar de pergunta
    // useLayoutEffect garante que o reset acontece ANTES da renderização visual
    setSelectedOption(null);
    setIsProcessingAnswer(false);
    // Incrementar questionKey força React a recriar todos os componentes
    setQuestionKey(prev => prev + 1);
  }, [currentQuestion]);
  const handleStart = () => {
    setShowIntro(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setIsProcessingAnswer(false);
  };
  const handleAnswer = (points: number, index: number) => {
    if (isProcessingAnswer) return; // Prevent multiple clicks

    // Apenas seleciona a alternativa, não avança automaticamente
    setSelectedOption({
      question: currentQuestion,
      index
    });

    // Salva a resposta imediatamente
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
  };
  const handleNext = () => {
    if (!selectedOption || selectedOption.question !== currentQuestion) return;
    setIsProcessingAnswer(true);

    // Reset estado ANTES de mudar a pergunta
    setSelectedOption(null);
    setIsProcessingAnswer(false);

    // Move to next question
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const newScore = answers.reduce((sum, pts) => sum + pts, 0);
      navigate("/resultado-parcial", {
        state: {
          score: newScore
        }
      });
    }
  };
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setShowIntro(true);
    }
  };
  if (showIntro) {
    return <div className="min-h-screen bg-gradient-warm py-6 px-4 flex items-center justify-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-bounce">🐾</div>
          <div className="absolute top-32 right-16 text-5xl opacity-10 animate-bounce delay-300">🐾</div>
          <div className="absolute bottom-20 left-1/4 text-7xl opacity-10 animate-bounce delay-700">🐾</div>
        </div>

        <div className="max-w-lg w-full relative z-10">
          {/* Header Card */}
          <div className="text-center mb-6 animate-in fade-in slide-in-from-top duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-hero rounded-3xl mb-5 shadow-lg">
              <span className="text-4xl">🎯</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Avaliação Pet Score
            </h1>
            <p className="text-muted-foreground text-lg">
              Descubra seu nível como tutor em 5 pilares
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-4 mb-6 animate-in fade-in duration-500 delay-100">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-card/80 backdrop-blur px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span>5-10 min</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-card/80 backdrop-blur px-3 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Resultado Instantâneo</span>
            </div>
          </div>

          {/* Main Card */}
          <Card className="p-5 md:p-6 shadow-lg border-0 bg-card/95 backdrop-blur animate-in fade-in slide-in-from-bottom duration-500 delay-200">
            <h2 className="text-lg font-semibold text-foreground mb-4 text-center">
              Os 5 Pilares da Avaliação
            </h2>

            <div className="space-y-3 mb-6">
              {/* Saúde Preventiva */}
              <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-50/50 rounded-xl border border-red-100/50 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                  🩺
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-red-900 text-sm">Saúde Preventiva</h3>
                  <p className="text-xs text-red-600/80">Veterinário, vacinas e prevenção</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-red-500">30%</span>
                </div>
              </div>

              {/* Bem-estar e Comportamento */}
              <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-xl border border-blue-100/50 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                  🎾
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-blue-900 text-sm">Bem-estar e Comportamento</h3>
                  <p className="text-xs text-blue-600/80">Exercícios e socialização</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-blue-500">25%</span>
                </div>
              </div>

              {/* Nutrição */}
              <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-50/50 rounded-xl border border-green-100/50 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                  🥗
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-green-900 text-sm">Nutrição e Hidratação</h3>
                  <p className="text-xs text-green-600/80">Alimentação de qualidade</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-green-500">15%</span>
                </div>
              </div>

              {/* Higiene */}
              <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-50/50 rounded-xl border border-purple-100/50 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                  🛁
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-purple-900 text-sm">Higiene e Cuidados</h3>
                  <p className="text-xs text-purple-600/80">Banho e ambiente seguro</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-purple-500">15%</span>
                </div>
              </div>

              {/* Vínculo */}
              <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-orange-50/50 rounded-xl border border-orange-100/50 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                  🧡
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-orange-900 text-sm">Vínculo e Afeto</h3>
                  <p className="text-xs text-orange-600/80">Conexão emocional</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-orange-500">15%</span>
                </div>
              </div>
            </div>

            <Button onClick={handleStart} className="w-full text-lg py-6 rounded-2xl bg-gradient-hero hover:opacity-90 shadow-lg hover:shadow-xl transition-all group">
              Começar Avaliação
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            
          </Card>
        </div>
      </div>;
  }
  const question = QUESTIONS[currentQuestion];
  const progress = (currentQuestion + 1) / QUESTIONS.length * 100;
  return <div className="min-h-screen bg-gradient-warm py-8 px-4">
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
        <Card key={`question-${currentQuestion}-${questionKey}`} className="p-6 md:p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center leading-tight">
            {question.question}
          </h2>

          <div className="space-y-4" key={`options-${currentQuestion}-${questionKey}`}>
            {question.options.map((option, index) => {
            // Só mostra como selecionado se:
            // 1. selectedOption não for null
            // 2. A pergunta do selectedOption for exatamente a pergunta atual
            // 3. O índice do selectedOption for exatamente o índice atual
            const isSelected = Boolean(selectedOption && selectedOption.question === currentQuestion && selectedOption.index === index);
            return <Button key={`q${currentQuestion}-opt${index}-${questionKey}`} onClick={() => handleAnswer(option.points, index)} variant={isSelected ? "default" : "outline"} disabled={isProcessingAnswer} style={{
              WebkitTapHighlightColor: 'transparent'
            }} className={`w-full h-auto py-4 md:py-5 px-4 md:px-6 text-left justify-start transition-all duration-300 text-sm md:text-base rounded-xl leading-relaxed ${isSelected ? "bg-primary text-primary-foreground border-primary" : "hover:bg-primary hover:text-primary-foreground hover:border-primary active:bg-transparent focus:bg-transparent"}`}>
                  {option.text}
                </Button>;
          })}
          </div>

          {/* Next Button */}
          {selectedOption && selectedOption.question === currentQuestion && <div className="mt-6">
              <Button onClick={handleNext} className="w-full text-base md:text-lg py-6 md:py-7 rounded-2xl bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all">
                {currentQuestion < QUESTIONS.length - 1 ? "Próxima" : "Finalizar"}
              </Button>
            </div>}
        </Card>

        {/* Back Button */}
        <div className="mt-4">
          <Button onClick={handleBack} variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar
          </Button>
        </div>

        {/* Decorative paw prints */}
        <div className="mt-8 flex justify-center gap-4 opacity-30">
          <span className="text-3xl">🐾</span>
          <span className="text-3xl">🐾</span>
          <span className="text-3xl">🐾</span>
        </div>
      </div>
    </div>;
};
export default Quiz;