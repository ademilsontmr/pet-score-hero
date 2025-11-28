interface Env {
    LEADS_KV: KVNamespace;
}

/**
 * Gera um ID único para cada submissão/resposta
 * Cada resposta do quiz terá seu próprio ID único
 */
function generateSubmissionId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `submission_${timestamp}_${random}`;
}

export const onRequestPost: PagesFunction<Env> = async (context: any) => {
    try {
        const { request, env } = context;
        const data = await request.json();

        console.log("📥 Dados recebidos:", JSON.stringify(data));

        // Gera um ID único para cada submissão/resposta
        // Cada resposta do quiz terá seu próprio ID, mesmo que seja do mesmo usuário
        const submissionId = generateSubmissionId();
        const storageKey = submissionId;

        console.log("🔑 Submission ID gerado:", submissionId);
        console.log("🗝️ Storage Key:", storageKey);

        // Get current date in DD/MM/YYYY format (Brazil Time UTC-3)
        const now = new Date();
        const brazilTime = new Date(now.getTime() - (3 * 60 * 60 * 1000)); // Manual UTC-3 adjustment

        // Prepara dados da submissão (sempre cria um novo registro)
        const submissionData = {
            id: submissionId,
            name: data.name || '',
            phone: data.phone || '',
            petName: data.petName || '',
            petGender: data.petGender || '',
            score: data.score !== undefined ? data.score : 0,
            savedAt: brazilTime.toISOString(),
            formattedDate: brazilTime.toLocaleString("pt-BR")
        };

        // Salva no KV com chave = submissionId (cada resposta tem sua própria chave)
        await env.LEADS_KV.put(storageKey, JSON.stringify(submissionData));

        console.log("✅ Dados salvos no KV com chave:", storageKey);
        console.log("📊 Dados salvos:", JSON.stringify(submissionData));

        return new Response(JSON.stringify({ 
            success: true, 
            submissionId: submissionId,
            storageKey: storageKey,
            data: submissionData
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
