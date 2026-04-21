import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import savLogo from "@/assets/sav-logo-new.jpg";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="inline-block mb-4">
            <img src={savLogo} alt="Sav Group" className="h-20 w-auto object-contain rounded-md" />
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">{t("footer.desc")}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-gold transition-colors">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">{t("nav.services")}</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">{t("nav.gallery")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +7 922 875 6002</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> savruswork@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> {t("cp.ops.value")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-primary-foreground/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Sav Group. {t("footer.rights")}</span>
          <span>Ashish Dubey · {t("footer.role")}</span>
        </div>
      </div>
    </footer>
  );
}
