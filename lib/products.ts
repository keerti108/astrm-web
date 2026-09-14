export interface Product {
  handle: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  sizes: string[];
  images: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    handle: "astrm-insole",
    name: "astrm Insole",
    subtitle: "Biomechanical insole",
    price: 95,
    currency: "GBP",
    description:
      "Engineered to support the foot's natural motion: splay, flex, recoil. Designed to sit inside any conventional shoe without changing its silhouette.",
    features: [
      "Engineered to allow forefoot splay under load",
      "Chassis tuned to spring rather than absorb",
      "Designed for conventional shoe silhouettes",
      "Developed with clinical osteopathic insight",
    ],
    sizes: ["XS (UK 3–4)", "S (UK 5–6)", "M (UK 7–8)", "L (UK 9–10)", "XL (UK 11–12)"],
    images: ["/assets/product-1.jpg", "/assets/product-2.jpg"],
    inStock: false,
  },
];

export function getProduct(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}
