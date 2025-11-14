import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  TrendingUp, 
  Award, 
  Clock, 
  Target, 
  CheckCircle2,
  Star,
  Share2,
  Gift,
  Users,
  Zap,
  ChevronDown
} from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const navigate = useNavigate();

  const scrollToQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
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
                <Button
                  size="lg"
                  onClick={scrollToQuiz}
                  className="text-xl px-12 py-8 h-auto shadow-medium hover:shadow-soft transition-all duration-300 hover-scale"
                >
                  🎯 Começar Quiz Grátis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xl px-12 py-8 h-auto"
                >
                  Como Funciona
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30</div>
                  <div className="text-sm text-muted-foreground">Perguntas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Níveis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5-10</div>
                  <div className="text-sm text-muted-foreground">Minutos</div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="rounded-3xl overflow-hidden shadow-medium hover-scale transition-all duration-500">
                <img
                  src={heroImage}
                  alt="Pets felizes juntos"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-medium border-4 border-background">
                <div className="flex items-center gap-3">
                  <div className="bg-accent text-accent-foreground rounded-full p-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">10k+</div>
                    <div className="text-sm text-muted-foreground">Tutores felizes</div>
                  </div>
                </div>
              </div>
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
              Simples, rápido e revelador em apenas 3 passos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto shadow-medium">
                1
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Responda o Quiz</h3>
                <p className="text-muted-foreground">
                  30 perguntas cuidadosamente elaboradas sobre rotina, cuidados, alimentação e amor pelo seu pet
                </p>
              </div>
            </div>

            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto shadow-medium">
                2
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Veja o Preview</h3>
                <p className="text-muted-foreground">
                  Receba um preview emocionante do seu resultado e entenda como você se compara a outros tutores
                </p>
              </div>
            </div>

            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="bg-gradient-hero text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto shadow-medium">
                3
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Desbloqueie Tudo</h3>
                <p className="text-muted-foreground">
                  Por apenas R$19,90, acesse seu score completo, nível oficial, dicas personalizadas e imagem compartilhável
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
              Muito mais do que um simples quiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-medium hover:shadow-soft transition-all duration-300 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex gap-4">
                <div className="bg-primary text-primary-foreground rounded-2xl p-4 shrink-0 h-fit">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">Seu Score Real (0-100)</h3>
                  <p className="text-muted-foreground text-lg">
                    Descubra exatamente onde você está no ranking de tutores dedicados. Compare-se com milhares de outros pais de pet!
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
                  <h3 className="text-2xl font-bold text-foreground">Nível Oficial de Tutor</h3>
                  <p className="text-muted-foreground text-lg">
                    Receba seu título: Lendário 🏆, Herói do Lar ⭐, Nota 10 💚, Esforçado 💪 ou Iniciante 🌱
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
                  <h3 className="text-2xl font-bold text-foreground">Dicas Personalizadas</h3>
                  <p className="text-muted-foreground text-lg">
                    Orientações específicas sobre saúde, alimentação, exercícios, higiene e vínculo emocional com seu pet
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
                  <h3 className="text-2xl font-bold text-foreground">Imagem Compartilhável</h3>
                  <p className="text-muted-foreground text-lg">
                    Imagem linda e profissional para postar no Instagram e WhatsApp mostrando seu nível de tutor! 📸
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">
                  "Me emocionei com o resultado! Descobri que sou Herói do Lar e as dicas me ajudaram muito a melhorar ainda mais. Meu Thor está mais feliz!"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial1} 
                    alt="Juliana com seu cachorro"
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">
                  "Adorei! O quiz é super completo e as perguntas fazem sentido. Compartilhei minha imagem no Instagram e meus amigos adoraram!"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial2} 
                    alt="Carlos com seu gato"
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">
                  "Valeu cada centavo! As dicas personalizadas mudaram minha rotina com a Nina. Agora sei exatamente onde melhorar. Score 92! 🎉"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial3} 
                    alt="Amanda com seu beagle"
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
            <AccordionItem value="item-1" className="bg-card rounded-2xl px-6 shadow-soft border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                O quiz é realmente grátis?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim! Você pode fazer todo o quiz de 30 perguntas gratuitamente e ver um preview do seu resultado. 
                O pagamento de R$19,90 é apenas para desbloquear o score completo, nível oficial, dicas personalizadas 
                e a imagem compartilhável.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-2xl px-6 shadow-soft border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Quanto tempo leva para fazer o quiz?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Entre 5 e 10 minutos! São 30 perguntas rápidas e objetivas sobre seus cuidados com o pet. 
                Você pode pausar e voltar quando quiser.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-2xl px-6 shadow-soft border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                O quiz serve para qualquer tipo de pet?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim! As perguntas foram elaboradas para funcionar tanto com cachorros quanto gatos. 
                Os cuidados básicos de amor, rotina, saúde e alimentação são similares.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-2xl px-6 shadow-soft border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Como funciona o pagamento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Após completar o quiz gratuito, você verá um preview do resultado. Para acessar tudo (score completo, 
                nível, dicas e imagem), basta fazer um pagamento único e seguro de R$19,90. 
                Acesso imediato após a confirmação!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-2xl px-6 shadow-soft border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Posso refazer o quiz?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Claro! Você pode refazer o quiz quando quiser para acompanhar sua evolução como tutor. 
                Muitas pessoas refazem depois de implementar as dicas para ver a melhora no score!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-2xl px-6 shadow-soft border-none">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                As dicas são realmente personalizadas?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim! Baseadas no seu score e nível, você recebe dicas específicas sobre os pontos que pode melhorar. 
                Cada nível tem orientações diferentes, focadas nas necessidades reais do seu resultado.
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
                🎁 Bônus Exclusivo
              </h2>
              <p className="text-xl opacity-95">
                Ao desbloquear seu resultado completo, você também ganha:
              </p>
            </div>
            <div className="p-12 space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Guia de Alimentação Saudável</h3>
                  <p className="text-muted-foreground">
                    Dicas sobre alimentos permitidos, proibidos e porções ideais para o seu pet
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Checklist de Segurança</h3>
                  <p className="text-muted-foreground">
                    Lista completa para tornar sua casa mais segura para o seu melhor amigo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Calendário de Cuidados</h3>
                  <p className="text-muted-foreground">
                    Organize visitas ao veterinário, vacinas, vermifugação e muito mais
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 text-9xl opacity-10">🐾</div>
          <div className="absolute bottom-20 right-20 text-9xl opacity-10">🐾</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5">❤️</div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Seu Pet Merece um Tutor Incrível
          </h2>
          <p className="text-2xl md:text-3xl text-white/95 leading-relaxed">
            Descubra seu nível agora e transforme o cuidado que você oferece! 🐾
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToQuiz}
              className="text-2xl px-16 py-10 h-auto shadow-medium hover:shadow-soft transition-all duration-300 hover-scale"
            >
              🎯 Começar Quiz Grátis Agora
            </Button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5-10 minutos</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>100% Seguro</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-white" />
              <span>10k+ Tutores Satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="text-3xl font-bold">Pet Score 🐾</div>
          <p className="text-background/70">
            O Quiz Oficial dos Pais de Pet
          </p>
          <div className="pt-8 text-sm text-background/60">
            © 2024 Pet Score. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
