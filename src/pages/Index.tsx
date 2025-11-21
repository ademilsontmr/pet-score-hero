import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, TrendingUp, Award, Clock, Target, CheckCircle2, Star, Share2, Gift, Users, Zap, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pet Score - O Quiz Oficial dos Pais de Pet";
  }, []);
  const scrollToQuiz = () => {
    navigate("/quiz");
  };
  return <div className="min-h-screen bg-gradient-warm">
    <Header />
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />

      {/* Floating paw prints background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce">🐾</div>
        <div className="absolute top-40 right-20 text-5xl opacity-10 animate-bounce delay-300">🐾</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-bounce delay-700">🐾</div>
        <div className="absolute top-60 right-1/3 text-5xl opacity-10 animate-bounce delay-500">🐾</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
              ✨ Mais de 10.000 tutores já descobriram!
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Você é um Bom Tutor de Pet?
                <span className="block text-primary mt-2">Descubra Agora!</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Um quiz científico e divertido com <span className="font-bold text-primary">30 perguntas</span> que revela seu verdadeiro nível de dedicação ao seu melhor amigo 🐶🐱
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={scrollToQuiz} className="text-lg px-8 py-4 h-auto shadow-sm hover:shadow-md transition-all duration-300 hover-scale">
                🎯 Começar Quiz Grátis
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('como-funciona')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-lg px-8 py-4 h-auto">
                Como Funciona
              </Button>
            </div>


          </div>

          {/* Right image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="rounded-3xl overflow-hidden shadow-medium hover-scale transition-all duration-500">
              <img src={heroImage} alt="Pets felizes juntos" className="w-full h-auto object-cover" />
            </div>

            {/* Stats badge */}

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>

    {/* Social Proof Section */}
    <section className="py-12 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <Star className="w-5 h-5 fill-primary text-primary" />
            <Star className="w-5 h-5 fill-primary text-primary" />
            <Star className="w-5 h-5 fill-primary text-primary" />
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="ml-2 font-semibold">4.9/5.0</span>
          </div>
          <div className="text-muted-foreground">|</div>
          <div className="font-semibold">10.247 tutores</div>
          <div className="text-muted-foreground">|</div>
          <div className="font-semibold">Aprovado por veterinários</div>
        </div>
      </div>
    </section>

    {/* Como Funciona Section */}
    <section id="como-funciona" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Sua jornada para se tornar o melhor amigo do seu pet começa aqui
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto shadow-medium">
              1
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Responda com o Coração</h3>
              <p className="text-muted-foreground">
                Perguntas rápidas sobre o dia a dia que vão fazer você refletir sobre a conexão única que tem com seu pet
              </p>
            </div>
          </div>

          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto shadow-medium">
              2
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Descubra seu Perfil</h3>
              <p className="text-muted-foreground">
                Receba uma análise inicial gratuita e veja como seus cuidados impactam a felicidade do seu companheiro
              </p>
            </div>
          </div>

          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto shadow-medium">
              3
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Transforme a Relação</h3>
              <p className="text-muted-foreground">
                Tenha acesso ao plano completo com dicas exclusivas de especialistas para elevar o nível de bem-estar do seu pet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* O que você vai receber */}
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Você Vai Descobrir
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma análise profunda que vai transformar a vida do seu pet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex gap-4">
              <div className="bg-primary text-primary-foreground rounded-2xl p-4 shrink-0 h-fit">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Diagnóstico Completo (0-100)</h3>
                <p className="text-muted-foreground text-lg">
                  Entenda com precisão científica o nível de bem-estar que você proporciona hoje e descubra onde pode evoluir.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-right duration-700">
            <div className="flex gap-4">
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-4 shrink-0 h-fit">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Sua Identidade de Tutor</h3>
                <p className="text-muted-foreground text-lg">
                  Conquiste títulos exclusivos como Lendário 🏆 ou Herói do Lar ⭐ que comprovam sua dedicação e amor.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-left duration-700 delay-200">
            <div className="flex gap-4">
              <div className="bg-accent text-accent-foreground rounded-2xl p-4 shrink-0 h-fit">
                <Heart className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Plano de Ação Personalizado</h3>
                <p className="text-muted-foreground text-lg">
                  Receba um guia prático feito sob medida para a rotina e necessidades específicas do seu melhor amigo.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="flex gap-4">
              <div className="bg-gradient-success text-white rounded-2xl p-4 shrink-0 h-fit">
                <Share2 className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Recordação Exclusiva</h3>
                <p className="text-muted-foreground text-lg">
                  Crie uma arte única com a <strong>foto do seu pet</strong> emoldurada com sua conquista para compartilhar nas redes sociais e eternizar esse momento! 📸
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    {/* Depoimentos */}
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Nossos Tutores
          </h2>
          <p className="text-xl text-muted-foreground">
            Milhares já descobriram como melhorar o cuidado com seus pets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground italic">
                "Me emocionei com o resultado! Descobri que sou Herói do Lar e as dicas me ajudaram muito a melhorar ainda mais. Meu Thor está mais feliz!"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img src={testimonial1} alt="Juliana com seu cachorro" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-foreground">Juliana M.</div>
                  <div className="text-sm text-muted-foreground">Tutora de Golden</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="space-y-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground italic">
                "Adorei! O quiz é super completo e as perguntas fazem sentido. Compartilhei minha imagem no Instagram e meus amigos adoraram!"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img src={testimonial2} alt="Carlos com seu gato" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-foreground">Carlos R.</div>
                  <div className="text-sm text-muted-foreground">Tutor de Gato</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="space-y-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground italic">
                "As dicas personalizadas mudaram completamente minha rotina com a Nina. Agora sei exatamente onde acertar e como cuidar ainda melhor dela. Score 92! 🎉"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img src={testimonial3} alt="Amanda com seu beagle" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-foreground">Amanda S.</div>
                  <div className="text-sm text-muted-foreground">Tutora de Beagle</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo o que você precisa saber
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">


          <AccordionItem value="item-2" className="bg-card rounded-2xl px-6 shadow-soft border-none">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Preciso de muito tempo para responder?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              É super rápido! Em menos de 10 minutos você faz um check-up completo da sua relação com seu pet.
              É o tempo de um cafézinho para ganhar insights que valem por uma vida inteira de bem-estar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card rounded-2xl px-6 shadow-soft border-none">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Funciona para cães e gatos de qualquer idade?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Sim! Nossa metodologia abrange desde filhotes até idosos, tanto cães quanto gatos.
              As perguntas foram desenhadas por especialistas para considerar as necessidades vitais de cada fase e espécie.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card rounded-2xl px-6 shadow-soft border-none">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              O que ganho no relatório completo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Você desbloqueia seu Score Oficial (0-100), o Nível de Tutor,
              além de um guia prático com dicas personalizadas para melhorar a saúde e felicidade do seu pet imediatamente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card rounded-2xl px-6 shadow-soft border-none">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Posso acompanhar minha evolução?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Com certeza! Recomendamos refazer o quiz a cada 3 meses para ver como a aplicação das dicas
              está aumentando seu Score e, principalmente, melhorando a qualidade de vida do seu melhor amigo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card rounded-2xl px-6 shadow-soft border-none">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              As orientações servem para o meu caso?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Totalmente. Não usamos "receitas de bolo". Seu plano é gerado com base nas SUAS respostas,
              focando exatamente nos pontos onde você e seu pet mais precisam de atenção e carinho.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    {/* Bonus Section */}
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <Card className="overflow-hidden shadow-medium">
          <div className="bg-gradient-hero text-white p-12 text-center">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎁 3 Presentes Inclusos
            </h2>
            <p className="text-xl opacity-95">
              Ferramentas essenciais para facilitar sua rotina e proteger quem você ama:
            </p>
          </div>
          <div className="p-12 space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Guia Definitivo de Alimentos</h3>
                <p className="text-muted-foreground">
                  Pare de adivinhar. Tenha em mãos a lista exata do que nutre e do que intoxica seu pet, evitando emergências desnecessárias.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Checklist "Casa Segura"</h3>
                <p className="text-muted-foreground">
                  Um rastreio completo para eliminar armadilhas silenciosas em sua casa. Proteja seu pet de acidentes comuns e perigosos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cronograma de Saúde Preventiva</h3>
                <p className="text-muted-foreground">
                  Nunca mais perca uma data de vacina ou vermífugo. Um organizador prático para garantir que a saúde do seu melhor amigo esteja sempre em dia.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* CTA Final Section */}
    <section className="py-24 px-4 bg-primary/5 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-9xl opacity-5 text-primary">🐾</div>
        <div className="absolute bottom-20 right-20 text-9xl opacity-5 text-primary">🐾</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5 text-primary">❤️</div>
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight md:whitespace-nowrap">
          Seu Pet Merece um Tutor Incrível
        </h2>
        <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
          Descubra seu nível agora e transforme o cuidado que você oferece! 🐾
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" onClick={scrollToQuiz} className="text-xl px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
            🎯 Começar Quiz Grátis Agora
          </Button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>5-10 minutos</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span>100% Seguro</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span>10k+ Tutores Satisfeitos</span>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default Index;