import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS } from "@/types/quiz";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (points: number) => {
    const newScore = totalScore + points;
    setTotalScore(newScore);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, go to partial result
      navigate("/partial-result", { state: { score: newScore } });
    }
  };

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

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
