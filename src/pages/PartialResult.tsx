import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PartialResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;

  useEffect(() => {
    document.title = "Seu Resultado | PetScore";
    if (!location.state?.score) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const [petImage, setPetImage] = useState<string | null>(null);
  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState<"male" | "female" | "">("");
  const [tutorName, setTutorName] = useState("");
  const [tutorPhone, setTutorPhone] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header Card */}
        <Card className="p-8 md:p-12 shadow-medium bg-gradient-to-br from-white to-orange-50/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-2xl mb-4">
              <span className="text-5xl">🎉</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Você completou o quiz!
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Parabéns por se dedicar ao bem-estar do seu pet
            </p>
          </div>
        </Card>

        {/* Congratulations Card */}
        <Card className="p-8 md:p-10 shadow-medium bg-gradient-to-br from-white to-green-50/30">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
              <span className="text-3xl">💛</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Seu pet tem MUITA sorte de ter você!
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Com base nas suas respostas, já dá para ver que você tem um{" "}
              <span className="font-semibold text-foreground">vínculo especial e único</span>{" "}
              com seu companheiro 🐾
            </p>
          </div>
        </Card>

        {/* Personalization Card */}
        <Card className="p-8 md:p-10 shadow-medium bg-gradient-to-br from-white to-blue-50/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <span className="text-3xl">📸</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Personalize seu Resultado
            </h2>
            <p className="text-muted-foreground text-lg">
              Adicione uma foto para gerar um certificado oficial e exclusivo
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            {/* Pet Name Input */}
            <div className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-sm">
              <Label htmlFor="petName" className="text-base font-semibold mb-3 block text-gray-700">
                Nome do seu Pet (Opcional)
              </Label>
              <Input
                id="petName"
                placeholder="Ex: Thor, Luna, Bob..."
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="text-lg py-6 border-2 border-blue-100 focus:border-blue-400"
              />
            </div>

            {/* Pet Gender Selection */}
            <div className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-sm">
              <Label className="text-base font-semibold mb-3 block text-gray-700">
                Seu pet é (Opcional)
              </Label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setPetGender("male")}
                  className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all ${petGender === "male"
                    ? "bg-blue-100 border-blue-400 text-blue-800 font-semibold"
                    : "bg-white border-blue-200 text-gray-700 hover:border-blue-300"
                    }`}
                >
                  🐕 Macho
                </button>
                <button
                  type="button"
                  onClick={() => setPetGender("female")}
                  className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all ${petGender === "female"
                    ? "bg-pink-100 border-pink-400 text-pink-800 font-semibold"
                    : "bg-white border-blue-200 text-gray-700 hover:border-blue-300"
                    }`}
                >
                  🐕 Fêmea
                </button>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-white p-8 rounded-3xl border-2 border-blue-200 shadow-sm">
              <div className="flex flex-col items-center gap-4">
                {petImage ? (
                  <div className="relative">
                    <div className="w-56 h-56 rounded-3xl overflow-hidden border-4 border-blue-400 shadow-lg">
                      <img src={petImage} alt="Seu pet" className="w-full h-full object-cover" />
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mt-4 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold"
                      onClick={() => setPetImage(null)}
                    >
                      ✏️ Trocar foto
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer group w-full">
                    <div className="w-full py-12 px-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex flex-col items-center justify-center border-2 border-dashed border-blue-300 group-hover:border-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-blue-200/50 transition-all duration-300">
                      <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-5xl">📸</span>
                      </div>
                      <p className="text-blue-700 font-bold text-lg mb-2">
                        Clique para enviar foto do seu pet
                      </p>
                      <p className="text-blue-600 text-sm text-center max-w-xs">
                        A foto aparecerá no seu certificado oficial
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Score Teaser Card */}
        <Card className="p-8 md:p-10 shadow-medium bg-gradient-to-br from-white to-purple-50/30 border-2 border-purple-200">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
              <span className="text-3xl">👀</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">
              Seu score está acima da média!
            </h2>

            <p className="text-lg text-purple-700 mb-6">
              Seu resultado completo está quase pronto...
            </p>

            <div className="bg-white p-6 rounded-3xl border-2 border-purple-200 shadow-sm mb-6">
              <p className="text-gray-700 leading-relaxed">
                Descubra seu <span className="font-bold text-purple-600">score real</span>, seu{" "}
                <span className="font-bold text-purple-600">nível oficial de tutor</span> e{" "}
                <span className="font-bold text-purple-600">dicas personalizadas</span>{" "}
                para deixar seu pet ainda mais feliz
              </p>
            </div>

            {/* Lead Capture Fields */}
            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <div>
                <Label htmlFor="tutorName" className="text-purple-900 font-semibold mb-2 block">
                  Seu Nome
                </Label>
                <Input
                  id="tutorName"
                  placeholder="Como você se chama?"
                  value={tutorName}
                  onChange={(e) => setTutorName(e.target.value)}
                  className="bg-white border-purple-200 focus:border-purple-500 h-12"
                />
              </div>
              <div>
                <Label htmlFor="tutorPhone" className="text-purple-900 font-semibold mb-2 block">
                  Seu WhatsApp
                </Label>
                <Input
                  id="tutorPhone"
                  placeholder="11 999999999"
                  value={tutorPhone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length > 11) value = value.slice(0, 11);
                    if (value.length > 2) {
                      value = `${value.slice(0, 2)} ${value.slice(2)}`;
                    }
                    setTutorPhone(value);
                  }}
                  maxLength={12}
                  className="bg-white border-purple-200 focus:border-purple-500 h-12"
                />
              </div>
            </div>

            <Button
              size="lg"
              onClick={async () => {
                // Save lead data silently (fire and forget to avoid blocking UX)
                if (tutorName || tutorPhone) {
                  try {
                    fetch("/api/save-lead", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: tutorName,
                        phone: tutorPhone,
                        petName,
                        petGender,
                        score
                      })
                    });
                  } catch (e) {
                    console.error("Lead save error", e);
                  }
                }

                navigate("/payment", { state: { score, petImage, petName, petGender, tutorName, tutorPhone } });
              }}
              className="w-full text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-purple-600 hover:bg-purple-700"
            >
              🧡 Ver meu Score Completo
            </Button>
          </div>
        </Card>

        {/* Footer Decoration */}
        <div className="flex justify-center gap-4 opacity-30 py-4">
          <span className="text-4xl">🐾</span>
          <span className="text-4xl">🐾</span>
          <span className="text-4xl">🐾</span>
        </div>
      </div>
    </div>
  );
};

export default PartialResult;
