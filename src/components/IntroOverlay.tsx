import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-black
        transition-all duration-1000
        ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="relative flex items-center justify-center">

        {/* Ambient glow */}
        <div className="absolute h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />

        {/* Logo container */}
        <div className="relative">

          {/* Logo */}
          <img
            src="/logo-icon.png"
            alt="Sav Group"
            className="relative z-10 w-[240px] animate-metalReveal"
          />

          {/* Moving light */}
          <div className="light-sweep" />

        </div>
      </div>
    </div>
  );
}