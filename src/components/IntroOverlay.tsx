import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"intro" | "fadeout" | "hidden">("intro");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fadeout"), 3200);
    const hideTimer = setTimeout(() => setPhase("hidden"), 4200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        transition-all duration-1000 ease-in-out
        ${phase === "fadeout" ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      style={{ background: phase === "fadeout" ? "#071326" : "#000000" }}
    >
      <div className="relative flex items-center justify-center">

        {/* Shockwave ring */}
        <div className={`absolute rounded-full border border-blue-300/30 
          ${phase === "intro" ? "ring-expand" : ""}`} 
        />

        {/* Ambient glow */}
        <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-[140px] animate-pulse" />

        {/* Logo */}
        <div className="logo-wrapper">
          <img
            src="/logo-icon.png"
            alt="Sav Group"
            className="relative z-10 w-[220px] logo-base"
          />
        </div>

      </div>
    </div>
  );
}