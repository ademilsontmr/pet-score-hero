# Worker Checkout

Este Worker é responsável pela lógica de negócio do checkout.

## Deploy Separado

Este Worker deve ser deployado **separadamente** do Cloudflare Pages, usando o Wrangler CLI.

### Pré-requisitos

```bash
npm install -g wrangler
```

### Deploy

```bash
cd workers/asaas-checkout
wrangler deploy
```

## Endpoints

- `POST /checkout` - Cria um novo checkout (implementar lógica)
- `GET /status/:paymentId` - Consulta o status de um pagamento (implementar lógica)

## Nota

⚠️ **IMPORTANTE**: O Cloudflare Pages não deve fazer deploy deste Worker. Ele deve ser deployado separadamente via Wrangler CLI.
