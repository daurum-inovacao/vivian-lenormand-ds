# Claude Design — Canvas Runtime Constraints

> Referência operacional para usar o `vivian-lenormand-ds` no Claude Design.
> Fonte: `claude-design-premium/docs/canvas-runtime.md` + experiência prática.

## O que funciona no canvas

- HTML estático renderizado diretamente
- CSS custom properties (`var(--vl-*)`) via `<link rel="stylesheet">`
- JavaScript vanilla em `<script>` (DOM APIs, IIFEs, `window.X`)
- Bundles UMD/IIFE/global (`_ds_bundle.js` expõe `window.VivianLenormand_DS`)
- React/JSX via UMD React + Babel standalone + globals em `window`
- Upload de imagens, screenshots, documentos como referência
- Hook nativo `check_design_system`

## O que NÃO funciona no canvas

- `import React from 'react'` ou qualquer bare specifier ESM
- `import { X } from './Component.jsx'` — não há module graph
- `npm install`, scripts de build, lint, testes
- `vite dev`, `next dev`, `astro dev` — nenhum dev server
- `git init`, commits, branches
- URLs externas arbitrárias (CSP restrito como iframe Artifacts)

## Regra crítica: botões

**O DC runtime retira classes CSS de elementos `<button>` nativos.**
`.btn-vivian-lenormand` NÃO funciona em `<button>`. Solução: sempre usar
**inline styles com os tokens** nos botões. Outros elementos (divs, inputs,
badges, glass) não são afetados — classes funcionam normalmente.

```html
<!-- ❌ Não funciona em <button> -->
<button class="btn-vivian-lenormand">Entrar</button>

<!-- ✅ Usar inline styles -->
<button style="
  background: linear-gradient(180deg, #A16E64 0%, #6D4742 100%);
  color: #FDF3F6;
  border: none;
  border-radius: 9999px;
  font-family: 'Abhaya Libre', serif;
  font-weight: 600;
  padding: 12px 28px;
  cursor: pointer;
">Entrar</button>
```

## Padrão de authoring recomendado

```
HTML estático + CSS custom properties + vanilla JS
```

React/JSX só quando há interação com estado que justifique o overhead.

## Pipeline de scripts do harness (ordem obrigatória)

Quando relevante, o Claude Design executa a **lógica** dos scripts lendo os
arquivos — não roda Node no canvas. Reporta como `SCRIPTS APPLIED`.

| Passo | Script | Quando |
|---|---|---|
| 0 | `context-signals.mjs` | Início de sessão e antes de aprovação final |
| 1 | `detect-bound-ds.mjs` | Detectar modo builder vs consumer |
| 2 | `extract-ds-voice.mjs` | Durante bootstrap |
| 3 | `bootstrap-harness.mjs` | Harness não bindado |
| 4 | `personalize-dc.mjs` | Após bootstrap |
| 5 | `check_design_system` (nativo) | Após binding |
| 6 | `detect-canvas-antipatterns.mjs` | Antes de polish/final em `*.dc.html` |
| 7 | `detect-text-antipatterns.mjs` | Antes de final em entregáveis com copy |

## Atualizar o DS binding após mudanças

Quando `_ds_bundle.js` ou `_ds_manifest.json` mudarem (ex: novos componentes),
re-bindar no Claude Design:

```
Os arquivos do design system foram atualizados para v{X}.
Rode assemble-design-system-showcase para regenerar o BOUND_DS.json
e atualizar a vitrine do Fixture DS com os novos componentes.
```

## Exports disponíveis no Claude Design

HTML standalone · ZIP · PDF · PPTX · Canva · URL compartilhável

**Handoff para código:** Claude Design empacota um bundle de handoff que é
passado ao Claude Code com uma instrução. O build de produção nunca vive no canvas.

## Namespace do DS neste projeto

```
window.VivianLenormand_DS
Namespace no harness: FixtureDS_0001
BOUND_DS.json: configurado com 17 componentes (v1.1.0)
```
