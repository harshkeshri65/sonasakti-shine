import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import premiumRice from "@/assets/premium-rice.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";
import riceBags from "@/assets/rice-bags.jpg";
import millMachinery from "@/assets/mill-machinery.jpg";
import storageFacility from "@/assets/storage-facility.jpg";
import riceVarieties from "@/assets/rice-varieties.jpg";
import cleaningProcess from "@/assets/cleaning-process.jpg";
import packagingUnit from "@/assets/packaging-unit.jpg";

const images = [
  { src: premiumRice, alt: "Premium rice grains", span: "col-span-1 row-span-1" },
  { src: millMachinery, alt: "Mill machinery", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: basmatiRice, alt: "Basmati rice", span: "col-span-1 row-span-1" },
  { src: storageFacility, alt: "Storage facility", span: "col-span-1 row-span-1" },
  { src: riceBags, alt: "Rice bags", span: "col-span-1 row-span-1" },
  { src: riceVarieties, alt: "Rice varieties", span: "col-span-1 row-span-1" },
  { src: cleaningProcess, alt: "Cleaning process", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: packagingUnit, alt: "Packaging unit", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding bg-green-light overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Photo Gallery</span>
          <h2 className="section-title text-foreground">
            A Glimpse of Our <span className="text-primary">Operations</span>
          </h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="section-subtitle mb-0">A visual journey through our rice mill, products and facilities.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`animate-reveal ${isVisible ? "visible" : ""} ${img.span} rounded-xl overflow-hidden cursor-pointer group img-zoom aspect-square premium-shadow`}
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={() => setLightbox(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-body text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setLightbox(null)}>
              <X className="h-7 w-7" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery full view"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
