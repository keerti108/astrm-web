import Link from "next/link";
import { footerNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "clamp(64px, 8vw, 120px) 0 clamp(40px, 5vw, 60px)",
        marginTop: "auto",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            marginBottom: "clamp(64px, 8vw, 100px)",
          }}
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "22px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              astrm
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "15px",
                color: "rgba(240,238,233,0.5)",
                marginTop: "12px",
                lineHeight: 1.5,
              }}
            >
              Movement is medicine.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--signal)",
                marginBottom: "20px",
              }}
            >
              Shop
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerNav.shop.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "rgba(240,238,233,0.7)",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--signal)",
                marginBottom: "20px",
              }}
            >
              Company
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerNav.company.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "rgba(240,238,233,0.7)",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--signal)",
                marginBottom: "20px",
              }}
            >
              Help
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerNav.help.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "rgba(240,238,233,0.7)",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(240,238,233,0.12)",
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(240,238,233,0.4)",
            }}
          >
            © {new Date().getFullYear()} astrm Ltd. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "rgba(240,238,233,0.3)",
            }}
          >
            London · UK
          </p>
        </div>
      </div>
    </footer>
  );
}
