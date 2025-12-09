import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Camera, CheckCircle2, Gift, Heart, Sparkles, Star, Trophy, Upload } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Success Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Quiz concluído com sucesso!
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl mb-6 shadow-lg">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Parabéns! Você completou o quiz 🎉
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Seu pet tem muita sorte de ter alguém que se importa tanto assim!
            </p>
          </div>

          {/* Stats Preview */}
          <div className="flex justify-center gap-6 md:gap-10 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                <Star className="w-7 h-7 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Score</p>
              <p className="text-sm font-bold text-foreground">Calculado</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Dicas</p>
              <p className="text-sm font-bold text-foreground">Prontas</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                <Heart className="w-7 h-7 text-rose-500" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Nível</p>
              <p className="text-sm font-bold text-foreground">Revelado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 -mt-4 pb-16 space-y-6">
        
        {/* Personalization Card */}
        <Card className="overflow-hidden shadow-lg border-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">Personalize seu Resultado</h2>
                <p className="text-sm text-muted-foreground">Opcional - deixe seu certificado único</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-5">
            {/* Pet Name */}
            <div className="space-y-2">
              <Label htmlFor="petName" className="text-sm font-semibold text-foreground flex items-center gap-2">
                🐾 Nome do Pet
                <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
              </Label>
              <Input
                id="petName"
                placeholder="Ex: Thor, Luna, Bob..."
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="h-12 bg-muted/30 border-muted focus:bg-white transition-colors"
              />
            </div>

            {/* Pet Gender */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                Seu pet é
                <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPetGender("male")}
                  className={`py-3.5 px-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-center gap-2 font-medium ${
                    petGender === "male"
                      ? "bg-blue-50 border-blue-400 text-blue-700 shadow-sm"
                      : "bg-muted/30 border-transparent text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="text-lg">♂️</span> Macho
                </button>
                <button
                  type="button"
                  onClick={() => setPetGender("female")}
                  className={`py-3.5 px-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-center gap-2 font-medium ${
                    petGender === "female"
                      ? "bg-pink-50 border-pink-400 text-pink-700 shadow-sm"
                      : "bg-muted/30 border-transparent text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="text-lg">♀️</span> Fêmea
                </button>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                📸 Foto do Pet
                <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
              </Label>
              
              {petImage ? (
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/20 shadow-sm">
                    <img src={petImage} alt="Seu pet" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Foto adicionada!</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-muted-foreground hover:text-foreground"
                      onClick={() => setPetImage(null)}
                    >
                      <Camera className="w-4 h-4 mr-1" /> Trocar foto
                    </Button>
                  </div>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <div className="py-8 px-6 rounded-xl bg-muted/30 border-2 border-dashed border-muted-foreground/20 hover:border-primary/40 hover:bg-muted/50 transition-all duration-200 text-center group">
                    <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                      <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Clique para enviar uma foto
                    </p>
                    <p className="text-xs text-muted-foreground">
                      A foto aparece no seu certificado
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
        </Card>

        {/* CTA Card */}
        <Card className="overflow-hidden shadow-xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                RESULTADO PRONTO
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Descubra seu Score Completo
              </h2>
              
              <p className="text-muted-foreground">
                Seu nível de tutor, dicas personalizadas e certificado exclusivo
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 mb-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Score detalhado com análise completa</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Nível oficial de tutor revelado</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Dicas personalizadas para seu pet</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">Certificado exclusivo para compartilhar</span>
              </div>
            </div>

            {/* Lead Capture */}
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="tutorName" className="text-sm font-semibold text-foreground">
                  Seu Nome
                </Label>
                <Input
                  id="tutorName"
                  placeholder="Como você se chama?"
                  value={tutorName}
                  onChange={(e) => setTutorName(e.target.value)}
                  className="h-12 bg-white border-muted focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tutorPhone" className="text-sm font-semibold text-foreground">
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
                  className="h-12 bg-white border-muted focus:border-primary"
                />
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/pagamento", {
                  state: {
                    score,
                    petImage,
                    petName,
                    petGender,
                    tutorName,
                    tutorPhone
                  }
                });
              }}
              className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            >
              Ver meu Score Completo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              🔒 Seus dados estão protegidos e seguros
            </p>
          </div>
        </Card>

        {/* Trust Footer */}
        <div className="text-center pt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Mais de 10.000 tutores já descobriram seu score
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartialResult;
