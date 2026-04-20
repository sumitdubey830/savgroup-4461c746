import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";

export function ContactForm() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, t("cp.f.err.name")).max(100),
    company: z.string().trim().min(1, t("cp.f.err.company")).max(150),
    email: z.string().trim().email(t("cp.f.err.email")).max(255),
    phone: z.string().trim().min(5, t("cp.f.err.phone")).max(30),
    requirement: z.string().trim().min(10, t("cp.f.err.req")).max(1000),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("worker_requests").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error(t("cp.f.error") || "Something went wrong. Please try again.");
      return;
    }
    toast.success(t("cp.f.success"));
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label={t("cp.f.name")} placeholder={t("cp.f.name.ph")} />
        <Field name="company" label={t("cp.f.company")} placeholder={t("cp.f.company.ph")} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="email" label={t("cp.f.email")} type="email" placeholder={t("cp.f.email.ph")} />
        <Field name="phone" label={t("cp.f.phone")} type="tel" placeholder={t("cp.f.phone.ph")} />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-2">{t("cp.f.req")}</label>
        <textarea
          name="requirement"
          rows={5}
          required
          maxLength={1000}
          placeholder={t("cp.f.req.ph")}
          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-navy text-primary-foreground hover:bg-navy-light px-6 py-4 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors shadow-elegant disabled:opacity-60"
      >
        {submitting ? t("cp.f.sending") : <>{t("cp.f.submit")} <Send className="w-4 h-4" /></>}
      </button>
    </form>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
      />
    </div>
  );
}
