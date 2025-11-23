import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PagamentoPendente = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-warm py-12 px-4 flex items-center justify-center">
            <Card className="max-w-md w-full p-8 text-center shadow-medium">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                    <span className="text-3xl">⏳</span>
                </div>

                <h1 className="text-2xl font-bold text-foreground mb-4">
                    Pagamento em Processamento
                </h1>

                <p className="text-muted-foreground mb-8">
                    Ainda não recebemos a confirmação do seu pagamento. Pode levar alguns instantes.
                </p>

                <div className="space-y-4">
                    <Button
                        onClick={() => window.location.reload()}
                        className="w-full bg-primary hover:bg-primary/90"
                    >
                        Verificar Novamente
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => navigate("/payment")}
                        className="w-full"
                    >
                        Voltar para Pagamento
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default PagamentoPendente;
