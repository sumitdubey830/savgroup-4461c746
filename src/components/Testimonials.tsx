import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const testimonials = [
  { name: "Ivan Petrov", roleKey: "tst.1.role", coKey: "tst.1.co", textKey: "tst.1.text" },
  { name: "Sergey Ivanov", roleKey: "tst.2.role", coKey: "tst.2.co", textKey: "tst.2.text" },
  { name: "Dmitry Smirnov", roleKey: "tst.3.role", coKey: "tst.3.co", textKey: "tst.3.text" },
  { name: "Alexei Volkov", roleKey: "tst.4.role", coKey: "tst.4.co", textKey: "tst.4.text" },
  { name: "Mikhail Sokolov", roleKey: "tst.5.role", coKey: "tst.5.co", textKey: "tst.5.text" },
  { name: "Nikolai Kozlov", roleKey: "tst.6.role", coKey: "tst.6.co", textKey: "tst.6.text" },
] as const;

export function Testimonials() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const item = testimonials[index];

  return (
    <section className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("tst.eyebrow")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">{t("tst.title")}</h2>
        </div>

        <div className="bg-navy-light/60 backdrop-blur border border-primary-foreground/10 rounded-2xl p-8 md:p-14 shadow-elegant relative">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-gold/20" />
          <div key={index} className="animate-fade-up">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-lg md:text-2xl leading-relaxed font-display italic text-primary-foreground/90 mb-8">
              "{t(item.textKey)}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold text-gold">{item.name}</div>
                <div className="text-sm text-primary-foreground/60">{t(item.roleKey)} · {t(item.coKey)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-gold hover:text-navy hover:border-gold transition-colors flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-gold hover:text-navy hover:border-gold transition-colors flex items-center justify-center"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-1.5 bg-primary-foreground/30"}`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
