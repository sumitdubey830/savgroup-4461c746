import { useEffect, useRef } from "react";

export function HeroParticles() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !hostRef.current) return;

    let effect: { destroy: () => void } | null = null;
    let mounted = true;

    const init = async () => {
      const [{ default: NET }, THREE] = await Promise.all([
        import("vanta/dist/vanta.net.min"),
        import("three"),
      ]);

      if (!mounted || !hostRef.current) return;

      effect = NET({
        el: hostRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        color: 0xdce9ff,
        backgroundColor: 0x081630,
        points: 12,
        maxDistance: 20,
        spacing: 16,
        showDots: true,
      });
    };

    init();

    return () => {
      mounted = false;
      effect?.destroy();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="absolute inset-0"
      aria-hidden="true"
    />
  );
}
