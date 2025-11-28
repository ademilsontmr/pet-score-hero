#!/bin/bash

# Script para verificar e documentar a configuração do KV no Cloudflare Pages

echo "🔍 Verificando configuração do KV Namespace..."
echo ""
echo "📋 Informações do Namespace KV:"
echo "   ID: cfeea7b306c94cd8a39523e98ed6eb35"
echo "   Binding: LEADS_KV"
echo ""
echo "⚠️  IMPORTANTE: Os bindings de KV no Cloudflare Pages precisam ser"
echo "   configurados manualmente no Dashboard do Cloudflare."
echo ""
echo "📝 Passos para configurar:"
echo ""
echo "1. Acesse: https://dash.cloudflare.com"
echo "2. Vá em: Workers & Pages > Seu Projeto PetScore"
echo "3. Clique em: Settings (Configurações)"
echo "4. Role até: Functions > KV Namespace Bindings"
echo "5. Clique em: Add binding"
echo "6. Configure:"
echo "   - Variable name: LEADS_KV"
echo "   - KV namespace: cfeea7b306c94cd8a39523e98ed6eb35"
echo "7. Clique em: Save"
echo ""
echo "✅ Após configurar, faça um novo deploy do projeto."
echo ""

# Verificar se o namespace existe
echo "🔍 Verificando namespace KV..."
wrangler kv namespace list 2>&1 | grep -q "cfeea7b306c94cd8a39523e98ed6eb35" && echo "✅ Namespace encontrado!" || echo "⚠️  Namespace não encontrado na lista (pode estar em outra conta)"

echo ""
echo "📚 Para mais informações, consulte: KV_SETUP.md"



