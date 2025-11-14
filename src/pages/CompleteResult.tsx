import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { getQuizResult } from "@/types/quiz";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

const CompleteResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const score = location.state?.score || 0;
  const paid = location.state?.paid || false;

  useEffect(() => {
    if (!paid || !location.state?.score) {
      navigate("/");
    }
  }, [paid, location.state, navigate]);

  const result = getQuizResult(score);

  useEffect(() => {
    if (canvasRef.current) {
      generateShareImage();
    }
  }, [score]);

  const generateShareImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size for Instagram (1080x1350)
    canvas.width = 1080;
    canvas.height = 1350;

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#FF6B35");
    gradient.addColorStop(1, "#A855F7");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add white overlay for better readability
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "white";
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Pet Score 🐾", canvas.width / 2, 150);

    // Score circle background
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 450, 200, 0, Math.PI * 2);
    ctx.fill();

    // Score
    ctx.fillStyle = "#FF6B35";
    ctx.font = "bold 140px Arial";
    ctx.fillText(score.toString(), canvas.width / 2, 500);

    // "/100"
    ctx.font = "bold 50px Arial";
    ctx.fillText("/100", canvas.width / 2, 560);

    // Level title
    ctx.fillStyle = "white";
    ctx.font = "bold 70px Arial";
    const levelText = result.level;
    ctx.fillText(levelText, canvas.width / 2, 750);

    // Level emoji/icon
    const emoji = result.title.split(" ")[0];
    ctx.font = "100px Arial";
    ctx.fillText(emoji, canvas.width / 2, 880);

    // Description box
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.fillRect(80, 950, canvas.width - 160, 300);

    // Description text
    ctx.fillStyle = "#1a1a1a";
    ctx.font = "32px Arial";
    ctx.textAlign = "center";
    
    const words = "Tutor certificado com muito amor e dedicação ao seu pet!";
    const maxWidth = canvas.width - 200;
    wrapText(ctx, words, canvas.width / 2, 1050, maxWidth, 45);

    // Paw prints decoration
    ctx.font = "60px Arial";
    ctx.fillText("🐾", 180, 1280);
    ctx.fillText("🐾", canvas.width - 180, 1280);
  };

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const words = text.split(" ");
    let line = "";
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + " ";
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `pet-score-${score}.png`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success("Imagem baixada! Compartilhe nas redes sociais 🐾");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Result Card */}
        <Card className="p-8 md:p-12 shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">🎉</div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Aqui está seu Score Completo!
            </h1>

            {/* Score Display */}
            <div className="bg-gradient-hero text-white rounded-3xl p-12 my-8">
              <div className="text-8xl font-bold mb-2">{score}</div>
              <div className="text-3xl opacity-90">/100</div>
            </div>

            {/* Level */}
            <div className="bg-muted rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {result.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </div>
          </div>
        </Card>

        {/* Tips Card */}
        <Card className="p-8 md:p-12 shadow-medium">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            💡 Dicas Personalizadas para Você
          </h2>
          <ul className="space-y-4">
            {result.tips.map((tip, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-accent shrink-0 text-xl">✓</span>
                <span className="text-lg text-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Share Image Card */}
        <Card className="p-8 md:p-12 shadow-medium">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            📸 Sua Imagem para Compartilhar
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <canvas
              ref={canvasRef}
              className="border-4 border-border rounded-2xl max-w-full h-auto"
              style={{ maxHeight: "500px" }}
            />
            
            <Button
              size="lg"
              onClick={handleDownload}
              className="text-lg px-8 py-6 h-auto"
            >
              <Share2 className="mr-2 w-5 h-5" />
              Baixar e Compartilhar
            </Button>
            
            <p className="text-center text-muted-foreground">
              Compartilhe seu Score e marque seus amigos tutores! 🐾
            </p>
          </div>
        </Card>

        {/* CTA to restart */}
        <div className="text-center pt-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="text-lg"
          >
            Refazer o Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteResult;
