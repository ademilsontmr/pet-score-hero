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
          <Route path="/quiz/:questionNumber" element={<Quiz />} />
          <Route path="/partial-result" element={<PartialResult />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/complete-result" element={<CompleteResult />} />

          {/* Footer Pages */}
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
