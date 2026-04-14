# 📚 Como Adicionar Novos Artigos

Guia simples para adicionar mais artigos ao seu site de finanças.

---

## 1️⃣ Adicionar Artigo ao Arquivo de Dados

Abra o arquivo: `src/data/articles.js`

### Estrutura de um Artigo

```javascript
{
  id: 13,                                    // Número único incrementado
  slug: 'seu-artigo-slug',                   // URL amigável (sem espaços, minúscula)
  title: 'Título do Seu Artigo Aqui',        // Título (40-60 caracteres ideal)
  category: 'Categoria',                     // Uma das categorias existentes
  date: '2026-04-20',                        // Data no formato YYYY-MM-DD
  excerpt: 'Resumo do artigo em 1-2 linhas', // Usado na listagem (150 caracteres)
  content: `Conteúdo completo do artigo aqui...`, // Markdown suportado
  author: 'Equipe de Educação Financeira'    // Autor
}
```

### Exemplo Completo

```javascript
{
  id: 13,
  slug: 'investir-ouro-2026',
  title: 'Por que Investir em Ouro em 2026: Estratégias e Alternativas',
  category: 'Commodities',
  date: '2026-04-20',
  excerpt: 'Entenda como ouro funciona como proteção contra inflação e as melhores formas de investir em 2026.',
  content: `## O Ouro como Investimento

O ouro é um dos investimentos mais antigos da humanidade...

## Formas de Investir em Ouro

### 1. Ouro Físico
Compra de barras, moedas ou joias...`,
  author: 'Equipe de Educação Financeira'
}
```

---

## 2️⃣ Formatação de Conteúdo (Markdown)

O conteúdo suporta formatação Markdown:

### Títulos
```markdown
## Título de Seção
### Subtítulo
```

### Listas
```markdown
- Item 1
- Item 2
- Item 3
```

### Tabelas
```markdown
| Coluna 1 | Coluna 2 |
|----------|----------|
| Dados    | Dados    |
```

### Checkmarks (Positivos/Negativos)
```markdown
✓ Ponto positivo
✗ Ponto negativo
```

### Ênfase
```markdown
**negrito**
*itálico*
```

---

## 3️⃣ Categorias Existentes

Use uma destas categorias:
- **Ações** - Mercado de ações
- **Estratégia** - Estratégias de investimento
- **Análise** - Análise técnica e fundamental
- **Renda Fixa** - Títulos, CDB, Tesouro
- **Comportamento** - Psicologia do investimento
- **Planejamento** - Planejamento financeiro
- **Recursos** - Ferramentas e corretoras
- **Economia** - Conceitos econômicos
- **Aposentadoria** - Planejamento de aposentadoria
- **Trading** - Day trading e operações
- **Crédito** - Cartões e empréstimos
- **Imóveis** - Investimento imobiliário

---

## 4️⃣ Dicas de Escrever Bons Artigos

### Comprimento
- **Mínimo**: 600 palavras
- **Ideal**: 1000-1500 palavras
- **Máximo**: Sem limite (separe em seções)

### Estrutura Recomendada
1. **Introdução** (100-150 palavras)
2. **Conceito Principal** (200-300 palavras)
3. **Pontos Secundários** (3-4 seções de 200 palavras cada)
4. **Exemplos Práticos** (200-300 palavras)
5. **Conclusão** (100-150 palavras)

### SEO
- Use palavras-chave naturalmente
- Título deve conter palavra-chave principal
- Primeiro parágrafo deve responder a questão

### Legibilidade
- Parágrafos curtos (2-4 linhas)
- Use subtítulos para quebrar conteúdo
- Listas com bullet points
- Negrite palavras-chave

---

## 5️⃣ Exemplo Prático: Adicionar Artigo

### Passo 1: Abra o arquivo
`src/data/articles.js`

### Passo 2: Vá ao final da lista
Após o último artigo (id: 12), adicione uma vírgula

### Passo 3: Adicione o novo artigo
```javascript
export const articles = [
  // ... artigos existentes ...
  {
    id: 12,
    slug: 'investimento-imobiliario',
    // ... dados do artigo 12
  },
  // NOVO ARTIGO AQUI:
  {
    id: 13,
    slug: 'criptomoedas-2026',
    title: 'Criptomoedas em 2026: Bitcoin, Ethereum e Alternativas',
    category: 'Análise',
    date: '2026-04-21',
    excerpt: 'Análise do mercado de criptomoedas em 2026 e estratégias seguras de investimento.',
    content: `## O Mercado de Criptomoedas em 2026

Após anos de volatilidade, o mercado cripto amadureceu significativamente...

## Bitcoin: O Ouro Digital

Bitcoin continua sendo a criptomoeda mais valiosa e reconhecida...`,
    author: 'Equipe de Educação Financeira'
  }
];
```

### Passo 4: Salve o arquivo
Use Ctrl+S

### Passo 5: Teste localmente
```bash
npm run dev
```

Visite: `http://localhost:5173/artigos`

---

## 6️⃣ Checklist antes de Publicar

- [ ] Artigo tem mínimo 600 palavras
- [ ] Título é claro e attrativo (40-60 caracteres)
- [ ] Slug é válido (sem espaços, minúsculas)
- [ ] Categoria existe
- [ ] Data está no formato correto (YYYY-MM-DD)
- [ ] Excerpt é um bom resumo (150 caracteres)
- [ ] ID é único e sequencial
- [ ] Sem erros de digitação
- [ ] Conteúdo está bem formatado
- [ ] Exemplo prático está incluído
- [ ] Conclusão clara
- [ ] Sem plágio (conteúdo original)

---

## 7️⃣ Buscando Ideias de Artigos

### Alto Interesse no Google
Use Google Trends para encontrar:
- "investimento imobiliário 2026"
- "como investir em bitcoin"
- "melhor corretora brasil 2026"

### Tópicos Populares em Finanças
- Criptomoedas
- Fundos imobiliários (FIIs)
- Opções e futuros
- Investimento em ouro
- Forex
- Startups e venture capital
- ESG (Investimento sustentável)
- Planejamento tributário
- Educação financeira para crianças
- Aposentadoria complementar

---

## 8️⃣ Otimizar para Mais Visitantes

### SEO Onpage
1. Coloque palavra-chave no título
2. Use cabeçalhos (##, ###) com palavras-chave
3. Primeiro parágrafo responde à pergunta
4. Links internos para artigos relacionados
5. Meta description clara (excerpt)

### Promover Artigos
1. Compartilhe no Twitter/LinkedIn
2. Reddit (r/investimentos)
3. Newsletter
4. Grupos de Facebook
5. WhatsApp

---

## 🎯 Meta de Crescimento

Para máximo desempenho no AdSense:

| Mês | Meta de Artigos | Visitas Estimadas |
|-----|-----------------|-------------------|
| 1 | 12 | 100-200 |
| 2 | 20 | 500-1k |
| 3 | 30 | 2k-3k |
| 6 | 50 | 5k-10k |
| 12 | 100+ | 20k+ |

---

## 🚀 Dica Bonus: Atualizar Artigos Existentes

Aumente visitas atualizando artigos antigos:

1. Verifique datas
2. Atualize dados e estatísticas
3. Adicione novas seções
4. Corrija informações obsoletas
5. Melhore formatação

Google favorece artigos regularmente atualizados! 📈

---

**Comece agora! Adicione 5 novos artigos esta semana! 💪**
