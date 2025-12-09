import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, TrendingUp, Award, Clock, Target, CheckCircle2, Star, Share2, Gift, Users, Zap, ChevronDown, Utensils, Shield, Calendar } from "lucide-react";
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
                🎯 Descobrir Meu PetScore
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
          <div className="font-semibold">Sem precisar criar conta</div>
        </div>
      </div>
    </section>

    {/* Como Funciona Section */}
    <section id="como-funciona" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Simples e Rápido
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sua jornada para se tornar o melhor amigo do seu pet começa aqui — em apenas 3 passos simples
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30" />
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-1">
            <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" style={{
              width: '100%',
              opacity: 0.6
            }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="text-center space-y-6">
                {/* Number badge */}
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg ring-4 ring-background">
                    1
                  </div>
                </div>
                
                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="bg-primary/10 rounded-2xl p-4 w-fit mx-auto mb-6">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Responda com o Coração</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      30 perguntas rápidas sobre o dia a dia que vão fazer você refletir sobre a conexão única com seu pet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="text-center space-y-6">
                {/* Number badge */}
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg ring-4 ring-background">
                    2
                  </div>
                </div>
                
                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-secondary/20 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="bg-secondary/10 rounded-2xl p-4 w-fit mx-auto mb-6">
                      <Users className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Descubra seu Perfil</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Receba sua análise personalizada e veja como seus cuidados impactam a felicidade do seu companheiro
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="text-center space-y-6">
                {/* Number badge */}
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg ring-4 ring-background">
                    3
                  </div>
                </div>
                
                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-accent/20 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="bg-accent/10 rounded-2xl p-4 w-fit mx-auto mb-6">
                      <Award className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Transforme a Relação</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Acesse o plano completo com dicas exclusivas para elevar o nível de bem-estar do seu pet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-in fade-in duration-700 delay-700">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-card/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">5-10 minutos</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-muted-foreground">Resultado Instantâneo</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* O que você vai receber */}
    <section className="py-24 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            Tudo Incluído
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O Que Você Vai Descobrir
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma análise profunda e personalizada que vai transformar a vida do seu pet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Diagnóstico */}
          <div className="group animate-in fade-in slide-in-from-left duration-700">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex gap-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-primary/10 rounded-2xl p-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">Diagnóstico Completo (0-100)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Entenda com precisão científica o nível de bem-estar que você proporciona hoje e descubra onde pode evoluir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Identidade */}
          <div className="group animate-in fade-in slide-in-from-right duration-700">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-secondary/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex gap-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-secondary/10 rounded-2xl p-4">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">Sua Identidade de Tutor</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conquiste títulos exclusivos como Lendário 🏆 ou Herói do Lar ⭐ que comprovam sua dedicação e amor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Plano de Ação */}
          <div className="group animate-in fade-in slide-in-from-left duration-700 delay-200">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-accent/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex gap-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-accent/10 rounded-2xl p-4">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">Plano de Ação Personalizado</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Receba um guia prático feito sob medida para a rotina e necessidades específicas do seu melhor amigo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Recordação */}
          <div className="group animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex gap-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative bg-gradient-hero rounded-2xl p-4">
                    <Share2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">Recordação Exclusiva</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crie uma arte única com a <strong>foto do seu pet</strong> emoldurada para compartilhar nas redes sociais! 📸
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    <section className="py-24 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber antes de começar sua jornada
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-2" className="group bg-card/80 backdrop-blur-sm rounded-3xl px-6 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-500 data-[state=open]:shadow-medium data-[state=open]:border-primary/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 group-hover:text-primary transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-xl p-2 group-data-[state=open]:bg-primary/20 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                Quanto tempo leva para fazer o quiz?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 pl-14 leading-relaxed">
              Apenas 5 a 10 minutos! É o tempo de tomar um café enquanto você descobre insights valiosos
              que podem transformar a vida do seu pet. As perguntas são objetivas e você pode pausar e
              voltar quando quiser. Vale cada segundo! ☕
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="group bg-card/80 backdrop-blur-sm rounded-3xl px-6 shadow-soft border border-border/50 hover:shadow-medium hover:border-secondary/20 transition-all duration-500 data-[state=open]:shadow-medium data-[state=open]:border-secondary/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 group-hover:text-secondary transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 rounded-xl p-2 group-data-[state=open]:bg-secondary/20 transition-colors duration-300">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                Funciona para cães e gatos?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 pl-14 leading-relaxed">
              Absolutamente! Nosso quiz foi desenvolvido por veterinários e especialistas em comportamento
              animal para atender tanto cães quanto gatos, de todas as idades - desde filhotes cheios de
              energia até idosos que merecem cuidados especiais. Cada espécie e fase da vida tem suas
              necessidades únicas, e nós cobrimos todas elas! 🏆
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="group bg-card/80 backdrop-blur-sm rounded-3xl px-6 shadow-soft border border-border/50 hover:shadow-medium hover:border-accent/20 transition-all duration-500 data-[state=open]:shadow-medium data-[state=open]:border-accent/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 group-hover:text-accent transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 rounded-xl p-2 group-data-[state=open]:bg-accent/20 transition-colors duration-300">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                O que vou descobrir ao fazer o quiz?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 pl-14 leading-relaxed">
              Você vai receber seu <strong>PetScore oficial (0-100)</strong>, descobrir seu <strong>nível de tutor</strong>
              (de Iniciante a Lendário 🏆), e entender exatamente onde você está acertando e onde pode melhorar.
              No relatório completo, você ganha um <strong>plano de ação personalizado</strong> com dicas práticas
              para elevar o bem-estar do seu pet imediatamente. É como ter um veterinário e comportamentalista
              analisando sua rotina! 💡
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="group bg-card/80 backdrop-blur-sm rounded-3xl px-6 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-500 data-[state=open]:shadow-medium data-[state=open]:border-primary/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 group-hover:text-primary transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-xl p-2 group-data-[state=open]:bg-primary/20 transition-colors duration-300">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                Posso refazer o quiz para ver minha evolução?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 pl-14 leading-relaxed">
              Sim, e nós recomendamos! Muitos tutores refazem o quiz a cada 3 meses para acompanhar sua
              evolução e ver como as mudanças aplicadas estão impactando positivamente a vida do pet.
              É incrível ver seu score subindo e saber que você está fazendo a diferença! 📊✨
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="group bg-card/80 backdrop-blur-sm rounded-3xl px-6 shadow-soft border border-border/50 hover:shadow-medium hover:border-secondary/20 transition-all duration-500 data-[state=open]:shadow-medium data-[state=open]:border-secondary/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 group-hover:text-secondary transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 rounded-xl p-2 group-data-[state=open]:bg-secondary/20 transition-colors duration-300">
                  <Gift className="w-5 h-5 text-secondary" />
                </div>
                Vou receber algo além do resultado?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 pl-14 leading-relaxed">
              Sim! Além do seu score e análise, você ganha acesso a <strong>3 bônus exclusivos</strong>:
              Guia Definitivo de Alimentos (saiba o que pode e não pode), Checklist "Casa Segura" (elimine
              perigos ocultos), e Cronograma de Saúde Preventiva (nunca mais esqueça vacinas e vermífugos).
              E no relatório completo, você ainda cria uma <strong>arte personalizada</strong> com a foto do
              seu pet para compartilhar nas redes! 📸🎨
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="group bg-card/80 backdrop-blur-sm rounded-3xl px-6 shadow-soft border border-border/50 hover:shadow-medium hover:border-accent/20 transition-all duration-500 data-[state=open]:shadow-medium data-[state=open]:border-accent/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 group-hover:text-accent transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 rounded-xl p-2 group-data-[state=open]:bg-accent/20 transition-colors duration-300">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                Por que devo fazer o quiz AGORA?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 pl-14 leading-relaxed">
              Porque cada dia conta na vida do seu pet! Descobrir pontos de melhoria hoje pode prevenir
              problemas de saúde amanhã, fortalecer o vínculo entre vocês e garantir que seu melhor amigo
              viva mais feliz e saudável. É rápido e você pode começar agora mesmo.
              Seu pet merece o melhor, e você merece saber se está dando isso a ele! 🐾💚
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-in fade-in duration-700">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <Button size="lg" onClick={scrollToQuiz} className="relative text-xl px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              🚀 Quero Descobrir Meu PetScore Agora!
            </Button>
          </div>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Sem criar conta
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              5 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-secondary" />
              Resultado na hora
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Bonus Section */}
    <section className="py-24 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            Bônus Exclusivos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            3 Presentes Inclusos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas essenciais para facilitar sua rotina e proteger quem você ama
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 - Guia de Alimentos */}
          <div className="group animate-in fade-in slide-in-from-bottom duration-700">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-3 h-full text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="relative mx-auto w-fit mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-primary/10 rounded-2xl p-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <Utensils className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Guia Definitivo de Alimentos</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Lista exata do que nutre e do que intoxica seu pet, evitando emergências desnecessárias.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Casa Segura */}
          <div className="group animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-secondary/30 transition-all duration-500 group-hover:-translate-y-3 h-full text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="relative mx-auto w-fit mb-6">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-secondary/10 rounded-2xl p-5 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Shield className="w-10 h-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Checklist "Casa Segura"</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Rastreio completo para eliminar armadilhas silenciosas e proteger seu pet de acidentes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Cronograma de Saúde */}
          <div className="group animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-medium hover:border-accent/30 transition-all duration-500 group-hover:-translate-y-3 h-full text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="relative mx-auto w-fit mb-6">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-accent/10 rounded-2xl p-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Calendar className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Cronograma de Saúde</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Nunca mais perca vacina ou vermífugo. Organizador prático para a saúde do seu pet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="mt-12 text-center animate-in fade-in duration-700 delay-500">
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft border border-border/50">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground font-medium">Acesso imediato após o quiz</span>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default Index;