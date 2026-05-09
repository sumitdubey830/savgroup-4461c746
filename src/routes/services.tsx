import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, FileCheck, Stethoscope, Languages, Briefcase, Plane,
  Truck, Flame, HardHat, Package, Wrench, Cog, Box, Hammer, MoreHorizontal, ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import warehouseImg from "@/assets/worker-warehouse.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Indian Worker Recruitment, Visas & Deployment to Russia | Sav Group" },
      { name: "description", content: "End-to-end manpower supply India to Russia: recruitment, work permits, medicals, documentation, translation, on-site management. Услуги по поставке рабочей силы из Индии." },
      { name: "keywords", content: "manpower supply India to Russia, Indian worker recruitment, work permit Russia, Russian work visa India, Indian workers deployment Russia, workforce solutions Russia, рабочая сила из Индии, услуги по подбору персонала, recruitment services India Russia" },
      { property: "og:title", content: "Sav Group Services — Manpower Supply India to Russia" },
      { property: "og:description", content: "Full-cycle worker supply: recruitment, visas, medicals, documentation, deployment." },
      { property: "og:image", content: warehouseImg },
    ],
  }),
  component: Services,
});

function Services() {
  const { t } = useI18n();
  const services = [
    { icon: Users, t: t("sp.svc.1.t"), d: t("sp.svc.1.d") },
    { icon: Plane, t: t("sp.svc.2.t"), d: t("sp.svc.2.d") },
    { icon: Stethoscope, t: t("sp.svc.3.t"), d: t("sp.svc.3.d") },
    { icon: Languages, t: t("sp.svc.4.t"), d: t("sp.svc.4.d") },
    { icon: FileCheck, t: t("sp.svc.5.t"), d: t("sp.svc.5.d") },
    { icon: Briefcase, t: t("sp.svc.6.t"), d: t("sp.svc.6.d") },
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

  return (
    <>
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("sp.eyebrow")}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 max-w-3xl">{t("sp.title")}</h1>
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl">{t("sp.subtitle")}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.t} className="group bg-background p-8 rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all">
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                <s.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("sp.workers.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">{t("sp.workers.title")}</h2>
            <p className="text-muted-foreground mt-4">{t("sp.workers.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {workers.map((w) => (
              <div key={w.label} className="group bg-background border border-border hover:bg-navy hover:border-navy p-6 rounded-xl text-center transition-all">
                <w.icon className="w-8 h-8 mx-auto text-navy group-hover:text-gold transition-colors" />
                <div className="mt-3 font-semibold text-navy group-hover:text-primary-foreground transition-colors">{w.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{t("sp.cta.title")}</h2>
          <p className="text-primary-foreground/70 mb-8">{t("sp.cta.subtitle")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform">
            {t("nav.request")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
