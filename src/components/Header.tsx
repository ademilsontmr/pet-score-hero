import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <header className="w-full py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between relative">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
                    <span>🐾</span>
                    <span>PetScore</span>
                </Link>

                {(isHomePage || location.pathname.startsWith("/blog")) && (
                    <nav className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button onClick={() => {
                            if (isHomePage) {
                                document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                navigate("/#como-funciona");
                            }
                        }} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                            Como Funciona
                        </button>
                        <Link to="/blog" className={`text-muted-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/blog' ? 'text-primary' : ''}`}>Blog</Link>
                    </nav>
                )}

                <div className="flex items-center gap-4">
                    <Button onClick={() => navigate("/quiz")} size="sm" className="hidden md:flex px-6">
                        Fazer Quiz
                    </Button>
                    <Button onClick={() => navigate("/quiz")} size="sm" className="md:hidden">
                        Fazer Quiz
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
