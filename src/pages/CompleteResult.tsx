import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { getQuizResult } from "@/types/quiz";
import { Share2, Download } from "lucide-react";
import { toast } from "sonner";
import PetPlanner from "@/components/PetPlanner";

const CompleteResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { responseId } = useParams(); // Removed

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const [loading, setLoading] = useState(false); // Removed loading state
  // const [responseData, setResponseData] = useState<any>(null); // Removed responseData state

  // Removed KV fetch effect
  /*
  useEffect(() => {
    // ... removed logic
  }, [responseId, location.state, navigate]);
  */

  const score = location.state?.score || 0;
  const petImage = location.state?.petImage || null;
  const petName = location.state?.petName || "";
  const petGender = location.state?.petGender || "";

  useEffect(() => {
    document.title = "Seu Resultado Completo | PetScore";
  }, []);

  /* Removed loading check */

  if (!score || !location.state?.paid) {
    // Se não tiver score ou não tiver pago, redireciona
    useEffect(() => {
      if (score && !location.state?.paid) {
        navigate("/pagamento", { state: location.state });
      } else if (!score) {
        navigate("/");
      }
    }, [score, location.state, navigate]);

    return null;
  }

  const result = getQuizResult(score);

  useEffect(() => {
    if (canvasRef.current) {
      generateShareImage();
    }
  }, [score]);

  const renderText = (ctx: CanvasRenderingContext2D) => {
    const canvas = ctx.canvas;

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

  const generateShareImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size for Instagram (1080x1350)
    canvas.width = 1080;
    canvas.height = 1350;

    // Background - Soft Gradient Cream
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#FFFBF5");
    gradient.addColorStop(1, "#FFF0E0");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Top Accent Bar
    ctx.fillStyle = "#FF6B35";
    ctx.fillRect(0, 0, canvas.width, 40);

    // Bottom Accent Bar
    ctx.fillStyle = "#FF6B35";
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

    ctx.textAlign = "center";

    // Brand Header
    ctx.fillStyle = "#FF6B35";
    ctx.font = "bold 110px Arial";
    ctx.fillText("PetScore", canvas.width / 2 - 60, 220);

    ctx.fillStyle = "#4A4A4A";
    ctx.font = "90px Arial";
    ctx.fillText("🐾", canvas.width / 2 + 240, 220);

    // Subtitle / Certificate Title
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "50px Arial";
    ctx.letterSpacing = "4px";
    ctx.fillText("CERTIFICADO DE EXCELÊNCIA", canvas.width / 2, 320);

    // Pet Name
    if (petName) {
      ctx.fillStyle = "#FF6B35";
      ctx.font = "bold 90px Arial";
      ctx.fillText(petName, canvas.width / 2, 440);
    }

    // Main Image Area
    const centerX = canvas.width / 2;
    const centerY = 780;
    const radius = 300;

    if (petImage) {
      const img = new Image();
      img.src = petImage;
      img.onload = () => {
        // Drop Shadow for Image
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.15)";
        ctx.shadowBlur = 40;
        ctx.shadowOffsetY = 20;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.restore();

        // White Border
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        // Image Clip
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 25, 0, Math.PI * 2);
        ctx.clip();

        // Draw Image
        const scale = Math.max((radius * 2) / img.width, (radius * 2) / img.height);
        const x = centerX - (img.width * scale / 2);
        const y = centerY - (img.height * scale / 2);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        ctx.restore();

        // Score Badge (Floating Bubble)
        const badgeX = centerX + 220;
        const badgeY = centerY + 220;

        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.2)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 10;
        ctx.beginPath();
        ctx.arc(badgeX, badgeY, 110, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B35";
        ctx.fill();
        ctx.restore();

        ctx.strokeStyle = "white";
        ctx.lineWidth = 12;
        ctx.stroke();

        ctx.fillStyle = "white";
        ctx.font = "bold 100px Arial";
        ctx.fillText(score.toString(), badgeX, badgeY + 35);

        // Bottom Card for Text
        drawBottomCard(ctx);

        // Website URL (Above the bottom bar)
        ctx.save();
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#FF6B35"; // Brand Orange
        ctx.font = "bold 28px Arial";
        ctx.fillText("www.petscore.com.br", canvas.width / 2, canvas.height - 70);
        ctx.restore();
      };
    } else {
      // No Image Fallback
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      ctx.fillStyle = "#FF6B35";
      ctx.font = "bold 200px Arial";
      ctx.fillText(score.toString(), centerX, centerY + 50);

      ctx.fillStyle = "#9CA3AF";
      ctx.font = "bold 60px Arial";
      ctx.fillText("/100", centerX, centerY + 140);

      drawBottomCard(ctx);

      // Website URL (Above the bottom bar)
      ctx.save();
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FF6B35"; // Brand Orange
      ctx.font = "bold 28px Arial";
      ctx.fillText("www.petscore.com.br", canvas.width / 2, canvas.height - 70);
      ctx.restore();
    }
  };

  const drawBottomCard = (ctx: CanvasRenderingContext2D) => {
    const canvas = ctx.canvas;
    const x = 100;
    const y = 1120;
    const w = 880;
    const h = 180;
    const radius = 40;

    // Card Background (Rounded)
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 10;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.restore();

    // Decorative Quote Icon
    ctx.fillStyle = "#FF6B35"; // Orange
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "left";
    ctx.fillText("❝", x + 50, y + 115); // Vertically centered
    ctx.textAlign = "center"; // Reset to center for other text

    // Text
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "italic 36px Arial"; // Reduced font size
    const text = "Tutor certificado com muito amor e dedicação ao seu pet!";
    // Adjusted Y to y + 85 to center the 2-line block vertically
    // Increased maxWidth to 700 to ensure it fits nicely in 2 lines
    wrapText(ctx, text, canvas.width / 2 + 20, y + 85, 700, 46);
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

  const handleShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], `pet-score-${score}.png`, { type: "image/png" });

      if (navigator.share && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Meu PetScore 🐾',
            text: `Meu pet ${petName} fez ${score} pontos no PetScore! Confira o seu também em petscore.com.br`,
          });
          toast.success("Compartilhado com sucesso!");
        } catch (error) {
          if ((error as any).name !== 'AbortError') {
            console.error("Error sharing:", error);
            handleDownload(); // Fallback
          }
        }
      } else {
        handleDownload();
      }
    });
  };

  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
          <html>
            <head>
              <title>PetScore - ${petName}</title>
              <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f0f0; }
                img { max-width: 100%; max-height: 100vh; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                @media print { body { background: white; } img { box-shadow: none; } }
              </style>
            </head>
            <body>
              <img src="${dataUrl}" onload="setTimeout(() => { window.print(); window.close(); }, 500);" />
            </body>
          </html>
        `);
      printWindow.document.close();
    } else {
      toast.error("Permita popups para imprimir o certificado");
    }
  };



  return (
    <div className="min-h-screen bg-gradient-warm py-6 sm:py-12 px-4 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto space-y-5 sm:space-y-8 print:hidden">

        {/* 1. Diagnóstico Completo & 2. Identidade de Tutor */}
        <Card className="p-4 sm:p-8 md:p-12 shadow-medium bg-gradient-to-br from-card to-primary/5 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-primary to-secondary" />

          <div className="text-center mb-6 sm:mb-10 pt-2">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary sm:w-8 sm:h-8">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              Diagnóstico Completo
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Entenda o nível de bem-estar que você proporciona e onde pode evoluir
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Score Display */}
            <div className="bg-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-primary/20 shadow-sm mb-4 sm:mb-6">
              <div className="flex flex-col items-center gap-5 sm:gap-8 md:flex-row md:justify-center">
                {/* Score Circle */}
                <div className="relative">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-6 sm:border-8 border-primary/10 flex items-center justify-center relative bg-gradient-to-br from-primary/5 to-card">
                    <div className="text-center">
                      <span className="text-4xl sm:text-5xl font-bold text-primary">{score}</span>
                      <span className="text-sm sm:text-lg text-muted-foreground block">/100</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-md">
                    Score Oficial
                  </div>
                </div>

                {/* Divider - horizontal on mobile */}
                <div className="w-16 h-px sm:hidden bg-border"></div>
                <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent"></div>

                {/* Identity */}
                <div className="text-center md:text-left flex-1">
                  <span className="inline-block text-[10px] sm:text-xs uppercase tracking-wider text-primary font-semibold mb-2 bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                    Sua Identidade de Tutor
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3 mt-1 sm:mt-2">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 3. Plano de Ação Veterinário */}
        <Card className="p-4 sm:p-8 md:p-12 shadow-medium bg-gradient-to-br from-card to-blue-50/30">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-8 sm:h-8">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Plano de Ação</h2>
            <p className="text-muted-foreground text-xs sm:text-base">Melhorias baseadas no perfil do seu pet</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {result.tips.map((tip, index) => (
              <div key={index} className="bg-card p-4 sm:p-6 rounded-xl sm:rounded-3xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 text-blue-600 rounded-lg sm:rounded-2xl flex items-center justify-center font-bold text-sm sm:text-lg">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 leading-relaxed flex-1 text-sm sm:text-base">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 4. Guia Nutricional Especializado */}
        <Card className="p-4 sm:p-8 md:p-12 shadow-medium bg-gradient-to-br from-card to-green-50/30">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 sm:w-8 sm:h-8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Guia Nutricional</h2>
            <p className="text-muted-foreground text-xs sm:text-base">Nutrição é a base da longevidade</p>
          </div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Alimentos Benéficos */}
            <div className="bg-card p-4 sm:p-8 rounded-xl sm:rounded-3xl border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">✅</span>
                </div>
                <h3 className="font-bold text-green-800 text-base sm:text-xl">Alimentos Benéficos</h3>
              </div>

              <div className="space-y-3 sm:space-y-5">
                {[
                  { emoji: "🥕", title: "Cenoura", desc: "Rica em betacaroteno e fibras. Ótima crua para limpeza dental." },
                  { emoji: "🍎", title: "Maçã", desc: "Fonte de vitaminas A e C. Remova as sementes." },
                  { emoji: "🎃", title: "Abóbora", desc: "Excelente regulador intestinal, rica em fibras." },
                  { emoji: "🍗", title: "Frango", desc: "Proteína de alto valor. Sempre cozido sem temperos." },
                ].map((item, i) => (
                  <div key={i} className="pb-3 sm:pb-5 border-b border-green-100 last:border-0 last:pb-0">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-lg sm:text-2xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base mb-0.5">{item.title}</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alimentos Tóxicos */}
            <div className="bg-card p-4 sm:p-8 rounded-xl sm:rounded-3xl border-2 border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">⚠️</span>
                </div>
                <h3 className="font-bold text-red-800 text-base sm:text-xl">Alimentos Tóxicos</h3>
              </div>

              <div className="space-y-3 sm:space-y-5">
                {[
                  { emoji: "🍫", title: "Chocolate", desc: "Contém teobromina. Causa arritmias. Risco de óbito." },
                  { emoji: "🍇", title: "Uva e Passas", desc: "Causa insuficiência renal aguda irreversível." },
                  { emoji: "🧅", title: "Cebola e Alho", desc: "Oxidam glóbulos vermelhos, causando anemia." },
                  { emoji: "🥑", title: "Abacate", desc: "Contém Persina, tóxica para o coração." },
                ].map((item, i) => (
                  <div key={i} className="pb-3 sm:pb-5 border-b border-red-100 last:border-0 last:pb-0">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-lg sm:text-2xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-foreground text-sm sm:text-base mb-0.5">{item.title}</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* 5. Checklist Ambiental (Casa Segura) */}
        <Card className="p-4 sm:p-8 md:p-12 shadow-medium bg-gradient-to-br from-card to-primary/5">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary sm:w-8 sm:h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Checklist de Segurança</h2>
            <p className="text-muted-foreground text-xs sm:text-base">Prevenção de acidentes domésticos</p>
          </div>

          <div className="grid gap-3 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {[
              { icon: "🌿", item: "Plantas Tóxicas", detail: "Lírios, Comigo-ninguém-pode, Azaleia" },
              { icon: "🧵", item: "Corpos Estranhos", detail: "Fios, elásticos, meias e brinquedos pequenos" },
              { icon: "🚪", item: "Acesso à Rua", detail: "Use telas para prevenir fugas e acidentes" },
              { icon: "🧪", item: "Produtos Químicos", detail: "Água sanitária e desinfetantes" },
              { icon: "💊", item: "Medicamentos", detail: "Paracetamol e Ibuprofeno são tóxicos" },
              { icon: "🔌", item: "Fios e Cabos", detail: "Proteja para evitar choques" }
            ].map((obj, i) => (
              <div key={i} className="bg-card p-3 sm:p-6 rounded-xl sm:rounded-3xl border-2 border-primary/20 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-2xl flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">{obj.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm sm:text-lg mb-0.5 sm:mb-2">{obj.item}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{obj.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 sm:mt-8 max-w-5xl mx-auto bg-primary/10 border-2 border-primary/20 rounded-xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-2xl flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm sm:text-lg mb-1 sm:mb-2">Dica Importante</h3>
                <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                  Faça uma vistoria mensal em sua casa. A prevenção é sempre o melhor remédio!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* 6. Protocolo de Saúde Preventiva com Planner */}
        <Card className="p-4 sm:p-8 md:p-12 shadow-medium bg-gradient-to-br from-card to-purple-50/30">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 sm:w-8 sm:h-8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Protocolo de Saúde</h2>
            <p className="text-muted-foreground text-xs sm:text-base mb-4 sm:mb-6">Calendário de imunidade do seu pet</p>
          </div>

          <div className="grid gap-3 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto mb-5 sm:mb-8">
            {[
              { icon: "💉", title: "Imunização", description: "V8/V10/V4/V5 + Raiva", frequency: "Anual" },
              { icon: "🦠", title: "Controle Parasitário", description: "Vermífugo + Ectoparasitas", frequency: "3-6 meses" },
              { icon: "🩺", title: "Check-up", description: "Exames de Sangue + Imagem", frequency: "Anual" },
              { icon: "🦷", title: "Saúde Bucal", description: "Avaliação de tártaro", frequency: "Anual" }
            ].map((item, i) => (
              <div key={i} className="bg-card p-3 sm:p-6 rounded-xl sm:rounded-3xl border-2 border-purple-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 bg-purple-100 rounded-lg sm:rounded-2xl flex items-center justify-center">
                    <span className="text-xl sm:text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm sm:text-xl mb-0.5 sm:mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">{item.description}</p>
                    <div className="inline-flex items-center gap-1.5 bg-purple-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="text-[10px] sm:text-xs font-semibold text-purple-700">{item.frequency}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Alert */}
          <div className="max-w-5xl mx-auto bg-red-50 border-2 border-red-200 rounded-xl sm:rounded-3xl p-4 sm:p-6 shadow-sm mb-6 sm:mb-10">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg sm:rounded-2xl flex items-center justify-center">
                <span className="text-lg sm:text-2xl">🚨</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-sm sm:text-lg mb-1 sm:mb-2">Emergência Veterinária</h3>
                <p className="text-red-900/80 text-xs sm:text-sm leading-relaxed">
                  Procure atendimento se notar: vômito persistente, gengivas pálidas, dificuldade respiratória ou convulsão.
                </p>
              </div>
            </div>
          </div>

          {/* Planner Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Seu Planner de Saúde Personalizado</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Baixe e mantenha atualizado para acompanhar a saúde do seu pet</p>
            </div>
            <PetPlanner petName={petName} score={score} resultTitle={result.title} />
          </div>
        </Card>

        {/* 7. Recordação Exclusiva */}
        <Card className="relative p-4 sm:p-8 md:p-12 shadow-medium overflow-hidden bg-gradient-to-br from-card via-primary/5 to-secondary/10">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl mb-4 sm:mb-5 border border-primary/10 shadow-lg">
                <span className="text-2xl sm:text-4xl">📸</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                Sua Recordação Exclusiva
              </h2>
              <p className="text-muted-foreground text-xs sm:text-base max-w-md mx-auto">
                Eternize e compartilhe sua conquista nas redes sociais
              </p>
            </div>

            {/* Canvas with premium frame */}
            <div className="flex flex-col items-center gap-5 sm:gap-8">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-75 blur-sm transition-opacity duration-500" />
                
                {/* Canvas container */}
                <div className="relative bg-card/80 backdrop-blur-sm p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-primary/20 shadow-2xl">
                  <canvas
                    ref={canvasRef}
                    className="rounded-lg sm:rounded-xl max-w-full h-auto"
                    style={{ maxHeight: "400px" }}
                  />
                </div>

              </div>

              {/* Action buttons - Premium Design */}
              <div className="flex flex-col-reverse sm:flex-col gap-3 sm:gap-4 w-full max-w-sm">
                {/* Save Button - Elegant Outline (appears second on mobile) */}
                <button
                  onClick={handleDownload}
                  className="group relative w-full overflow-hidden rounded-2xl border-2 border-primary/20 bg-card/90 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Download className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-base sm:text-lg font-semibold text-foreground">Salvar Imagem</span>
                      <span className="text-xs text-muted-foreground">Download em alta qualidade</span>
                    </div>
                  </div>
                </button>

                {/* Share Button - Gradient with Glow (appears first on mobile) */}
                <button
                  onClick={handleShare}
                  className="group relative w-full overflow-hidden rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-base sm:text-lg font-semibold text-white">Compartilhar</span>
                      <span className="text-xs text-white/80">WhatsApp, Instagram e mais</span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Social CTA */}
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/60 backdrop-blur-sm rounded-full border border-primary/10">
                <span className="text-base sm:text-lg">🐾</span>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Marque <span className="font-semibold text-primary">@petscoreoficial</span> nos stories!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Recomendação de Refazer o Quiz */}
        <Card className="p-4 sm:p-8 md:p-12 shadow-medium bg-gradient-to-br from-card to-blue-50/30">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <span className="text-2xl sm:text-4xl">🔄</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Acompanhe sua Evolução</h2>
            <p className="text-muted-foreground text-xs sm:text-base max-w-2xl mx-auto">
              Refaça a cada <span className="font-semibold text-blue-600">3 meses</span> para medir sua evolução
            </p>
          </div>

          <div className="grid gap-3 sm:gap-6 md:grid-cols-3 max-w-4xl mx-auto mb-5 sm:mb-8">
            {[
              { emoji: "📈", title: "Acompanhe", desc: "Veja seu score melhorar" },
              { emoji: "💪", title: "Identifique", desc: "Descubra onde evoluir" },
              { emoji: "❤️", title: "Fortaleça", desc: "Conexão com seu pet" }
            ].map((item, i) => (
              <div key={i} className="bg-card p-4 sm:p-6 rounded-xl sm:rounded-3xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 sm:flex-col sm:text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-100 rounded-lg sm:rounded-2xl flex items-center justify-center sm:mb-3">
                    <span className="text-xl sm:text-3xl">{item.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-lg mb-0.5 sm:mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-2xl flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 text-sm sm:text-lg mb-1 sm:mb-2">Dica</h3>
                <p className="text-blue-900/80 text-xs sm:text-sm leading-relaxed">
                  Salve este resultado para comparar com os próximos testes!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA to restart */}
        <div className="text-center pt-4 sm:pt-8 pb-8 sm:pb-12">
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-card text-primary hover:bg-primary/5 border-2 border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-semibold rounded-xl sm:rounded-2xl group"
          >
            <span className="mr-2 text-xl sm:text-2xl group-hover:-rotate-180 transition-transform duration-500">↻</span>
            Refazer Avaliação
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteResult;
