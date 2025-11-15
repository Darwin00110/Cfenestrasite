# Configuração da API do Google - Cfenestra

## 🎯 Status Atual: MODO DEMO ATIVADO

A aplicação está funcionando em **modo demonstração** com login Google simulado. Você pode testar todas as funcionalidades sem configurar nada!

### Como funciona o Modo Demo:

✅ **Funcionamento Completo**: Clique no botão "Continuar com Google" e um usuário demo será criado automaticamente
✅ **Sem Configuração**: Não precisa criar conta no Google Cloud ou configurar nada
✅ **Totalmente Funcional**: Todas as features funcionam normalmente (dashboard, limpeza, etc)
✅ **Alternativa**: Você também pode usar email/senha para fazer login

---

## 🚀 Como Ativar o Login Real do Google (Opcional)

Se você quiser usar a API real do Google para produção, siga os passos abaixo:

### Passo 1: Criar Projeto no Google Cloud Console

1. Acesse: https://console.cloud.google.com/
2. Clique em "Select a project" → "New Project"
3. Nome do projeto: **Cfenestra**
4. Clique em "Create"

### Passo 2: Configurar OAuth Consent Screen

1. No menu lateral, vá em **"APIs & Services"** → **"OAuth consent screen"**
2. Escolha **"External"** (para testes) ou **"Internal"** (se tiver Google Workspace)
3. Preencha os campos obrigatórios:
   - **App name**: Cfenestra
   - **User support email**: seu-email@gmail.com
   - **Developer contact information**: seu-email@gmail.com
4. Clique em **"Save and Continue"**
5. Em **"Scopes"**, clique em **"Save and Continue"** (sem adicionar nada)
6. Em **"Test users"** (se External), adicione seu email
7. Clique em **"Save and Continue"**

### Passo 3: Criar Credenciais OAuth 2.0

1. Vá em **"APIs & Services"** → **"Credentials"**
2. Clique em **"+ Create Credentials"** → **"OAuth client ID"**
3. Escolha **"Web application"**
4. Configure:
   - **Name**: Cfenestra Web Client
   - **Authorized JavaScript origins**:
     - `http://localhost:5173` (desenvolvimento)
     - `https://seu-dominio.com` (produção)
   - **Authorized redirect URIs**:
     - `http://localhost:5173` (desenvolvimento)
     - `https://seu-dominio.com` (produção)
5. Clique em **"Create"**

### Passo 4: Copiar o Client ID

Após criar, você verá uma tela com suas credenciais:

```
Client ID: 123456789012-abc123def456ghi789jkl012mno345pq.apps.googleusercontent.com
Client Secret: GOCSPX-abcdefghijklmnopqrstuvwx
```

⚠️ **Importante**: Você só precisa do **Client ID** (não do Client Secret)

### Passo 5: Adicionar Client ID no Código

Abra o arquivo `/App.tsx` e localize esta linha (por volta da linha 9):

```typescript
const GOOGLE_CLIENT_ID = '';
```

Substitua por seu Client ID real:

```typescript
const GOOGLE_CLIENT_ID = '123456789012-abc123def456ghi789jkl012mno345pq.apps.googleusercontent.com';
```

### Passo 6: Testar

1. Salve o arquivo
2. Recarregue a página
3. O botão do Google agora usará a API real!

---

## 🔍 Verificando se está funcionando

### Modo Demo (Padrão):
- Você verá um alerta azul dizendo "Modo Demo"
- Botão customizado com logo do Google
- Ao clicar, um usuário demo é criado instantaneamente

### Modo Real (Após configurar):
- Sem alerta de "Modo Demo"
- Botão oficial do Google
- Popup do Google aparece para escolher conta
- Sua foto real do Google é exibida

---

## ❓ Perguntas Frequentes

### Por que usar o Modo Demo?

- **Desenvolvimento rápido**: Teste a aplicação sem burocracia
- **Sem limites**: Não precisa se preocupar com quotas da API
- **Privacidade**: Não compartilha dados reais com o Google

### Quando usar a API Real?

- **Produção**: Quando publicar o site
- **Múltiplos usuários**: Para login real de diferentes pessoas
- **Integração completa**: Para usar outros serviços do Google

### Posso alternar entre os modos?

Sim! Basta:
- **Para Demo**: Deixe `GOOGLE_CLIENT_ID = ''` vazio
- **Para Real**: Adicione seu Client ID

### Quais são os limites da API Real?

- **Grátis**: 10.000 requisições/dia
- **Suficiente para**: Milhares de logins por dia
- **Sem custo**: Totalmente gratuito para a maioria dos casos

---

## 🛡️ Segurança

### No Modo Demo:
- Dados não são persistidos em nenhum servidor
- Tudo fica no navegador (localStorage)
- Sem comunicação com servidores externos

### No Modo Real:
- OAuth 2.0 seguro do Google
- Nenhuma senha é compartilhada
- Dados criptografados em trânsito
- Client ID pode ser público (não é secreto)

---

## 📞 Suporte

Se tiver problemas:

1. **Verifique o console do navegador** (F12) para erros
2. **Confirme as URLs autorizadas** no Google Console
3. **Teste o modo demo** primeiro para garantir que o resto funciona
4. **Aguarde alguns minutos** após criar as credenciais (propagação)

---

## ✅ Checklist Rápido

Para ativar a API real:

- [ ] Criar projeto no Google Cloud Console
- [ ] Configurar OAuth Consent Screen
- [ ] Criar credenciais OAuth 2.0
- [ ] Adicionar URLs autorizadas
- [ ] Copiar Client ID
- [ ] Colar no código (`/App.tsx`)
- [ ] Salvar e testar

---

**Status**: Aplicação funcionando perfeitamente em modo demo! 🎉

Aproveite para testar todas as funcionalidades. Quando estiver pronto para produção, siga os passos acima para ativar a API real do Google.