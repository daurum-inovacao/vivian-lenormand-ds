# Claude Design Premium — Limitações Honestas

> Fonte: `claude-design-premium/LIMITATIONS.md`
> Leitura obrigatória antes de culpar a ferramenta por um comportamento inesperado.

## O que o harness realmente faz

É um **padrão de context engineering**. Funciona por:

- `CLAUDE.md` na raiz como bootstrap leve do Claude Design Web
- `.skill.md` carregados no contexto do modelo como procedimentos documentados
- Routing rules e checkpoint reporting nos entregáveis
- Geração ancorada em `DESIGN.md` + token CSS do DS vinculado

**Influencia** o comportamento do modelo via instruções de alto sinal.
**Não compila, não faz sandbox, não enforça nada em runtime.**

## O que o harness NÃO faz

- Não garante que todo output vai seguir o DS perfeitamente
- Não substitui governança de DS, biblioteca de componentes ou design tokens em código
- Não roda git, npm, lint, testes, build, Vite, Next, Astro dentro do canvas
- Não processa ESM imports, npm imports ou módulos que dependem de bundler
- Não certifica acessibilidade ou conformidade legal — o skill de acessibilidade é **checklist**, não motor de compliance
- Não previne o modelo de alucinar tokens ou ignorar instruções sob pressão de contexto
- Não instala novos Skills nativos no Claude Design Web — `.skill.md` são procedimentos documentados, não Skills do produto

## Fraquezas conhecidas

**1. Pressão de janela de contexto**
Carregar muitos skills + `DESIGN.md` grande pode fazer o modelo ignorar partes das instruções. O protocolo é seletivo justamente por isso.

**2. "Enforce" é procedural, não determinístico**
Claude é instruído a checar contra `CLAUDE.md`, `DESIGN.md` e token CSS, depois reportar o que aplicou ou pulou. Revisão humana ainda é necessária.

**3. Depende da cooperação do modelo**
Se o modelo estiver em estado ruim (conversa muito longa, raciocínio fraco), a efetividade cai.

**4. Mobile e acessibilidade ainda precisam de julgamento humano**
Audits são checklists rigorosos executados por LLM. Testes em dispositivos reais, teclado e tecnologia assistiva continuam necessários.

**5. Canvas runtime é estático**
Claude Design Web é uma superfície de preview HTML/CSS/browser-JS. Migração para framework é um passo de repo posterior — nunca acontece dentro do canvas.

**6. Binding cache pode ficar stale**
`BOUND_DS.json` pode desatualizar se o DS mudar sem re-rodar o bootstrap.
**Sempre que alterar `_ds_bundle.js`, `_ds_manifest.json` ou tokens → re-rodar `assemble-design-system-showcase` no Claude Design.**

**7. Contaminação do bundle nativo**
O compilador nativo do Claude Design pode incluir todo o JavaScript do projeto em `_ds_bundle.js`, não só os componentes registrados. Manter o projeto do DS limpo (tokens, componentes, templates, helpers pequenos).

## Quando NÃO usar

- Quando você precisa de compliance de DS garantida por máquina (use biblioteca de componentes + linting)
- Quando está fazendo exploração rápida de UI e o overhead de routing parece contraproducente
- Quando o modelo tem janela de contexto muito pequena

## O que isso significa na prática para o vivian-lenormand-ds

| Situação | O que fazer |
|---|---|
| Output saiu fora do DS | Usar **Prompt 04 — Anti-Drift DS** antes de gerar |
| Claude "esqueceu" um token | Verificar se `BOUND_DS.json` está atualizado; re-rodar showcase se necessário |
| Botão sem estilo | Inline styles — o canvas strips classes em `<button>` nativos |
| Design ficou genérico | Rodar `design-system-guardian` + referenciar `DESIGN.md` §1-2 explicitamente |
| Alterou componentes do DS | Re-bindar: `assemble-design-system-showcase` antes da próxima tela |
| Pronto para implementar | `framework-handoff` skill → `docs/next-adapter.md` → @dev |
