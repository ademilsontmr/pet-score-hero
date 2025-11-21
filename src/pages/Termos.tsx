import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect } from "react";

const Termos = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Termos de Uso | PetScore";
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar
                    </Button>

                    <h1 className="text-4xl font-bold text-primary">Termos de Uso</h1>

                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p>Última atualização: {new Date().toLocaleDateString()}</p>

                        <h3>1. Aceitação</h3>
                        <p>
                            Ao acessar e usar o PetScore, você concorda com estes termos. O serviço é destinado a tutores de pets que desejam avaliar seus conhecimentos.
                        </p>

                        <h3>2. O Serviço</h3>
                        <p>
                            Oferecemos um quiz interativo e relatórios personalizados. O resultado é educativo e não substitui aconselhamento veterinário profissional.
                        </p>

                        <h3>3. Pagamentos e Reembolsos</h3>
                        <p>
                            O acesso ao relatório completo é liberado imediatamente após a confirmação do pagamento.
                            Oferecemos garantia de satisfação de 7 dias.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Termos;
