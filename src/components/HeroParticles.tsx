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
  depth: number;
};

type Point = { x: number; y: number };

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // PREMIUM BLENDING MODE
    ctx.globalCompositeOperation = "lighter";

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
      vx: 0,
      vy: 0,
      lastX: -9999,
      lastY: -9999,
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // TUNING
    const MOUSE_RADIUS = 120;
    const DOT_SIZE = 1.2;
    const ALPHA_THRESHOLD = 20;
    const SAMPLE_STEP = 6;
    const WHITE_BG_THRESHOLD = 245;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let tick = 0;
    let particles: Particle[] = [];
    let logoImage: HTMLImageElement | null = null;
    let logoLoaded = false;

    const buildLogoPointsFromImage = (): Point[] => {
      if (!logoImage) return [];

      const logoW = Math.max(260, width * 0.34);
      const logoH = Math.max(220, height * 0.58);

      const logoX = width * 0.60;
      const logoY = (height - logoH) * 0.5;

      const offscreen = document.createElement("canvas");

      offscreen.width = Math.max(1, Math.floor(logoW));
      offscreen.height = Math.max(1, Math.floor(logoH));

      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return [];

      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

      offCtx.drawImage(
        logoImage,
        0,
        0,
        offscreen.width,
        offscreen.height
      );

      const imageData = offCtx.getImageData(
        0,
        0,
        offscreen.width,
        offscreen.height
      );

      const pixels = imageData.data;
      const points: Point[] = [];

      for (let y = 0; y < offscreen.height; y += SAMPLE_STEP) {
        for (let x = 0; x < offscreen.width; x += SAMPLE_STEP) {
          const index = (y * offscreen.width + x) * 4;

          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const alpha = pixels[index + 3];

          const isNearWhiteBackground =
            r >= WHITE_BG_THRESHOLD &&
            g >= WHITE_BG_THRESHOLD &&
            b >= WHITE_BG_THRESHOLD;

          if (alpha > ALPHA_THRESHOLD && !isNearWhiteBackground) {
            points.push({
              x: logoX + x,
              y: logoY + y,
            });
          }
        }
      }

      return points;
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!logoLoaded) return;

      const logoPoints = buildLogoPointsFromImage();

      particles = logoPoints.map((point) => ({
        x: point.x + (Math.random() - 0.5) * 8,
        y: point.y + (Math.random() - 0.5) * 8,

        homeX: point.x,
        homeY: point.y,

        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,

        phase: Math.random() * Math.PI * 2,

        size: DOT_SIZE + Math.random() * 0.8,

        depth: Math.random() * 1 + 0.5,
      }));
    };

    const updateMousePosition = (
      clientX: number,
      clientY: number
    ) => {
      const rect = canvas.getBoundingClientRect();

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (
        x >= 0 &&
        x <= rect.width &&
        y >= 0 &&
        y <= rect.height
      ) {
        mouse.vx = x - mouse.lastX;
        mouse.vy = y - mouse.lastY;

        mouse.lastX = x;
        mouse.lastY = y;

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

      updateMousePosition(
        touch.clientX,
        touch.clientY
      );
    };

    const onTouchEnd = () => onLeave();

    const draw = () => {
      tick += 0.016;

      // CINEMATIC TRAIL EFFECT
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, width, height);

      if (!particles.length) {
        animationId = window.requestAnimationFrame(draw);
        return;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        // FLOATING AMBIENT MOTION
        const floatX =
          Math.sin(tick * 1.1 + p.phase) * 0.3;

        const floatY =
          Math.cos(tick * 0.9 + p.phase) * 0.3;

        // SOFTER RETURN SPRING
        const homeDx = p.homeX + floatX - p.x;
        const homeDy = p.homeY + floatY - p.y;

        p.vx += homeDx * 0.0035;
        p.vy += homeDy * 0.0035;

        // CURSOR INTERACTION
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 0 && dist < MOUSE_RADIUS) {
            const speed = Math.sqrt(
              mouse.vx * mouse.vx +
                mouse.vy * mouse.vy
            );

            const force =
              Math.pow(
                1 - dist / MOUSE_RADIUS,
                2
              ) *
              Math.min(
                12,
                1 + speed * 0.55
              );

            p.vx -= (dx / dist) * force;
            p.vy -= (dy / dist) * force;
          }
        }

        // SMOOTHER INERTIA
        p.vx *= 0.965;
        p.vy *= 0.965;

        p.vx = Math.max(
          -3,
          Math.min(3, p.vx)
        );

        p.vy = Math.max(
          -3,
          Math.min(3, p.vy)
        );

        // DEPTH PARALLAX
        p.x += p.vx * p.depth;
        p.y += p.vy * p.depth;

        // SCREEN BOUNDS
        if (p.x <= 0 || p.x >= width)
          p.vx *= -0.7;

        if (p.y <= 0 || p.y >= height)
          p.vy *= -0.7;

        p.x = Math.max(
          0,
          Math.min(width, p.x)
        );

        p.y = Math.max(
          0,
          Math.min(height, p.y)
        );

        // PREMIUM GLOW
        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 8
        );

        glow.addColorStop(
          0,
          "rgba(255,255,255,1)"
        );

        glow.addColorStop(
          0.4,
          "rgba(255,255,255,0.35)"
        );

        glow.addColorStop(
          1,
          "rgba(255,255,255,0)"
        );

        ctx.fillStyle = glow;

        ctx.shadowBlur = 12;
        ctx.shadowColor = "white";

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fill();

        ctx.shadowBlur = 0;
      }

      animationId =
        window.requestAnimationFrame(draw);
    };

    const image = new Image();

    image.decoding = "async";

    image.onload = () => {
      logoImage = image;
      logoLoaded = true;
      resize();
    };

    image.src = "/logo-icon.png";

    resize();
    draw();

    window.addEventListener(
      "resize",
      resize
    );

    canvas.addEventListener(
      "mousemove",
      onMove,
      { passive: true }
    );

    window.addEventListener(
      "mousemove",
      onWindowMove,
      { passive: true }
    );

    canvas.addEventListener(
      "mouseleave",
      onLeave
    );

    canvas.addEventListener(
      "touchmove",
      onTouchMove,
      { passive: true }
    );

    canvas.addEventListener(
      "touchend",
      onTouchEnd
    );

    return () => {
      window.cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        resize
      );

      canvas.removeEventListener(
        "mousemove",
        onMove
      );

      window.removeEventListener(
        "mousemove",
        onWindowMove
      );

      canvas.removeEventListener(
        "mouseleave",
        onLeave
      );

      canvas.removeEventListener(
        "touchmove",
        onTouchMove
      );

      canvas.removeEventListener(
        "touchend",
        onTouchEnd
      );
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full pointer-events-auto"
      />
    </div>
  );
}