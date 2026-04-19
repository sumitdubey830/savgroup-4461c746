import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-md bg-gold flex items-center justify-center">
              <span className="text-navy font-display font-bold text-lg">S</span>
            </div>
            <div>
              <div className="font-display font-bold text-lg">Sav Group</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Workforce Solutions</div>
            </div>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">
            International manpower supply company providing skilled and unskilled
            workers from India to companies across Russia and globally. 2000+ workers
            successfully deployed.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +7 922 875 6002</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> savruswork@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> India · Russia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-primary-foreground/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Sav Group. All rights reserved.</span>
          <span>Ashish Dubey · Director</span>
        </div>
      </div>
    </footer>
  );
}
