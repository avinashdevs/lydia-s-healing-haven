import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Lydia Siddha Hospital" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <span className="font-display text-lg font-bold text-background tracking-wide">LYDIA</span>
              <span className="block text-[10px] tracking-[0.25em] text-background/60 font-body uppercase">Siddha Hospital</span>
            </div>
          </div>
          <p className="font-body text-sm text-background/60 leading-relaxed">
            Healing the root, not just symptoms. Ancient Siddha wisdom for modern wellness.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-background mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About Siddha", "Dr. Lydia", "Videos", "Book Consultation"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/[. ]/g, "")}`} className="block font-body text-sm text-background/60 hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-background mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="https://www.instagram.com/dr_lydi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-primary transition-colors">
              <Instagram size={16} /> @dr_lydi
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 text-center">
        <p className="font-body text-xs text-background/40">
          © {new Date().getFullYear()} Lydia Siddha Hospital. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
