import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const scrollToQuiz = () => {
        navigate("/quiz");
    };

    const scrollToSection = (id: string) => {
        // If we are on the home page, scroll to section
        if (window.location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If not, navigate to home and then scroll (this might need more complex handling, 
            // but for now let's just navigate to home with a hash)
            navigate(`/#${id}`);
            // Note: React Router doesn't handle hash scrolling automatically on navigation 
            // without extra setup, but let's keep it simple for now.
            // A better approach for cross-page anchor linking often involves a useEffect hook in the destination page.
            // For this specific request, I'll just navigate to root for "Como Funciona" if not on root.
        }
    };

    return (
        <footer className="bg-background pt-20 pb-10 px-4 border-t border-border/40">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                            <span>🐾</span>
                            <span>PetScore</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            O quiz mais divertido e revelador para tutores apaixonados. Descubra seu nível de dedicação em minutos.
                        </p>
                    </div>

                    {/* Blog */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-foreground text-lg">Blog</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link to="/blog/caes-idosos" className="hover:text-primary transition-colors">Como cuidar de cães idosos</Link></li>
                            <li><Link to="/blog/alimentacao-natural" className="hover:text-primary transition-colors">Alimentação natural vs Ração</Link></li>
                            <li><Link to="/blog/linguagem-canina" className="hover:text-primary transition-colors">Entendendo a linguagem canina</Link></li>
                            <li><Link to="/blog/gatos-felizes" className="hover:text-primary transition-colors">Dicas para gatos felizes</Link></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-foreground text-lg">Links Rápidos</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><button onClick={scrollToQuiz} className="hover:text-primary transition-colors text-left">Fazer o Teste</button></li>
                            <li><button onClick={() => scrollToSection('como-funciona')} className="hover:text-primary transition-colors text-left">Como Funciona</button></li>
                            <li><Link to="/" className="hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
                            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre o Teste</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-foreground text-lg">Legal</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                            <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 text-center text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Pet Score. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
