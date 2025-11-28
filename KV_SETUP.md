# Configuração do KV Namespace no Cloudflare Pages

## Namespace KV Criado

**ID do Namespace:** `cfeea7b306c94cd8a39523e98ed6eb35`

## Como Configurar o Binding no Cloudflare Pages

### Passo 1: Acessar o Dashboard
1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Selecione sua conta
3. Vá em **Workers & Pages**
4. Selecione seu projeto **PetScore**

### Passo 2: Configurar o Binding KV
1. No projeto, vá em **Settings** (Configurações)
2. Role até a seção **Functions**
3. Expanda **KV Namespace Bindings**
4. Clique em **Add binding** (Adicionar binding)
5. Configure:
   - **Variable name:** `LEADS_KV`
   - **KV namespace:** Selecione o namespace `cfeea7b306c94cd8a39523e98ed6eb35` ou "KV ID PetScore"
6. Clique em **Save** (Salvar)

### Passo 3: Fazer Deploy
Após configurar o binding, faça um novo deploy:
- Se estiver usando Git, faça push das mudanças
- Ou faça deploy manual via Wrangler CLI

## Verificação

Após configurar e fazer deploy, teste criando um lead:
1. Preencha o formulário no site
2. Clique em "Ver meu Score Completo"
3. Verifique no dashboard do KV se a chave `user_...` foi criada

## Estrutura das Chaves no KV

Após a configuração, as chaves serão salvas no formato:
- `user_351992242960` (baseado no telefone)
- `user_timestamp_random` (se não tiver telefone)

Cada chave contém um objeto JSON com os dados completos do usuário.



