import { useState, useEffect } from "react";
import { Menu, X, Wheat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_1px_20px_-4px_hsl(var(--foreground)/0.08)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-6">
        <a href="#home" className="flex items-center gap-3 group">
          <div className={`p-2 rounded-xl transition-colors duration-300 ${scrolled ? "bg-primary/10" : "bg-primary-foreground/10"}`}>
            <Wheat className={`h-7 w-7 transition-colors duration-300 ${scrolled ? "text-primary" : "text-primary-foreground"}`} />
          </div>
          <div className="leading-tight">
            <span className={`font-heading text-2xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}>
              SONASHAKTI
            </span>
            <span className={`block text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
              scrolled ? "text-accent" : "text-gold-light"
            }`}>
              Richness in Rice
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium font-body transition-all duration-300 ${
                scrolled
                  ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`ml-4 premium-btn text-sm py-2.5 px-6 rounded-full font-body transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:shadow-lg"
                : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2.5 rounded-xl transition-colors ${
            scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="flex flex-col py-6 px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 px-5 rounded-xl text-sm font-medium font-body text-foreground/70 hover:bg-green-light hover:text-primary transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
