import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
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
            ◆ The technology
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
            Inside the chassis.
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 1.6vw, 22px)",
              lineHeight: 1.7,
              color: "rgba(240,238,233,0.65)",
              maxWidth: "54ch",
              marginBottom: "clamp(40px, 5vw, 64px)",
            }}
          >
            The astrm chassis is engineered around three measurable functions of the human foot. Each is suppressed by conventional midsole design. Each is designed to be restored.
          </p>
          <Link
            href="/technology/evidence"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--paper)",
              borderBottom: "1px solid rgba(240,238,233,0.3)",
              paddingBottom: "2px",
            }}
          >
            View evidence status
          </Link>
        </div>
      </section>

      <section style={{ padding: "clamp(80px, 10vw, 140px) 0", background: "var(--paper)" }}>
        <div className="wrap">
          {[
            {
              num: "01",
              title: "Forefoot Splay",
              body: "The foot's toes are designed to spread laterally under load, increasing the base of support and distributing pressure across the metatarsal heads. Conventional midsoles and uppers constrain this motion. The astrm chassis is designed to allow it.",
            },
            {
              num: "02",
              title: "Medial Arch Flex",
              body: "During the propulsive phase of gait, the medial arch is intended to flex and engage the plantar fascia as a spring. Rigid midsoles interrupt this sequence. The chassis is tuned to allow controlled medial arch motion through the step.",
            },
            {
              num: "03",
              title: "Elastic Recoil",
              body: "At push-off, the arch is designed to spring rather than absorb. The chassis geometry is tuned to return energy through elastic recoil, the way the foot's plantar fascia is intended to function.",
            },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "clamp(40px, 5vw, 64px)",
                paddingBottom: "clamp(40px, 5vw, 64px)",
                display: "grid",
                gap: "clamp(32px, 4vw, 64px)",
              }}
              className="tech-row"
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
                  Fig. {item.num}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 3.5vw, 48px)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                    margin: 0,
                    lineHeight: 1.0,
                  }}
                >
                  {item.title}
                </h2>
              </div>
              <p
                style={{
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: 1.75,
                  color: "var(--ink-soft)",
                  maxWidth: "54ch",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (min-width: 720px) {
          .tech-row { grid-template-columns: 5fr 7fr !important; }
        }
      `}</style>
    </>
  );
}
