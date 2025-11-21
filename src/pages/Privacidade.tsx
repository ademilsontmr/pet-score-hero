import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect } from "react";

const Privacidade = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Política de Privacidade | PetScore";
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar
                    </Button>

                    <h1 className="text-4xl font-bold text-primary">Política de Privacidade</h1>

                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p>Última atualização: {new Date().toLocaleDateString()}</p>

                        <h3>1. Coleta de Dados</h3>
                        <p>
                            Coletamos apenas as informações necessárias para gerar seu score e personalizar sua experiência.
                            Seus dados de pagamento são processados de forma segura por nossos parceiros e não são armazenados em nossos servidores.
                        </p>

                        <h3>2. Uso das Informações</h3>
                        <p>
                            Utilizamos suas respostas do quiz para calcular seu nível de tutor e gerar dicas personalizadas.
                            Não compartilhamos seus dados pessoais com terceiros para fins de marketing sem seu consentimento.
                        </p>

                        <h3>3. Segurança</h3>
                        <p>
                            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacidade;
