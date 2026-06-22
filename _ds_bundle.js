/* Vivian Lenormand Design System — DS Bundle v1.1.0 */
window.VivianLenormand_DS = window.VivianLenormand_DS || {
  namespace: "VivianLenormand_DS",
  version: "1.1.0",
  brand: "Vivian Lenormand Ateliê Místico",
  aesthetic: "Místico-feminino premium — marrom quente, rosa rosé, glass morphism, tipografia serifada editorial",
  themes: ["web", "admin"],
  tokens: {
    colors: {
      primary: "#6D4742",
      primaryLight: "#A16E64",
      primaryHover: "#5a3a35",
      pink: "#F7C2CA",
      cream: "#FDF3F6",
      background: "#fffafa",
      foreground: "#2d1e1c",
      success: "#468D00",
      danger: "#9B001C"
    },
    fonts: {
      heading: "Playfair Display",
      body: "Lora",
      cta: "Abhaya Libre",
      label: "Poppins"
    },
    glass: {
      background: "rgba(255,255,255,0.45)",
      blur: "12px",
      border: "rgba(255,255,255,0.30)"
    }
  },
  components: [
    { name: "Button", variants: ["primary", "secondary", "ghost", "danger"], sizes: ["sm", "md", "lg"] },
    { name: "Input", variants: ["default", "glass"], props: ["label", "error", "placeholder"] },
    { name: "Badge", variants: ["success", "danger", "info", "neutral", "lock", "brand"] },
    { name: "Card", variants: ["glass", "solid", "poster"], props: ["hoverable"] },
    { name: "Modal", variants: ["confirm", "alert"], props: ["danger", "title", "children"] },
    { name: "Separator", note: "Wave SVG separator top/bottom" },
    { name: "ProgressBar", props: ["value (0-100)", "showLabel"], note: "Barra de progresso do curso — gradiente brand" },
    { name: "SearchInput", props: ["placeholder", "value", "onChange"], note: "Campo de busca com ícone, surface glass, altura 48px" },
    { name: "Avatar", props: ["src", "name", "size (sm|md|lg)"], note: "Foto do usuário com fallback de iniciais" },
    { name: "NotificationBell", props: ["count", "onClick"], note: "Sino de notificações com badge vermelho de não lido" },
    { name: "SectionHeader", props: ["title", "linkLabel", "onLinkClick"], note: "Título de seção com link opcional Ver todos" },
    { name: "EmptyState", props: ["headline", "subtext", "ctaLabel", "onCta"], note: "Estado vazio acolhedor para aluna nova" },
    { name: "HeroBanner", props: ["slides[]", "autoAdvance"], note: "Carrossel hero fullwidth com dots e setas — só na variante visitante" },
    { name: "DrawerMenu", props: ["open", "onClose", "items[]"], note: "Menu lateral glass, slide from right, backdrop blur 16px" },
    { name: "PurchaseCard", props: ["title", "imageUrl", "progress", "badgeType", "state", "onContinue"], note: "Card de curso comprado — proporção 3:4, progress bar, CTA suave. SEM preço." },
    { name: "OfferCard", props: ["title", "imageUrl", "benefit", "price", "originalPrice", "badge", "onBuy"], note: "Card de oferta — proporção 3:4, preço Abhaya Libre, CTA gradiente forte Quero esta ✦" },
    { name: "TestimonialCard", props: ["quote", "author", "role"], note: "Depoimento em Lora itálico, aspas decorativas, surface glass" }
  ],
  rules: {
    buttonNote: "DC runtime strips class-based styling from native <button> nodes — always use inline token-based styles for buttons",
    cardOrder: "PurchaseCard SEMPRE acima de OfferCard no dashboard da aluna logada",
    noBothCardsWithPrice: "PurchaseCard nunca exibe preço — só OfferCard tem preço",
    searchPlaceholder: "Buscar ofertas, livros e cursos (em ambas as variantes)",
    heroBannerScope: "HeroBanner apenas na Variante A (visitante). Nunca na variante de aluna logada."
  }
};
