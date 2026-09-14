import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Partners" };

const steps = [
  {
    num: "01",
    title: "Introduction",
    body: "Reach out to start a conversation. We'll share the technical brief under NDA and walk through the in-shoe pressure mapping data.",
  },
  {
    num: "02",
    title: "Pilot capsule",
    body: "We propose astrm as a collaboration, not a supply contract. A small capsule gives your product team real data and a story your marketing can use from day one.",
  },
  {
    num: "03",
    title: "Licence agreement",
    body: "Royalty on net sales, or supply-plus-royalty. Manufacturing runs through an established component partner. Borrowed credibility, not a new relationship to manage.",
  },
];

export default function PartnersPage() {
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
            ◆ For brands
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(44px, 7vw, 100px)",
              textTransform: "uppercase",
              letterSpacing: "-0.025em",
              lineHeight: 0.92,
              color: "var(--paper)",
              margin: "0 0 clamp(32px, 4vw, 56px)",
              maxWidth: "14ch",
            }}
          >
            License the chassis.
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 1.6vw, 22px)",
              lineHeight: 1.7,
              color: "rgba(240,238,233,0.65)",
              maxWidth: "52ch",
            }}
          >
            astrm licenses its patented midsole geometry into other brands' footwear. Your brand keeps its name, its silhouette and its customer. Revenue is royalty on net sales, or supply-plus-royalty.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(80px, 10vw, 140px) 0", background: "var(--paper)" }}>
        <div className="wrap">
          <div className="section-label">The path</div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  borderTop: "1px solid var(--rule)",
                  paddingTop: "clamp(40px, 5vw, 64px)",
                  paddingBottom: "clamp(40px, 5vw, 64px)",
                  display: "grid",
                  gap: "clamp(32px, 4vw, 64px)",
                }}
                className="step-row"
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      color: "var(--signal)",
                      display: "block",
                      marginBottom: "16px",
                    }}
                  >
                    {step.num}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(28px, 3.5vw, 44px)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.015em",
                      color: "var(--ink)",
                      margin: 0,
                      lineHeight: 1.0,
                    }}
                  >
                    {step.title}
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "clamp(17px, 1.4vw, 20px)",
                    lineHeight: 1.75,
                    color: "var(--ink-soft)",
                    maxWidth: "52ch",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "clamp(80px, 10vw, 140px) 0",
          background: "var(--paper-alt)",
          textAlign: "center",
        }}
      >
        <div className="wrap" style={{ maxWidth: "640px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              margin: "0 0 clamp(20px, 2.5vw, 36px)",
              lineHeight: 0.95,
            }}
          >
            Start a conversation.
          </h2>
          <p
            style={{
              fontSize: "clamp(17px, 1.4vw, 20px)",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              marginBottom: "clamp(36px, 4vw, 56px)",
            }}
          >
            Initial discussions are under NDA. We share the full technical brief, in-shoe pressure data, and commercial terms at that stage.
          </p>
          <Link
            href="mailto:keerti@astrm.co.uk"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--paper)",
              background: "var(--ink)",
              padding: "18px 40px",
              display: "inline-block",
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>

      <style>{`
        @media (min-width: 720px) {
          .step-row { grid-template-columns: 5fr 7fr !important; }
        }
      `}</style>
    </>
  );
}
