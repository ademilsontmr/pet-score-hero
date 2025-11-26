# Instruções de Deploy

Este projeto tem duas partes que precisam ser deployadas separadamente:

## 1. Cloudflare Pages (Front-end)

O front-end React/Vite é deployado automaticamente via Cloudflare Pages quando você faz push para o repositório.

### Configuração no Cloudflare Pages:

- **Framework preset**: Vite (ou Static)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (raiz do projeto)

⚠️ **IMPORTANTE**: O Cloudflare Pages **NÃO** deve tentar fazer deploy do Worker. Se isso acontecer, verifique as configurações de build no painel.

## 2. Cloudflare Worker (Checkout)

O Worker do checkout deve ser deployado **separadamente** via Wrangler CLI.

### Primeira vez:

```bash
# Instalar Wrangler globalmente (se ainda não tiver)
npm install -g wrangler

# Navegar para a pasta do Worker
cd workers/asaas-checkout

# Fazer deploy
wrangler deploy
```

### Deploy subsequente:

```bash
cd workers/asaas-checkout
wrangler deploy
```

## URL do Worker

Após o deploy, o Worker estará disponível em:
`https://petscore-checkout.{seu-subdominio}.workers.dev`

Configure essa URL como variável de ambiente no Cloudflare Pages se necessário.
