"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--paper)",
          borderBottom: "1px solid var(--rule)",
          padding: "0",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", height: "60px", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink)",
              }}
            >
              astrm
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: pathname.startsWith(link.href) ? "var(--signal)" : "var(--ink-soft)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop/astrm-insole"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--paper)",
                background: "var(--ink)",
                padding: "9px 20px",
                transition: "background 0.2s",
              }}
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="mobile-nav"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--ink)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--paper)",
            zIndex: 40,
            padding: "40px var(--gut)",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
          className="mobile-menu"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(28px, 6vw, 40px)",
                textTransform: "uppercase",
                color: "var(--ink)",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop/astrm-insole"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--paper)",
              background: "var(--signal)",
              padding: "14px 28px",
              alignSelf: "flex-start",
              marginTop: "8px",
            }}
          >
            Shop Now
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 720px) {
          .mobile-nav, .mobile-menu { display: none !important; }
        }
        @media (max-width: 719px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
