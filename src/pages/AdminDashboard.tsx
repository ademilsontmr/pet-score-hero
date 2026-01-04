import { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, CreditCard, Dog, LogOut, Menu, X } from "lucide-react";

interface DashboardStats {
  totalPets: number;
  totalClients: number;
  totalPayments: number;
  totalRevenue: number;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalPets: 0,
    totalClients: 0,
    totalPayments: 0,
    totalRevenue: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const isDashboard = location.pathname === "/admin" || location.pathname === "/admin/dashboard";

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
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

      const headers = {
        Authorization: `Bearer ${sessionData.session.access_token}`,
      };

      // Buscar dados de pets
      const petsResponse = await supabase.functions.invoke("get-pets", {
        headers,
      });

      // Buscar dados de clientes
      const clientsResponse = await supabase.functions.invoke("get-clients", {
        headers,
      });

      // Buscar dados de pagamentos
      const paymentsResponse = await supabase.functions.invoke("get-payments", {
        headers,
      });

      let totalPets = 0;
      let totalClients = 0;
      let totalPayments = 0;
      let totalRevenue = 0;

      if (petsResponse.data?.success) {
        const pets = petsResponse.data.data || [];
        totalPets = Array.isArray(pets) ? pets.length : 0;
      }

      if (clientsResponse.data?.success) {
        const clients = clientsResponse.data.data || [];
        totalClients = Array.isArray(clients) ? clients.length : 0;
      }

      if (paymentsResponse.data?.success) {
        const payments = paymentsResponse.data.data || [];
        if (Array.isArray(payments)) {
          totalPayments = payments.length;
          totalRevenue = payments.reduce(
            (sum: number, payment: any) => sum + (parseFloat(payment.value) || 0),
            0
          );
        }
      }

      setStats({
        totalPets,
        totalClients,
        totalPayments,
        totalRevenue,
      });
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
      toast({
        title: "Erro ao carregar dashboard",
        description: error instanceof Error ? error.message : "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const StatCard = ({
    title,
    value,
    description,
    isLoading,
    isCurrency = false,
  }: {
    title: string;
    value: number | string;
    description: string;
    isLoading: boolean;
    isCurrency?: boolean;
  }) => (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-24" />
        ) : (
          <div className="flex flex-col gap-1">
            <div className="text-3xl font-bold">
              {isCurrency ? `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : value}
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-50 w-64 h-full md:h-auto border-r bg-card p-6 flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
          sidebarOpen ? "translate-x-0 md:w-64" : "-translate-x-full md:w-0"
        }`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">Admin</h1>
          <p className="text-sm text-muted-foreground">Painel Administrativo</p>
        </div>

        <nav className="flex-1 space-y-2">
          <button
            onClick={() => {
              navigate("/admin/dashboard");
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-md bg-accent hover:bg-accent/80 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => {
              navigate("/admin/usuarios");
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Clientes</span>
          </button>
          <button
            onClick={() => {
              navigate("/admin/pets");
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            <Dog className="w-5 h-5" />
            <span>Pets</span>
          </button>
          <button
            onClick={() => {
              navigate("/admin/pagamentos");
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            <span>Pagamentos</span>
          </button>
        </nav>

        <Button
          onClick={() => {
            supabase.auth.signOut();
            navigate("/admin/login");
          }}
          variant="ghost"
          className="w-full justify-start"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sair
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="sticky top-0 z-30 bg-card border-b p-4 flex items-center">
          <Button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            variant="ghost"
            size="sm"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
        <div className="p-8">
          {isDashboard ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                  Visão geral de pets, usuários e pagamentos
                </p>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total de Pets"
                  value={stats.totalPets}
                  description="Pets registrados no sistema"
                  isLoading={isLoading}
                />
                <StatCard
                  title="Total de Usuários"
                  value={stats.totalClients}
                  description="Clientes cadastrados"
                  isLoading={isLoading}
                />
                <StatCard
                  title="Total de Pagamentos"
                  value={stats.totalPayments}
                  description="Transações processadas"
                  isLoading={isLoading}
                />
                <StatCard
                  title="Receita Total"
                  value={stats.totalRevenue}
                  description="Valor total recebido"
                  isLoading={isLoading}
                  isCurrency
                />
              </div>

                      <Card>
                <CardHeader>
                  <CardTitle>Resumo Geral</CardTitle>
                  <CardDescription>
                    Estatísticas gerais do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Média de pets por usuário:</span>
                        <span className="font-medium">
                          {stats.totalClients > 0
                            ? (stats.totalPets / stats.totalClients).toFixed(2)
                            : "0"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ticket médio:</span>
                        <span className="font-medium">
                          R${" "}
                          {stats.totalPayments > 0
                            ? (stats.totalRevenue / stats.totalPayments).toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })
                            : "0,00"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Taxa de conversão:</span>
                        <span className="font-medium">
                          {stats.totalClients > 0
                            ? ((stats.totalPayments / stats.totalClients) * 100).toFixed(2)
                            : "0"}
                          %
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
