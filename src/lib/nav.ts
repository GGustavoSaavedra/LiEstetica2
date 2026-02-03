export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Sobre mi", href: "/sobre-mi" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
