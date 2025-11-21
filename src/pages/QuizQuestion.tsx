import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QUESTIONS } from "@/types/quiz";
import { ChevronLeft } from "lucide-react";

const QuizQuestion = () => {
    const navigate = useNavigate();
    const { questionNumber } = useParams();
    const location = useLocation();

    const currentQuestion = questionNumber ? parseInt(questionNumber) - 1 : 0;
    const answers = (location.state?.answers as number[]) || [];

    useEffect(() => {
        document.title = `Pergunta ${currentQuestion + 1} | PetScore`;
    }, [currentQuestion]);

    const handleAnswer = (points: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = points;

        const newScore = newAnswers.reduce((sum, pts) => sum + pts, 0);

        if (currentQuestion < QUESTIONS.length - 1) {
            navigate(`/quiz/${currentQuestion + 2}`, {
                state: { answers: newAnswers },
                replace: true
            });
        } else {
            navigate("/partial-result", { state: { score: newScore } });
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            navigate(`/quiz/${currentQuestion}`, {
                state: { answers },
                replace: true
            });
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
                <Card className="p-6 md:p-8 shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-lg md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center leading-tight">
                        {question.question}
                    </h2>

                    <div className="space-y-4">
                        {question.options.map((option, index) => (
                            <Button
                                key={index}
                                onClick={() => handleAnswer(option.points)}
                                variant="outline"
                                className="w-full h-auto py-4 md:py-5 px-4 md:px-6 text-left justify-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-sm md:text-base rounded-xl leading-relaxed"
                            >
                                {option.text}
                            </Button>
                        ))}
                    </div>
                </Card>

                {/* Back Button */}
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

export default QuizQuestion;
