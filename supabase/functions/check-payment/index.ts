import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const abacatePayApiUrl = Deno.env.get("VITE_ABACATEPAY_API_URL");
const abacatePayApiKey = Deno.env.get("VITE_ABACATEPAY_API_KEY");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Método não permitido" }), {
        status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Token de autorização ausente" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Variáveis de ambiente do Supabase não configuradas");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const requestData = await req.json();
    const { qrCodeId } = requestData;

    if (!qrCodeId) {
      return new Response(JSON.stringify({ error: "qrCodeId ausente na requisição" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    if (!abacatePayApiKey) {
      console.error("❌ VITE_ABACATEPAY_API_KEY não está configurada nas variáveis de ambiente");
      throw new Error("Token da API AbacatePay não configurado. Configure VITE_ABACATEPAY_API_KEY nas variáveis de ambiente do Supabase.");
    }

    // Faz a requisição para a API do AbacatePay para verificar o status
    const checkResponse = await fetch(`${abacatePayApiUrl}/pixQrCode/check?id=${qrCodeId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${abacatePayApiKey}`,
      },
    });

    if (!checkResponse.ok) {
      const errorText = await checkResponse.text();
      console.error(`Erro ao verificar status no AbacatePay: ${errorText}`);
      throw new Error(`Erro ao verificar status do pagamento: ${errorText}`);
    }

    const statusData = await checkResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        status: statusData.status,
        data: statusData,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (err) {
    console.error("Erro na função check-payment:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor", details: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
