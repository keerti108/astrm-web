import type { Metadata } from "next";

export const metadata: Metadata = { title: "Evidence" };

const evidence = [
  { item: "Patent geometry", status: "Granted", note: "Verify exact wording before publishing" },
  { item: "In-shoe pressure mapping (F-scan)", status: "Available under NDA", note: "" },
  { item: "Gait-lab study", status: "In progress", note: "" },
  { item: "Manufacturing partner", status: "Contracted", note: "Do not name publicly until agreement is checked" },
  { item: "Claims review", status: "In progress", note: "" },
];

export default function EvidencePage() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 140px) 0", minHeight: "60vh" }}>
      <div className="wrap">
        <div className="section-label">Evidence status</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 72px)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            margin: "0 0 clamp(16px, 2vw, 24px)",
            lineHeight: 0.95,
          }}
        >
          What we can say. And when.
        </h1>
        <p
          style={{
            fontSize: "clamp(17px, 1.4vw, 20px)",
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            maxWidth: "54ch",
            marginBottom: "clamp(56px, 7vw, 88px)",
          }}
        >
          This is a live status board. Every item is either true today or marked in progress. We add nothing before the evidence exists.
        </p>

        <div
          style={{
            border: "1px solid var(--rule)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              padding: "14px 28px",
              background: "var(--paper-alt)",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
              }}
            >
              Item
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
              }}
            >
              Status
            </p>
          </div>
          {evidence.map((row, i) => (
            <div
              key={row.item}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                padding: "20px 28px",
                borderBottom: i < evidence.length - 1 ? "1px solid var(--rule)" : "none",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(16px, 1.3vw, 18px)",
                  color: "var(--ink)",
                }}
              >
                {row.item}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: row.status.includes("progress") ? "var(--ink-soft)" : "var(--signal)",
                  whiteSpace: "nowrap",
                }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
