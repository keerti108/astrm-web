"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import InsoleVisual, { Zone } from "@/components/InsoleVisual";

const sections: {
  id: string;
  zone: Zone;
  bg: string;
}[] = [
  { id: "hero",     zone: null,      bg: "var(--ink)" },
  { id: "tech",     zone: null,      bg: "var(--paper)" },
  { id: "splay",    zone: "splay",   bg: "var(--ink)" },
  { id: "flex",     zone: "flex",    bg: "var(--paper-alt)" },
  { id: "recoil",   zone: "recoil",  bg: "var(--paper)" },
  { id: "product",  zone: null,      bg: "var(--paper)" },
  { id: "founder",  zone: null,      bg: "var(--ink)" },
  { id: "b2b",      zone: null,      bg: "var(--paper-alt)" },
];

export default function Home() {
  const product = products[0];
  const [activeZone, setActiveZone] = useState<Zone>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveZone(sections[i].zone); },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const panelText = (bg: string) => bg === "var(--ink)"
    ? "var(--paper)"
    : "var(--ink)";

  const panelSoft = (bg: string) => bg === "var(--ink)"
    ? "rgba(240,238,233,0.62)"
    : "var(--ink-soft)";

  return (
    <div style={{ position: "relative" }}>
      {/* ── STICKY INSOLE LAYER ──────────────────────── */}
      <div
        className="ss-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "var(--wrap)",
            margin: "0 auto",
            paddingInline: "var(--gut)",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "center",
          }}
        >
          <div /> {/* left col — content scrolls here */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(20px, 3vw, 36px)" }}>
            <InsoleVisual zone={activeZone} size="clamp(200px, 26vw, 340px)" />
            {/* Zone dot indicators */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
              {(["splay", "flex", "recoil"] as Zone[]).map((z) => (
                <div key={z as string} style={{
                  width: "5px", height: "5px", borderRadius: "50%",
                  background: activeZone === z ? "var(--signal)" : "rgba(128,128,128,0.3)",
                  transition: "background 0.5s ease, transform 0.4s ease",
                  transform: `scale(${activeZone === z ? 1.7 : 1})`,
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ALL PANELS ───────────────────────────────── */}
      <div style={{ marginTop: "-100vh" }}>

        {/* ─ 01 HERO ────────────────────────────────── */}
        <section
          ref={(el) => { refs.current[0] = el; }}
          style={{ minHeight: "100vh", background: "var(--ink)", color: "var(--paper)", position: "relative" }}
        >
          {/* Rule lines */}
          <div aria-hidden style={{
            position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--paper) 80px)",
          }} />
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(80px, 10vw, 140px)",
            minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
            position: "relative", zIndex: 1,
          }}>
            <div style={{ maxWidth: "52ch" }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--signal)", marginBottom: "clamp(20px, 2.5vw, 32px)",
              }}>
                ◆ Biomechanical insole
              </p>
              <h1 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(52px, 8vw, 112px)",
                lineHeight: 0.93, letterSpacing: "-0.025em",
                textTransform: "uppercase", color: "var(--paper)",
                margin: "0 0 clamp(28px, 3vw, 44px)",
              }}>
                Move<br />
                <span style={{ color: "var(--signal)", fontStyle: "italic" }}>ment</span><br />
                Is<br />
                Medicine.
              </h1>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.65,
                color: "rgba(240,238,233,0.7)", maxWidth: "38ch",
                marginBottom: "clamp(40px, 5vw, 64px)",
              }}>
                Engineered to let your foot splay, flex, and spring back. Inside any shoe you already own.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <Link href="/shop/astrm-insole" style={{
                  fontFamily: "var(--font-mono)", fontSize: "12px",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--ink)", background: "var(--paper)",
                  padding: "16px 36px", display: "inline-block",
                }}>
                  Shop Now · £{product.price}
                </Link>
                <Link href="/technology" style={{
                  fontFamily: "var(--font-mono)", fontSize: "12px",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(240,238,233,0.55)",
                  borderBottom: "1px solid rgba(240,238,233,0.2)", paddingBottom: "2px",
                }}>
                  How it works
                </Link>
              </div>

              {/* Stat row */}
              <div style={{
                borderTop: "1px solid rgba(240,238,233,0.10)",
                paddingTop: "clamp(28px, 3vw, 40px)",
                marginTop: "clamp(48px, 6vw, 80px)",
                display: "grid", gridTemplateColumns: "repeat(3,1fr)",
                gap: "clamp(16px, 3vw, 40px)",
              }}>
                {[
                  { v: "20+", l: "Years clinical insight" },
                  { v: "Any shoe", l: "No silhouette change" },
                  { v: "One size up", l: "Fits with existing insole removed" },
                ].map((s) => (
                  <div key={s.l}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: "-0.02em",
                      color: "var(--paper)", lineHeight: 1, marginBottom: "8px",
                    }}>{s.v}</p>
                    <p style={{
                      fontFamily: "var(--font-mono)", fontSize: "11px",
                      letterSpacing: "0.10em", textTransform: "uppercase",
                      color: "rgba(240,238,233,0.38)", lineHeight: 1.4,
                    }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─ 02 TECHNOLOGY INTRO ────────────────────── */}
        <section
          ref={(el) => { refs.current[1] = el; }}
          style={{ minHeight: "100vh", background: "var(--paper)", color: "var(--ink)", display: "flex", alignItems: "center" }}
        >
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(80px, 10vw, 140px)",
          }}>
            <div style={{ maxWidth: "48ch" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--ink-soft)", marginBottom: "clamp(20px, 2.5vw, 32px)",
              }}>The technology</div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(32px, 5vw, 68px)",
                lineHeight: 1.02, letterSpacing: "-0.02em",
                textTransform: "uppercase", color: "var(--ink)",
                margin: "0 0 clamp(24px, 3vw, 40px)",
              }}>
                Your foot was designed to splay, flex, and spring back.{" "}
                <span style={{ color: "var(--signal)" }}>Your shoes stopped it.</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "var(--ink-soft)", marginBottom: "clamp(16px, 2vw, 24px)",
              }}>
                The astrm chassis is engineered to restore three movements conventional midsoles suppress: forefoot splay under load, controlled medial arch flex during propulsion, and elastic recoil at push-off.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "var(--ink-soft)", marginBottom: "clamp(32px, 4vw, 48px)",
              }}>
                The result sits inside any shoe. The fit looks no different. The walk feels entirely different.
              </p>
              <Link href="/technology" style={{
                fontFamily: "var(--font-mono)", fontSize: "12px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--signal)", borderBottom: "1px solid var(--signal)", paddingBottom: "2px",
              }}>
                Read the full brief
              </Link>
            </div>
          </div>
        </section>

        {/* ─ 03 SPLAY ───────────────────────────────── */}
        <section
          ref={(el) => { refs.current[2] = el; }}
          style={{ minHeight: "100vh", background: "var(--ink)", color: "var(--paper)", display: "flex", alignItems: "center", position: "relative" }}
        >
          <div aria-hidden style={{
            position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--paper) 80px)",
          }} />
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(80px, 10vw, 140px)",
            position: "relative", zIndex: 1,
          }}>
            <div style={{ maxWidth: "44ch" }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--signal)", marginBottom: "clamp(14px, 1.5vw, 20px)",
              }}>01 · Splay</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 64px)",
                lineHeight: 1.02, letterSpacing: "-0.02em",
                textTransform: "uppercase", color: "var(--paper)",
                margin: "0 0 clamp(20px, 2.5vw, 36px)",
              }}>
                The forefoot<br />spreads under load.
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "rgba(240,238,233,0.65)", marginBottom: "24px",
              }}>
                Under load, your toes are designed to splay outward, distributing force across all five metatarsals. A rigid midsole prevents this. The astrm chassis lets it happen.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "rgba(240,238,233,0.65)",
              }}>
                Where most insoles compress the forefoot, the chassis geometry opens it. Each step distributes load the way anatomy intended.
              </p>
            </div>
          </div>
        </section>

        {/* ─ 04 FLEX ────────────────────────────────── */}
        <section
          ref={(el) => { refs.current[3] = el; }}
          style={{ minHeight: "100vh", background: "var(--paper-alt)", color: "var(--ink)", display: "flex", alignItems: "center" }}
        >
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(80px, 10vw, 140px)",
          }}>
            <div style={{ maxWidth: "44ch" }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--signal)", marginBottom: "clamp(14px, 1.5vw, 20px)",
              }}>02 · Flex</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 64px)",
                lineHeight: 1.02, letterSpacing: "-0.02em",
                textTransform: "uppercase", color: "var(--ink)",
                margin: "0 0 clamp(20px, 2.5vw, 36px)",
              }}>
                The arch loads,<br />then propels.
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "var(--ink-soft)", marginBottom: "24px",
              }}>
                Controlled medial flex during the propulsive phase stores elastic energy in the arch. The chassis allows this motion rather than suppressing it the way a conventional insole does.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "var(--ink-soft)",
              }}>
                The arch is not a structure to be supported and kept rigid. It is a spring to be loaded and released. The flex geometry is calibrated for exactly that.
              </p>
            </div>
          </div>
        </section>

        {/* ─ 05 RECOIL ──────────────────────────────── */}
        <section
          ref={(el) => { refs.current[4] = el; }}
          style={{ minHeight: "100vh", background: "var(--paper)", color: "var(--ink)", display: "flex", alignItems: "center" }}
        >
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(80px, 10vw, 140px)",
          }}>
            <div style={{ maxWidth: "44ch" }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--signal)", marginBottom: "clamp(14px, 1.5vw, 20px)",
              }}>03 · Recoil</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 64px)",
                lineHeight: 1.02, letterSpacing: "-0.02em",
                textTransform: "uppercase", color: "var(--ink)",
                margin: "0 0 clamp(20px, 2.5vw, 36px)",
              }}>
                Energy returned<br />at push-off.
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "var(--ink-soft)", marginBottom: "24px",
              }}>
                Where most midsoles absorb and dampen, the astrm chassis returns. The heel geometry is tuned to spring rather than compress, releasing stored energy at the moment of push-off.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.75,
                color: "var(--ink-soft)",
              }}>
                The difference is measurable and felt immediately. Less fatigue, more drive, from the same step you take every day.
              </p>
            </div>
          </div>
        </section>

        {/* ─ 06 PRODUCT ─────────────────────────────── */}
        <section
          ref={(el) => { refs.current[5] = el; }}
          style={{ minHeight: "100vh", background: "var(--paper)", color: "var(--ink)", display: "flex", alignItems: "center", borderTop: "1px solid var(--rule)" }}
        >
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(80px, 10vw, 140px)",
          }}>
            <div style={{ maxWidth: "44ch" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--ink-soft)", marginBottom: "clamp(20px, 2.5vw, 32px)",
              }}>The product</div>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--ink-soft)", marginBottom: "12px",
              }}>
                {product.subtitle}
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(32px, 4.5vw, 60px)",
                textTransform: "uppercase", letterSpacing: "-0.015em",
                lineHeight: 1.0, color: "var(--ink)",
                margin: "0 0 clamp(16px, 2vw, 24px)",
              }}>
                {product.name}
              </h2>
              <p style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "var(--ink)", marginBottom: "clamp(20px, 2.5vw, 32px)",
              }}>
                £{product.price}
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: 1.7,
                color: "var(--ink-soft)", marginBottom: "clamp(24px, 3vw, 40px)",
              }}>
                {product.description}
              </p>
              <ul style={{
                listStyle: "none", padding: 0, margin: "0 0 clamp(32px, 4vw, 48px)",
                display: "flex", flexDirection: "column", gap: "10px",
              }}>
                {product.features.map((f) => (
                  <li key={f} style={{
                    fontFamily: "var(--font-mono)", fontSize: "12px",
                    letterSpacing: "0.06em", color: "var(--ink-soft)",
                    display: "flex", gap: "10px", alignItems: "flex-start",
                  }}>
                    <span style={{ color: "var(--signal)", flexShrink: 0 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/shop/astrm-insole" style={{
                fontFamily: "var(--font-mono)", fontSize: "12px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--paper)", background: "var(--ink)",
                padding: "16px 36px", display: "inline-block",
              }}>
                Shop the insole
              </Link>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.08em", color: "var(--ink-soft)",
                marginTop: "16px",
              }}>
                Free UK shipping · 30-day returns
              </p>
            </div>
          </div>
        </section>

        {/* ─ 07 FOUNDER QUOTE ───────────────────────── */}
        <section
          ref={(el) => { refs.current[6] = el; }}
          style={{ minHeight: "80vh", background: "var(--ink)", color: "var(--paper)", display: "flex", alignItems: "center", position: "relative" }}
        >
          <div aria-hidden style={{
            position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--paper) 80px)",
          }} />
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(64px, 8vw, 100px)",
            position: "relative", zIndex: 1,
          }}>
            <div style={{ maxWidth: "48ch" }}>
              <div style={{ width: "36px", height: "2px", background: "var(--signal)", marginBottom: "clamp(28px, 3.5vw, 44px)" }} />
              <blockquote style={{
                fontFamily: "var(--font-body)", fontWeight: 300, fontStyle: "italic",
                fontSize: "clamp(26px, 3.5vw, 46px)", lineHeight: 1.28,
                color: "var(--paper)", margin: "0 0 clamp(28px, 3.5vw, 44px)",
              }}>
                "The body is a system that was designed to move well. Our job is to stop getting in its way."
              </blockquote>
              <div>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "16px",
                  letterSpacing: "0.04em", color: "var(--paper)", marginBottom: "4px",
                }}>
                  Keerti Mathur
                </p>
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  letterSpacing: "0.10em", textTransform: "uppercase",
                  color: "rgba(240,238,233,0.42)",
                }}>
                  Founder · Osteopath · London
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─ 08 B2B TEASER ──────────────────────────── */}
        <section
          ref={(el) => { refs.current[7] = el; }}
          style={{ minHeight: "80vh", background: "var(--paper-alt)", color: "var(--ink)", display: "flex", alignItems: "center" }}
        >
          <div style={{
            width: "100%", maxWidth: "var(--wrap)", margin: "0 auto",
            paddingInline: "var(--gut)", paddingBlock: "clamp(64px, 8vw, 100px)",
          }}>
            <div style={{ maxWidth: "44ch" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "11px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--ink-soft)", marginBottom: "clamp(20px, 2.5vw, 32px)",
              }}>For brands</div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 52px)",
                textTransform: "uppercase", letterSpacing: "-0.015em",
                lineHeight: 1.05, color: "var(--ink)",
                margin: "0 0 clamp(20px, 2.5vw, 32px)",
              }}>
                License the chassis into your footwear.
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: 1.7,
                color: "var(--ink-soft)", marginBottom: "clamp(32px, 4vw, 48px)",
              }}>
                astrm licenses its patented midsole geometry to footwear brands. Your brand. Your silhouette. Our biomechanics inside.
              </p>
              <Link href="/partners" style={{
                fontFamily: "var(--font-mono)", fontSize: "12px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: "2px",
              }}>
                Partner with astrm
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom spacer keeps insole visible through last section */}
        <div style={{ height: "120vh", background: "var(--paper-alt)" }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ss-sticky { display: none !important; }
        }
      `}</style>
    </div>
  );
}
