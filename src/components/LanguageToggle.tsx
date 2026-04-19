import { useI18n, type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const opts: Lang[] = ["en", "ru"];
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-border bg-background/60 ${compact ? "p-0.5" : "p-1"}`}>
      <Globe className={`${compact ? "w-3.5 h-3.5 ml-1.5" : "w-4 h-4 ml-2"} text-muted-foreground`} />
      {opts.map((o) => (
        <button
          key={o}
          onClick={() => setLang(o)}
          className={`${compact ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs"} rounded-full font-semibold uppercase tracking-wider transition-colors ${
            lang === o ? "bg-navy text-primary-foreground" : "text-muted-foreground hover:text-navy"
          }`}
          aria-label={`Switch to ${o.toUpperCase()}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
