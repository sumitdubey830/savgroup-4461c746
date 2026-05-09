import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const isNarrow = () => window.innerWidth < 768;

    const getParticleCount = () => {
      if (isNarrow()) return 38;
      return 62;
    };

    const getSpeed = () => {
      if (reducedMotion) return 0.08;
      return isNarrow() ? 0.16 : 0.22;
    };

    const setupCanvas = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const count = getParticleCount();
      const speed = getSpeed();

      particles = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = speed * (0.6 + Math.random() * 0.9);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
        };
      });
    };

    const resize = () => {
      setupCanvas();
      initParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5, 12, 28, 0.35)";
      ctx.fillRect(0, 0, width, height);

      const lineDistance = isNarrow() ? 120 : 150;
      const lineDistanceSq = lineDistance * lineDistance;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        p.x = Math.min(Math.max(p.x, 0), width);
        p.y = Math.min(Math.max(p.y, 0), height);
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq <= lineDistanceSq) {
            const alpha = 1 - distSq / lineDistanceSq;
            ctx.strokeStyle = `rgba(129, 166, 230, ${alpha * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.fillStyle = "rgba(198, 219, 255, 0.78)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    if (reducedMotion) {
      // Draw one static frame for users who prefer reduced motion.
      return () => {};
    }

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-90"
        aria-hidden="true"
      />
    </div>
  );
}
