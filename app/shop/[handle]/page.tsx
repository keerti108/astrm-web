import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import HeroCanvas from "@/components/HeroCanvas";

type Props = { params: Promise<{ handle: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return {};
  return { title: product.name };
}

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  return (
    <section style={{ padding: "clamp(64px, 8vw, 120px) 0", minHeight: "60vh" }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gap: "clamp(48px, 6vw, 80px)",
            alignItems: "start",
          }}
          className="product-grid"
        >
          {/* Visuals */}
          <div>
            <HeroCanvas />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              Fig. 01 · astrm chassis
            </p>
          </div>

          {/* Info */}
          <div style={{ paddingTop: "clamp(20px, 2vw, 32px)" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                marginBottom: "12px",
              }}
            >
              {product.subtitle}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 56px)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                color: "var(--ink)",
                margin: "0 0 clamp(20px, 2vw, 32px)",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "var(--ink)",
                marginBottom: "clamp(24px, 3vw, 40px)",
              }}
            >
              £{product.price}
            </p>

            <p
              style={{
                fontSize: "clamp(17px, 1.4vw, 20px)",
                lineHeight: 1.7,
                color: "var(--ink-soft)",
                marginBottom: "32px",
                maxWidth: "44ch",
              }}
            >
              {product.description}
            </p>

            {/* Size selector */}
            <div style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "12px",
                }}
              >
                Select Size
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      background: "none",
                      border: "1px solid var(--rule)",
                      color: "var(--ink)",
                      padding: "10px 16px",
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled
              style={{
                width: "100%",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "var(--ink)",
                color: "var(--paper)",
                border: "none",
                padding: "18px",
                cursor: "not-allowed",
                opacity: 0.5,
                marginBottom: "16px",
              }}
            >
              Add to Bag · Coming Soon
            </button>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "var(--ink-soft)",
                textAlign: "center",
              }}
            >
              Free UK shipping · 30-day returns
            </p>

            {/* Features */}
            <div style={{ borderTop: "1px solid var(--rule)", marginTop: "40px", paddingTop: "32px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  marginBottom: "20px",
                }}
              >
                What it does
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {product.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.06em",
                      color: "var(--ink-soft)",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <span style={{ color: "var(--signal)", flexShrink: 0 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .product-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
