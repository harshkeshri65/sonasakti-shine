import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-rice-field.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Lush green rice paddy field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,55%,10%,0.75)] via-[hsl(152,55%,10%,0.45)] to-[hsl(152,55%,10%,0.85)]" />
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-sm font-medium text-primary-foreground/80 tracking-wider uppercase">
              Premium Rice Manufacturer
            </span>
          </div>
        </motion.div>

      <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-[0.95] tracking-tight"
>
  <span className="bg-gradient-to-r from-white via-yellow-100 to-gold-light bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(255,215,0,0.5)]">
    ALOK HARSH
  </span>
  <br />
  <span className="bg-gradient-to-r from-gold-light via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(255,215,0,0.6)]">
    RICE MILL
  </span>
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-lg mx-auto mb-4 leading-relaxed"
        >
          Premium Quality Rice Manufacturer in Bihar
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-light" />
          <span className="font-heading text-xl md:text-2xl italic text-gold-light tracking-wide">
            Delivering Purity, Taste & Trust Since 2013
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-light" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="premium-btn-primary shadow-xl hover:scale-105 transition-all duration-300">
            Contact Us
          </a>
          <a href="#about" className="premium-btn-outline">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
