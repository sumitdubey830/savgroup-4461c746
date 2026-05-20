import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import IntroOverlay from "@/components/IntroOverlay";
import { I18nProvider, useI18n } from "@/lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("nf.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("nf.desc")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-navy-light transition-colors"
          >
            {t("nf.btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sav Group — Indian Workers for Russia | Manpower Supply India to Russia" },
      { name: "description", content: "Sav Group is a leading manpower agency in India supplying workers to Russian Companies. Indian manpower agency for Russia providing skilled & unskilled workers: welders, drivers, fitters, loaders. Рабочая сила из Индии для России." },
      { name: "keywords", content: "manpower agency for Russia in India, Indian manpower agency for Russia, manpower supply company India Russia, recruitment agency India for Russia, Indian workers for Russian companies, поставщик рабочей силы из Индии, кадровое агентство Индия Россия, Indian workers for Russia, manpower supply India to Russia, workforce solutions Russia, рабочая сила из Индии, индийские рабочие в России, поставка рабочей силы из Индии, hire Indian workers Russia, skilled workers from India, Indian welders Russia, Indian drivers Russia, construction workers India, labour supply Russia, recruitment agency India Russia" },
      { name: "author", content: "Sav Group" },
      { name: "robots", content: "index, follow" },
      { name: "yandex-verification", content: "a36683f30b40c8b4" },
      { httpEquiv: "content-language", content: "en, ru" },
      { property: "og:title", content: "Sav Group — Indian Workers for Russia | Manpower Supply India to Russia" },
      { name: "twitter:title", content: "Sav Group — Indian Workers for Russia | Manpower Supply India to Russia" },
      { property: "og:description", content: "Sav Group supplies skilled & unskilled Indian workers to Russia. 2000+ workers deployed. Рабочая сила из Индии для российских компаний." },
      { name: "twitter:description", content: "Sav Group supplies skilled & unskilled Indian workers to Russia. 2000+ workers deployed. Рабочая сила из Индии для российских компаний." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/REQWpXh1iyNCKrwds7R6p5lqqEd2/social-images/social-1776603956032-logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/REQWpXh1iyNCKrwds7R6p5lqqEd2/social-images/social-1776603956032-logo.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sav Group" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ru_RU" },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,500&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://savgroups.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sav Group",
          url: "https://savgroups.com",
          logo: "https://savgroups.com/android-chrome-512x512.png",
          description: "International manpower supply company providing skilled and unskilled Indian workers to companies in Russia.",
          areaServed: ["RU", "IN"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+7-922-875-6002",
            contactType: "customer service",
            email: "contact@savgroups.com",
            availableLanguage: ["English", "Russian", "Hindi"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>

      <IntroOverlay />

      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <Toaster />
      </div>

    </I18nProvider>
  );
}