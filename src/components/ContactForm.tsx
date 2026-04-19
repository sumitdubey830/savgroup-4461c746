import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  requirement: z.string().trim().min(10, "Please describe your requirement").max(1000),
});

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Request received. Our team will contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Your Name" placeholder="Full name" />
        <Field name="company" label="Company" placeholder="Company name" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="email" label="Email" type="email" placeholder="you@company.com" />
        <Field name="phone" label="Phone" type="tel" placeholder="+7 ..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-2">Requirement</label>
        <textarea
          name="requirement"
          rows={5}
          required
          maxLength={1000}
          placeholder="Tell us how many workers, type, location, duration..."
          className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-navy text-primary-foreground hover:bg-navy-light px-6 py-4 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors shadow-elegant disabled:opacity-60"
      >
        {submitting ? "Sending..." : <>Submit Request <Send className="w-4 h-4" /></>}
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
