interface Env {
    LEADS_KV: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const { request, env } = context;
        const data = await request.json();

        // Get current date in DD/MM/YYYY format (Brazil Time UTC-3)
        const now = new Date();
        const brazilTime = new Date(now.getTime() - (3 * 60 * 60 * 1000)); // Manual UTC-3 adjustment

        const day = String(brazilTime.getUTCDate()).padStart(2, '0');
        const month = String(brazilTime.getUTCMonth() + 1).padStart(2, '0');
        const year = brazilTime.getUTCFullYear();

        const dateKey = `${day}/${month}/${year}`;
        const storageKey = `leads:${dateKey}`;

        // Get existing leads for this day
        let currentLeads = [];
        try {
            const stored = await env.LEADS_KV.get(storageKey, 'json');
            if (stored && Array.isArray(stored)) {
                currentLeads = stored;
            }
        } catch (e) {
            // New day or error, start with empty array
        }

        // Add metadata to the new lead
        const newLead = {
            ...data,
            savedAt: brazilTime.toISOString(),
            formattedDate: brazilTime.toLocaleString("pt-BR")
        };

        // Append new lead
        currentLeads.push(newLead);

        // Save back to KV
        await env.LEADS_KV.put(storageKey, JSON.stringify(currentLeads));

        return new Response(JSON.stringify({ success: true, count: currentLeads.length }), {
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
