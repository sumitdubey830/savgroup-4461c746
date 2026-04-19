import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ivan Petrov",
    role: "Project Manager",
    company: "Construction Company, Moscow",
    text: "Sav Group provided reliable workers for our construction project. Very satisfied with their discipline and work ethic. The team is professional from first contact to deployment.",
  },
  {
    name: "Sergey Ivanov",
    role: "Operations Director",
    company: "Logistics Firm, St. Petersburg",
    text: "We needed 50 loaders on short notice and Sav Group delivered within three weeks. Documentation was handled flawlessly. Highly recommended.",
  },
  {
    name: "Dmitry Smirnov",
    role: "CEO",
    company: "Industrial Manufacturing, Kazan",
    text: "Working with Sav Group for over two years. Their welders and fitters are skilled and dependable. A true partner for our workforce needs.",
  },
  {
    name: "Alexei Volkov",
    role: "HR Head",
    company: "Warehouse & Distribution, Yekaterinburg",
    text: "Cost-effective and transparent. The replacement guarantee gives us peace of mind. Indian workers we received are hardworking and respectful.",
  },
  {
    name: "Mikhail Sokolov",
    role: "Site Engineer",
    company: "Infrastructure Group, Novosibirsk",
    text: "Excellent communication. Sav Group understood our exact requirement for machine operators and shortlisted perfect candidates. Onboarding was smooth.",
  },
  {
    name: "Nikolai Kozlov",
    role: "Procurement Manager",
    company: "Heavy Industries, Samara",
    text: "Reliable manpower partner. Their workers handle long shifts well and integrate quickly into our operations. Will continue working with Sav Group.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Trusted by Russian Companies</h2>
        </div>

        <div className="bg-navy-light/60 backdrop-blur border border-primary-foreground/10 rounded-2xl p-10 md:p-14 shadow-elegant relative">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-gold/20" />
          <div key={index} className="animate-fade-up">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xl md:text-2xl leading-relaxed font-display italic text-primary-foreground/90 mb-8">
              "{t.text}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold text-gold">{t.name}</div>
                <div className="text-sm text-primary-foreground/60">{t.role} · {t.company}</div>
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
