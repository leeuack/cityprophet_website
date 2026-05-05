"use client";

import { useEffect, useRef } from "react";

interface Road {
  // Path segments (polyline points in normalized 0-1 coords)
  points: [number, number][];
  // Lifecycle
  birthTime: number;
  lifespan: number;
  // Drawing progress (0→1 draw-in, hold, then fade out)
  drawDuration: number;
  holdDuration: number;
  fadeDuration: number;
  // Style
  width: number;
  alpha: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generateRoadNetwork(rand: () => number, count: number): [number, number][][] {
  const networks: [number, number][][] = [];

  for (let i = 0; i < count; i++) {
    const segments: [number, number][] = [];
    let x = rand();
    let y = rand();
    segments.push([x, y]);

    const numPoints = 3 + Math.floor(rand() * 8);
    const isGrid = rand() > 0.35;

    for (let j = 0; j < numPoints; j++) {
      if (isGrid) {
        // Grid-like: mostly horizontal or vertical moves
        if (rand() > 0.5) {
          x += (rand() - 0.5) * 0.25;
        } else {
          y += (rand() - 0.5) * 0.25;
        }
      } else {
        // Organic curves
        const angle = rand() * Math.PI * 2;
        const dist = 0.03 + rand() * 0.15;
        x += Math.cos(angle) * dist;
        y += Math.sin(angle) * dist;
      }
      x = Math.max(-0.1, Math.min(1.1, x));
      y = Math.max(-0.1, Math.min(1.1, y));
      segments.push([x, y]);
    }

    networks.push(segments);
  }

  return networks;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const rand = seededRandom(777);

    // Pre-generate road path shapes
    const roadPaths = generateRoadNetwork(rand, 200);

    // Active road pool
    const roads: Road[] = [];
    const MAX_ROADS = 60;
    let nextSpawn = 0;
    let spawnInterval = 0.15;
    let pathIndex = 0;

    // Ripple system: concentric rings that emanate from random points
    interface Ripple {
      cx: number;
      cy: number;
      birthTime: number;
      speed: number;
      maxRadius: number;
      alpha: number;
    }
    const ripples: Ripple[] = [];
    let nextRipple = 2;

    const draw = (ts: number) => {
      const t = ts / 1000;
      ctx.clearRect(0, 0, W, H);

      // Spawn new roads
      if (t >= nextSpawn && roads.length < MAX_ROADS) {
        const path = roadPaths[pathIndex % roadPaths.length];
        pathIndex++;

        const drawDur = 0.8 + rand() * 1.5;
        const holdDur = 1.0 + rand() * 3.0;
        const fadeDur = 1.0 + rand() * 2.0;

        roads.push({
          points: path,
          birthTime: t,
          lifespan: drawDur + holdDur + fadeDur,
          drawDuration: drawDur,
          holdDuration: holdDur,
          fadeDuration: fadeDur,
          width: 0.3 + rand() * 1.2,
          alpha: 0.06 + rand() * 0.14,
        });

        spawnInterval = 0.06 + rand() * 0.2;
        nextSpawn = t + spawnInterval;
      }

      // Spawn ripples
      if (t >= nextRipple) {
        ripples.push({
          cx: rand(),
          cy: rand(),
          birthTime: t,
          speed: 0.04 + rand() * 0.08,
          maxRadius: 0.15 + rand() * 0.25,
          alpha: 0.04 + rand() * 0.06,
        });
        nextRipple = t + 2.5 + rand() * 4;
      }

      // Draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = t - r.birthTime;
        const radius = age * r.speed;

        if (radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        const progress = radius / r.maxRadius;
        const alpha = r.alpha * (1 - progress * progress);

        if (alpha > 0.001) {
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(r.cx * W, r.cy * H, radius * Math.max(W, H), 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Draw roads
      for (let i = roads.length - 1; i >= 0; i--) {
        const road = roads[i];
        const age = t - road.birthTime;

        if (age > road.lifespan) {
          roads.splice(i, 1);
          continue;
        }

        let alpha = road.alpha;
        let drawProgress = 1;

        if (age < road.drawDuration) {
          // Draw-in phase: line grows
          drawProgress = age / road.drawDuration;
          alpha *= easeOutCubic(drawProgress);
        } else if (age < road.drawDuration + road.holdDuration) {
          // Hold phase: fully visible
          drawProgress = 1;
        } else {
          // Fade-out phase
          const fadeAge = age - road.drawDuration - road.holdDuration;
          const fadeProgress = fadeAge / road.fadeDuration;
          alpha *= 1 - easeInCubic(fadeProgress);
          drawProgress = 1;
        }

        if (alpha < 0.001) continue;

        const pts = road.points;
        const totalSegments = pts.length - 1;
        const segmentsToDraw = Math.max(1, Math.ceil(totalSegments * drawProgress));

        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = road.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(pts[0][0] * W, pts[0][1] * H);

        for (let s = 1; s <= segmentsToDraw; s++) {
          if (s === segmentsToDraw && s <= totalSegments) {
            // Partial last segment
            const segFraction = (totalSegments * drawProgress) - (s - 1);
            const prevPt = pts[s - 1];
            const nextPt = pts[Math.min(s, pts.length - 1)];
            const x = prevPt[0] + (nextPt[0] - prevPt[0]) * segFraction;
            const y = prevPt[1] + (nextPt[1] - prevPt[1]) * segFraction;
            ctx.lineTo(x * W, y * H);
          } else {
            ctx.lineTo(pts[s][0] * W, pts[s][1] * H);
          }
        }

        ctx.stroke();

        // Glow at the drawing tip during draw-in phase
        if (age < road.drawDuration && drawProgress > 0.05) {
          const tipIdx = Math.min(
            Math.floor(totalSegments * drawProgress),
            totalSegments - 1
          );
          const tipFrac = (totalSegments * drawProgress) - tipIdx;
          const tipX =
            (pts[tipIdx][0] + (pts[tipIdx + 1][0] - pts[tipIdx][0]) * tipFrac) * W;
          const tipY =
            (pts[tipIdx][1] + (pts[tipIdx + 1][1] - pts[tipIdx][1]) * tipFrac) * H;

          const glowRadius = 3 + road.width * 2;
          const grad = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, glowRadius);
          grad.addColorStop(0, `rgba(255,255,255,${alpha * 2})`);
          grad.addColorStop(1, `rgba(255,255,255,0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(tipX, tipY, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Subtle intersection dots where roads cross near each other
      if (roads.length > 3) {
        const sampleCount = Math.min(roads.length, 15);
        for (let a = 0; a < sampleCount - 1; a++) {
          for (let b = a + 1; b < sampleCount; b++) {
            const ra = roads[a];
            const rb = roads[b];
            const ageA = t - ra.birthTime;
            const ageB = t - rb.birthTime;
            if (ageA > ra.drawDuration + ra.holdDuration) continue;
            if (ageB > rb.drawDuration + rb.holdDuration) continue;

            // Check midpoints proximity
            const midA = ra.points[Math.floor(ra.points.length / 2)];
            const midB = rb.points[Math.floor(rb.points.length / 2)];
            const dx = midA[0] - midB[0];
            const dy = midA[1] - midB[1];
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 0.08) {
              const cx = ((midA[0] + midB[0]) / 2) * W;
              const cy = ((midA[1] + midB[1]) / 2) * H;
              const dotAlpha = 0.15 * (1 - dist / 0.08);
              ctx.fillStyle = `rgba(255,255,255,${dotAlpha})`;
              ctx.beginPath();
              ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInCubic(t: number) {
  return t * t * t;
}
