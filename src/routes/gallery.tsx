import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import img1 from "@/assets/gallery-airport-arrival.jpg";
import img2 from "@/assets/gallery-moscow-documents.jpg";
import img3 from "@/assets/gallery-team-arrival.jpg";
import img4 from "@/assets/gallery-construction-site.png";
import img5 from "@/assets/gallery-document-submission.png";
import img6 from "@/assets/gallery-winter-site.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work — Sav Group Workers in Action" },
      { name: "description", content: "Photos of Sav Group's Indian workers arriving in Russia, completing documentation in Moscow, and working on industrial and construction sites." },
      { property: "og:title", content: "Our Work — Sav Group Workers in Action" },
      { property: "og:description", content: "Real photos of our deployments to Russia: airport arrivals, document processing in Moscow, and on-site work." },
      { property: "og:image", content: "https://savhr-bridge.lovable.app" + img3 },
      { name: "twitter:image", content: "https://savhr-bridge.lovable.app" + img3 },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useI18n();
  const items = [
    { src: img3, cap: t("gal.cap.3"), span: "md:col-span-2 md:row-span-2" },
    { src: img1, cap: t("gal.cap.1"), span: "" },
    { src: img2, cap: t("gal.cap.2"), span: "" },
    { src: img4, cap: t("gal.cap.4"), span: "md:col-span-2" },
    { src: img5, cap: t("gal.cap.5"), span: "" },
    { src: img6, cap: t("gal.cap.6"), span: "" },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-navy text-primary-foreground py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {t("gal.eyebrow")}
          </span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t("gal.title")}
          </h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/75 text-lg leading-relaxed">
            {t("gal.subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[260px]">
            {items.map((item, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-elegant ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.cap}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-90" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                  <span className="inline-block w-8 h-px bg-gold mb-2" />
                  <p className="text-sm font-medium leading-snug">{item.cap}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
            {t("gal.cta.title")}
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-semibold shadow-gold hover:translate-y-[-2px] transition-transform"
          >
            {t("gal.cta.btn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
