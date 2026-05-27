import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  size: number;
};

type Point = {
  x: number;
  y: number;
};

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
      lastX: -9999,
      lastY: -9999,
      vx: 0,
      vy: 0,
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const MOUSE_RADIUS = 115;
    const SAMPLE_STEP = 4;
    const ALPHA_THRESHOLD = 20;
    const WHITE_BG_THRESHOLD = 245;

    let width = 0;
    let height = 0;
    let animationId = 0;

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

      offscreen.width = Math.floor(logoW);
      offscreen.height = Math.floor(logoH);

      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return [];

      offCtx.clearRect(
        0,
        0,
        offscreen.width,
        offscreen.height
      );

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

      for (
        let y = 0;
        y < offscreen.height;
        y += SAMPLE_STEP
      ) {
        for (
          let x = 0;
          x < offscreen.width;
          x += SAMPLE_STEP
        ) {
          const index =
            (y * offscreen.width + x) * 4;

          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const alpha = pixels[index + 3];

          const isNearWhite =
            r >= WHITE_BG_THRESHOLD &&
            g >= WHITE_BG_THRESHOLD &&
            b >= WHITE_BG_THRESHOLD;

          if (
            alpha > ALPHA_THRESHOLD &&
            !isNearWhite
          ) {
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

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      if (!logoLoaded) return;

      const logoPoints =
        buildLogoPointsFromImage();

      particles = logoPoints.map((point) => ({
        x: point.x,
        y: point.y,

        homeX: point.x,
        homeY: point.y,

        vx: 0,
        vy: 0,

        size: 0.7 + Math.random() * 0.5,
      }));
    };

    const updateMousePosition = (
      clientX: number,
      clientY: number
    ) => {
      const rect =
        canvas.getBoundingClientRect();

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

    const onMove = (
      event: MouseEvent
    ) => {
      updateMousePosition(
        event.clientX,
        event.clientY
      );
    };

    const onWindowMove = (
      event: MouseEvent
    ) => {
      updateMousePosition(
        event.clientX,
        event.clientY
      );
    };

    const onLeave = () => {
      mouse.active = false;

      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onTouchMove = (
      event: TouchEvent
    ) => {
      const touch = event.touches[0];

      if (!touch) return;

      updateMousePosition(
        touch.clientX,
        touch.clientY
      );
    };

    const onTouchEnd = () => {
      onLeave();
    };

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // RETURN TO ORIGINAL POSITION
        const homeDx = p.homeX - p.x;
        const homeDy = p.homeY - p.y;

        p.vx += homeDx * 0.0090;
        p.vy += homeDy * 0.0090;

      
        // CURSOR INTERACTION
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            dist > 0 &&
            dist < MOUSE_RADIUS
          ) {
            const force =
              (1 -
                dist / MOUSE_RADIUS) *
              3.5;

            p.vx -=
              (dx / dist) * force;

            p.vy -=
              (dy / dist) * force;
          }
        }

        // DAMPING
        p.vx *= 0.97;
        p.vy *= 0.97;

        // POSITION UPDATE
        p.x += p.vx;
        p.y += p.vy;

        // DRAW PARTICLE
        ctx.beginPath();

        ctx.fillStyle =
          "rgba(255,255,255,0.95)";

        ctx.shadowBlur = 3;
        ctx.shadowColor = "white";

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      animationId =
        requestAnimationFrame(draw);
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
      cancelAnimationFrame(
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