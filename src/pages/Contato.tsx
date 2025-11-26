import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect } from "react";

const Contato = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Fale Conosco | PetScore";
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar
                    </Button>

                    <h1 className="text-4xl font-bold text-primary">Fale Conosco</h1>
                    <p className="text-xl text-muted-foreground">
                        Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
                    </p>

                    <div className="grid md:grid-cols-1 gap-6 max-w-md">
                        <Card className="p-6 space-y-4">
                            <Mail className="w-10 h-10 text-primary" />
                            <h3 className="text-xl font-bold">E-mail</h3>
                            <p className="text-muted-foreground">
                                Envie sua mensagem para nossa equipe de suporte.
                            </p>
                            <a href="mailto:contato@petscore.com.br" className="text-primary font-semibold hover:underline">
                                contato@petscore.com.br
                            </a>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contato;
