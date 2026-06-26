"use client"

/** Reusable animated SVG graphic elements for the landing page */

/** Animated grid background */
export const GridPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 h-full w-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="rgba(139, 92, 246, 0.04)"
          strokeWidth="0.5"
        />
      </pattern>
      <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <mask id="grid-mask">
        <rect width="100%" height="100%" fill="url(#grid-fade)" />
      </mask>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" mask="url(#grid-mask)" />
  </svg>
);

/** Animated orbital rings */
export const OrbitalRings = ({ className = "" }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
      {/* Outer ring */}
      <circle
        cx="200"
        cy="200"
        r="180"
        stroke="url(#ring-grad-1)"
        strokeWidth="0.5"
        className="animate-[spin_40s_linear_infinite]"
        strokeDasharray="8 12"
      />
      {/* Middle ring */}
      <circle
        cx="200"
        cy="200"
        r="130"
        stroke="url(#ring-grad-2)"
        strokeWidth="0.5"
        className="animate-[spin_30s_linear_infinite_reverse]"
        strokeDasharray="4 8"
      />
      {/* Inner ring */}
      <circle
        cx="200"
        cy="200"
        r="80"
        stroke="url(#ring-grad-3)"
        strokeWidth="0.5"
        className="animate-[spin_20s_linear_infinite]"
        strokeDasharray="6 10"
      />
      {/* Dots on orbits */}
      <circle cx="200" cy="20" r="3" fill="rgba(139, 92, 246, 0.4)" className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: "200px 200px" }} />
      <circle cx="330" cy="200" r="2" fill="rgba(167, 139, 250, 0.3)" className="animate-[spin_30s_linear_infinite_reverse]" style={{ transformOrigin: "200px 200px" }} />
      <circle cx="200" cy="280" r="2.5" fill="rgba(196, 181, 253, 0.35)" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "200px 200px" }} />

      <defs>
        <linearGradient id="ring-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
          <stop offset="50%" stopColor="rgba(139, 92, 246, 0.05)" />
          <stop offset="100%" stopColor="rgba(167, 139, 250, 0.2)" />
        </linearGradient>
        <linearGradient id="ring-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(167, 139, 250, 0.12)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.08)" />
        </linearGradient>
        <linearGradient id="ring-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(196, 181, 253, 0.1)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.15)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

/** Shield graphic with animated scan line */
export const ShieldGraphic = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 200 240" className="h-full w-full" fill="none">
      {/* Shield outline */}
      <path
        d="M100 10 L185 50 L185 130 C185 180 145 220 100 235 C55 220 15 180 15 130 L15 50 Z"
        stroke="url(#shield-grad)"
        strokeWidth="1"
        fill="rgba(139, 92, 246, 0.03)"
      />
      {/* Inner shield */}
      <path
        d="M100 35 L165 65 L165 125 C165 165 135 195 100 208 C65 195 35 165 35 125 L35 65 Z"
        stroke="rgba(139, 92, 246, 0.1)"
        strokeWidth="0.5"
        fill="rgba(139, 92, 246, 0.02)"
        strokeDasharray="4 6"
      />
      {/* Scan line */}
      <line
        x1="35"
        y1="120"
        x2="165"
        y2="120"
        stroke="rgba(167, 139, 250, 0.3)"
        strokeWidth="1"
        className="animate-[scan_3s_ease-in-out_infinite]"
      />
      {/* Checkmark */}
      <path
        d="M70 120 L90 140 L130 95"
        stroke="rgba(167, 139, 250, 0.5)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="shield-grad" x1="100" y1="10" x2="100" y2="235">
          <stop offset="0%" stopColor="rgba(167, 139, 250, 0.3)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

/** Hexagonal network pattern */
export const HexNetwork = ({ className = "" }: { className?: string }) => {
  const hexPoints = (cx: number, cy: number, r: number) => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };

  const centers = [
    [100, 80], [170, 120], [100, 160], [30, 120],
    [170, 40], [30, 40], [240, 80], [240, 160],
  ];

  return (
    <svg viewBox="0 0 280 200" className={className} fill="none">
      {centers.map(([cx, cy], i) => (
        <g key={i}>
          <polygon
            points={hexPoints(cx, cy, 35)}
            stroke={`rgba(139, 92, 246, ${0.06 + (i % 3) * 0.03})`}
            strokeWidth="0.5"
            fill={`rgba(139, 92, 246, ${0.01 + (i % 2) * 0.01})`}
          />
          <circle cx={cx} cy={cy} r="2" fill={`rgba(167, 139, 250, ${0.2 + (i % 3) * 0.1})`} />
        </g>
      ))}
      {/* Connection lines */}
      {[
        [100, 80, 170, 120], [170, 120, 100, 160], [100, 160, 30, 120],
        [30, 120, 100, 80], [170, 40, 170, 120], [30, 40, 30, 120],
        [170, 120, 240, 80], [170, 120, 240, 160],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`l-${i}`}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(139, 92, 246, 0.06)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
};

/** Floating particles */
export const Particles = ({ count = 20, className = "" }: { count?: number; className?: string }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    x: `${(i * 37) % 100}%`,
    y: `${(i * 53) % 100}%`,
    size: 1 + (i % 3),
    delay: `${(i * 0.7) % 5}s`,
    duration: `${4 + (i % 4)}s`,
    opacity: 0.1 + (i % 4) * 0.05,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple-400 animate-float"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

/** Circuit-like decorative lines */
export const CircuitLines = ({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) => (
  <svg
    viewBox="0 0 100 400"
    className={`absolute top-0 ${side === "left" ? "left-0" : "right-0 -scale-x-100"} h-full w-24 opacity-30 ${className}`}
    fill="none"
  >
    <path d="M80 0 L80 80 L40 120 L40 200 L60 220 L60 300 L30 340 L30 400" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="0.5" />
    <path d="M60 0 L60 40 L20 80 L20 160 L50 190 L50 250 L20 280 L20 400" stroke="rgba(139, 92, 246, 0.05)" strokeWidth="0.5" />
    <circle cx="40" cy="120" r="3" fill="rgba(139, 92, 246, 0.1)" />
    <circle cx="60" cy="220" r="2" fill="rgba(167, 139, 250, 0.08)" />
    <circle cx="20" cy="280" r="3" fill="rgba(139, 92, 246, 0.1)" />
  </svg>
);
