# Next.js Adapter — Claude Design → Portal

> Como consumir o output do Claude Design no `portal-vivian-lenormand-v2` (Next.js App Router).
> Fonte: `claude-design-premium/docs/adapters/next.md`

## Pré-requisitos

- Harness bindado (`BOUND_DS.json` com `configured: true`)
- Direção visual aprovada no canvas
- Token CSS de `BOUND_DS.json` → `globalCssPaths`

## Mapeamento DC → Next.js

| Elemento no DC | Target no Next.js |
|---|---|
| Header, hero estático | Server Components |
| Controles interativos (drawer, carousel, busca) | Client Components com `"use client"` |
| App shell / layout base | `app/layout.tsx` (App Router) |
| Button, Card, SectionHeader | Server por padrão; client só se interativo |
| CSS dos tokens do DS | Import no `app/globals.css` |

## Import dos tokens no portal

No `apps/web/app/globals.css`:

```css
/* vivian-lenormand-ds tokens */
@import "@vivian-lenormand/design-system/tokens/colors.css";
@import "@vivian-lenormand/design-system/tokens/typography.css";
/* demais globalCssPaths do BOUND_DS.json */
```

## Componentes com estado → Client

Estes componentes do DS precisam de `"use client"`:

| Componente | Por quê |
|---|---|
| `HeroBanner` | useState + useEffect (auto-advance) |
| `DrawerMenu` | open/close state + body scroll lock |
| `NotificationBell` | onClick handler |
| `PurchaseCard` | onContinue callback |
| `OfferCard` | onBuy callback |
| `SearchInput` | onChange controlled input |

## Prompt de handoff (usar no Claude Design quando aprovado)

```
Convert this approved Claude Design direction into a Next app-router plan.
Separate static server components from interactive client components.
Preserve bound DS component names (BOUND_DS.json -> namespace: VivianLenormand_DS)
and token names (BOUND_DS.json -> globalCssPaths).
Do not introduce SSR-specific complexity unless it serves the product.
Report which skills were applied.
```

## Fluxo completo

```
Claude Design (canvas) → DC aprovado → bundle de handoff
→ Claude Code (@dev) → implementação Next.js App Router
→ portal-vivian-lenormand-v2/apps/web/
```

## Ver também

- `docs/canvas-runtime-constraints.md` — o que funciona/não funciona no canvas
- `BOUND_DS.json` — namespace e componentes bindados
- `portal-vivian-lenormand-v2/apps/web/app/globals.css` — ponto de entrada dos tokens
