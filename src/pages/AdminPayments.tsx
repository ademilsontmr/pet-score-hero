import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AdminPayments = () => {
  const [pagamentos, setPagamentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPagamentos();
  }, []);

  const fetchPagamentos = async () => {
    setIsLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      if (!sessionData.session) {
        toast({
          title: "Não autenticado",
          description: "Você precisa estar logado para acessar esta página",
          variant: "destructive",
        });
        return;
      }

      const response = await supabase.functions.invoke("get-payments", {
        headers: {
          Authorization: `Bearer ${sessionData.session.access_token}`,
        },
      });

      if (response.error) {
        throw response.error;
      }

      if (response.data?.success) {
        setPagamentos(response.data.data || []);
      }
    } catch (error) {
      console.error("Erro ao buscar pagamentos:", error);
      toast({
        title: "Erro ao buscar pagamentos",
        description: error instanceof Error ? error.message : "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Pagamentos</h1>
          <p className="text-muted-foreground">Gerenciar transações e pagamentos</p>
        </div>
        <Button onClick={fetchPagamentos} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Atualizar"}
        </Button>
      </div>

      <div className="rounded-lg border bg-card">
        {isLoading ? (
          <div className="p-8 text-center text-muted-foreground">
            Carregando pagamentos...
          </div>
        ) : pagamentos.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            Nenhum pagamento encontrado
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Usuário</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagamentos.map((pagamento: any) => (
                <TableRow key={pagamento.id}>
                  <TableCell className="font-medium">{pagamento.id}</TableCell>
                  <TableCell>{pagamento.clients?.name}</TableCell>
                  <TableCell className="font-medium">{pagamento.value || "-"}</TableCell>
                  <TableCell>
                    {pagamento.created_at ? new Date(pagamento.created_at).toLocaleDateString("pt-BR") : "-"}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pagamento.status === "Pagamento Processado" || pagamento.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {pagamento.status === 'pending' ? "Pendente" : "Pago"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AdminPayments;
