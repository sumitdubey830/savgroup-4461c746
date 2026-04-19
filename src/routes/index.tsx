import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, FileCheck, Stethoscope, Languages, Briefcase, Plane,
  TrendingDown, Clock, Zap, ShieldCheck, Eye, ArrowRight,
  Truck, Flame, HardHat, Package, Wrench, Cog, Box, Hammer, MoreHorizontal,
  CheckCircle2,
} from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import heroImg from "@/assets/hero-workers.jpg";
import welderImg from "@/assets/worker-welder.jpg";
import warehouseImg from "@/assets/worker-warehouse.jpg";
import teamImg from "@/assets/worker-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sav Group — Reliable Workforce Solutions from India to Russia" },
      { name: "description", content: "Sav Group supplies skilled and general Indian workers to companies in Russia. 2000+ workers deployed. Welders, drivers, fitters, loaders & more." },
      { property: "og:title", content: "Sav Group — Reliable Workforce Solutions from India" },
      { property: "og:description", content: "International manpower supply: skilled & unskilled Indian workers for Russian companies. Fast deployment, full documentation, replacement guarantee." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Users, title: "Worker Recruitment", desc: "Sourcing skilled and general workers across India matched to your exact specifications." },
  { icon: Plane, title: "Visa & Work Permits", desc: "Complete handling of work permits and visa processing for international deployment." },
  { icon: Stethoscope, title: "Medical & Legal", desc: "Full medical screening and legal documentation per destination country requirements." },
  { icon: Languages, title: "Translation Support", desc: "Document translation and on-ground language assistance for smooth integration." },
  { icon: FileCheck, title: "Documentation", desc: "End-to-end paperwork: contracts, attestations, certifications and approvals." },
  { icon: Briefcase, title: "Onboarding & Management", desc: "Worker orientation, deployment logistics, and ongoing workforce management." },
];

const workers = [
  { icon: Truck, label: "Drivers" },
  { icon: Flame, label: "Welders" },
  { icon: HardHat, label: "Labourers" },
  { icon: Package, label: "Loaders" },
  { icon: Wrench, label: "Fitters" },
  { icon: Cog, label: "Machine Operators" },
  { icon: Box, label: "Packers" },
  { icon: Hammer, label: "Carpenters" },
  { icon: MoreHorizontal, label: "And More" },
];

const reasons = [
  { icon: TrendingDown, title: "Lower Labor Costs", desc: "Significantly more cost-effective than local Russian workforce without compromising quality." },
  { icon: Clock, title: "Long-Hour Capable", desc: "Workers comfortable with 10–12 hour shifts and demanding industrial schedules." },
  { icon: Zap, title: "Fast Deployment", desc: "Streamlined processing — workers on your site in weeks, not months." },
  { icon: ShieldCheck, title: "Replacement Guarantee", desc: "Free replacement of any worker who does not meet performance standards." },
  { icon: Eye, title: "Transparent Process", desc: "Clear pricing, regular updates, and complete visibility from request to deployment." },
];

const steps = [
  { n: "01", title: "Submit Requirement", desc: "Share your worker count, skill type, location and timeline." },
  { n: "02", title: "Candidate Shortlist", desc: "We screen and present pre-qualified candidates within days." },
  { n: "03", title: "Documentation & Approvals", desc: "Visas, medicals, and contracts handled end-to-end by our team." },
  { n: "04", title: "Deployment", desc: "Workers arrive at your site, ready to perform from day one." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Indian construction workers at site" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8 text-primary-foreground animate-fade-up">
            <span className="inline-block px-4 py-2 bg-gold/15 border border-gold/30 text-gold text-xs uppercase tracking-[0.25em] rounded-full mb-6">
              India → Russia · Global Manpower
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Reliable Workforce<br />
              Solutions from <span className="text-gold">India</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed">
              Sav Group supplies skilled and general workers to companies across Russia
              and globally. Trusted by major Russian businesses with 2000+ workers
              successfully deployed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
                Request Workers <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors">
                Contact Us
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">
              {[
                { n: "2000+", l: "Workers Deployed" },
                { n: "150+", l: "Russian Clients" },
                { n: "24/7", l: "Support" },
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
              <div className="text-sm font-medium mt-1">Indian workers placed in Russian companies</div>
            </div>
          </div>
          <div>
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">About Sav Group</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
              Your Trusted International Manpower Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Sav Group is an international manpower supply company specializing in
              providing skilled and unskilled workers from India to companies across
              Russia and worldwide. With years of dedicated experience in cross-border
              recruitment, we have placed over <strong className="text-navy">2000 Indian workers</strong> in
              major Russian construction, logistics and manufacturing firms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our reputation is built on three pillars: <strong className="text-navy">reliability</strong>,
              <strong className="text-navy"> discipline</strong>, and <strong className="text-navy"> cost-effectiveness</strong>.
              We handle every step — from sourcing and screening to visa, medicals, and
              on-site deployment — so you can focus on your operations.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Government-compliant recruitment", "Pre-screened skilled workers", "End-to-end documentation", "Free replacement guarantee"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground">{t}</span>
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
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Complete Workforce Solutions</h2>
            <p className="text-muted-foreground mt-4">From recruitment to deployment, we manage everything.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-background p-8 rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all">
                <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                  <s.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
              <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Workforce</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">Workers We Provide</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From skilled tradespeople to general labour, our network covers every
                category. We provide <strong className="text-navy">any type of worker</strong> based on
                your specific requirements.
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

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Why Sav Group</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">A Partner You Can Rely On</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={r.title} className={`p-8 rounded-xl ${i === 0 || i === 4 ? "bg-navy text-primary-foreground" : "bg-background"} ${i === 0 || i === 4 ? "" : "border border-border"} hover:shadow-elegant transition-all`}>
                <r.icon className={`w-10 h-10 ${i === 0 || i === 4 ? "text-gold" : "text-navy"} mb-4`} />
                <h3 className={`text-xl font-bold mb-2 ${i === 0 || i === 4 ? "text-primary-foreground" : "text-navy"}`}>{r.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 0 || i === 4 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PROCESS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Simple 4-Step Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="bg-secondary p-8 rounded-xl h-full border border-border hover:border-gold transition-colors">
                  <div className="text-5xl font-display font-bold text-gold/40 mb-4">{s.n}</div>
                  <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Ready to Strengthen Your Workforce?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Tell us your requirement and our team will respond within 24 hours with a tailored proposal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform inline-flex items-center gap-2">
              Request Workers <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/79228756002" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors">
              WhatsApp: +7 922 875 6002
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
