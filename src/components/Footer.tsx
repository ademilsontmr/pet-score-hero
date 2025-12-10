import { Link, useNavigate } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const navigate = useNavigate();

    const scrollToQuiz = () => {
        navigate("/quiz");
    };

    const scrollToSection = (id: string) => {
        if (window.location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <footer className="relative overflow-hidden">
            {/* CTA Section */}
            <div className="bg-gradient-hero py-16 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Pronto para descobrir seu Pet Score?
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Responda o quiz e descubra como você pode melhorar ainda mais a vida do seu melhor amigo.
                    </p>
                    <Button 
                        onClick={scrollToQuiz}
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        Começar Agora
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* Main Footer - Professional Layout */}
            <div className="bg-gradient-to-b from-muted/30 to-muted/50 pt-16 pb-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <Link to="/" className="inline-flex items-center gap-2.5 group">
                                <span className="text-3xl transition-transform group-hover:scale-110 duration-300">🐾</span>
                                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                    PetScore
                                </span>
                            </Link>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                O quiz mais divertido e revelador para tutores apaixonados. Descubra seu nível de dedicação e transforme a vida do seu pet.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card/50 px-4 py-2 rounded-full border border-border/50">
                                <span>Feito com</span>
                                <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
                                <span>para tutores de pets</span>
                            </div>
                        </div>

                        {/* Links Rápidos */}
                        <div className="space-y-5">
                            <h3 className="font-bold text-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                                Links Rápidos
                            </h3>
                            <ul className="space-y-3.5">
                                <li>
                                    <button 
                                        onClick={scrollToQuiz} 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 text-left flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Fazer o Teste
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('como-funciona')} 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 text-left flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Como Funciona
                                    </button>
                                </li>
                                <li>
                                    <Link 
                                        to="/blog" 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/sobre" 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Sobre o Teste
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal & Suporte */}
                        <div className="space-y-5">
                            <h3 className="font-bold text-foreground text-xs uppercase tracking-widest flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                                Legal & Suporte
                            </h3>
                            <ul className="space-y-3.5">
                                <li>
                                    <Link 
                                        to="/privacidade" 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Política de Privacidade
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/termos" 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Termos de Uso
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contato" 
                                        className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2.5 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-200" />
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-border/40">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-muted-foreground">
                                © {new Date().getFullYear()} Pet Score. Todos os direitos reservados.
                            </p>
                            <p className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>🐶</span>
                                <span className="font-medium">Cuidando de quem cuida</span>
                                <span>🐱</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
