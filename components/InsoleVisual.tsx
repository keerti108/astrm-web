"use client";

import { useEffect, useRef } from "react";

export default function InsoleVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let angle = 0;

    function animate() {
      angle += 0.006;
      if (containerRef.current) {
        const rotX = Math.sin(angle * 0.7) * 4 + 18;
        const rotY = angle * 30;
        const rotZ = Math.sin(angle * 0.4) * 2;
        containerRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      }
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "clamp(360px, 48vw, 580px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        perspective: "900px",
      }}
      aria-label="astrm insole diagram"
    >
      {/* 3D insole placeholder */}
      <div
        style={{
          perspective: "900px",
          width: "clamp(180px, 28vw, 340px)",
        }}
      >
        <div
          ref={containerRef}
          style={{
            transformStyle: "preserve-3d",
            transition: "none",
          }}
        >
          <svg
            viewBox="0 0 340 560"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", display: "block", filter: "drop-shadow(0 32px 64px rgba(195,80,56,0.25))" }}
          >
            {/* Insole outline */}
            <defs>
              <linearGradient id="insoleGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8E3D8" />
                <stop offset="100%" stopColor="#C8C2B4" />
              </linearGradient>
              <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C35038" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#C35038" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Main body */}
            <path
              d="M170,20 C210,20 250,50 260,100 C268,140 262,190 256,230 C252,260 255,300 260,330 C270,380 272,420 260,460 C248,500 210,540 170,545 C130,540 92,500 80,460 C68,420 70,380 80,330 C85,300 88,260 84,230 C78,190 72,140 80,100 C90,50 130,20 170,20 Z"
              fill="url(#insoleGrad)"
              stroke="rgba(195,80,56,0.15)"
              strokeWidth="1"
            />

            {/* Arch zone */}
            <path
              d="M100,310 C110,290 130,278 170,278 C210,278 230,290 240,310 C250,330 248,360 240,380 C230,400 210,415 170,415 C130,415 110,400 100,380 C92,360 90,330 100,310 Z"
              fill="url(#archGrad)"
            />

            {/* Chassis lines */}
            <path
              d="M120,240 C135,235 165,232 220,238"
              stroke="rgba(195,80,56,0.6)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 3"
            />
            <path
              d="M105,300 C125,292 165,288 235,296"
              stroke="rgba(195,80,56,0.6)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 3"
            />
            <path
              d="M108,360 C128,354 162,351 232,358"
              stroke="rgba(195,80,56,0.5)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 3"
            />

            {/* Toe splay lines */}
            <line x1="145" y1="35" x2="140" y2="62" stroke="rgba(195,80,56,0.4)" strokeWidth="1" />
            <line x1="160" y1="28" x2="158" y2="58" stroke="rgba(195,80,56,0.4)" strokeWidth="1" />
            <line x1="175" y1="28" x2="176" y2="58" stroke="rgba(195,80,56,0.4)" strokeWidth="1" />
            <line x1="190" y1="33" x2="192" y2="62" stroke="rgba(195,80,56,0.4)" strokeWidth="1" />

            {/* Leader annotation — splay */}
            <line x1="220" y1="50" x2="240" y2="50" stroke="rgba(195,80,56,0.5)" strokeWidth="0.8" />
            <text x="244" y="54" fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill="rgba(195,80,56,0.7)" letterSpacing="0.08em">SPLAY</text>

            {/* Leader annotation — arch */}
            <line x1="242" y1="330" x2="260" y2="330" stroke="rgba(195,80,56,0.5)" strokeWidth="0.8" />
            <text x="263" y="334" fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill="rgba(195,80,56,0.7)" letterSpacing="0.08em">ARCH</text>

            {/* Leader annotation — recoil */}
            <line x1="90" y1="470" x2="72" y2="470" stroke="rgba(195,80,56,0.5)" strokeWidth="0.8" />
            <text x="14" y="474" fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill="rgba(195,80,56,0.7)" letterSpacing="0.08em">RECOIL</text>

            {/* Center spine */}
            <line x1="170" y1="60" x2="170" y2="520" stroke="rgba(195,80,56,0.12)" strokeWidth="1" strokeDasharray="6 4" />

            {/* Surface texture dots */}
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 4 }).map((_, col) => (
                <circle
                  key={`dot-${row}-${col}`}
                  cx={130 + col * 26}
                  cy={140 + row * 50}
                  r="2"
                  fill="rgba(195,80,56,0.12)"
                />
              ))
            )}
          </svg>
        </div>
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(240,238,233,0.3)",
          marginTop: "clamp(16px, 2vw, 24px)",
          textAlign: "center",
        }}
      >
        Fig. 01 · astrm chassis
      </p>
    </div>
  );
}
