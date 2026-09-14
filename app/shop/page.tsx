import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <section style={{ padding: "clamp(64px, 8vw, 120px) 0", minHeight: "60vh" }}>
      <div className="wrap">
        <div className="section-label">Shop</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 80px)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            margin: "0 0 clamp(48px, 6vw, 80px)",
            lineHeight: 0.95,
          }}
        >
          All Products
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "clamp(32px, 4vw, 56px)",
          }}
        >
          {products.map((p) => (
            <Link
              key={p.handle}
              href={`/shop/${p.handle}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <div
                style={{
                  background: "var(--paper-alt)",
                  aspectRatio: "3/4",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--rule)",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-soft)",
                  }}
                >
                  Coming Soon
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                  marginBottom: "6px",
                }}
              >
                {p.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  marginBottom: "8px",
                }}
              >
                {p.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "var(--ink)",
                }}
              >
                £{p.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
