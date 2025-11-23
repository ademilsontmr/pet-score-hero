interface Env {
    INFINITEPAY_API_KEY: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const { request, env } = context;
    const url = new URL(request.url);

    // 1. Receber parâmetros
    // Tenta pegar 'rid' direto ou de 'metadata[rid]' (caso a InfinitePay retorne assim)
    let rid = url.searchParams.get("rid") || url.searchParams.get("metadata[rid]");
    const transaction_nsu = url.searchParams.get("transaction_nsu");
    const status = url.searchParams.get("status");

    // Logging para debug (aparece no dashboard da Cloudflare)
    console.log(`[Payment Webhook] Params: rid=${rid}, nsu=${transaction_nsu}, status=${status}`);

    if (!rid) {
        return new Response("Missing 'rid' parameter. URL: " + request.url, { status: 400 });
    }

    // 2. Validar na API da InfinitePay
    let isApproved = false;

    // Se tivermos a chave de API, fazemos a validação real.
    if (env.INFINITEPAY_API_KEY && transaction_nsu) {
        try {
            const response = await fetch(`https://api.infinitepay.io/v1/transactions/${transaction_nsu}`, {
                headers: {
                    "Authorization": `Bearer ${env.INFINITEPAY_API_KEY}`
                }
            });

            if (response.ok) {
                const data: any = await response.json();
                if (data.status === "approved" || data.status === "paid") {
                    isApproved = true;
                }
            }
        } catch (e) {
            console.error("Erro na validação InfinitePay:", e);
        }
    } else {
        // Fallback: se veio o NSU ou status de sucesso, assumimos que pagou.
        if (transaction_nsu || status === "approved" || status === "paid") {
            isApproved = true;
        }
    }

    // 3. Redirecionamento
    // Força o domínio de produção se possível, ou usa a origem da requisição
    // Se estiver rodando em *.pages.dev, usa a origem. Se for custom domain, usa ele.
    const targetHost = "https://petscore.com.br"; // Preferência pelo domínio final
    const redirectBase = url.hostname.includes("localhost") ? url.origin : targetHost;

    if (isApproved) {
        return Response.redirect(`${redirectBase}/complete-result?rid=${rid}`, 302);
    } else {
        return Response.redirect(`${redirectBase}/pagamento-pendente?rid=${rid}`, 302);
    }
};
