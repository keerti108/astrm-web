export interface NavLink {
  label: string;
  href: string;
  mono?: boolean;
}

export const primaryNav: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Technology", href: "/technology" },
  { label: "Size & Fit", href: "/size-and-fit" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  shop: [
    { label: "Insole", href: "/shop/astrm-insole" },
    { label: "Size & Fit", href: "/size-and-fit" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  help: [
    { label: "Help Centre", href: "/help" },
    { label: "Returns", href: "/help/returns" },
    { label: "Shipping", href: "/help/shipping" },
    { label: "Privacy", href: "/policies/privacy" },
  ],
};
