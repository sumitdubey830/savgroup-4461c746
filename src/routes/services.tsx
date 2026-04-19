import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, FileCheck, Stethoscope, Languages, Briefcase, Plane,
  Truck, Flame, HardHat, Package, Wrench, Cog, Box, Hammer, MoreHorizontal, ArrowRight,
} from "lucide-react";
import warehouseImg from "@/assets/worker-warehouse.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Worker Recruitment, Visas & Onboarding | Sav Group" },
      { name: "description", content: "End-to-end manpower services: recruitment from India, work permits, medicals, documentation, translation, and on-site worker management." },
      { property: "og:title", content: "Sav Group Services" },
      { property: "og:description", content: "Full-cycle worker supply: recruitment, visas, medicals, documentation, deployment." },
      { property: "og:image", content: warehouseImg },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Users, title: "Recruitment of Workers from India", desc: "Wide network across Indian states. Pre-screened candidates matched to your skill, language and location requirements." },
  { icon: Plane, title: "Work Permits & Visa Processing", desc: "Full handling of Russian and other international work permits, employment visas, and arrival documentation." },
  { icon: Stethoscope, title: "Medical & Legal Documentation", desc: "Pre-departure medicals, certifications, attestations and all legal paperwork required by destination authorities." },
  { icon: Languages, title: "Translation & Documentation Support", desc: "Certified translation of contracts, IDs, certificates. Russian-English language assistance for arriving workers." },
  { icon: FileCheck, title: "Compliance & Approvals", desc: "Government compliance, emigration clearance, contract drafting reviewed by experienced legal counsel." },
  { icon: Briefcase, title: "Onboarding & Worker Management", desc: "Orientation, accommodation coordination, deployment logistics and ongoing on-ground support." },
];

const workers = [Truck, Flame, HardHat, Package, Wrench, Cog, Box, Hammer, MoreHorizontal];
const labels = ["Drivers", "Welders", "Labourers", "Loaders", "Fitters", "Machine Operators", "Packers", "Carpenters", "And More"];

function Services() {
  return (
    <>
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">What We Do</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 max-w-3xl">Complete Manpower Services, Start to Finish</h1>
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl">
            We manage every step — so you receive ready-to-work professionals, on time.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-background p-8 rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all">
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                <s.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Workforce Categories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Workers We Provide</h2>
            <p className="text-muted-foreground mt-4">We provide any type of worker based on your requirements.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {workers.map((Icon, i) => (
              <div key={labels[i]} className="group bg-background border border-border hover:bg-navy hover:border-navy p-6 rounded-xl text-center transition-all">
                <Icon className="w-8 h-8 mx-auto text-navy group-hover:text-gold transition-colors" />
                <div className="mt-3 font-semibold text-navy group-hover:text-primary-foreground transition-colors">{labels[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Need a Specific Worker Profile?</h2>
          <p className="text-primary-foreground/70 mb-8">Tell us what you need — we'll deliver.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform">
            Request Workers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
