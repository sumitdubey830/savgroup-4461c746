import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Heart, Award } from "lucide-react";
import teamImg from "@/assets/worker-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sav Group — International Manpower Supply Company" },
      { name: "description", content: "Sav Group is an international manpower supply company with 2000+ Indian workers placed in Russian construction, logistics and manufacturing firms." },
      { property: "og:title", content: "About Sav Group" },
      { property: "og:description", content: "Trusted international manpower supplier — 2000+ Indian workers deployed across Russia." },
      { property: "og:image", content: teamImg },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Reliability", desc: "Consistent results, on-time deployment, and workers who deliver from day one." },
  { icon: Heart, title: "Discipline", desc: "Workers selected for work ethic, punctuality and respect for site protocols." },
  { icon: Award, title: "Cost-Effectiveness", desc: "Premium results at significantly lower cost than local labor markets." },
];

function About() {
  return (
    <>
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">About Us</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 max-w-3xl">Building International Workforces, One Project at a Time</h1>
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl">
            Sav Group connects Russia's leading companies with India's most capable workers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={teamImg} alt="Sav Group team" className="rounded-2xl shadow-elegant w-full h-[520px] object-cover" loading="lazy" width={1024} height={1024} />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded with a clear mission — to bridge India's enormous skilled labor pool
              with Russia's industrial demand — Sav Group has grown into a trusted partner
              for major construction firms, logistics operators and manufacturers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, more than <strong className="text-navy">2000 Indian workers</strong> are
              actively employed at Russian companies through our placements. Every worker is
              screened, documented, and prepared for the realities of international deployment
              before leaving India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We don't just supply workers — we manage the entire lifecycle, from first
              requirement to ongoing on-ground support.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Government-licensed operations",
                "Multi-stage worker screening",
                "Full visa & legal handling",
                "Replacement guarantee",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8 rounded-xl border border-border hover:shadow-elegant transition-all">
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Let's Discuss Your Workforce Needs</h2>
          <Link to="/contact" className="inline-block bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform mt-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
