import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 140px) 0", minHeight: "60vh" }}>
      <div className="wrap">
        <div className="section-label">Contact</div>
        <div
          style={{
            display: "grid",
            gap: "clamp(48px, 6vw, 80px)",
            alignItems: "start",
          }}
          className="two-col"
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 72px)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                color: "var(--ink)",
                margin: "0 0 clamp(24px, 3vw, 40px)",
              }}
            >
              Get in touch.
            </h1>
            <p
              style={{
                fontSize: "clamp(17px, 1.4vw, 20px)",
                lineHeight: 1.7,
                color: "var(--ink-soft)",
                maxWidth: "40ch",
                marginBottom: "clamp(32px, 4vw, 48px)",
              }}
            >
              For product enquiries, partnerships or press. We reply within one business day.
            </p>
            <a
              href="mailto:keerti@astrm.co.uk"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                letterSpacing: "0.06em",
                color: "var(--signal)",
                borderBottom: "1px solid var(--signal)",
                paddingBottom: "2px",
              }}
            >
              keerti@astrm.co.uk
            </a>
          </div>

          {/* Contact form */}
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            action="#"
            method="POST"
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--ink-soft)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  style={{
                    width: "100%",
                    background: "none",
                    border: "1px solid var(--rule)",
                    borderRadius: 0,
                    padding: "14px 16px",
                    fontFamily: "var(--font-body)",
                    fontSize: "17px",
                    color: "var(--ink)",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                style={{
                  width: "100%",
                  background: "none",
                  border: "1px solid var(--rule)",
                  borderRadius: 0,
                  padding: "14px 16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "17px",
                  color: "var(--ink)",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "var(--ink)",
                color: "var(--paper)",
                border: "none",
                padding: "16px 32px",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (min-width: 720px) {
          .two-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
