"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import InsoleVisual, { Zone } from "./InsoleVisual";

const panels: {
  zone: Zone;
  label: string;
  heading: string;
  body: string;
}[] = [
  {
    zone: null,
    label: "The chassis",
    heading: "Three movements.\nOne insole.",
    body: "Conventional midsoles suppress the foot's natural mechanics. The astrm chassis restores them. Splay, flex, and recoil: each phase engineered, each working in concert.",
  },
  {
    zone: "splay",
    label: "01 · Splay",
    heading: "The forefoot\nspreads under load.",
    body: "Under load, your toes are designed to splay outward, distributing force across all five metatarsals. A rigid midsole prevents this. The astrm chassis lets it happen.",
  },
  {
    zone: "flex",
    label: "02 · Flex",
    heading: "The arch loads,\nthen propels.",
    body: "Controlled medial flex during the propulsive phase stores elastic energy in the arch. The chassis allows this motion rather than suppressing it the way a conventional insole does.",
  },
  {
    zone: "recoil",
    label: "03 · Recoil",
    heading: "Energy returned\nat push-off.",
    body: "Where most midsoles absorb and dampen, the astrm chassis returns. The heel geometry is tuned to spring rather than compress, releasing stored energy at the moment of push-off.",
  },
];

export default function ScrollStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = panelRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const zone = panels[activeIndex]?.zone ?? null;

  return (
    <section style={{ background: "var(--ink)", position: "relative", color: "var(--paper)" }}>
      {/* Rule lines */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 79px, var(--paper) 80px)",
      }} />

      {/* Sticky insole layer (desktop) */}
      <div className="ss-sticky" style={{
        position: "sticky", top: 0, height: "100vh",
        pointerEvents: "none", zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: "100%", maxWidth: "var(--wrap)", paddingInline: "var(--gut)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px, 4vw, 56px)", alignItems: "center" }}>
            {/* Left: empty (text panels scroll here) */}
            <div />
            {/* Right: insole + dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(24px, 3vw, 40px)" }}>
              <InsoleVisual zone={zone} size="clamp(200px, 26vw, 340px)" />
              {/* Dot track */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
                {panels.map((_, i) => (
                  <div key={i} style={{
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: activeIndex === i ? "var(--signal)" : "rgba(240,238,233,0.18)",
                    transition: "background 0.5s ease, transform 0.4s ease",
                    transform: `scale(${activeIndex === i ? 1.7 : 1})`,
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story panels */}
      <div style={{ marginTop: "-100vh", position: "relative", zIndex: 1 }}>
        {panels.map((panel, i) => (
          <div
            key={i}
            ref={(el) => { panelRefs.current[i] = el; }}
            style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
          >
            <div style={{ width: "100%", maxWidth: "var(--wrap)", paddingInline: "var(--gut)", paddingBlock: "clamp(64px, 8vw, 100px)", margin: "0 auto" }}>
              {/* Mobile insole inline (hidden on desktop) */}
              <div className="ss-mobile-insole" style={{ display: "none", justifyContent: "center", marginBottom: "clamp(32px, 5vw, 48px)" }}>
                <InsoleVisual zone={panel.zone} size="clamp(140px, 44vw, 200px)" />
              </div>

              {/* Text block */}
              <div
                className="ss-text"
                style={{
                  maxWidth: "40ch",
                  transition: "opacity 0.7s ease, transform 0.6s ease",
                  opacity: activeIndex === i ? 1 : 0.14,
                  transform: activeIndex === i ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--signal)", marginBottom: "clamp(14px, 1.5vw, 20px)",
                }}>
                  {panel.label}
                </p>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: 1.05, letterSpacing: "-0.02em",
                  textTransform: "uppercase", color: "var(--paper)",
                  whiteSpace: "pre-line",
                  margin: "0 0 clamp(18px, 2vw, 28px)",
                }}>
                  {panel.heading}
                </h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontWeight: 300,
                  fontSize: "clamp(17px, 1.4vw, 20px)",
                  lineHeight: 1.72, color: "rgba(240,238,233,0.62)",
                }}>
                  {panel.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom spacer — keeps insole sticky through the last panel */}
        <div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Link
            href="/shop/astrm-insole"
            style={{
              fontFamily: "var(--font-mono)", fontSize: "12px",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--ink)", background: "var(--paper)",
              padding: "16px 40px", display: "inline-block",
              pointerEvents: "auto",
            }}
          >
            Shop the insole · £95
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ss-sticky { display: none !important; }
          .ss-mobile-insole { display: flex !important; }
          .ss-text {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
