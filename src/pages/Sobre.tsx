import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Heart, Shield, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect } from "react";

const Sobre = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Sobre Nós | PetScore";
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar
                    </Button>

                    <section className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Sobre o PetScore: A Ciência por Trás do Laço
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            O PetScore não é apenas um quiz. É uma ferramenta de diagnóstico comportamental e de bem-estar desenvolvida por uma equipe multidisciplinar de médicos veterinários, etólogos e especialistas em comportamento animal.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 space-y-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Metodologia Científica</h3>
                            <p className="text-muted-foreground">
                                Baseado nos <strong>5 Domínios do Bem-Estar Animal</strong>, o teste avalia não apenas a ausência de doenças, mas a presença de experiências positivas, nutrição adequada, ambiente enriquecido e interações sociais saudáveis.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 space-y-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                                <Heart className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Foco na Longevidade</h3>
                            <p className="text-muted-foreground">
                                Estudos comprovam que tutores engajados e informados podem aumentar a expectativa de vida de seus pets em até 30%. Nosso objetivo é identificar lacunas silenciosas no cuidado diário antes que se tornem problemas de saúde.
                            </p>
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-foreground">O Que Avaliamos?</h2>
                        <div className="grid gap-4">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Nutrição de Precisão</h4>
                                    <p className="text-muted-foreground">Análise além da marca da ração: frequência, método de oferta e hidratação.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Comportamento e Psicologia</h4>
                                    <p className="text-muted-foreground">Interpretação de sinais de estresse, tédio e ansiedade de separação.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Ambiente e Segurança</h4>
                                    <p className="text-muted-foreground">Gatificação, enriquecimento ambiental e prevenção de acidentes domésticos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg">Saúde Preventiva</h4>
                                    <p className="text-muted-foreground">Protocolos vacinais, controle parasitário e check-ups geriátricos.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 text-center space-y-6">
                        <BookOpen className="w-12 h-12 text-primary mx-auto" />
                        <h2 className="text-3xl font-bold text-foreground">Por que fazer o teste?</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Muitos tutores amam seus pets, mas o amor sozinho não previne doenças. O conhecimento sim. Descubra seu nível real de tutor e receba um mapa para transformar a vida do seu filho de quatro patas.
                        </p>
                        <Button size="lg" onClick={() => navigate("/quiz")} className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                            Começar Avaliação Gratuita
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Sobre;
