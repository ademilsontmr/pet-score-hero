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
    const {
      value = "BRL",
      client_id,
      name,
      phone,
      email,
      cpf,
      petName,
      score,
      quizResultId,
    } = requestData;

    if (!client_id) {
      return new Response(JSON.stringify({ error: "client_id ausente na requisição" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const { data: paymentData, error: insertError } = await supabase
      .from("payments")
      .insert({
        value: 1990,
        status: 'pending',
        client_id,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Erro ao criar pagamento:", insertError);
      throw insertError;
    }

    const paymentId = paymentData.id;
    console.log(`✅ Pagamento criado para o cliente: ${user.id}`);
    
    if (!abacatePayApiKey) {
      console.error("❌ VITE_ABACATEPAY_API_KEY não está configurada nas variáveis de ambiente");
      throw new Error("Token da API AbacatePay não configurado. Configure VITE_ABACATEPAY_API_KEY nas variáveis de ambiente do Supabase.");
    }

    const abacateResponse = await fetch(`${abacatePayApiUrl}/billing/create`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${abacatePayApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        frequency: "ONE_TIME",
        methods: ["PIX"],
        products: [
          {
            externalId: `petscore-1`,
            name: "PetScore - Relatório Completo",
            description: `Relatório completo do quiz PetScore`,
            quantity: 1,
            price: 1990,
          },
        ],
        returnUrl: `${req.headers.get("origin") || "https://petscore.com.br"}/resultado-completo?id=${quizResultId}`,
        completionUrl: `${req.headers.get("origin") || "https://petscore.com.br"}/resultado-completo?id=${quizResultId}`,
        customer: {
          name: name,
          cellphone: phone,
          email: email,
          taxId: cpf,
        },
        externalId: quizResultId,
        metadata: {
          quizResultId,
          petName,
          score,
        },
      }),
    });

    if (!abacateResponse.ok) {
      const errorText = await abacateResponse.text();
      throw new Error(`Erro ao criar billing no AbacatePay: ${errorText}`);
    }

    const billingResponse = await abacateResponse.json();

    const billingId = billingResponse?.data?.id;
    const externalId = billingResponse?.data?.externalId;

    if (!billingId) {
      throw new Error("billingId não retornado pelo AbacatePay");
    }


    const { error: updateError } = await supabase
      .from("payments")
      .update({
        external_id: billingId,
      })
      .eq("id", paymentId);

    if (updateError) {
      console.error("Erro ao atualizar external_id do pagamento:", updateError);
    } else {
      console.log(`✅ External ID armazenado: ${billingId}`);
    }

    const qrCodeResponse = await fetch(`${abacatePayApiUrl}/pixQrCode/create`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${abacatePayApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1990,
        billingId,
        expiresIn: 300,
      }),
    });

    if (!qrCodeResponse.ok) {
      const errorText = await qrCodeResponse.text();
      throw new Error(`Erro ao criar QR Code PIX: ${errorText}`);
    }

    const qrCodeData = await qrCodeResponse.json();


    return new Response(
      JSON.stringify({
        success: true,
        message: "Pagamento criado com sucesso",
        payment: paymentData,
        billingId,
        qrCodeData
      }),
      {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );


  } catch (err) {
    console.error("Erro na função create-payment:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor", details: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});