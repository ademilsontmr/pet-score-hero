# PetScore Checkout Worker

Cloudflare Worker para gerenciar pagamentos via Asaas para o PetScore.

## Configuração

### 1. KV Namespace

Crie um namespace KV no Cloudflare Dashboard e atualize o `wrangler.toml` com o ID real:

```toml
[[kv_namespaces]]
binding = "PAGAMENTOS_KV"
id = "seu-kv-namespace-id-aqui"
```

### 2. Variáveis de Ambiente

Configure as variáveis de ambiente:

- `ASAAS_BASE_URL`: URL base da API do Asaas (padrão: `https://api.asaas.com/v3`)
- `ASAAS_API_KEY`: Chave de API do Asaas (deve ser configurada como secret)

Para configurar o secret:

```bash
wrangler secret put ASAAS_API_KEY
```

### 3. Deploy

```bash
cd workers/asaas-checkout
wrangler deploy
```

## Endpoints

### POST /criar-pagamento

Cria um novo pagamento PIX no Asaas.

**Request:**
```json
{
  "name": "João Silva",
  "whatsapp": "5511999999999",
  "value": 19.90
}
```

**Response:**
```json
{
  "id": "pagamento_abc123",
  "status": "PENDING",
  "pixCode": "00020126580014BR.GOV.BCB.PIX...",
  "redirectUrl": "/pagamento/pagamento_abc123"
}
```

### GET /status-pagamento?id=pagamento_xxx

Consulta o status de um pagamento.

**Response:**
```json
{
  "id": "pagamento_abc123",
  "status": "CONFIRMED",
  "pixCode": "00020126580014BR.GOV.BCB.PIX..."
}
```

**Status possíveis:**
- `PENDING`: Pagamento pendente
- `CONFIRMED`: Pagamento confirmado
- `FAILED`: Pagamento cancelado ou reembolsado

### POST /asaas/webhook

Endpoint para receber webhooks do Asaas e atualizar o status dos pagamentos automaticamente.

**Nota:** Configure este endpoint na URL de webhook do Asaas no dashboard.

## Estrutura de Dados no KV

### Chave: `pagamento_xxxxxx`
```json
{
  "asaasPaymentId": "pay_123456789",
  "status": "PENDING",
  "pixCode": "00020126580014BR.GOV.BCB.PIX...",
  "customerName": "João Silva",
  "whatsapp": "5511999999999",
  "product": "petscore",
  "createdAt": "2025-11-26T10:00:00.000Z",
  "updatedAt": "2025-11-26T10:00:00.000Z"
}
```

### Chave: `asaas_${asaasPaymentId}`
Valor: ID interno do pagamento (ex: `pagamento_abc123`)

## Desenvolvimento Local

```bash
wrangler dev
```

## CORS

O Worker está configurado para aceitar requisições de qualquer origem. Em produção, considere restringir o `Access-Control-Allow-Origin` para o domínio específico.
