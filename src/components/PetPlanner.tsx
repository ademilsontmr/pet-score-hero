import { useRef, useCallback, useState } from "react";
import { Download, ZoomIn, ZoomOut } from "lucide-react";
import { toast } from "sonner";

interface PetPlannerProps {
  petName: string;
  score: number;
  resultTitle: string;
}

const PetPlanner = ({ petName, score, resultTitle }: PetPlannerProps) => {
  const plannerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleDownloadPlanner = useCallback(async () => {
    if (!plannerRef.current) return;

    try {
      const html2canvas = (await import("html2canvas")).default;
      
      const element = plannerRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `planner-${petName || "pet"}-saude.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          toast.success("Planner baixado com sucesso!");
        }
      }, "image/png", 1.0);
    } catch (error) {
      console.error("Error generating planner:", error);
      toast.error("Erro ao gerar planner. Tente novamente.");
    }
  }, [petName]);

  const currentDate = new Date().toLocaleDateString("pt-BR");
  const protocolNumber = `${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}/${new Date().getFullYear()}`;

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={handleDownloadPlanner}
          className="w-full sm:w-auto group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-purple-600 to-purple-700"
        >
          <div className="relative flex items-center justify-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-base font-semibold text-white">Baixar Planner</span>
              <span className="text-xs text-white/80">Download em alta qualidade</span>
            </div>
          </div>
        </button>
        
        {/* Zoom toggle for mobile */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="sm:hidden w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 text-gray-700 font-medium"
        >
          {isZoomed ? (
            <>
              <ZoomOut className="w-5 h-5" />
              <span>Reduzir visualização</span>
            </>
          ) : (
            <>
              <ZoomIn className="w-5 h-5" />
              <span>Ampliar visualização</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Info Card */}
      <div className="sm:hidden bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 text-center">
        <p className="text-sm text-amber-800">
          Deslize para ver o planner completo ou baixe para visualizar em tela cheia
        </p>
      </div>

      {/* Planner Container */}
      <div 
        className={`relative overflow-x-auto pb-4 transition-all duration-300 ${
          isZoomed ? 'overflow-visible' : ''
        }`}
      >
        <div 
          ref={plannerRef}
          className={`mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ${
            isZoomed ? 'scale-100 origin-top-left' : ''
          }`}
          style={{ width: "800px", minWidth: "800px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B5C] p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🐾</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">PetScore</h1>
                  <p className="text-white/80 text-xs font-medium">Planner de Saúde Personalizado</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
                  <p className="text-white/70 text-[10px] uppercase tracking-wider font-semibold">Protocolo</p>
                  <p className="text-white font-bold text-sm">{protocolNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pet Info Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-6">
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Nome do Pet</span>
                  <span className="text-lg font-bold text-gray-800">{petName || "________________"}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Score</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-lg font-bold text-[#FF6B35]">{score}</span>
                    <span className="text-xs text-gray-400 font-medium">/100</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Data</span>
                  <span className="text-sm font-semibold text-gray-700">{currentDate}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20 px-4 py-2 rounded-xl">
                <span className="block text-[9px] text-[#FF6B35] uppercase font-bold tracking-wider mb-0.5">Classificação</span>
                <span className="text-sm font-bold text-[#FF6B35]">{resultTitle}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-5 flex-1 flex flex-col" style={{ minHeight: "600px" }}>
            <div className="grid grid-cols-12 gap-4 flex-1">
              {/* Left Column */}
              <div className="col-span-7 space-y-4">
                {/* Vacinas */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-3 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">💉</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Cronograma de Vacinação</h3>
                  </div>
                  <div className="p-3 space-y-2.5">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-200 flex-shrink-0 bg-blue-50"></div>
                        <div className="flex-1 flex items-end gap-1">
                          <span className="text-gray-500 text-[10px] font-medium mb-0.5">Vacina:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                        </div>
                        <div className="w-20 flex items-end gap-1">
                          <span className="text-gray-500 text-[9px] font-medium mb-0.5">Data:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parasitas */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-green-50 to-white p-3 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">💊</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Controle Parasitário</h3>
                  </div>
                  <div className="p-3 space-y-2.5">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-green-200 flex-shrink-0 bg-green-50"></div>
                        <div className="flex-1 flex items-end gap-1">
                          <span className="text-gray-500 text-[10px] font-medium mb-0.5">Produto:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                        </div>
                        <div className="w-20 flex items-end gap-1">
                          <span className="text-gray-500 text-[9px] font-medium mb-0.5">Data:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultas */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-purple-50 to-white p-3 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Próximas Consultas</h3>
                  </div>
                  <div className="p-3 space-y-2.5">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-purple-200 flex-shrink-0 bg-purple-50"></div>
                        <div className="flex-1 flex items-end gap-1">
                          <span className="text-gray-500 text-[10px] font-medium mb-0.5">Tipo:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                        </div>
                        <div className="w-20 flex items-end gap-1">
                          <span className="text-gray-500 text-[9px] font-medium mb-0.5">Data:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-5 flex flex-col gap-4">
                {/* Weight Tracker */}
                <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-50 to-white p-2.5 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm">⚖️</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-[10px] uppercase tracking-wide">Controle de Peso</h3>
                  </div>
                  <div className="p-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-gray-200 rounded-lg p-2 text-center bg-gradient-to-br from-gray-50 to-white">
                        <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider block mb-0.5">Atual</span>
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-gray-300 text-lg font-light">____</span>
                          <span className="text-gray-400 font-medium text-[10px]">kg</span>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-2 text-center bg-gradient-to-br from-gray-50 to-white">
                        <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider block mb-0.5">Meta</span>
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-gray-300 text-lg font-light">____</span>
                          <span className="text-gray-400 font-medium text-[10px]">kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saúde Bucal */}
                <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-50 to-white p-2.5 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-7 h-7 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm">🦷</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-[10px] uppercase tracking-wide">Saúde Bucal</h3>
                  </div>
                  <div className="p-2.5 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-[10px] text-gray-600">Escovação semanal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-[10px] text-gray-600">Limpeza profissional</span>
                    </div>
                    <div className="flex items-end gap-1 mt-1.5">
                      <span className="text-gray-500 text-[9px] font-medium mb-0.5">Última:</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* Notes - Expanded */}
                <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden flex-1 flex flex-col">
                  <div className="bg-gradient-to-r from-rose-50 to-white p-2.5 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-7 h-7 bg-rose-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-[10px] uppercase tracking-wide">Observações</h3>
                  </div>
                  <div className="p-3 flex-1 relative" style={{ minHeight: "240px" }}>
                    <div className="absolute inset-0 px-3 py-2 space-y-4 pointer-events-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                        <div key={i} className="border-b border-gray-100 w-full h-px"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B5C] p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-xs">🐾</span>
                <span className="text-white font-semibold text-xs">www.petscore.com.br</span>
              </div>
              <p className="text-white/80 text-[10px]">
                Mantenha atualizado e leve nas consultas veterinárias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetPlanner;
