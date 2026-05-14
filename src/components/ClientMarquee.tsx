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
  { src: gazprom, alt: "Gazprom" },
  { src: promstroy, alt: "Promstroy" },
  { src: interpol, alt: "Interpol Construction" },
  { src: amur, alt: "Amur Minerals" },
  { src: velesstroy, alt: "Velesstroy" },
  { src: yamata, alt: "Yamata" },
  { src: ozon, alt: "Ozon" },
  { src: pyaterochka, alt: "Pyaterochka" },
  { src: btk, alt: "BTK Group" },
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
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
