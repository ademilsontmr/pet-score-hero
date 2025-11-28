interface Env {
    LEADS_KV: KVNamespace;
}

/**
 * Gera um ID único para cada resposta/submissão
 * Formato: timestamp + random (ex: 1732800000000_abc123)
 */
function generateResponseId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 10);
    return `${timestamp}_${random}`;
}

export const onRequestPost: PagesFunction<Env> = async (context: any) => {
    try {
        const { request, env } = context;
        const data = await request.json();

        console.log("📥 Dados recebidos:", JSON.stringify(data));

        // Gera um ID único para cada resposta
        // Cada resposta do quiz terá seu próprio ID único como chave no KV
        const responseId = generateResponseId();
        const storageKey = responseId;

        console.log("🔑 Response ID gerado:", responseId);
        console.log("🗝️ Storage Key (chave no KV):", storageKey);

        // Get current date in DD/MM/YYYY format (Brazil Time UTC-3)
        const now = new Date();
        const brazilTime = new Date(now.getTime() - (3 * 60 * 60 * 1000)); // Manual UTC-3 adjustment

        // Prepara dados da resposta (sempre cria um novo registro com ID único)
        const responseData = {
            id: responseId,
            name: data.name || '',
            phone: data.phone || '',
            petName: data.petName || '',
            petGender: data.petGender || '',
            score: data.score !== undefined ? data.score : 0,
            savedAt: brazilTime.toISOString(),
            formattedDate: brazilTime.toLocaleString("pt-BR")
        };

        // Salva no KV com chave = responseId (cada resposta tem sua própria chave única)
        // A chave será no formato: 1732800000000_abc123
        await env.LEADS_KV.put(storageKey, JSON.stringify(responseData));

        console.log("✅ Dados salvos no KV com chave:", storageKey);
        console.log("📊 Dados salvos:", JSON.stringify(responseData));

        return new Response(JSON.stringify({ 
            success: true, 
            responseId: responseId,
            storageKey: storageKey,
            data: responseData
        }), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to save lead", details: err.message }), {
            headers: { "Content-Type": "application/json" },
            status: 500
        });
    }
};
