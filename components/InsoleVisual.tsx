"use client";

import { useEffect, useRef } from "react";

export type Zone = "splay" | "flex" | "recoil" | null;

interface Props {
  zone?: Zone;
  size?: string;
}

export default function InsoleVisual({
  zone = null,
  size = "clamp(160px, 22vw, 280px)",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let angle = 0;
    function tick() {
      angle += 0.004;
      if (containerRef.current) {
        const rx = Math.sin(angle * 0.7) * 6 + 14;
        const ry = angle * 22;
        const rz = Math.sin(angle * 0.4) * 2;
        containerRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
      }
      raf = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  const s = zone === "splay";
  const f = zone === "flex";
  const r = zone === "recoil";
  const any = zone !== null;

  const splayed = (opacity: number, active: number) =>
    ({ opacity: s ? active : any ? opacity : active * 0.7, transition: "opacity 0.7s ease" } as React.CSSProperties);
  const flexed = (opacity: number, active: number) =>
    ({ opacity: f ? active : any ? opacity : active * 0.7, transition: "opacity 0.7s ease" } as React.CSSProperties);
  const recoiled = (opacity: number, active: number) =>
    ({ opacity: r ? active : any ? opacity : active * 0.7, transition: "opacity 0.7s ease" } as React.CSSProperties);

  return (
    <div style={{ perspective: "800px", width: size }}>
      <div ref={containerRef} style={{ transformStyle: "preserve-3d" }}>
        <svg
          viewBox="0 0 340 560"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            display: "block",
            filter: `drop-shadow(0 ${any ? 0 : 24}px ${any ? 56 : 48}px rgba(195,80,56,${any ? 0.28 : 0.14}))`,
            transition: "filter 0.8s ease",
          }}
        >
          <defs>
            <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EAE5D8" />
              <stop offset="100%" stopColor="#C8C2B4" />
            </linearGradient>
            <radialGradient id="sg" cx="50%" cy="12%" r="32%">
              <stop offset="0%" stopColor="rgba(195,80,56,0.38)" />
              <stop offset="100%" stopColor="rgba(195,80,56,0)" />
            </radialGradient>
            <radialGradient id="fg" cx="50%" cy="56%" r="28%">
              <stop offset="0%" stopColor="rgba(195,80,56,0.32)" />
              <stop offset="100%" stopColor="rgba(195,80,56,0)" />
            </radialGradient>
            <radialGradient id="rg" cx="50%" cy="87%" r="28%">
              <stop offset="0%" stopColor="rgba(195,80,56,0.36)" />
              <stop offset="100%" stopColor="rgba(195,80,56,0)" />
            </radialGradient>
          </defs>

          {/* Body */}
          <path
            d="M170,20 C210,20 250,50 260,100 C268,140 262,190 256,230 C252,260 255,300 260,330 C270,380 272,420 260,460 C248,500 210,540 170,545 C130,540 92,500 80,460 C68,420 70,380 80,330 C85,300 88,260 84,230 C78,190 72,140 80,100 C90,50 130,20 170,20 Z"
            fill="url(#ig)"
            stroke="rgba(195,80,56,0.10)"
            strokeWidth="1"
          />

          {/* Zone glows */}
          <ellipse cx="170" cy="68" rx="92" ry="68" fill="url(#sg)" style={{ opacity: s ? 1 : 0, transition: "opacity 0.8s ease" }} />
          <ellipse cx="170" cy="314" rx="84" ry="60" fill="url(#fg)" style={{ opacity: f ? 1 : 0, transition: "opacity 0.8s ease" }} />
          <ellipse cx="170" cy="490" rx="74" ry="54" fill="url(#rg)" style={{ opacity: r ? 1 : 0, transition: "opacity 0.8s ease" }} />

          {/* Arch structural shape */}
          <path
            d="M102,312 C112,292 132,279 170,279 C208,279 228,292 238,312 C248,332 246,362 238,382 C228,402 208,416 170,416 C132,416 112,402 102,382 C94,362 92,332 102,312 Z"
            fill="rgba(195,80,56,0.09)"
            style={flexed(0.25, 1)}
          />

          {/* Arch lines */}
          {[
            "M120,240 C135,235 165,232 220,238",
            "M105,300 C125,292 165,288 235,296",
            "M108,360 C128,354 162,351 232,358",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={f ? "rgba(195,80,56,0.85)" : "rgba(195,80,56,0.35)"}
              strokeWidth={f ? 1.8 : 1.2}
              fill="none"
              strokeDasharray="4 3"
              style={{ ...flexed(0.18, 1), transition: "opacity 0.7s ease, stroke 0.7s ease, stroke-width 0.7s ease" }}
            />
          ))}

          {/* Splay lines */}
          {[
            [145, 36, 140, 68],
            [160, 28, 158, 64],
            [175, 28, 176, 64],
            [191, 34, 193, 68],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={s ? "rgba(195,80,56,0.9)" : "rgba(195,80,56,0.28)"}
              strokeWidth={s ? 2.2 : 1}
              style={{ ...splayed(0.16, 1), transition: "opacity 0.7s ease, stroke 0.7s ease, stroke-width 0.7s ease" }}
            />
          ))}

          {/* Recoil heel lines */}
          {[432, 456, 478, 502].map((y, i) => (
            <path
              key={i}
              d={`M${130 + i * 4},${y} C${152 + i * 2},${y - 4} ${188 - i * 2},${y - 4} ${210 - i * 4},${y}`}
              stroke={r ? "rgba(195,80,56,0.85)" : "rgba(195,80,56,0.28)"}
              strokeWidth={r ? 1.8 : 1}
              fill="none"
              style={{ ...recoiled(0.14, 1), transition: "opacity 0.7s ease, stroke 0.7s ease, stroke-width 0.7s ease" }}
            />
          ))}

          {/* Annotations */}
          <g style={splayed(0.18, 1)}>
            <line x1="218" y1="50" x2="240" y2="50" stroke="rgba(195,80,56,0.7)" strokeWidth="0.8" />
            <text x="244" y="54" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(195,80,56,0.8)" letterSpacing="0.1em">SPLAY</text>
          </g>
          <g style={flexed(0.18, 1)}>
            <line x1="240" y1="328" x2="260" y2="328" stroke="rgba(195,80,56,0.7)" strokeWidth="0.8" />
            <text x="264" y="332" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(195,80,56,0.8)" letterSpacing="0.1em">FLEX</text>
          </g>
          <g style={recoiled(0.18, 1)}>
            <line x1="90" y1="470" x2="70" y2="470" stroke="rgba(195,80,56,0.7)" strokeWidth="0.8" />
            <text x="12" y="474" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(195,80,56,0.8)" letterSpacing="0.1em">RECOIL</text>
          </g>

          {/* Spine */}
          <line x1="170" y1="60" x2="170" y2="522" stroke="rgba(195,80,56,0.07)" strokeWidth="1" strokeDasharray="6 4" />

          {/* Texture dots */}
          {Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => (
              <circle key={`${row}-${col}`} cx={130 + col * 26} cy={142 + row * 50} r="2" fill="rgba(195,80,56,0.09)" />
            ))
          )}
        </svg>
      </div>
    </div>
  );
}
