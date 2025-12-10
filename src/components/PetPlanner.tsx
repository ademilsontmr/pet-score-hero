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
      </div>

      {/* Mobile Info Card */}
      <div className="sm:hidden bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 text-center">
        <p className="text-sm text-amber-800">
          Deslize para os lados para ver o planner completo ou baixe para visualizar em tela cheia
        </p>
      </div>

      {/* Planner Container - A4 size: 210mm x 297mm = 794px x 1123px at 96 DPI */}
      <div className="relative overflow-x-auto pb-4">
        <div 
          ref={plannerRef}
          className="mx-auto bg-white shadow-xl overflow-hidden flex flex-col"
          style={{ width: "794px", minWidth: "794px", height: "1123px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B5C] p-6">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Logo Section */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                  <span style={{ fontSize: "28px" }}>🐾</span>
                </div>
                <div>
                  <h1 className="text-3xl font-black text-white tracking-tight">PetScore</h1>
                  <p className="text-white text-sm font-medium" style={{ opacity: 0.9 }}>Planner de Saúde Personalizado</p>
                </div>
              </div>
              
              {/* Protocol Section */}
              <div className="bg-white rounded-xl px-5 py-3" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                <p className="text-orange-600 text-[10px] uppercase tracking-widest font-bold" style={{ marginBottom: "2px" }}>Protocolo</p>
                <p className="text-gray-800 font-black text-lg tracking-wide">{protocolNumber}</p>
              </div>
            </div>
          </div>

          {/* Pet Info Bar */}
          <div className="bg-gray-50 border-b border-gray-100 p-4">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <div style={{ display: "flex", gap: "24px" }}>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider" style={{ marginBottom: "2px" }}>Nome do Pet</span>
                  <span className="text-lg font-bold text-gray-800">{petName || "________________"}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider" style={{ marginBottom: "2px" }}>Score</span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                    <span className="text-lg font-bold text-[#FF6B35]">{score}</span>
                    <span className="text-xs text-gray-400 font-medium">/100</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-400 uppercase font-bold tracking-wider" style={{ marginBottom: "2px" }}>Data</span>
                  <span className="text-sm font-semibold text-gray-700">{currentDate}</span>
                </div>
              </div>
              <div className="border border-[#FF6B35] px-4 py-2 rounded-xl" style={{ backgroundColor: "rgba(255, 107, 53, 0.1)" }}>
                <span className="block text-[9px] text-[#FF6B35] uppercase font-bold tracking-wider" style={{ marginBottom: "2px" }}>Classificação</span>
                <span className="text-sm font-bold text-[#FF6B35]">{resultTitle}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-5" style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div className="gap-4" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", flex: 1 }}>
              {/* Left Column */}
              <div style={{ gridColumn: "span 7", display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Vacinas */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white" style={{ flex: 1, display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="bg-blue-50 p-3 border-b border-gray-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "18px" }}>💉</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Cronograma de Vacinação</h3>
                  </div>
                  <div className="p-3" style={{ flex: 1 }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-200 bg-blue-50" style={{ flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "4px" }}>
                          <span className="text-gray-500 text-[10px] font-medium" style={{ marginBottom: "2px" }}>Vacina:</span>
                          <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                        </div>
                        <div style={{ width: "80px", display: "flex", alignItems: "flex-end", gap: "4px" }}>
                          <span className="text-gray-500 text-[9px] font-medium" style={{ marginBottom: "2px" }}>Data:</span>
                          <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parasitas */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white" style={{ flex: 1, display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="bg-green-50 p-3 border-b border-gray-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="w-8 h-8 bg-green-100 rounded-lg" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "18px" }}>💊</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Controle Parasitário</h3>
                  </div>
                  <div className="p-3" style={{ flex: 1 }}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-green-200 bg-green-50" style={{ flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "4px" }}>
                          <span className="text-gray-500 text-[10px] font-medium" style={{ marginBottom: "2px" }}>Produto:</span>
                          <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                        </div>
                        <div style={{ width: "80px", display: "flex", alignItems: "flex-end", gap: "4px" }}>
                          <span className="text-gray-500 text-[9px] font-medium" style={{ marginBottom: "2px" }}>Data:</span>
                          <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultas */}
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white" style={{ flex: 1, display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="bg-purple-50 p-3 border-b border-gray-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="w-8 h-8 bg-purple-100 rounded-lg" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "18px" }}>🩺</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wide">Próximas Consultas</h3>
                  </div>
                  <div className="p-3" style={{ flex: 1 }}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-purple-200 bg-purple-50" style={{ flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "4px" }}>
                          <span className="text-gray-500 text-[10px] font-medium" style={{ marginBottom: "2px" }}>Tipo:</span>
                          <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                        </div>
                        <div style={{ width: "80px", display: "flex", alignItems: "flex-end", gap: "4px" }}>
                          <span className="text-gray-500 text-[9px] font-medium" style={{ marginBottom: "2px" }}>Data:</span>
                          <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div style={{ gridColumn: "span 5", display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Weight Tracker */}
                <div className="border border-gray-200 rounded-xl bg-white overflow-hidden" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="bg-amber-50 p-2.5 border-b border-gray-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="w-7 h-7 bg-amber-100 rounded-lg" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "14px" }}>⚖️</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-[10px] uppercase tracking-wide">Controle de Peso</h3>
                  </div>
                  <div className="p-2.5">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      <div className="border border-gray-200 rounded-lg p-2 text-center bg-gray-50">
                        <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider block" style={{ marginBottom: "2px" }}>Atual</span>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "2px" }}>
                          <span className="text-gray-300 text-lg font-light">____</span>
                          <span className="text-gray-400 font-medium text-[10px]">kg</span>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-2 text-center bg-gray-50">
                        <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider block" style={{ marginBottom: "2px" }}>Meta</span>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "2px" }}>
                          <span className="text-gray-300 text-lg font-light">____</span>
                          <span className="text-gray-400 font-medium text-[10px]">kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Saúde Bucal */}
                <div className="border border-gray-200 rounded-xl bg-white overflow-hidden" style={{ display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="bg-cyan-50 p-2.5 border-b border-gray-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="w-7 h-7 bg-cyan-100 rounded-lg" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "14px" }}>🦷</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-[10px] uppercase tracking-wide">Saúde Bucal</h3>
                  </div>
                  <div className="p-2.5">
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <div className="w-3 h-3 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-[10px] text-gray-600">Escovação semanal</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <div className="w-3 h-3 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-[10px] text-gray-600">Limpeza profissional</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <div className="w-3 h-3 rounded border-2 border-cyan-200 bg-cyan-50"></div>
                      <span className="text-[10px] text-gray-600">Petisco dental</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginTop: "8px" }}>
                      <span className="text-gray-500 text-[9px] font-medium" style={{ marginBottom: "2px" }}>Última limpeza:</span>
                      <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                      <span className="text-gray-500 text-[9px] font-medium" style={{ marginBottom: "2px" }}>Próxima:</span>
                      <div className="border-b-2 border-dotted border-gray-200" style={{ flex: 1, marginBottom: "2px" }}></div>
                    </div>
                  </div>
                </div>

                {/* Notes - Expanded to fill remaining space */}
                <div className="border border-gray-200 rounded-xl bg-white overflow-hidden" style={{ flex: 1, display: "flex", flexDirection: "column", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="bg-rose-50 p-2.5 border-b border-gray-100" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="w-7 h-7 bg-rose-100 rounded-lg" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "14px" }}>📝</span>
                    </div>
                    <h3 className="font-bold text-gray-700 text-[10px] uppercase tracking-wide">Observações</h3>
                  </div>
                  <div className="p-3" style={{ flex: 1, position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, padding: "8px 12px" }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(i => (
                        <div key={i} className="border-b border-gray-100 w-full" style={{ height: "1px", marginBottom: "20px" }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#FF6B35] p-3">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="text-white text-xs" style={{ opacity: 0.8 }}>🐾</span>
                <span className="text-white font-semibold text-xs">www.petscore.com.br</span>
              </div>
              <p className="text-white text-[10px]" style={{ opacity: 0.8 }}>
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
