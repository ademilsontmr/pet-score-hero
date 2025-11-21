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
  const petImage = location.state?.petImage || null;
  const petName = location.state?.petName || "";

  useEffect(() => {
    document.title = "Seu Resultado Completo | PetScore";
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

        // Website URL (Below the card)
        ctx.save();
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#FF6B35"; // Brand Orange
        ctx.font = "bold 28px Arial";
        ctx.fillText("www.petscore.com.br", canvas.width / 2, 1325);
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

      // Website URL (Below the card)
      ctx.save();
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FF6B35"; // Brand Orange
      ctx.font = "bold 28px Arial";
      ctx.fillText("www.petscore.com.br", canvas.width / 2, 1325);
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

  const handlePrintPlanner = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-12 px-4 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto space-y-8 print:hidden">

        {/* 1. Diagnóstico Completo & 2. Identidade de Tutor */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-orange-50/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Diagnóstico Completo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entenda com precisão científica o nível de bem-estar que você proporciona hoje e descubra onde pode evoluir
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Score Display */}
            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-sm mb-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Score Circle */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-8 border-orange-100 flex items-center justify-center relative bg-gradient-to-br from-orange-50 to-white">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-orange-600">{score}</span>
                      <span className="text-lg text-muted-foreground block">/100</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap shadow-md">
                    Score Oficial
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-orange-200 to-transparent"></div>

                {/* Identity */}
                <div className="text-center md:text-left flex-1">
                  <span className="inline-block text-xs uppercase tracking-wider text-orange-600 font-semibold mb-2 bg-orange-100 px-3 py-1 rounded-full">
                    Sua Identidade de Tutor
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 mt-2">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-orange-800 text-lg mb-3">Próximos Passos Recomendados</h3>
                  <ul className="space-y-2">
                    {result.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-orange-900/80">
                        <span className="text-orange-600 font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 3. Plano de Ação Veterinário */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-blue-50/30">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Plano de Ação Veterinário</h2>
            <p className="text-muted-foreground text-lg">Prescrição de melhorias baseada no perfil comportamental e ambiental do seu pet</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {result.tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 pt-1">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 4. Guia Nutricional Especializado */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-green-50/30">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Guia Nutricional Especializado</h2>
            <p className="text-muted-foreground text-lg">Nutrição é a base da longevidade e qualidade de vida</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Alimentos Benéficos */}
            <div className="bg-white p-8 rounded-3xl border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-bold text-green-800 text-xl">Alimentos Benéficos</h3>
              </div>

              <div className="space-y-5">
                <div className="pb-5 border-b border-green-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🥕</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Cenoura</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Rica em betacaroteno e fibras. Ótima crua para limpeza dental natural.</p>
                    </div>
                  </div>
                </div>

                <div className="pb-5 border-b border-green-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🍎</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Maçã</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Fonte de vitaminas A e C. <span className="text-orange-600 font-semibold">Remova as sementes</span> (contêm cianeto).</p>
                    </div>
                  </div>
                </div>

                <div className="pb-5 border-b border-green-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎃</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Abóbora</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Excelente regulador intestinal, rica em fibras solúveis.</p>
                    </div>
                  </div>
                </div>

                <div className="pb-5 border-b border-green-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🍗</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Frango</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Proteína de alto valor biológico. Sempre cozido em água, sem sal ou temperos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alimentos Tóxicos */}
            <div className="bg-white p-8 rounded-3xl border-2 border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="font-bold text-red-800 text-xl">Alimentos Tóxicos</h3>
              </div>

              <div className="space-y-5">
                <div className="pb-5 border-b border-red-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🍫</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Chocolate</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Contém teobromina. Causa arritmias e convulsões. <span className="text-red-600 font-semibold">Risco de óbito.</span></p>
                    </div>
                  </div>
                </div>

                <div className="pb-5 border-b border-red-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🍇</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Uva e Passas</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Causa insuficiência renal aguda irreversível, mesmo em pequenas doses.</p>
                    </div>
                  </div>
                </div>

                <div className="pb-5 border-b border-red-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🧅</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Cebola e Alho</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Oxidam glóbulos vermelhos, causando anemia severa (hemólise).</p>
                    </div>
                  </div>
                </div>

                <div className="pb-5 border-b border-red-100 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🥑</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Abacate</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Contém Persina, substância tóxica para o sistema cardíaco.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 5. Checklist Ambiental (Casa Segura) */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-orange-50/30">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Checklist Ambiental de Segurança</h2>
            <p className="text-muted-foreground text-lg">Prevenção de acidentes domésticos comuns</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "🌿",
                item: "Plantas Tóxicas",
                detail: "Lírios (fatais para gatos), Comigo-ninguém-pode, Azaleia e Espada-de-são-jorge."
              },
              {
                icon: "🧵",
                item: "Corpos Estranhos",
                detail: "Fios, elásticos de cabelo, meias e brinquedos pequenos que causam obstrução intestinal."
              },
              {
                icon: "🚪",
                item: "Acesso à Rua",
                detail: "Bloqueio total (telas) previne atropelamentos, brigas, FIV/FeLV e envenenamentos."
              },
              {
                icon: "🧪",
                item: "Produtos Químicos",
                detail: "Água sanitária e desinfetantes fenólicos causam queimaduras e intoxicação respiratória."
              },
              {
                icon: "💊",
                item: "Medicamentos Humanos",
                detail: "Paracetamol e Ibuprofeno são extremamente tóxicos para cães e gatos."
              },
              {
                icon: "🔌",
                item: "Fios e Cabos",
                detail: "Proteja fios elétricos para evitar choques e queimaduras. Use protetores ou organize-os fora do alcance."
              }
            ].map((obj, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border-2 border-orange-200 shadow-sm hover:shadow-md transition-all hover:border-orange-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{obj.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{obj.item}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{obj.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-5xl mx-auto bg-orange-50 border-2 border-orange-200 rounded-3xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-orange-800 text-lg mb-2">Dica Importante</h3>
                <p className="text-orange-900/80 text-sm leading-relaxed">
                  Faça uma vistoria mensal em sua casa procurando por novos riscos. Pets são curiosos e podem encontrar perigos em lugares inesperados. A prevenção é sempre o melhor remédio!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* 6. Protocolo de Saúde Preventiva */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-purple-50/30">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Protocolo de Saúde Preventiva</h2>
            <p className="text-muted-foreground text-lg mb-6">O calendário que garante a imunidade e vitalidade do seu pet</p>

            <Button
              onClick={handlePrintPlanner}
              className="gap-2 bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-base font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
              Imprimir Planner Oficial
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {[
              {
                icon: "💉",
                title: "Imunização",
                description: "V8/V10/V4/V5 + Raiva",
                frequency: "Anual",
                color: "purple"
              },
              {
                icon: "🦠",
                title: "Controle Parasitário",
                description: "Vermífugo + Ectoparasitas",
                frequency: "3-6 meses / Mensal",
                color: "purple"
              },
              {
                icon: "🩺",
                title: "Check-up Completo",
                description: "Exames de Sangue + Imagem",
                frequency: "Anual",
                color: "purple"
              },
              {
                icon: "🦷",
                title: "Saúde Bucal",
                description: "Avaliação de tártaro",
                frequency: "Anual",
                color: "purple"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border-2 border-purple-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="inline-flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="text-xs font-semibold text-purple-700">{item.frequency}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Alert */}
          <div className="max-w-5xl mx-auto bg-red-50 border-2 border-red-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg mb-2">Sinais de Emergência Veterinária</h3>
                <p className="text-red-900/80 text-sm leading-relaxed">
                  Procure atendimento imediato se notar: <span className="font-semibold">Vômito persistente (+24h)</span>, <span className="font-semibold">gengivas pálidas</span>, <span className="font-semibold">dificuldade respiratória</span>, <span className="font-semibold">convulsão</span>, ou <span className="font-semibold">incapacidade de urinar</span> (especialmente em gatos machos).
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* 7. Recordação Exclusiva */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-b from-background to-muted/50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              📸 Sua Recordação Exclusiva
            </h2>
            <p className="text-muted-foreground">
              Eternize esse momento! Compartilhe sua conquista nas redes sociais.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <canvas
              ref={canvasRef}
              className="border-4 border-white shadow-2xl rounded-2xl max-w-full h-auto rotate-1 hover:rotate-0 transition-transform duration-500"
              style={{ maxHeight: "500px" }}
            />

            <Button
              size="lg"
              onClick={handleDownload}
              className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Share2 className="mr-2 w-5 h-5" />
              Baixar e Compartilhar
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Marque @petscoreoficial para aparecer em nossos stories! 🐾
            </p>
          </div>
        </Card>

        {/* Recomendação de Refazer o Quiz */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-blue-50/30">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <span className="text-4xl">🔄</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Acompanhe sua Evolução</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Refaça este teste <span className="font-semibold text-blue-600">a cada 3 meses</span> para medir a evolução do seu relacionamento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Acompanhe Progresso</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Veja como seu score melhora ao longo do tempo
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Identifique Melhorias</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Descubra áreas onde você evoluiu ou precisa focar
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Fortaleça o Vínculo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cada melhoria fortalece sua conexão com seu pet
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-3xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 text-lg mb-2">Dica Importante</h3>
                <p className="text-blue-900/80 text-sm leading-relaxed">
                  Salve este resultado (faça um print ou baixe a imagem) para comparar com os próximos testes. Assim você terá um histórico visual da sua evolução como tutor!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA to restart */}
        <div className="text-center pt-8 pb-12">
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-white text-primary hover:bg-orange-50 border-2 border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl group"
          >
            <span className="mr-2 text-2xl group-hover:-rotate-180 transition-transform duration-500">↻</span>
            Refazer Avaliação
          </Button>
        </div>
      </div>

      {/* Print Layout (Professional Medical Style) */}
      <div className="hidden print:block w-full min-h-screen bg-white p-8 box-border font-sans">
        <style dangerouslySetInnerHTML={{
          __html: `
          @media print {
            @page {
              margin: 0.5cm;
              size: A4;
            }
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        `}} />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b-4 border-[#FF6B35]">
          <div className="flex items-center gap-3">
            <div className="text-6xl" style={{ filter: 'contrast(1.5) brightness(0.85) saturate(1.3)' }}>🐾</div>
            <div className="text-[#FF6B35] text-5xl font-bold tracking-tight">PetScore</div>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-bold text-gray-800">Planner de Saúde</h1>
            <p className="text-sm text-gray-500">Protocolo nº {Math.floor(Math.random() * 10000)}/{new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Pet Info Bar */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6 flex justify-between items-center">
          <div className="flex gap-10">
            <div>
              <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Nome do Pet</span>
              <span className="text-xl font-bold text-gray-800">{petName || "________________"}</span>
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Score Atual</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-[#FF6B35]">{score}</span>
                <span className="text-sm text-gray-500 font-medium">/100</span>
              </div>
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Data de Emissão</span>
              <span className="text-xl font-bold text-gray-800">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          <div className="text-right bg-white px-5 py-2 rounded-xl border border-gray-200">
            <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Classificação</span>
            <span className="text-base font-bold text-[#FF6B35]">{result.title}</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Medical Schedule (7 cols) */}
          <div className="col-span-7 flex flex-col gap-5">
            {/* Vacinas */}
            <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white">
              <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <span className="text-lg" style={{ filter: 'contrast(1.5) brightness(0.85) saturate(1.3)' }}>💉</span>
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Cronograma de Vacinação</h3>
              </div>
              <div className="p-5 space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                    <div className="flex-1 flex items-end gap-2">
                      <span className="text-gray-600 text-sm font-bold mb-1">Vacina:</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-300 mb-1"></div>
                    </div>
                    <div className="w-28 flex items-end gap-2">
                      <span className="text-gray-600 text-xs font-bold mb-1">Data:</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-300 mb-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parasitas */}
            <div className="border border-gray-200 rounded-3xl overflow-hidden bg-white">
              <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <span className="text-lg" style={{ filter: 'contrast(1.5) brightness(0.85) saturate(1.3)' }}>💊</span>
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Controle Parasitário</h3>
              </div>
              <div className="p-5 space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                    <div className="flex-1 flex items-end gap-2">
                      <span className="text-gray-600 text-sm font-bold mb-1">Produto:</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-300 mb-1"></div>
                    </div>
                    <div className="w-28 flex items-end gap-2">
                      <span className="text-gray-600 text-xs font-bold mb-1">Data:</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-300 mb-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Notes & Weight (5 cols) */}
          <div className="col-span-5 flex flex-col gap-5">
            {/* Weight Tracker */}
            <div className="border border-gray-200 rounded-3xl bg-white p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg" style={{ filter: 'contrast(1.5) brightness(0.85) saturate(1.3)' }}>⚖️</span>
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Controle de Peso</h3>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 border border-gray-200 rounded-2xl p-3 text-center bg-gray-50">
                  <span className="text-xs text-blue-600 font-bold uppercase tracking-wider block mb-2">Atual</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-lg">____</span>
                    <span className="text-gray-500 font-medium text-sm">kg</span>
                  </div>
                </div>
                <div className="flex-1 border border-gray-200 rounded-2xl p-3 text-center bg-gray-50">
                  <span className="text-xs text-blue-600 font-bold uppercase tracking-wider block mb-2">Meta</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-lg">____</span>
                    <span className="text-gray-500 font-medium text-sm">kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="border border-gray-200 rounded-3xl bg-white flex flex-col overflow-hidden flex-1">
              <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <span className="text-lg" style={{ filter: 'contrast(1.5) brightness(0.85) saturate(1.3)' }}>📝</span>
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Notas Clínicas</h3>
              </div>
              <div className="flex-1 p-5 relative min-h-[360px]">
                <div className="absolute inset-0 top-12 px-5 space-y-5 pointer-events-none">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                    <div key={i} className="border-b border-blue-100 w-full h-px"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t-2 border-[#FF6B35] text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm" style={{ filter: 'contrast(1.5) brightness(0.85) saturate(1.3)' }}>🐾</span>
            <span className="text-[#FF6B35] font-bold text-sm">www.petscore.com.br</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteResult;
