# Site institucional — Líder Jr.

Site da **Líder Junior**, empresa júnior de Engenharia de Produção.

> **Vai só trocar textos ou imagens?** Você não precisa saber programar nem ler
> este arquivo. Vá direto para **[CONTEUDO.md](CONTEUDO.md)**.

---

## Como rodar

Requer **Node.js 20 ou superior**.

```bash
npm install     # uma vez, para baixar as dependências
npm run dev     # abre em http://localhost:3000
```

| Comando             | O que faz                                                             |
| ------------------- | --------------------------------------------------------------------- |
| `npm run dev`       | Sobe o site em modo de desenvolvimento, recarregando a cada alteração |
| `npm run build`     | Gera a versão de produção                                             |
| `npm run start`     | Roda a versão de produção localmente (rode `build` antes)             |
| `npm run lint`      | Verifica o código                                                     |
| `npm run typecheck` | Verifica os tipos do TypeScript                                       |
| `npm run format`    | Formata todos os arquivos                                             |

Antes de publicar, os quatro precisam passar sem erro:

```bash
npm run lint && npm run typecheck && npm run format:check && npm run build
```

---

## Estrutura de pastas

```
src/
├── app/                    Rotas. Cada pasta com page.tsx vira uma página.
│   ├── layout.tsx          Só <html>, fontes e CSS — vale para tudo, inclusive o CMS
│   ├── globals.css         DESIGN TOKENS — cor, tipografia, espaçamento, sombra
│   ├── (site)/             O SITE. Cabeçalho, rodapé e as páginas públicas
│   │   ├── layout.tsx      O chrome: menu, rodapé, botão do WhatsApp
│   │   ├── page.tsx        Home
│   │   └── servicos|cases|blog/[slug]/   Templates das páginas de detalhe
│   ├── keystatic/          A interface do CMS (fora do (site), sem o menu)
│   ├── api/keystatic/      Autenticação do CMS pelo GitHub
│   ├── sitemap.ts          Mapa do site, montado a partir do conteúdo
│   ├── robots.ts           Instruções para buscadores
│   └── opengraph-image.tsx Imagem exibida ao compartilhar o link
│
├── content/                ★ TEXTOS DAS PÁGINAS (o que não é publicação)
│   ├── site.ts             Dados globais: telefone, e-mail, menu, rodapé
│   ├── imagens.ts          Banco de imagens, com a descrição (alt) de cada uma
│   ├── home.ts             …um arquivo por página
│   ├── servicos/           pagina.ts (listagem) + um arquivo por serviço + index.ts
│   ├── cases/              pagina.ts + index.ts (o ADAPTER que lê o CMS)
│   └── blog/               idem
│
├── components/
│   ├── ui/                 Primitivos sem domínio: Button, Card, Section, Heading…
│   ├── layout/             Cabeçalho, rodapé, botão do WhatsApp
│   └── sections/           Blocos de página: heros, grades, carrossel, formulário
│
├── types/                  A forma que cada conteúdo precisa ter
└── lib/                    Utilidades: datas, categorias, ícones, envio do formulário

public/imagens/             Os arquivos de imagem
prototipo-vibecodado/       Protótipo aprovado — referência, fora do build

content/                    ★ AS PUBLICAÇÕES, escritas pelo CMS (YAML)
├── blog/                   um arquivo por post
├── cases/                  um arquivo por case
└── materiais/              um arquivo por material
keystatic.config.ts         O schema do CMS — que campos cada publicação tem
```

---

## Decisões de arquitetura

### 1. Conteúdo separado da apresentação

**Nenhum texto visível ao usuário existe dentro de um componente.** Um componente
nunca importa conteúdo: recebe tudo por props, vindo da página.

O conteúdo mora em dois lugares, por natureza diferente:

- **Publicações** (blog, cases, materiais) — arquivos YAML em `content/`,
  escritos pela interface do CMS em `/keystatic`. Quem publica não abre código.
- **Cópia de página** (textos da Home, dos serviços, do contato) — arquivos
  TypeScript em `src/content/`. Muda raramente e junto com o layout.

Nos dois casos, o campo obrigatório é obrigatório: no primeiro pelo schema do
CMS, no segundo pelo TypeScript. Inclusive o `alt` de toda imagem.

### 2. Serviços, cases e posts têm duas camadas

Cada item tem um **resumo** (obrigatório) e um **detalhe** (opcional):

- o **resumo** alimenta os cards das listagens, o menu e o rodapé;
- o **detalhe**, quando existe, faz a página individual passar a existir.

Preencher o campo `detalhe` num arquivo de conteúdo **cria a página sozinho** —
sem tocar em componente nem em rota. Um item sem `detalhe` continua aparecendo
nas listagens, mas seu card não vira link e a URL responde 404.

### 3. Nada é escrito em dois lugares

Listas que precisavam ser mantidas à mão foram eliminadas:

| O que                                 | De onde vem agora                             |
| ------------------------------------- | --------------------------------------------- |
| Submenu "Serviços" e coluna do rodapé | registry de serviços                          |
| Opções dos filtros de categoria       | campo `categoria` dos próprios itens          |
| `sitemap.xml`                         | os três registries                            |
| Datas exibidas                        | um único campo `data` em formato `AAAA-MM-DD` |

### 4. Design system fechado

Os tokens ficam em `src/app/globals.css`. A paleta padrão do Tailwind foi
**removida**: classes como `bg-blue-500` ou `rounded-3xl` simplesmente não
compilam. Só existe o que está no sistema. Ver **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)**.

### 5. Renderização no servidor por padrão

Componentes são de servidor por padrão. `"use client"` aparece só onde há
interatividade real: menu, filtros de categoria, carrossel, contadores animados
e formulário de contato.

---

## Stack

|           |                                                             |
| --------- | ----------------------------------------------------------- |
| Framework | Next.js 16 (App Router)                                     |
| Linguagem | TypeScript em modo `strict` — `any` é proibido              |
| Estilo    | Tailwind CSS v4, com tema em CSS                            |
| Fontes    | League Spartan, Raleway e DM Serif Display, via `next/font` |

**Dependências além do framework** — só quatro, todas justificadas:

| Pacote                     | Por quê                                              |
| -------------------------- | ---------------------------------------------------- |
| `clsx` + `tailwind-merge`  | juntar classes condicionais sem conflito             |
| `class-variance-authority` | variantes tipadas nos primitivos (`variant`, `size`) |
| `lucide-react`             | ícones                                               |

Não há biblioteca de componentes prontos, nem de animação: tudo é próprio, e as
animações são CSS.

---

## O que ainda não existe

O site é **estático**. Não há backend, banco de dados nem CMS.

O formulário de contato valida no navegador mas **não envia para lugar nenhum**.
O ponto de integração está isolado em
[`src/lib/formulario-de-contato.ts`](src/lib/formulario-de-contato.ts) — é o
único arquivo a mudar quando houver servidor.

A lista completa de pendências está em **[PENDENCIAS.md](PENDENCIAS.md)**.

---

## A pasta `prototipo-vibecodado/`

É o protótipo aprovado pelo cliente, mantido como referência visual. **Não deve
ser editada.** Ela está fora do build, do lint, do Prettier e do deploy, e fora
das buscas do editor — mas continua versionada no git de propósito.

Quando não for mais necessária, remova a pasta e as exclusões que existem só por
causa dela (`tsconfig.json`, `eslint.config.mjs`, `.prettierignore`,
`.vercelignore`, `.vscode/settings.json`, `.claude/settings.json`).
