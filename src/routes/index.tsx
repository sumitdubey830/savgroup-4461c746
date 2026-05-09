import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, FileCheck, Stethoscope, Languages, Briefcase, Plane,
  TrendingDown, Clock, Zap, ShieldCheck, Eye, ArrowRight,
  Truck, Flame, HardHat, Package, Wrench, Cog, Box, Hammer, MoreHorizontal,
  CheckCircle2,
} from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-workers.jpg";
import welderImg from "@/assets/worker-welder.jpg";
import warehouseImg from "@/assets/worker-warehouse.jpg";
import teamImg from "@/assets/worker-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sav Group — Indian Workers for Russia | Manpower Supply India to Russia" },
      { name: "description", content: "Sav Group supplies skilled & general Indian workers to companies in Russia. 2000+ workers deployed: welders, drivers, fitters, loaders. Рабочая сила из Индии." },
      { name: "keywords", content: "Indian workers for Russia, manpower supply India to Russia, workforce solutions Russia, рабочая сила из Индии, индийские рабочие в России, hire Indian workers, Indian welders Russia, Indian drivers Russia, labour supply Russia, recruitment agency India Russia" },
      { property: "og:title", content: "Sav Group — Indian Workers for Russia" },
      { property: "og:description", content: "International manpower supply: skilled & unskilled Indian workers for Russian companies. Fast deployment, full documentation, replacement guarantee." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();

  const services = [
    { icon: Users, t: t("svc.1.t"), d: t("svc.1.d") },
    { icon: Plane, t: t("svc.2.t"), d: t("svc.2.d") },
    { icon: Stethoscope, t: t("svc.3.t"), d: t("svc.3.d") },
    { icon: Languages, t: t("svc.4.t"), d: t("svc.4.d") },
    { icon: FileCheck, t: t("svc.5.t"), d: t("svc.5.d") },
    { icon: Briefcase, t: t("svc.6.t"), d: t("svc.6.d") },
  ];

  const workers = [
    { icon: Truck, label: t("w.drivers") },
    { icon: Flame, label: t("w.welders") },
    { icon: HardHat, label: t("w.labourers") },
    { icon: Package, label: t("w.loaders") },
    { icon: Wrench, label: t("w.fitters") },
    { icon: Cog, label: t("w.machine") },
    { icon: Box, label: t("w.packers") },
    { icon: Hammer, label: t("w.carpenters") },
    { icon: MoreHorizontal, label: t("w.more") },
  ];

  const reasons = [
    { icon: TrendingDown, t: t("why.1.t"), d: t("why.1.d") },
    { icon: Clock, t: t("why.2.t"), d: t("why.2.d") },
    { icon: Zap, t: t("why.3.t"), d: t("why.3.d") },
    { icon: ShieldCheck, t: t("why.4.t"), d: t("why.4.d") },
    { icon: Eye, t: t("why.5.t"), d: t("why.5.d") },
  ];

  const steps = [
    { n: "01", t: t("proc.1.t"), d: t("proc.1.d") },
    { n: "02", t: t("proc.2.t"), d: t("proc.2.d") },
    { n: "03", t: t("proc.3.t"), d: t("proc.3.d") },
    { n: "04", t: t("proc.4.t"), d: t("proc.4.d") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Indian construction workers" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8 text-primary-foreground animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              {t("hero.title1")}<br />
              {t("hero.title2")} <span className="text-gold">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
                {t("hero.cta1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors">
                {t("hero.cta2")}
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">
              {[
                { n: "2000+", l: t("hero.stat1") },
                { n: "150+", l: t("hero.stat2") },
                { n: "24/7", l: t("hero.stat3") },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={teamImg} alt="Sav Group worker team" className="rounded-2xl shadow-elegant w-full h-[520px] object-cover" loading="lazy" width={1024} height={1024} />
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-gold text-navy p-6 rounded-xl shadow-gold max-w-[220px]">
              <div className="text-4xl font-display font-bold">2000+</div>
              <div className="text-sm font-medium mt-1">{t("about.badge")}</div>
            </div>
          </div>
          <div>
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("about.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">{t("about.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              {t("about.p1pre")} <strong className="text-navy">{t("about.p1strong")}</strong> {t("about.p1post")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">{t("about.p2")}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[t("about.check1"), t("about.check2"), t("about.check3"), t("about.check4")].map((x) => (
                <div key={x} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("services.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">{t("services.title")}</h2>
            <p className="text-muted-foreground mt-4">{t("services.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.t} className="group bg-background p-8 rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all">
                <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                  <s.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKERS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("workers.eyebrow")}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">{t("workers.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("workers.desc.pre")} <strong className="text-navy">{t("workers.desc.strong")}</strong> {t("workers.desc.post")}
              </p>
              <img src={welderImg} alt="Indian welder at work" className="rounded-xl w-full h-64 object-cover shadow-elegant" loading="lazy" width={1024} height={1024} />
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {workers.map((w) => (
                <div key={w.label} className="group bg-secondary border border-border hover:bg-navy hover:border-navy p-6 rounded-xl text-center transition-all cursor-default">
                  <w.icon className="w-8 h-8 mx-auto text-navy group-hover:text-gold transition-colors" />
                  <div className="mt-3 font-semibold text-navy group-hover:text-primary-foreground transition-colors">{w.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("why.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">{t("why.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => {
              const dark = i === 0 || i === 4;
              return (
                <div key={r.t} className={`p-8 rounded-xl ${dark ? "bg-navy text-primary-foreground" : "bg-background border border-border"} hover:shadow-elegant transition-all`}>
                  <r.icon className={`w-10 h-10 ${dark ? "text-gold" : "text-navy"} mb-4`} />
                  <h3 className={`text-xl font-bold mb-2 ${dark ? "text-primary-foreground" : "text-navy"}`}>{r.t}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{r.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* PROCESS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("proc.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">{t("proc.title")}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="bg-secondary p-8 rounded-xl h-full border border-border hover:border-gold transition-colors">
                  <div className="text-5xl font-display font-bold text-gold/40 mb-4">{s.n}</div>
                  <h3 className="text-lg font-bold text-navy mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-6 h-6 text-gold -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <img src={warehouseImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" width={1024} height={1024} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">{t("cta.title")}</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
              {t("hero.cta1")} <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/79228756002" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors">
              {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
