export interface Env {
  // Adicione suas variáveis de ambiente aqui
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Rotas do checkout
    if (url.pathname === "/checkout" && request.method === "POST") {
      // Implementar lógica de checkout aqui
      return new Response(
        JSON.stringify({ message: "Checkout endpoint - implementar lógica" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (url.pathname.startsWith("/status/") && request.method === "GET") {
      // Implementar consulta de status aqui
      const paymentId = url.pathname.replace("/status/", "");
      return new Response(
        JSON.stringify({ message: "Status endpoint - implementar lógica", paymentId }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
