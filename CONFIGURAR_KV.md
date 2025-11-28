# 🔧 Configurar KV Binding no Cloudflare Pages

## ⚠️ IMPORTANTE
Os bindings de KV no Cloudflare Pages **DEVEM** ser configurados manualmente no Dashboard do Cloudflare. Não é possível fazer isso via CLI.

---

## 📋 Informações do Namespace

- **ID do Namespace:** `cfeea7b306c94cd8a39523e98ed6eb35`
- **Nome do Binding:** `LEADS_KV` (exatamente assim, maiúsculas)
- **Uso:** Armazenar dados de leads/usuários do PetScore

---

## 🚀 Passo a Passo Detalhado

### 1️⃣ Acessar o Dashboard
1. Abra seu navegador
2. Acesse: **https://dash.cloudflare.com**
3. Faça login na sua conta
4. Selecione a conta: `Ademilson@engenhariae.com.br`

### 2️⃣ Navegar até o Projeto
1. No menu lateral esquerdo, clique em **"Workers & Pages"**
2. Na lista de projetos, encontre e clique no seu projeto **PetScore**
   - Se não encontrar, pode estar com outro nome (verifique todos os projetos)

### 3️⃣ Acessar Configurações
1. No projeto, clique na aba **"Settings"** (Configurações)
2. Role a página para baixo até encontrar a seção **"Functions"**

### 4️⃣ Adicionar Binding KV
1. Na seção **"Functions"**, encontre **"KV Namespace Bindings"**
2. Clique no botão **"Add binding"** (Adicionar binding)
3. Preencha os campos:
   - **Variable name:** Digite exatamente: `LEADS_KV`
     - ⚠️ Deve ser exatamente assim (maiúsculas, sem espaços)
   - **KV namespace:** Selecione na lista o namespace com ID `cfeea7b306c94cd8a39523e98ed6eb35`
     - Ou procure por "KV ID PetScore" na lista
4. Clique em **"Save"** (Salvar)

### 5️⃣ Verificar Configuração
Após salvar, você deve ver:
- O binding `LEADS_KV` listado na seção "KV Namespace Bindings"
- O namespace vinculado corretamente

### 6️⃣ Fazer Deploy
Após configurar o binding:
1. Vá para a aba **"Deployments"** (Deployments)
2. Se estiver usando Git, faça um novo push:
   ```bash
   git add .
   git commit -m "Configurar KV binding"
   git push
   ```
3. O Cloudflare Pages fará o deploy automaticamente
4. Aguarde o deploy completar (pode levar alguns minutos)

### 7️⃣ Testar
Após o deploy:
1. Acesse seu site
2. Preencha o formulário do quiz
3. Clique em "Ver meu Score Completo"
4. Verifique no dashboard do KV:
   - Vá em **Workers KV** > Seu namespace
   - Clique na aba **"Pares de KV"**
   - Você deve ver uma chave no formato `user_351992242960`

---

## ✅ Verificação Final

Após configurar, você deve ver:

1. **No Dashboard do Projeto:**
   - Binding `LEADS_KV` configurado em Settings > Functions

2. **No KV Namespace:**
   - Chaves no formato `user_...` sendo criadas
   - Cada chave contém os dados de um usuário

3. **No Console do Navegador:**
   - Logs mostrando: `🔑 UserID gerado: user_...`
   - Logs mostrando: `✅ Resposta do servidor: {...}`

---

## 🆘 Problemas Comuns

### ❌ "Binding não encontrado"
- Verifique se o nome do binding está exatamente como `LEADS_KV` (maiúsculas)
- Verifique se o namespace foi selecionado corretamente

### ❌ "Namespace não aparece na lista"
- Verifique se você está na conta correta
- Verifique se o namespace foi criado na mesma conta do projeto Pages

### ❌ "Dados não estão sendo salvos"
- Verifique se o deploy foi concluído
- Verifique os logs do Functions no dashboard
- Verifique o console do navegador para erros

---

## 📞 Precisa de Ajuda?

Se tiver problemas:
1. Verifique os logs do Functions no dashboard
2. Verifique o console do navegador (F12)
3. Verifique se o namespace está na mesma conta do projeto

---

**✅ Após seguir estes passos, o sistema estará funcionando!**



