import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Heart, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import teamImg from "@/assets/worker-team.jpg";
import founderSiraj from "@/assets/founder-sirajuddin.jpg";
import founderAshish from "@/assets/founder-ashish.jpg";
import founderVictoria from "@/assets/founder-victoria.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sav Group — Indian Manpower Agency for Russia" },
      { name: "description", content: "Sav Group is a trusted India-Russia manpower agency. 2000+ Indian workers placed in Russian construction, logistics & manufacturing. Поставщик рабочей силы из Индии." },
      { name: "keywords", content: "Indian manpower agency, India Russia recruitment, manpower supply India to Russia, workforce solutions Russia, рабочая сила из Индии, индийская кадровая компания, Indian workers for Russia" },
      { property: "og:title", content: "About Sav Group — Indian Manpower Agency for Russia" },
      { property: "og:description", content: "Trusted international manpower supplier — 2000+ Indian workers deployed across Russia." },
      { property: "og:image", content: teamImg },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const values = [
    { icon: Target, t: t("ap.val.1.t"), d: t("ap.val.1.d") },
    { icon: Heart, t: t("ap.val.2.t"), d: t("ap.val.2.d") },
    { icon: Award, t: t("ap.val.3.t"), d: t("ap.val.3.d") },
  ];

  return (
    <>
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("ap.eyebrow")}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 max-w-3xl">{t("ap.title")}</h1>
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl">{t("ap.subtitle")}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={teamImg} alt="Sav Group team" className="rounded-2xl shadow-elegant w-full h-[520px] object-cover" loading="lazy" width={1024} height={1024} />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{t("ap.story.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("ap.story.p1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("ap.story.p2pre")} <strong className="text-navy">{t("ap.story.p2strong")}</strong> {t("ap.story.p2post")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("ap.story.p3")}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[t("ap.check1"), t("ap.check2"), t("ap.check3"), t("ap.check4")].map((x) => (
                <div key={x} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("ap.values.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">{t("ap.values.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-background p-8 rounded-xl border border-border hover:shadow-elegant transition-all">
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("ap.founders.eyebrow")}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">{t("ap.founders.title")}</h2>
            <p className="text-muted-foreground mt-5">{t("ap.founders.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: founderSiraj, name: t("ap.f1.name"), role: t("ap.f1.role"), bio: t("ap.f1.bio") },
              { img: founderAshish, name: t("ap.f2.name"), role: t("ap.f2.role"), bio: t("ap.f2.bio") },
              { img: founderVictoria, name: t("ap.f3.name"), role: t("ap.f3.role"), bio: t("ap.f3.bio") },
            ].map((f) => (
              <article key={f.name} className="bg-background border border-border rounded-2xl overflow-hidden shadow-elegant hover:translate-y-[-4px] transition-transform">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy">{f.name}</h3>
                  <p className="text-gold text-xs uppercase tracking-wider font-semibold mt-1">{f.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{t("ap.cta.title")}</h2>
          <Link to="/contact" className="inline-block bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform mt-4">
            {t("ap.cta.btn")}
          </Link>
        </div>
      </section>
    </>
  );
}
