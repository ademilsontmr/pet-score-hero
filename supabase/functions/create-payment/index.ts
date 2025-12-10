import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentRequest {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  petName: string;
  score: number;
  quizResultId?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const abacatePayApiKey = Deno.env.get("ABACATEPAY_API_KEY");
    if (!abacatePayApiKey) {
      console.error("ABACATEPAY_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Payment service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: PaymentRequest = await req.json();
    console.log("Payment request received:", { ...body, cpf: "***" });

    // Validate required fields
    if (!body.name || !body.phone || !body.email || !body.cpf || !body.petName || body.score === undefined) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create or update quiz result in Supabase
    let quizResultId = body.quizResultId;
    
    if (quizResultId) {
      // Update existing record
      const { error: updateError } = await supabase
        .from("quiz_results")
        .update({
          name: body.name,
          phone: body.phone,
          email: body.email,
          cpf: body.cpf,
          pet_name: body.petName,
        })
        .eq("id", quizResultId);

      if (updateError) {
        console.error("Error updating quiz result:", updateError);
      }
    } else {
      // Insert new record
      const { data: insertData, error: insertError } = await supabase
        .from("quiz_results")
        .insert({
          name: body.name,
          phone: body.phone,
          email: body.email,
          cpf: body.cpf,
          pet_name: body.petName,
          score: body.score,
          payment_status: "pending",
        })
        .select("id")
        .single();

      if (insertError) {
        console.error("Error inserting quiz result:", insertError);
        return new Response(
          JSON.stringify({ error: "Failed to save quiz result" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      quizResultId = insertData.id;
    }

    console.log("Quiz result ID:", quizResultId);

    // Call AbacatePay API to create billing
    const abacateResponse = await fetch("https://api.abacatepay.com/v1/billing/create", {
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
            externalId: `petscore-${quizResultId}`,
            name: "PetScore - Relatório Completo",
            description: `Relatório completo do quiz PetScore para ${body.petName}`,
            quantity: 1,
            price: 1990, // R$ 19,90 in cents
          },
        ],
        returnUrl: `${req.headers.get("origin") || "https://petscore.com.br"}/resultado-completo?id=${quizResultId}`,
        completionUrl: `${req.headers.get("origin") || "https://petscore.com.br"}/resultado-completo?id=${quizResultId}`,
        customer: {
          name: body.name,
          cellphone: body.phone,
          email: body.email,
          taxId: body.cpf,
        },
        externalId: quizResultId,
        metadata: {
          quizResultId: quizResultId,
          petName: body.petName,
          score: body.score,
        },
      }),
    });

    const abacateData = await abacateResponse.json();
    console.log("AbacatePay response:", abacateData);

    if (!abacateResponse.ok) {
      console.error("AbacatePay error:", abacateData);
      return new Response(
        JSON.stringify({ error: "Failed to create payment", details: abacateData }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update quiz result with payment ID
    if (abacateData.data?.id) {
      await supabase
        .from("quiz_results")
        .update({ payment_id: abacateData.data.id })
        .eq("id", quizResultId);
    }

    return new Response(
      JSON.stringify({
        success: true,
        quizResultId,
        paymentUrl: abacateData.data?.url,
        paymentId: abacateData.data?.id,
        billingData: abacateData.data,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in create-payment:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: "Internal server error", details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
