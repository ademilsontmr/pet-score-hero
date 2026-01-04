import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import PartialResult from "./pages/PartialResult";
import Payment from "./pages/Payment";
import CompleteResult from "./pages/CompleteResult";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminClients from "./pages/AdminClients";
import AdminPayments from "./pages/AdminPayments";
import AdminPets from "./pages/AdminPets";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resultado-parcial" element={<PartialResult />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/resultado-completo/:responseId" element={<CompleteResult />} />
          <Route path="/resultado-completo" element={<CompleteResult />} />

          {/* Footer Pages */}
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="usuarios" element={<AdminClients />} />
            <Route path="pagamentos" element={<AdminPayments />} />
            <Route path="pets" element={<AdminPets />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
