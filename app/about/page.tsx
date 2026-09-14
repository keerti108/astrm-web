import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) 0",
          background: "var(--ink)",
          color: "var(--paper)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: "clamp(48px, 6vw, 80px)",
              alignItems: "end",
            }}
            className="about-hero-grid"
          >
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
                ◆ About
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(48px, 7vw, 100px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.92,
                  color: "var(--paper)",
                  margin: 0,
                }}
              >
                Movement<br />
                is<br />
                medicine.
              </h1>
            </div>
            <p
              style={{
                fontSize: "clamp(18px, 1.6vw, 22px)",
                lineHeight: 1.7,
                color: "rgba(240,238,233,0.65)",
                maxWidth: "48ch",
              }}
            >
              astrm was founded in London by Keerti Mathur, an osteopath with over twenty years of boutique clinical experience treating complex musculoskeletal conditions.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(80px, 10vw, 140px) 0", background: "var(--paper)" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: "clamp(48px, 6vw, 80px)",
              alignItems: "start",
            }}
            className="two-col"
          >
            <div>
              <div className="section-label">The founder</div>

              {/* Photo placeholder */}
              <div
                style={{
                  background: "var(--paper-alt)",
                  aspectRatio: "3/4",
                  maxWidth: "320px",
                  border: "1px solid var(--rule)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink-soft)",
                  }}
                >
                  Photo
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  color: "var(--ink)",
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
                  color: "var(--ink-soft)",
                }}
              >
                Founder · Osteopath · London
              </p>
            </div>

            <div>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "var(--signal)",
                  marginBottom: "clamp(28px, 3vw, 44px)",
                }}
              />
              <blockquote
                style={{
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  margin: "0 0 clamp(32px, 4vw, 48px)",
                  maxWidth: "28ch",
                }}
              >
                "Movement is medicine."
              </blockquote>
              <div
                style={{
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: 1.75,
                  color: "var(--ink-soft)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.4em",
                }}
              >
                <p>
                  astrm was founded by Keerti Mathur, an Osteopath with over twenty years of boutique clinical experience. His work has focused on the treatment of complex musculoskeletal conditions, product development consulting and teaching.
                </p>
                <p>
                  These experiences have shaped his belief that movement is medicine, a philosophy that sits at the heart of both his clinical practice and the technologies being developed at astrm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 720px) {
          .about-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .two-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
