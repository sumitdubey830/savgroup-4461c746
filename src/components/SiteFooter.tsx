import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import savLogoFooter from "@/assets/sav-logo-footer.png";



export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy text-primary-foreground">
      <FooterBirds />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-4 w-[220px] md:w-[260px]">
            <img src={savLogoFooter} alt="Sav Group" className="w-full h-auto object-contain" />
          </Link>
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
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> <a href="mailto:contact@savgroups.com" className="hover:text-gold transition-colors">contact@savgroups.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> {t("cp.ops.value")}</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-primary-foreground/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Sav Group. {t("footer.rights")}</span>
          <span>Ashish Dubey · {t("footer.role")}</span>
        </div>
      </div>
    </footer>
  );
}