import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect } from "react";

const Blog = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Blog | PetScore";
    }, []);

    const articles = [
        {
            slug: "caes-idosos",
            title: "Como Cuidar de Cães Idosos: O Guia Completo do Veterinário",
            description: "Descubra os cuidados essenciais para garantir qualidade de vida na melhor idade do seu pet."
        },
        {
            slug: "alimentacao-natural",
            title: "Alimentação Natural vs Ração: O Veredito do Especialista",
            description: "Entenda os prós e contras de cada dieta e escolha a melhor opção para o seu amigo."
        },
        {
            slug: "linguagem-canina",
            title: "Entendendo a Linguagem Canina: O Que Seu Cão Realmente Diz",
            description: "Aprenda a ler os sinais corporais do seu cachorro e melhore sua comunicação."
        },
        {
            slug: "gatos-felizes",
            title: "Gatos Felizes: O Segredo da Gatificação",
            description: "Como adaptar sua casa para satisfazer os instintos naturais do seu felino."
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-12">
                    <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar
                    </Button>

                    <section className="space-y-6 text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Blog PetScore
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Dicas de especialistas, guias completos e curiosidades para você se tornar o melhor tutor do mundo.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6">
                        {articles.map((article) => (
                            <Link key={article.slug} to={`/blog/${article.slug}`}>
                                <Card className="h-full p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50 group">
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {article.description}
                                    </p>
                                    <div className="mt-4 text-primary font-medium text-sm flex items-center gap-1">
                                        Ler artigo completo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
