import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, User, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sav Group — Hire Indian Workers for Russia" },
      { name: "description", content: "Contact Sav Group to hire Indian workers for Russia. Phone +7 922 875 6002, email contact@savgroups.com. Response within 24 hours. Заказать рабочую силу из Индии." },
      { name: "keywords", content: "hire Indian workers Russia, contact manpower agency Russia, рабочая сила из Индии заказать, Indian workers for Russia contact, India Russia recruitment contact" },
      { property: "og:title", content: "Contact Sav Group — Hire Indian Workers for Russia" },
      { property: "og:description", content: "Request workers from India for your company. We respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  return (
    <>
      <section className="py-20 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">{t("cp.eyebrow")}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 max-w-3xl">{t("cp.title")}</h1>
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl">{t("cp.subtitle")}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-navy mb-2">{t("cp.direct")}</h2>
            <p className="text-muted-foreground mb-6">{t("cp.directDesc")}</p>

            <ContactItem icon={User} label={t("cp.person")} value="Ashish Dubey" />
            <ContactItem icon={Phone} label={t("cp.phone")} value="+7 922 875 6002" href="tel:+79228756002" />
            <ContactItem icon={MessageCircle} label={t("cp.whatsapp")} value="+7 922 875 6002" href="https://wa.me/79228756002" highlight />
            <ContactItem icon={Mail} label={t("cp.email")} value="contact@savgroups.com" href="mailto:contact@savgroups.com" />
            <ContactItem icon={MapPin} label={t("cp.ops")} value={t("cp.ops.value")} />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-10 shadow-elegant">
              <h2 className="text-2xl font-bold text-navy mb-2">{t("cp.form.title")}</h2>
              <p className="text-sm text-muted-foreground mb-8">{t("cp.form.note")}</p>
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
        <div className="font-semibold mt-0.5 text-navy">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
