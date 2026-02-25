import { Wheat, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main footer */}
      <div className="green-gradient text-primary-foreground">
        <div className="container mx-auto px-6 pt-20 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary-foreground/10">
                  <Wheat className="h-6 w-6 text-gold-light" />
                </div>
                <span className="font-heading text-2xl font-bold tracking-wide">SONASHAKTI</span>
              </div>
              <p className="text-primary-foreground/60 text-sm font-body mb-3 leading-relaxed">
                ALOK HARSH RICE MILL PVT. LTD.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold-light/50" />
                <p className="text-gold-light font-heading italic text-base">Richness in Rice</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Products", href: "#products" },
                  { label: "Infrastructure", href: "#infrastructure" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-primary-foreground/60 hover:text-gold-light transition-colors font-body text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" />
                  <span className="text-primary-foreground/60 font-body text-sm">Gidha, Ara, Bihar</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-gold-light" />
                  <a href="tel:9931570543" className="text-primary-foreground/60 hover:text-gold-light transition-colors font-body text-sm">9931570543</a>
                  <a href="tel:9934057080" className="text-primary-foreground/60 hover:text-gold-light transition-colors font-body text-sm">9934057080</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold-light" />
                  <a href="mailto:alokharshricemillpvt.ltd@gmail.com" className="text-primary-foreground/60 hover:text-gold-light transition-colors font-body text-xs break-all">
                    alokharshricemillpvt.ltd@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">Connect</h4>
              <div className="flex gap-3 mb-8">
                {[
                  { label: "WhatsApp", href: "https://wa.me/917779986245", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
                  { label: "Facebook", href: "#", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-gold-light/40 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-primary-foreground/70">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Back to top */}
              <a
                href="#home"
                className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-gold-light transition-colors font-body text-xs tracking-wider uppercase"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Back to Top
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/40 font-body">
              © {new Date().getFullYear()} ALOK HARSH RICE MILL PVT. LTD. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/30 font-body">
              Gidha, Ara, Bihar — India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
