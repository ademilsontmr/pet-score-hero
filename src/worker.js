export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Extract parameters
        const rid = url.searchParams.get("rid");
        const transaction_nsu = url.searchParams.get("transaction_nsu");
        const external_order_nsu = url.searchParams.get("external_order_nsu");
        const slug = url.searchParams.get("slug");

        // 1) Validate required parameters
        if (!transaction_nsu || !slug) {
            return new Response("Missing required parameters: transaction_nsu or slug", { status: 400 });
        }

        // 2) Prepare validation request
        // Using environment variables for configuration
        const validateUrl = env.INFINITE_VALIDATE_URL || "https://api.infinitepay.io/v1/transactions";
        const handle = env.INFINITE_HANDLE || "vhq1376-petscore"; // Default fallback if not set

        // Construct the validation URL or body
        // The user asked to "Fazer fetch para essa URL com método POST e body em JSON"
        // Usually validation might be GET /transactions/{id} or POST /validate
        // I will follow the instruction: POST with body JSON.

        // Assuming the body structure based on typical webhooks/validation or user intent
        // If the user didn't specify the body structure, I'll send the received params.
        const payload = {
            transaction_nsu,
            external_order_nsu,
            slug,
            rid
        };

        try {
            const response = await fetch(validateUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": env.INFINITE_API_KEY ? `Bearer ${env.INFINITE_API_KEY}` : undefined
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            // 4) Interpret response
            // Consider paid if data.paid === true OR data.status === "paid" OR data.status === "approved"
            const isPaid = data.paid === true || data.status === "paid" || data.status === "approved";

            // 5) & 6) Redirect
            if (isPaid) {
                // Redirect to success
                // Using the domain provided in instructions: petscore.com.br
                return Response.redirect(`https://petscore.com.br/complete-result?rid=${rid}`, 302);
            } else {
                // Redirect to pending/failure
                return Response.redirect(`https://petscore.com.br/pagamento-pendente`, 302);
            }

        } catch (error) {
            console.error("Validation error:", error);
            // In case of error, maybe redirect to pending or show error
            return Response.redirect(`https://petscore.com.br/pagamento-pendente`, 302);
        }
    }
};
