import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Tons Monthly" },
  { value: "100+", label: "Happy Clients" },
  { value: "6", label: "Product Lines" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden green-gradient">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`animate-reveal ${isVisible ? "visible" : ""} text-center`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mb-2">
                {s.value}
              </p>
              <p className="font-body text-sm text-primary-foreground/60 tracking-wider uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
