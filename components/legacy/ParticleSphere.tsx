"use client"

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/legacy/i18n/LanguageContext";


/* ── Product data ── */
interface ProductNode {
  angle: number;
  layer: number;
  label: string;
  side: "left" | "right";
  titleKey: string;
  descKey: string;
  cardY: number; // 0-1 normalized Y position for the card
  blog?: string; // Per-product blog post — card click navigates here.
                 // Omit for products without a dedicated post (coming-soon).
}

const PRODUCTS: ProductNode[] = [
  { angle: Math.PI * 0.8,  layer: 0, label: "Guard",     side: "left",  titleKey: "shield.guard.title",     descKey: "shield.guard.desc",     cardY: 0.10, blog: "/blog/fangcunguard" },
  { angle: Math.PI * 0.2,  layer: 0, label: "Observer",  side: "right", titleKey: "shield.observer.title",  descKey: "shield.observer.desc",  cardY: 0.10, blog: "/blog/observer" },
  { angle: Math.PI * 1.1,  layer: 1, label: "SkillWard", side: "left",  titleKey: "shield.skillward.title", descKey: "shield.skillward.desc", cardY: 0.55, blog: "/blog/skillward" },
  { angle: Math.PI * 1.9,  layer: 1, label: "RedTeam",   side: "right", titleKey: "shield.redteam.title",   descKey: "shield.redteam.desc",   cardY: 0.55 },
];

const LAYER_KEYS = ["shield.layer0", "shield.layer1", "shield.layer2"];

const LAYERS = [
  { cy: 0.22, rx: 0.30, ry: 0.10, labelKey: "shield.layer0", active: true },
  { cy: 0.48, rx: 0.22, ry: 0.08, labelKey: "shield.layer1", active: true },
  { cy: 0.72, rx: 0.13, ry: 0.05, labelKey: "shield.layer2", active: false },
];

/* ── Shield shape ── */
function getShieldPoints(cx: number, topY: number, w: number, h: number) {
  return [
    { x: cx, y: topY },
    { x: cx + w * 0.45, y: topY + h * 0.04 },
    { x: cx + w * 0.5, y: topY + h * 0.15 },
    { x: cx + w * 0.48, y: topY + h * 0.35 },
    { x: cx + w * 0.38, y: topY + h * 0.58 },
    { x: cx + w * 0.22, y: topY + h * 0.78 },
    { x: cx, y: topY + h * 0.92 },
    { x: cx - w * 0.22, y: topY + h * 0.78 },
    { x: cx - w * 0.38, y: topY + h * 0.58 },
    { x: cx - w * 0.48, y: topY + h * 0.35 },
    { x: cx - w * 0.5, y: topY + h * 0.15 },
    { x: cx - w * 0.45, y: topY + h * 0.04 },
  ];
}

function drawSmoothShield(ctx: CanvasRenderingContext2D, pts: { x: number; y: number }[]) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 0; i < pts.length; i++) {
    const curr = pts[i];
    const next = pts[(i + 1) % pts.length];
    const mx = (curr.x + next.x) / 2;
    const my = (curr.y + next.y) / 2;
    ctx.quadraticCurveTo(curr.x, curr.y, mx, my);
  }
  ctx.closePath();
}

function isInsideShield(px: number, py: number, shield: { x: number; y: number }[]) {
  let inside = false;
  for (let i = 0, j = shield.length - 1; i < shield.length; j = i++) {
    const xi = shield[i].x, yi = shield[i].y;
    const xj = shield[j].x, yj = shield[j].y;
    if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/* ── Particles ── */
function initParticles(w: number, h: number) {
  const pts: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; r: number; alpha: number; layer: number }[] = [];
  const cx = w / 2;
  const shieldW = w * 0.5;
  const shieldH = h * 0.85;
  const shieldTop = h * 0.05;
  const shield = getShieldPoints(cx, shieldTop, shieldW, shieldH);

  // Shield interior particles - concentrated and bright
  let added = 0;
  while (added < 900) {
    const x = cx + (Math.random() - 0.5) * shieldW * 1.1;
    const y = shieldTop + Math.random() * shieldH;
    if (!isInsideShield(x, y, shield)) continue;
    
    const distFromCx = Math.abs(x - cx) / (shieldW * 0.5);
    const li = y < h * 0.40 ? 0 : y < 0.67 * h ? 1 : 2;
    
    pts.push({
      x, y, ox: x, oy: y,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2,
      r: li === 2 ? 0.4 + Math.random() * 0.6 : 0.6 + Math.random() * 2.0,
      alpha: li === 2
        ? 0.05 + Math.random() * 0.08
        : (0.35 + Math.random() * 0.55) * (1 - distFromCx * 0.2),
      layer: li,
    });
    added++;
  }

  // Edge particles (along shield outline) for definition
  for (let i = 0; i < 200; i++) {
    const t = Math.random();
    const idx = Math.floor(t * shield.length);
    const next = (idx + 1) % shield.length;
    const frac = t * shield.length - idx;
    const x = shield[idx].x + (shield[next].x - shield[idx].x) * frac + (Math.random() - 0.5) * 15;
    const y = shield[idx].y + (shield[next].y - shield[idx].y) * frac + (Math.random() - 0.5) * 15;
    pts.push({
      x, y, ox: x, oy: y,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1,
      r: 0.5 + Math.random() * 1.2,
      alpha: 0.25 + Math.random() * 0.45,
      layer: -2, // edge marker
    });
  }

  // Ambient scatter
  for (let i = 0; i < 60; i++) {
    const x = cx + (Math.random() - 0.5) * w * 0.8;
    const y = h * 0.1 + Math.random() * h * 0.8;
    pts.push({
      x, y, ox: x, oy: y,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.06,
      r: 0.3 + Math.random() * 0.6,
      alpha: 0.02 + Math.random() * 0.05,
      layer: -1,
    });
  }
  return pts;
}

export default function PyramidParticleViz() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef(0);
  const particlesRef = useRef<ReturnType<typeof initParticles>>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [nodePos, setNodePos] = useState<Record<string, { x: number; y: number }>>({});
  const sizeRef = useRef({ w: 0, h: 0 });
  const hoveredRef = useRef<string | null>(null);
  const tRef = useRef(t);
  tRef.current = t;

  useEffect(() => { hoveredRef.current = hoveredNode; }, [hoveredNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      sizeRef.current = { w: rect.width, h: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = initParticles(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    container.addEventListener("mousemove", handleMouse);

    let time = 0;
    const startTime = performance.now();
    const ENTRANCE_DURATION = 2000; // 2s entrance

    const draw = () => {
      const { w, h } = sizeRef.current;
      time += 0.004;
      const elapsed = performance.now() - startTime;
      const entranceT = Math.min(1, elapsed / ENTRANCE_DURATION);
      // Eased entrance: cubic ease-out
      const ease = 1 - Math.pow(1 - entranceT, 3);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const mx = (mouseRef.current.x - 0.5) * 18;
      const my = (mouseRef.current.y - 0.5) * 10;
      const particles = particlesRef.current;
      const hovered = hoveredRef.current;
      const shieldW = w * 0.5;
      const shieldH = h * 0.85;
      const shieldTop = h * 0.05;

      // Update particles — continuous drift
      for (const p of particles) {
        // Add continuous orbital motion around shield center
        const dxFromCenter = p.ox - cx;
        const dyFromCenter = p.oy - (shieldTop + shieldH * 0.45);
        const orbitSpeed = (p.layer === -1 ? 0.0008 : p.layer === -2 ? 0.0015 : 0.001);
        // Tangential drift
        p.vx += -dyFromCenter * orbitSpeed + (Math.sin(time * 2 + p.ox * 0.01) * 0.02);
        p.vy += dxFromCenter * orbitSpeed + (Math.cos(time * 2 + p.oy * 0.01) * 0.015);
        
        p.x += p.vx;
        p.y += p.vy;
        // Spring back to origin (soft)
        p.vx += (p.ox - p.x) * 0.002;
        p.vy += (p.oy - p.y) * 0.002;
        p.vx *= 0.985;
        p.vy *= 0.985;
        // Mouse repulsion
        const dx = (p.x + mx * 0.15) - (mouseRef.current.x * w);
        const dy = (p.y + my * 0.1) - (mouseRef.current.y * h);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60 && dist > 0) {
          const force = (60 - dist) / 60 * 0.1;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      const offX = mx * 0.15;
      const offY = my * 0.1;

      // ── Shield glow background ──
      const shieldPts = getShieldPoints(cx + offX, shieldTop + offY, shieldW, shieldH);
      
      // Radial gradient behind shield - deep purple on light bg
      const grad = ctx.createRadialGradient(cx + offX, h * 0.4 + offY, 0, cx + offX, h * 0.4 + offY, shieldW * 0.65);
      grad.addColorStop(0, "rgba(100,60,180,0.12)");
      grad.addColorStop(0.5, "rgba(120,80,200,0.06)");
      grad.addColorStop(1, "rgba(100,60,180,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Shield interior fill
      drawSmoothShield(ctx, shieldPts);
      ctx.fillStyle = "rgba(100,70,180,0.03)";
      ctx.fill();

      // ── Shield outline (animated breathing glow) ──
      const breathe = 0.75 + Math.sin(time * 0.8) * 0.25;
      // Wide glow
      drawSmoothShield(ctx, shieldPts);
      ctx.strokeStyle = `rgba(120,80,200,${0.10 * breathe})`;
      ctx.lineWidth = 10 * breathe;
      ctx.stroke();
      // Mid glow
      drawSmoothShield(ctx, shieldPts);
      ctx.strokeStyle = `rgba(110,70,190,${0.18 * breathe})`;
      ctx.lineWidth = 3;
      ctx.stroke();
      // Crisp inner line
      drawSmoothShield(ctx, shieldPts);
      ctx.strokeStyle = `rgba(100,60,180,${0.30 + 0.15 * breathe})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ── Particle connections ──
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i += 2) {
        const pi = particles[i];
        if (pi.layer === -1) continue;
        const pix = pi.x + offX;
        const piy = pi.y + offY;
        for (let j = i + 2; j < Math.min(i + 20, particles.length); j += 2) {
          const pj = particles[j];
          if (pj.layer === -1) continue;
          const pjx = pj.x + offX;
          const pjy = pj.y + offY;
          const d = Math.hypot(pix - pjx, piy - pjy);
          if (d < 32) {
            const isDim = pi.layer === 2 || pj.layer === 2;
            const a = (1 - d / 32) * (isDim ? 0.03 : 0.12);
            ctx.beginPath();
            ctx.moveTo(pix, piy);
            ctx.lineTo(pjx, pjy);
            ctx.strokeStyle = isDim ? `rgba(80,60,120,${a})` : `rgba(100,60,180,${a})`;
            ctx.stroke();
          }
        }
      }

      // ── Draw particles (with entrance: expand from center) ──
      const shieldCenterX = cx + offX;
      const shieldCenterY = shieldTop + shieldH * 0.4 + offY;
      for (const p of particles) {
        const rawX = p.x + offX;
        const rawY = p.y + offY;
        // During entrance, lerp from center to final position
        const px = shieldCenterX + (rawX - shieldCenterX) * ease;
        const py = shieldCenterY + (rawY - shieldCenterY) * ease;
        const pAlpha = p.alpha * ease;
        ctx.beginPath();
        ctx.arc(px, py, p.r * ease, 0, Math.PI * 2);
        if (p.layer === 2) {
          ctx.fillStyle = `rgba(80,50,140,${pAlpha * 0.3})`;
        } else if (p.layer === -1) {
          ctx.fillStyle = `rgba(120,90,170,${pAlpha})`;
        } else if (p.layer === -2) {
          const pulse = 0.8 + Math.sin(time * 2 + p.ox * 0.02) * 0.2;
          ctx.fillStyle = `rgba(100,55,180,${Math.min(1, pAlpha * pulse * 1.5)})`;
        } else {
          const pulse = 0.85 + Math.sin(time * 1.5 + p.ox * 0.01 + p.oy * 0.01) * 0.15;
          ctx.fillStyle = `rgba(110,60,190,${Math.min(1, pAlpha * pulse * 1.2)})`;
        }
        ctx.fill();
      }

      // ── Layer ellipses (animated rotation via dash offset) ──
      for (let li = 0; li < 3; li++) {
        const L = LAYERS[li];
        const lx = cx + offX;
        const ly = L.cy * h + offY;
        const rx = L.rx * w;
        const ry = L.ry * h;
        const dashOffset = time * 30 * (li % 2 === 0 ? 1 : -1);

        if (L.active) {
          // Outer glow ring
          ctx.beginPath();
          ctx.ellipse(lx, ly, rx + 4, ry + 3, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(120,80,200,${0.08 * breathe})`;
          ctx.lineWidth = 6;
          ctx.setLineDash([]);
          ctx.stroke();

          // Main dashed ring with animated rotation
          ctx.beginPath();
          ctx.ellipse(lx, ly, rx, ry, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(100,60,180,${0.25 + 0.1 * breathe})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([6, 4]);
          ctx.lineDashOffset = dashOffset;
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.lineDashOffset = 0;
        } else {
          // Inactive layer
          ctx.beginPath();
          ctx.ellipse(lx, ly, rx, ry, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(100,70,160,0.18)";
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 5]);
          ctx.lineDashOffset = dashOffset;
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.lineDashOffset = 0;
        }

        // Label - text only, no background box
        ctx.textAlign = "center";
        if (L.active) {
          ctx.font = "600 15px 'Barlow', system-ui";
          ctx.fillStyle = "rgba(60,30,110,0.85)";
          ctx.fillText(tRef.current(L.labelKey), lx, ly + 4);
        } else {
          ctx.font = "500 14px 'Barlow', system-ui";
          ctx.fillStyle = "rgba(80,50,140,0.45)";
          ctx.fillText(tRef.current(L.labelKey), lx, ly + 4);
        }
      }

      // ── Vertical connectors between layers ──
      const dashX = cx + offX;
      ctx.setLineDash([3, 5]);
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 2; i++) {
        const fromY = LAYERS[i].cy * h + LAYERS[i].ry * h + offY;
        const toY = LAYERS[i + 1].cy * h - LAYERS[i + 1].ry * h + offY;
        ctx.beginPath();
        ctx.moveTo(dashX, fromY + 6);
        ctx.lineTo(dashX, toY - 6);
        ctx.strokeStyle = i === 1 ? "rgba(80,60,120,0.08)" : "rgba(110,70,190,0.15)";
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // ── Bottom layer dim overlay - only dim the label area, not the shield edge ──
      const bL = LAYERS[2];
      const bx = cx + offX;
      const by = bL.cy * h + offY;
      const brx = bL.rx * w;
      const bry = bL.ry * h;
      // Small localized dim, not overlapping shield outline
      ctx.beginPath();
      ctx.ellipse(bx, by, brx * 0.8, bry * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(245,243,250,0.5)";
      ctx.fill();

      // ── Product nodes ──
      const newPos: Record<string, { x: number; y: number }> = {};
      for (const node of PRODUCTS) {
        const L = LAYERS[node.layer];
        const lx = cx + offX;
        const ly = L.cy * h + offY;
        const nx = lx + Math.cos(node.angle) * L.rx * w;
        const ny = ly + Math.sin(node.angle) * L.ry * h;
        newPos[node.label] = { x: nx, y: ny };

        const isHovered = hovered === node.label;
        const pulse = 0.8 + Math.sin(time * 2.5 + node.angle * 2) * 0.2;

        // Large outer glow - BRIGHTER
        const glowR = isHovered ? 40 : 26;
        const gGrad = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowR);
        gGrad.addColorStop(0, `rgba(100,55,180,${isHovered ? 0.6 : 0.3 * pulse})`);
        gGrad.addColorStop(0.35, `rgba(110,70,190,${isHovered ? 0.2 : 0.10})`);
        gGrad.addColorStop(1, "rgba(110,70,190,0)");
        ctx.beginPath();
        ctx.arc(nx, ny, glowR, 0, Math.PI * 2);
        ctx.fillStyle = gGrad;
        ctx.fill();

        // Dot - BIGGER & BRIGHTER
        const dotR = isHovered ? 8 : 6;
        ctx.beginPath();
        ctx.arc(nx, ny, dotR, 0, Math.PI * 2);
        const dotGrad = ctx.createRadialGradient(nx - 1, ny - 1, 0, nx, ny, dotR);
        dotGrad.addColorStop(0, isHovered ? "rgba(130,80,220,1)" : `rgba(110,60,190,${0.95 * pulse})`);
        dotGrad.addColorStop(1, isHovered ? "rgba(100,50,190,0.95)" : `rgba(90,40,170,${0.8 * pulse})`);
        ctx.fillStyle = dotGrad;
        ctx.fill();
        // Ring
        ctx.beginPath();
        ctx.arc(nx, ny, dotR + 2, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? "rgba(80,40,160,0.65)" : `rgba(100,60,180,${0.25 * pulse})`;
        ctx.lineWidth = isHovered ? 2 : 1.2;
        ctx.stroke();

        // Node label
        if (isHovered) {
          ctx.font = "600 10px 'Barlow', system-ui";
          ctx.textAlign = "center";
          ctx.fillStyle = "rgba(60,30,110,0.75)";
          ctx.fillText(node.label, nx, ny - dotR - 8);
        }
      }

      setNodePos(prev => {
        let changed = false;
        for (const key of Object.keys(newPos)) {
          if (!prev[key] || Math.abs(prev[key].x - newPos[key].x) > 0.5 || Math.abs(prev[key].y - newPos[key].y) > 0.5) {
            changed = true; break;
          }
        }
        return changed ? newPos : prev;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let closest: string | null = null;
    let closestD = 40;
    for (const [label, pos] of Object.entries(nodePos)) {
      const d = Math.hypot(mx - pos.x, my - pos.y);
      if (d < closestD) { closestD = d; closest = label; }
    }
    setHoveredNode(closest);
  }, [nodePos]);


  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "720px" }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredNode(null)}
      />

      {/* SVG curved connections from nodes to cards */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
        <defs>
          <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(100,55,180,0.55)" />
            <stop offset="100%" stopColor="rgba(100,55,180,0.2)" />
          </linearGradient>
          <linearGradient id="lineGradIdle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(100,55,180,0.15)" />
            <stop offset="100%" stopColor="rgba(100,55,180,0.04)" />
          </linearGradient>
        </defs>
        {PRODUCTS.map((node) => {
          const pos = nodePos[node.label];
          if (!pos) return null;
          const isActive = hoveredNode === node.label;
          const cardW = 260;
          const cardH = 130;
          const cardEdgeX = node.side === "left" ? cardW : (sizeRef.current.w - cardW);
          const cardCenterY = node.cardY * 720 + cardH / 2;

          const ctrlX = node.side === "left"
            ? pos.x - (pos.x - cardEdgeX) * 0.4
            : pos.x + (cardEdgeX - pos.x) * 0.4;

          const pathD = `M ${pos.x} ${pos.y} Q ${ctrlX} ${(pos.y + cardCenterY) / 2} ${cardEdgeX} ${cardCenterY}`;

          return (
            <g key={node.label}>
              <path
                d={pathD}
                fill="none"
                stroke={isActive ? "url(#lineGradActive)" : "url(#lineGradIdle)"}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "none" : "4 6"}
                style={!isActive ? { animation: "dash-flow 12s linear infinite" } : undefined}
              />
              {/* Endpoint dot with pulse */}
              <circle cx={cardEdgeX} cy={cardCenterY} r={isActive ? 4 : 2.5}
                fill={isActive ? "rgba(100,55,180,0.7)" : "rgba(100,55,180,0.15)"}
                style={{ transition: "all 0.3s ease" }}
              />
              {isActive && (
                <>
                  <circle cx={cardEdgeX} cy={cardCenterY} r="8"
                    fill="none" stroke="rgba(100,55,180,0.3)" strokeWidth="1.5"
                    style={{ animation: "ping-ring 1.5s ease-out infinite" }}
                  />
                  {/* Flowing light dot along the path */}
                  <circle r="3.5" fill="rgba(139,92,246,0.85)">
                    <animateMotion dur="1.8s" repeatCount="indefinite" path={pathD} />
                  </circle>
                  <circle r="7" fill="rgba(139,92,246,0.2)">
                    <animateMotion dur="1.8s" repeatCount="indefinite" path={pathD} />
                  </circle>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Animated dash + ping keyframes */}
      <style>{`
        @keyframes dash-flow {
          to { stroke-dashoffset: -40; }
        }
        @keyframes ping-ring {
          0% { r: 4; opacity: 1; }
          100% { r: 18; opacity: 0; }
        }
      `}</style>

      {/* Product cards — staggered with entrance animation */}
      {PRODUCTS.map((node, i) => {
        const isActive = hoveredNode === node.label;
        const isLeft = node.side === "left";
        const cardClass = `absolute z-10 w-[250px] group rounded-xl px-6 py-5 transition-all duration-300 ${
          node.blog ? "cursor-pointer" : "cursor-default"
        } ${
          isActive
            ? "liquid-glass-light shadow-xl shadow-purple-400/15 scale-[1.02]"
            : "liquid-glass-light hover:shadow-lg hover:shadow-purple-200/10"
        }`;
        const cardStyle = {
          top: `${node.cardY * 100}%`,
          ...(isLeft ? { left: 0 } : { right: 0 }),
          border: isActive ? "1.5px solid rgba(139,92,246,0.35)" : undefined,
          textDecoration: "none" as const,
        };
        const cardInner = (
          <>
            {/* Top accent line */}
            <div className={`absolute top-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300 ${
              isActive ? "bg-gradient-to-r from-purple-500 to-violet-400 opacity-100" : "bg-gradient-to-r from-purple-300 to-violet-200 opacity-0 group-hover:opacity-60"
            }`} />
            <div className="relative z-10">
              <div className={`text-[15px] font-bold tracking-tight transition-colors ${isActive ? "text-gray-900" : "text-gray-700"}`}>{t(node.titleKey)}</div>
              <p className={`mt-2 text-[13px] leading-[1.65] transition-colors ${isActive ? "text-gray-600" : "text-gray-400"}`}>{t(node.descKey)}</p>
              {node.blog && (
                <div className={`mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold transition-all ${isActive ? "text-purple-600 translate-x-1" : "text-purple-400/50"}`}>
                  <span>{t("shield.learn_more")}</span>
                  <span className="text-[14px]">→</span>
                </div>
              )}
            </div>
          </>
        );
        const motionProps = {
          initial: { opacity: 0, x: isLeft ? -30 : 30, y: 10 },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
          className: cardClass,
          style: cardStyle,
          onMouseEnter: () => setHoveredNode(node.label),
          onMouseLeave: () => setHoveredNode(null),
        };
        return node.blog ? (
          <motion.div key={node.label} {...motionProps}>
            <Link href={node.blog} className="absolute inset-0 z-20 rounded-xl" aria-label={t(node.titleKey)} />
            {cardInner}
          </motion.div>
        ) : (
          <motion.div key={node.label} {...motionProps}>
            {cardInner}
          </motion.div>
        );
      })}

    </div>
  );
}
