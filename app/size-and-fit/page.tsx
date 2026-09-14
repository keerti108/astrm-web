import type { Metadata } from "next";

export const metadata: Metadata = { title: "Size & Fit" };

const sizeGuide = [
  { size: "XS", uk: "3–4", eu: "36–37", us: "5–6 W / 3–4 M" },
  { size: "S",  uk: "5–6", eu: "38–39", us: "7–8 W / 5–6 M" },
  { size: "M",  uk: "7–8", eu: "40–42", us: "9–10 W / 7–8 M" },
  { size: "L",  uk: "9–10", eu: "43–44", us: "11–12 W / 9–10 M" },
  { size: "XL", uk: "11–12", eu: "45–47", us: "12–13 M" },
];

export default function SizeAndFitPage() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 140px) 0", minHeight: "60vh" }}>
      <div className="wrap">
        <div className="section-label">Size &amp; Fit</div>
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
          Finding your size.
        </h1>
        <p
          style={{
            fontSize: "clamp(17px, 1.4vw, 20px)",
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            maxWidth: "52ch",
            marginBottom: "clamp(56px, 7vw, 88px)",
          }}
        >
          The astrm insole replaces the existing footbed in your shoe. Remove your shoe's insole first, then insert astrm. If your shoe has a non-removable insole, size up by half.
        </p>

        {/* Size table */}
        <div style={{ overflowX: "auto", marginBottom: "clamp(56px, 7vw, 88px)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--ink)" }}>
                {["astrm size", "UK", "EU", "US"].map((h) => (
                  <th
                    key={h}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--ink-soft)",
                      padding: "0 16px 14px 0",
                      textAlign: "left",
                      fontWeight: 400,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizeGuide.map((row, i) => (
                <tr
                  key={row.size}
                  style={{ borderBottom: "1px solid var(--rule)", background: i % 2 === 0 ? "transparent" : "var(--paper-alt)" }}
                >
                  <td
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "var(--ink)",
                      padding: "18px 16px 18px 0",
                    }}
                  >
                    {row.size}
                  </td>
                  <td style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--ink-soft)", padding: "18px 16px 18px 0" }}>{row.uk}</td>
                  <td style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--ink-soft)", padding: "18px 16px 18px 0" }}>{row.eu}</td>
                  <td style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--ink-soft)", padding: "18px 16px 18px 0" }}>{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: "var(--paper-alt)",
            border: "1px solid var(--rule)",
            padding: "clamp(28px, 3vw, 44px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--signal)",
              marginBottom: "12px",
            }}
          >
            ◆ Fit note
          </p>
          <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.7, color: "var(--ink-soft)" }}>
            Between sizes? Choose the smaller. The chassis is designed with a modest trim allowance. Most insoles can be trimmed at the toe end using scissors. A fit guide is included in the box.
          </p>
        </div>
      </div>
    </section>
  );
}
