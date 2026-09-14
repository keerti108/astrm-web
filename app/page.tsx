import Link from "next/link";
import { products } from "@/lib/products";
import HeroCanvas from "@/components/HeroCanvas";
import ScrollStory from "@/components/ScrollStory";

export default function Home() {
  const product = products[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          minHeight: "calc(100vh - 60px)",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          background: "var(--ink)",
          color: "var(--paper)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background rule lines */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--paper) 80px)",
            pointerEvents: "none",
          }}
        />

        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(48px, 6vw, 80px)",
            paddingTop: "clamp(64px, 8vw, 100px)",
            paddingBottom: "clamp(64px, 8vw, 100px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Two-column hero on wide screens */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(48px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left: copy */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--signal)",
                  marginBottom: "clamp(20px, 2vw, 32px)",
                }}
              >
                ◆ Biomechanical Insole
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(48px, 7vw, 96px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  color: "var(--paper)",
                  margin: "0 0 clamp(28px, 3vw, 44px)",
                }}
              >
                Move<br />
                <span style={{ color: "var(--signal)", fontStyle: "italic" }}>ment</span><br />
                Is<br />
                Medicine.
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "clamp(18px, 1.6vw, 22px)",
                  lineHeight: 1.65,
                  color: "rgba(240,238,233,0.72)",
                  maxWidth: "40ch",
                  marginBottom: "clamp(40px, 5vw, 64px)",
                }}
              >
                Engineered to let your foot splay, flex, and spring back. Inside any shoe you already own.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link
                  href="/shop/astrm-insole"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    background: "var(--paper)",
                    padding: "16px 36px",
                    display: "inline-block",
                    transition: "opacity 0.2s",
                  }}
                >
                  Shop Now · £{product.price}
                </Link>
                <Link
                  href="/technology"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(240,238,233,0.6)",
                    borderBottom: "1px solid rgba(240,238,233,0.2)",
                    paddingBottom: "2px",
                  }}
                >
                  How it works
                </Link>
              </div>
            </div>

            {/* Right: 3D canvas */}
            <div style={{ position: "relative" }}>
              <HeroCanvas />
            </div>
          </div>

          {/* Stat row */}
          <div
            style={{
              borderTop: "1px solid rgba(240,238,233,0.10)",
              paddingTop: "clamp(32px, 4vw, 48px)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(24px, 4vw, 48px)",
            }}
            className="stat-row"
          >
            {[
              { value: "20+", label: "Years clinical insight" },
              { value: "Any shoe", label: "No silhouette change" },
              { value: "One size up", label: "Fits with existing insole removed" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    letterSpacing: "-0.02em",
                    color: "var(--paper)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "rgba(240,238,233,0.4)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────── */}
      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) 0",
          background: "var(--paper)",
        }}
      >
        <div className="wrap">
          <div className="section-label">The technology</div>
          <div
            style={{
              display: "grid",
              gap: "clamp(48px, 6vw, 80px)",
              alignItems: "start",
            }}
            className="two-col"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                textTransform: "uppercase",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Your foot was designed to splay, flex, and spring back.
              <br />
              <span style={{ color: "var(--signal)" }}>Your shoes stopped it.</span>
            </h2>
            <div>
              <p
                style={{
                  fontSize: "clamp(18px, 1.5vw, 21px)",
                  lineHeight: 1.75,
                  color: "var(--ink-soft)",
                  marginBottom: "24px",
                }}
              >
                The astrm chassis is engineered to restore three movements conventional midsoles suppress: forefoot splay under load, controlled medial arch flex during propulsion, and elastic recoil at push-off.
              </p>
              <p
                style={{
                  fontSize: "clamp(18px, 1.5vw, 21px)",
                  lineHeight: 1.75,
                  color: "var(--ink-soft)",
                  marginBottom: "40px",
                }}
              >
                The result sits inside any shoe. The fit looks no different. The walk feels entirely different.
              </p>
              <Link
                href="/technology"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--signal)",
                  borderBottom: "1px solid var(--signal)",
                  paddingBottom: "2px",
                }}
              >
                Read the full brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollStory />

      {/* ── PRODUCT PREVIEW ─────────────────── */}
      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) 0",
          background: "var(--paper)",
        }}
      >
        <div className="wrap">
          <div className="section-label">The product</div>
          <div
            style={{
              display: "grid",
              gap: "clamp(48px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="two-col"
          >
            {/* Product image placeholder */}
            <div
              style={{
                background: "var(--paper-alt)",
                aspectRatio: "4/3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                border: "1px solid var(--rule)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                }}
              >
                Product photography coming soon
              </span>
            </div>

            {/* Product info */}
            <div>
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
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                  margin: "0 0 24px",
                  lineHeight: 1.0,
                }}
              >
                {product.name}
              </h2>
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
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
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
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--signal)", flexShrink: 0 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <Link
                  href="/shop/astrm-insole"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--paper)",
                    background: "var(--ink)",
                    padding: "16px 32px",
                    display: "inline-block",
                  }}
                >
                  View product
                </Link>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    color: "var(--ink)",
                  }}
                >
                  £{product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER PULL QUOTE ────────────────── */}
      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) 0",
          background: "var(--ink)",
          color: "var(--paper)",
        }}
      >
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <div className="signal-rule" style={{ marginBottom: "clamp(32px, 4vw, 48px)" }} />
          <blockquote
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.25,
              color: "var(--paper)",
              margin: "0 0 clamp(32px, 4vw, 48px)",
            }}
          >
            "The body is a system that was designed to move well. Our job is to stop getting in its way."
          </blockquote>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "16px",
                  letterSpacing: "0.04em",
                  color: "var(--paper)",
                  marginBottom: "4px",
                }}
              >
                Keerti Mathur
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "rgba(240,238,233,0.45)",
                }}
              >
                Founder · Osteopath · London
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS TEASER ─────────────────── */}
      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) 0",
          background: "var(--paper-alt)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: "clamp(48px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="two-col"
          >
            <div>
              <div className="section-label">For brands</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  color: "var(--ink)",
                  margin: "0 0 24px",
                }}
              >
                License the chassis into your footwear.
              </h2>
              <p
                style={{
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: 1.7,
                  color: "var(--ink-soft)",
                  marginBottom: "40px",
                  maxWidth: "44ch",
                }}
              >
                astrm licenses its patented midsole geometry to footwear brands. Your brand. Your silhouette. Our biomechanics inside.
              </p>
              <Link
                href="/partners"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)",
                  paddingBottom: "2px",
                }}
              >
                Partner with astrm
              </Link>
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(80px, 14vw, 180px)",
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
                color: "var(--paper)",
                WebkitTextStroke: "1px var(--rule)",
                userSelect: "none",
              }}
              aria-hidden
            >
              B
              <br />2
              <br />B
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .two-col {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .stat-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
