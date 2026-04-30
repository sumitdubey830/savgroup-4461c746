import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import savLogo from "@/assets/sav-logo-header.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-32 md:h-36 py-2 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src={savLogo} alt="Sav Group" className="h-32 md:h-40 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors"
              activeProps={{ className: "text-navy font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <a href="tel:+79228756002" className="text-sm font-medium text-navy flex items-center gap-2">
            <Phone className="w-4 h-4" /> +7 922 875 6002
          </a>
          <Link
            to="/contact"
            className="bg-gradient-gold text-gold-foreground px-5 py-2.5 rounded-md text-sm font-semibold shadow-gold hover:translate-y-[-1px] transition-transform"
          >
            {t("nav.request")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle compact />
          <button className="text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground/80 py-2">
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-gradient-gold text-gold-foreground px-5 py-3 rounded-md text-center font-semibold mt-2"
            >
              {t("nav.request")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
