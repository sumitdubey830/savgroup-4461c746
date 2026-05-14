import gazprom from "@/assets/clients/gazprom.png";
import promstroy from "@/assets/clients/promstroy.png";
import interpol from "@/assets/clients/interpol.png";
import amur from "@/assets/clients/amur-minerals.png";
import velesstroy from "@/assets/clients/velesstroy.png";
import yamata from "@/assets/clients/yamata.png";
import ozon from "@/assets/clients/ozon.png";
import pyaterochka from "@/assets/clients/pyaterochka.png";
import btk from "@/assets/clients/btk.png";

const logos = [
  { src: gazprom, alt: "Gazprom", sizeClass: "max-h-24 scale-125" },
  { src: promstroy, alt: "Promstroy", sizeClass: "max-h-24 scale-[2.4]" },
  { src: interpol, alt: "Interpol Construction", sizeClass: "max-h-24 scale-125" },
  { src: amur, alt: "Amur Minerals", sizeClass: "max-h-16" },
  { src: velesstroy, alt: "Velesstroy", sizeClass: "max-h-16" },
  { src: yamata, alt: "Yamata", sizeClass: "max-h-16" },
  { src: ozon, alt: "Ozon", sizeClass: "max-h-24 scale-125" },
  { src: pyaterochka, alt: "Pyaterochka", sizeClass: "max-h-16" },
  { src: btk, alt: "BTK Group", sizeClass: "max-h-24 scale-125" },
];

export function ClientMarquee({ heading }: { heading: string }) {
  const loop = [...logos, ...logos];
  return (
    <section className="bg-white py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-navy mb-10">
          {heading}
        </h2>
      </div>
      <div className="marquee-pause group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="animate-marquee flex w-max items-center gap-8">
          {loop.map((l, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white rounded-xl shadow-sm border border-border h-28 w-52 shrink-0 px-6"
            >
              <img
                src={l.src}
                alt={l.alt}
                className={`${l.sizeClass} max-w-full object-contain`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
