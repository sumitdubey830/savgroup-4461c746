import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  phase: number;
  size: number;
};

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, active: false };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const PARTICLE_COUNT = 340;
    const MOUSE_RADIUS = 110;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let tick = 0;
    let particles: Particle[] = [];

    const pointInArrow = (
      x: number,
      y: number,
      arrowX: number,
      arrowY: number,
      arrowW: number,
      arrowH: number,
    ) => {
      const nx = (x - arrowX) / arrowW;
      const ny = (y - arrowY) / arrowH;
      if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return false;

      const mid = 0.5;
      const top = Math.max(0, mid - nx * 0.5);
      const bottom = Math.min(1, mid + nx * 0.5);
      return ny >= top && ny <= bottom;
    };

    const buildLogoPoints = () => {
      const points: Array<{ x: number; y: number }> = [];
      const arrowW = Math.max(220, width * 0.28);
      const arrowH = Math.max(180, height * 0.48);
      const arrowX = width * 0.62;
      const arrowY = (height - arrowH) * 0.5;

      let attempts = 0;
      while (points.length < PARTICLE_COUNT && attempts < PARTICLE_COUNT * 40) {
        attempts += 1;
        const x = arrowX + Math.random() * arrowW;
        const y = arrowY + Math.random() * arrowH;
        if (pointInArrow(x, y, arrowX, arrowY, arrowW, arrowH)) {
          points.push({ x, y });
        }
      }

      while (points.length < PARTICLE_COUNT) {
        const progress = points.length / PARTICLE_COUNT;
        const x = arrowX + progress * arrowW;
        const spread = (progress * arrowH) / 2;
        const y = arrowY + arrowH / 2 + (Math.random() - 0.5) * spread * 2;
        points.push({ x, y });
      }

      return points;
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const logoPoints = buildLogoPoints();
      particles = logoPoints.map((point) => ({
        x: point.x + (Math.random() - 0.5) * 8,
        y: point.y + (Math.random() - 0.5) * 8,
        homeX: point.x,
        homeY: point.y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2,
        size: 0.9 + Math.random() * 1.4,
      }));
    };

    const updateMousePosition = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
        mouse.active = true;
      } else {
        onLeave();
      }
    };

    const onMove = (event: MouseEvent) => {
      updateMousePosition(event.clientX, event.clientY);
    };

    // Fallback tracking keeps interaction working even if another overlay sits above the canvas.
    const onWindowMove = (event: MouseEvent) => {
      updateMousePosition(event.clientX, event.clientY);
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updateMousePosition(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => onLeave();

    const draw = () => {
      tick += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        const floatX = Math.sin(tick * 1.1 + p.phase) * 0.18;
        const floatY = Math.cos(tick * 0.9 + p.phase) * 0.18;

        // Spring back to logo shape while allowing subtle ambient drift.
        const homeDx = p.homeX + floatX - p.x;
        const homeDy = p.homeY + floatY - p.y;
        p.vx += homeDx * 0.016;
        p.vy += homeDy * 0.016;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 0 && dist < MOUSE_RADIUS) {
            // Scatter away from cursor.
            const force = (1 - dist / MOUSE_RADIUS) * 1.25;
            p.vx -= (dx / dist) * force;
            p.vy -= (dy / dist) * force;
          }
        }

        p.vx *= 0.92;
        p.vy *= 0.92;
        p.vx = Math.max(-2.4, Math.min(2.4, p.vx));
        p.vy = Math.max(-2.4, Math.min(2.4, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -0.7;
        if (p.y <= 0 || p.y >= height) p.vy *= -0.7;

        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.fillStyle = "rgba(228, 241, 255, 0.94)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onWindowMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onWindowMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full pointer-events-auto" />
    </div>
  );
}
