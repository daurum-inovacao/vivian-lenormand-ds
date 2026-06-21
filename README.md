# vivian-lenormand-ds

Design System oficial da marca **Vivian Lenormand Ateliê Místico**.

Aesthetic: místico-feminino premium — tons de marrom quente e rosa rosé, tipografia serifada editorial, superfícies glass translúcidas.

---

## Estrutura

```
vivian-lenormand-ds/
├── tokens/                    # Design tokens (W3C DTCG format)
│   ├── colors.json            # Paleta completa (web + admin)
│   ├── typography.json        # Fontes, tamanhos, pesos, tracking
│   ├── spacing.json           # Escala de espaçamento
│   ├── radius.json            # Border-radius
│   ├── shadow.json            # Sombras
│   ├── glass.json             # Glass morphism canônico
│   └── animation.json        # Durações e easings
├── css/
│   ├── web.css                # Tailwind v4 — portal das alunas (tema claro)
│   └── admin.css              # CSS vars — painel admin (tema escuro)
├── theme/
│   └── mantine.ts             # Mantine v8 theme override (admin)
├── components/                # Componentes React compartilhados
│   ├── Button/                # Variantes: primary, secondary, ghost, danger
│   ├── Input/                 # Variantes: vivian-lenormand, glass
│   ├── Badge/                 # Variantes: success, danger, info, neutral, lock, brand
│   ├── Card/                  # Variantes: glass, solid, poster
│   ├── Modal/                 # Variantes: confirm, alert
│   ├── Separator/             # Separadores wave SVG (top/bottom)
│   └── index.ts               # Exports centralizados
├── claude-design.json         # Config de importação para Claude Design
└── package.json
```

---

## Uso

### Importar CSS no portal das alunas

```css
/* apps/web/app/globals.css */
@import "@vivian-lenormand/design-system/css/web";
```

### Importar CSS no admin

```css
/* apps/admin/app/globals.css */
@import "@vivian-lenormand/design-system/css/admin";
```

### Usar o tema Mantine no admin

```tsx
// apps/admin/components/admin/AdminThemeProvider.tsx
import { vivianLenormandTheme } from '@vivian-lenormand/design-system/theme/mantine';
```

### Usar componentes

```tsx
import { Button, Input, Badge, Card, Modal, Separator } from '@vivian-lenormand/design-system';

// Botão primário
<Button variant="primary" size="md">Acessar Portal</Button>

// Input
<Input variant="vivian-lenormand" placeholder="Seu e-mail" />

// Badge
<Badge variant="success">Concluído</Badge>

// Card glass
<Card variant="glass" hoverable>...</Card>

// Separador de seção
<Separator variant="bottom" />
```

---

## Tokens de Cor Principais

| Token | Valor | Uso |
|---|---|---|
| `vivian-lenormand-700` | `#6D4742` | Cor primária da marca |
| `vivian-lenormand-500` | `#A16E64` | Suporte, labels |
| `vivian-lenormand-pink` | `#F7C2CA` | Destaques, badges |
| `vivian-lenormand-cream` | `#FDF3F6` | Superfícies sólidas |

## Fontes

| Fonte | Uso |
|---|---|
| **Playfair Display** | Headings (h1–h6) |
| **Lora** | Body text |
| **Abhaya Libre** | Botão primário, headings emocionais |
| **Poppins** | Labels, UI, uppercase |

## Utilitário Glass

```html
<div class="glass-vivian-lenormand rounded-2xl p-6">...</div>
```

`bg: rgba(255,255,255,0.45)` · `backdrop-blur: 12px` · `border: rgba(255,255,255,0.30)`

---

## Claude Design

Importe este repositório no Claude Design via GitHub para usar o design system automaticamente em todas as peças da marca.

```
Repositório: github.com/daurum-inovacao/vivian-lenormand-ds
Config: claude-design.json
```

---

## Dois temas independentes

| | Web (Portal das Alunas) | Admin (Painel Interno) |
|---|---|---|
| **Modo** | Claro | Escuro |
| **CSS** | `css/web.css` + Tailwind v4 | `css/admin.css` + Mantine v8 |
| **Fundo** | `#fffafa` | `#0f0c0d` |
| **Cor primária** | `#6D4742` | `#6D4742` (mesma marca) |
