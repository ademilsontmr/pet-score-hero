interface Env {
    LEADS_KV: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async (context: any) => {
    try {
        const { request, env } = context;
        const url = new URL(request.url);
        const responseId = url.searchParams.get("id");

        if (!responseId) {
            return new Response(JSON.stringify({ error: "ID é obrigatório" }), {
                headers: { "Content-Type": "application/json" },
                status: 400
            });
        }

        // Busca dados do KV usando o responseId como chave
        const responseData = await env.LEADS_KV.get(responseId, 'json');

        if (!responseData) {
            return new Response(JSON.stringify({ error: "Resposta não encontrada" }), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new Response(JSON.stringify(responseData), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: "Erro ao buscar resposta", details: err.message }), {
            headers: { "Content-Type": "application/json" },
            status: 500
        });
    }
};



