import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-pets.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Descubra seu Nível de Pai/Mãe de Pet
                  <span className="inline-block ml-3">🐶🐱</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Um quiz divertido com <span className="font-bold text-primary">30 perguntas</span> para medir o amor, a rotina e o cuidado que você dedica ao seu pet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  onClick={() => navigate("/quiz")}
                  className="text-xl px-12 py-8 h-auto shadow-medium hover:shadow-soft transition-all duration-300"
                >
                  Começar Agora
                </Button>
              </div>

              <div className="flex items-center gap-6 justify-center md:justify-start text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span>5-10 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span>30 perguntas</span>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={heroImage}
                  alt="Pets felizes juntos"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating paw prints */}
              <div className="absolute -top-8 -right-8 text-6xl opacity-30 animate-bounce">
                🐾
              </div>
              <div className="absolute -bottom-8 -left-8 text-6xl opacity-30 animate-bounce delay-300">
                🐾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            O que você vai descobrir
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center space-y-4 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl">🏆</div>
              <h3 className="text-xl font-bold text-foreground">Seu Score Real</h3>
              <p className="text-muted-foreground">
                Descubra sua pontuação de 0 a 100 e veja o quão dedicado você é ao seu pet
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft text-center space-y-4 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl">⭐</div>
              <h3 className="text-xl font-bold text-foreground">Nível Oficial</h3>
              <p className="text-muted-foreground">
                Receba seu título oficial: Lendário, Herói do Lar, Nota 10, e mais!
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft text-center space-y-4 hover:shadow-medium transition-all duration-300">
              <div className="text-5xl">💡</div>
              <h3 className="text-xl font-bold text-foreground">Dicas Personalizadas</h3>
              <p className="text-muted-foreground">
                Receba orientações específicas para melhorar o cuidado com seu pet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Pronto para descobrir seu nível?
          </h2>
          <p className="text-xl text-white/90">
            Milhares de tutores já fizeram o quiz. Agora é a sua vez! 🐾
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/quiz")}
            className="text-xl px-12 py-8 h-auto shadow-medium hover:shadow-soft transition-all duration-300"
          >
            Começar Quiz Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
