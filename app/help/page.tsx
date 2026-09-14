import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Help" };

const topics = [
  { slug: "returns", label: "Returns & refunds", desc: "30-day returns policy and how to start a return." },
  { slug: "shipping", label: "Shipping", desc: "UK and international shipping times and costs." },
  { slug: "sizing", label: "Sizing questions", desc: "How to find your size and what to do between sizes." },
  { slug: "care", label: "Insole care", desc: "How to clean and maintain your astrm insole." },
];

export default function HelpPage() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 140px) 0", minHeight: "60vh" }}>
      <div className="wrap">
        <div className="section-label">Help centre</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 72px)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "var(--ink)",
            margin: "0 0 clamp(48px, 6vw, 80px)",
          }}
        >
          How can we help?
        </h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/help/${t.slug}`}
              style={{
                display: "grid",
                borderTop: "1px solid var(--rule)",
                padding: "clamp(24px, 3vw, 36px) 0",
                textDecoration: "none",
                gap: "clamp(16px, 2vw, 24px)",
              }}
              className="help-row"
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  margin: 0,
                  transition: "color 0.2s",
                }}
              >
                {t.label}
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 1.2vw, 18px)",
                  color: "var(--ink-soft)",
                  lineHeight: 1.6,
                }}
              >
                {t.desc}
              </p>
            </Link>
          ))}
          <div style={{ borderTop: "1px solid var(--rule)" }} />
        </div>
        <div style={{ marginTop: "clamp(48px, 6vw, 80px)" }}>
          <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Can&apos;t find an answer?{" "}
            <Link href="/contact" style={{ color: "var(--signal)", borderBottom: "1px solid var(--signal)", paddingBottom: "1px" }}>
              Contact us
            </Link>
          </p>
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .help-row { grid-template-columns: 2fr 3fr !important; }
        }
      `}</style>
    </section>
  );
}
