import { useRef, useCallback } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";

interface PetPlannerProps {
  petName: string;
  score: number;
  resultTitle: string;
}

const PetPlanner = ({ petName, score, resultTitle }: PetPlannerProps) => {
  const plannerRef = useRef<HTMLDivElement>(null);

  const handleDownloadPlanner = useCallback(async () => {
    if (!plannerRef.current) return;

    try {
      // Dynamic import html2canvas
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
          toast.success("Planner baixado com sucesso! 🐾");
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
    <div className="space-y-6">
      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={handleDownloadPlanner}
          className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-purple-600 to-purple-700"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 blur-xl opacity-50" />
          </div>
          <div className="relative flex items-center justify-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-base sm:text-lg font-semibold text-white">Baixar Planner</span>
              <span className="text-xs text-white/80">Download em alta qualidade</span>
            </div>
          </div>
        </button>
      </div>

      {/* Planner Content */}
      <div className="overflow-x-auto pb-4">
        <div 
          ref={plannerRef}
          className="min-w-[800px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{ width: "800px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B5C] p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🐾</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">PetScore</h1>
                  <p className="text-white/80 text-sm font-medium">Planner de Saúde Personalizado</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                  <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Protocolo</p>
                  <p className="text-white font-bold">{protocolNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pet Info Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-5">
            <div className="flex items-center justify-between">
              <div className="flex gap-8">
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Nome do Pet</span>
                  <span className="text-xl font-bold text-gray-800">{petName || "________________"}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Score Atual</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-[#FF6B35]">{score}</span>
                    <span className="text-sm text-gray-400 font-medium">/100</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Data de Emissão</span>
                  <span className="text-lg font-semibold text-gray-700">{currentDate}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20 px-5 py-3 rounded-xl">
                <span className="block text-[10px] text-[#FF6B35] uppercase font-bold tracking-wider mb-1">Classificação</span>
                <span className="text-base font-bold text-[#FF6B35]">{resultTitle}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            <div className="grid grid-cols-12 gap-5">
              {/* Left Column */}
              <div className="col-span-7 space-y-5">
                {/* Vacinas */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">💉</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Cronograma de Vacinação</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-blue-200 flex-shrink-0 bg-blue-50"></div>
                        <div className="flex-1 flex items-end gap-2">
                          <span className="text-gray-500 text-sm font-medium mb-1">Vacina:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                        </div>
                        <div className="w-28 flex items-end gap-2">
                          <span className="text-gray-500 text-xs font-medium mb-1">Data:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parasitas */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-green-50 to-white p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">💊</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Controle Parasitário</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-green-200 flex-shrink-0 bg-green-50"></div>
                        <div className="flex-1 flex items-end gap-2">
                          <span className="text-gray-500 text-sm font-medium mb-1">Produto:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                        </div>
                        <div className="w-28 flex items-end gap-2">
                          <span className="text-gray-500 text-xs font-medium mb-1">Data:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultas */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-purple-50 to-white p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Próximas Consultas</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-purple-200 flex-shrink-0 bg-purple-50"></div>
                        <div className="flex-1 flex items-end gap-2">
                          <span className="text-gray-500 text-sm font-medium mb-1">Tipo:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                        </div>
                        <div className="w-28 flex items-end gap-2">
                          <span className="text-gray-500 text-xs font-medium mb-1">Data:</span>
                          <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-5 space-y-5">
                {/* Weight Tracker */}
                <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-50 to-white p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">⚖️</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Controle de Peso</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-gray-200 rounded-xl p-4 text-center bg-gradient-to-br from-gray-50 to-white">
                        <span className="text-xs text-amber-600 font-bold uppercase tracking-wider block mb-2">Peso Atual</span>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-gray-300 text-2xl font-light">____</span>
                          <span className="text-gray-400 font-medium text-sm">kg</span>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-4 text-center bg-gradient-to-br from-gray-50 to-white">
                        <span className="text-xs text-amber-600 font-bold uppercase tracking-wider block mb-2">Peso Meta</span>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-gray-300 text-2xl font-light">____</span>
                          <span className="text-gray-400 font-medium text-sm">kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saúde Bucal */}
                <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-50 to-white p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🦷</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Saúde Bucal</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-sm text-gray-600">Escovação semanal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-sm text-gray-600">Limpeza profissional</span>
                    </div>
                    <div className="flex items-end gap-2 mt-3">
                      <span className="text-gray-500 text-xs font-medium mb-1">Última limpeza:</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-200 mb-1"></div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden flex-1">
                  <div className="bg-gradient-to-r from-rose-50 to-white p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">📝</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Observações</h3>
                  </div>
                  <div className="p-4 relative" style={{ minHeight: "140px" }}>
                    <div className="absolute inset-0 top-0 px-4 py-2 space-y-4 pointer-events-none">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="border-b border-gray-100 w-full h-px"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B5C] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-sm">🐾</span>
                <span className="text-white font-semibold text-sm">www.petscore.com.br</span>
              </div>
              <p className="text-white/80 text-xs">
                Mantenha este planner atualizado e leve nas consultas veterinárias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetPlanner;
