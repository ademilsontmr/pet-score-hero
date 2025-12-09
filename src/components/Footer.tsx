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
                        Faça o quiz gratuito e descubra como você pode melhorar ainda mais a vida do seu melhor amigo.
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

            {/* Main Footer */}
            <div className="bg-card/50 backdrop-blur-sm pt-16 pb-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                        {/* Brand - Takes more space */}
                        <div className="md:col-span-5 space-y-5">
                            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                                <span className="text-3xl">🐾</span>
                                <span>PetScore</span>
                            </Link>
                            <p className="text-muted-foreground leading-relaxed max-w-sm">
                                O quiz mais divertido e revelador para tutores apaixonados. Descubra seu nível de dedicação e transforme a vida do seu pet.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Feito com</span>
                                <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
                                <span>para tutores de pets</span>
                            </div>
                        </div>

                        {/* Links Rápidos */}
                        <div className="md:col-span-3 space-y-5">
                            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                                Links Rápidos
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <button 
                                        onClick={scrollToQuiz} 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Fazer o Teste
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('como-funciona')} 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Como Funciona
                                    </button>
                                </li>
                                <li>
                                    <Link 
                                        to="/blog" 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/sobre" 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Sobre o Teste
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="md:col-span-4 space-y-5">
                            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                                Legal & Suporte
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link 
                                        to="/privacidade" 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Política de Privacidade
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/termos" 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Termos de Uso
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contato" 
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-border/30">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                            <p>© {new Date().getFullYear()} Pet Score. Todos os direitos reservados.</p>
                            <p className="flex items-center gap-1">
                                🐶 Cuidando de quem cuida 🐱
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
