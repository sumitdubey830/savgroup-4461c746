import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, User, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sav Group — Request Workers from India" },
      { name: "description", content: "Contact Sav Group to request skilled or general workers. Phone +7 922 875 6002, email savruswork@gmail.com. Response within 24 hours." },
      { property: "og:title", content: "Contact Sav Group" },
      { property: "og:description", content: "Request workers from India for your company. We respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 max-w-3xl">Request Workers</h1>
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl">
            Tell us your requirement and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-navy mb-2">Direct Contact</h2>
            <p className="text-muted-foreground mb-8">
              Reach out by phone, WhatsApp, or email — whichever works best for you.
            </p>

            <ContactItem icon={User} label="Contact Person" value="Ashish Dubey" />
            <ContactItem icon={Phone} label="Phone" value="+7 922 875 6002" href="tel:+79228756002" />
            <ContactItem icon={MessageCircle} label="WhatsApp" value="+7 922 875 6002" href="https://wa.me/79228756002" highlight />
            <ContactItem icon={Mail} label="Email" value="savruswork@gmail.com" href="mailto:savruswork@gmail.com" />
            <ContactItem icon={MapPin} label="Operations" value="India · Russia" />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-elegant">
              <h2 className="text-2xl font-bold text-navy mb-2">Send a Request</h2>
              <p className="text-sm text-muted-foreground mb-8">All fields are required. We respond within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon: Icon, label, value, href, highlight }: { icon: typeof User; label: string; value: string; href?: string; highlight?: boolean }) {
  const content = (
    <div className={`flex items-start gap-4 p-5 rounded-xl border transition-all ${highlight ? "bg-gradient-gold border-gold text-navy" : "border-border hover:border-gold bg-background"}`}>
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${highlight ? "bg-navy text-gold" : "bg-secondary text-navy"}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className={`text-xs uppercase tracking-wider ${highlight ? "text-navy/70" : "text-muted-foreground"}`}>{label}</div>
        <div className={`font-semibold mt-0.5 ${highlight ? "text-navy" : "text-navy"}`}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
