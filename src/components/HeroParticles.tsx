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

type Point = { x: number; y: number };
type Triangle = { a: Point; b: Point; c: Point };

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, active: false };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const PARTICLE_COUNT = 900;
    const MOUSE_RADIUS = 110;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let tick = 0;
    let particles: Particle[] = [];

    const triangleArea = (t: Triangle) =>
      Math.abs(
        (t.a.x * (t.b.y - t.c.y) + t.b.x * (t.c.y - t.a.y) + t.c.x * (t.a.y - t.b.y)) /
          2,
      );

    const randomPointInTriangle = (t: Triangle): Point => {
      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 + r2 > 1) {
        r1 = 1 - r1;
        r2 = 1 - r2;
      }
      return {
        x: t.a.x + r1 * (t.b.x - t.a.x) + r2 * (t.c.x - t.a.x),
        y: t.a.y + r1 * (t.b.y - t.a.y) + r2 * (t.c.y - t.a.y),
      };
    };

    const buildLogoPoints = () => {
      const points: Array<{ x: number; y: number }> = [];
      const logoW = Math.max(280, width * 0.32);
      const logoH = Math.max(240, height * 0.58);
      const logoX = width * 0.60;
      const logoY = (height - logoH) * 0.5;

      // 3-triangle SAV-style mark:
      // - one large top triangle
      // - two lower triangles that form the lower arrow/shield shape
      const topTriangle: Triangle = {
        a: { x: logoX + logoW * 0.5, y: logoY + logoH * 0.04 },
        b: { x: logoX + logoW * 0.16, y: logoY + logoH * 0.56 },
        c: { x: logoX + logoW * 0.84, y: logoY + logoH * 0.56 },
      };

      const bottomLeftTriangle: Triangle = {
        a: { x: logoX + logoW * 0.16, y: logoY + logoH * 0.56 },
        b: { x: logoX + logoW * 0.50, y: logoY + logoH * 0.95 },
        c: { x: logoX + logoW * 0.41, y: logoY + logoH * 0.56 },
      };

      const bottomRightTriangle: Triangle = {
        a: { x: logoX + logoW * 0.84, y: logoY + logoH * 0.56 },
        b: { x: logoX + logoW * 0.50, y: logoY + logoH * 0.95 },
        c: { x: logoX + logoW * 0.59, y: logoY + logoH * 0.56 },
      };

      const triangles = [topTriangle, bottomLeftTriangle, bottomRightTriangle];
      const totalArea = triangles.reduce((sum, t) => sum + triangleArea(t), 0);

      triangles.forEach((triangle, index) => {
        const areaShare = triangleArea(triangle) / totalArea;
        const count =
          index === triangles.length - 1
            ? PARTICLE_COUNT - points.length
            : Math.floor(PARTICLE_COUNT * areaShare);

        for (let i = 0; i < count; i += 1) {
          points.push(randomPointInTriangle(triangle));
        }
      });

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
        x: point.x + (Math.random() - 0.5) * 4,
        y: point.y + (Math.random() - 0.5) * 4,
        homeX: point.x,
        homeY: point.y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2,
        size: 0.7 + Math.random() * 0.8,
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

        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
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
