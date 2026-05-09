import { useEffect, useRef, type CSSProperties } from "react";

const DOTS = [
  { x: 8, y: 16, size: 3.8, delay: 0, duration: 18 },
  { x: 17, y: 34, size: 2.8, delay: -2, duration: 16 },
  { x: 24, y: 56, size: 3.4, delay: -6, duration: 20 },
  { x: 33, y: 22, size: 2.6, delay: -9, duration: 15 },
  { x: 42, y: 72, size: 3.5, delay: -4, duration: 19 },
  { x: 51, y: 43, size: 2.7, delay: -11, duration: 17 },
  { x: 63, y: 18, size: 3.2, delay: -7, duration: 14 },
  { x: 74, y: 58, size: 2.9, delay: -3, duration: 21 },
  { x: 82, y: 28, size: 3.6, delay: -12, duration: 16 },
  { x: 91, y: 46, size: 2.5, delay: -8, duration: 18 },
];

const LINES = [
  { x: 12, y: 24, length: 22, angle: 16, delay: -3, duration: 12 },
  { x: 25, y: 49, length: 27, angle: -11, delay: -6, duration: 16 },
  { x: 40, y: 33, length: 24, angle: 8, delay: -1, duration: 14 },
  { x: 55, y: 64, length: 29, angle: -14, delay: -9, duration: 13 },
  { x: 68, y: 31, length: 26, angle: 12, delay: -5, duration: 15 },
  { x: 80, y: 52, length: 20, angle: -9, delay: -7, duration: 11 },
];

export function HeroParticles() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el || typeof window === "undefined") return;

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      const clampedX = Math.max(0, Math.min(1, x));
      const clampedY = Math.max(0, Math.min(1, y));

      el.style.setProperty("--mouse-x", clampedX.toFixed(3));
      el.style.setProperty("--mouse-y", clampedY.toFixed(3));
    };

    const onMove = (event: MouseEvent) => updateMouse(event.clientX, event.clientY);
    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div ref={hostRef} className="hero-particles-layer absolute inset-0" aria-hidden="true">
      <div className="hero-particles-overlay" />
      {LINES.map((line, idx) => (
        <span
          key={`line-${idx}`}
          className="hero-connection-line"
          style={
            {
              "--line-x": `${line.x}%`,
              "--line-y": `${line.y}%`,
              "--line-length": `${line.length}vw`,
              "--line-angle": `${line.angle}deg`,
              "--line-delay": `${line.delay}s`,
              "--line-duration": `${line.duration}s`,
            } as CSSProperties
          }
        />
      ))}
      {DOTS.map((dot, idx) => (
        <span
          key={`dot-${idx}`}
          className="hero-particle-dot"
          style={
            {
              "--dot-x": `${dot.x}%`,
              "--dot-y": `${dot.y}%`,
              "--dot-size": `${dot.size}px`,
              "--dot-delay": `${dot.delay}s`,
              "--dot-duration": `${dot.duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
