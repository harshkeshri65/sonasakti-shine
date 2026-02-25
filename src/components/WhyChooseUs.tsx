import { Award, Cog, ShieldCheck, ThumbsUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Award, title: "Premium Quality", description: "Carefully selected and processed grains meeting the highest quality standards.", number: "01" },
  { icon: Cog, title: "Modern Machinery", description: "State-of-the-art rice milling equipment for efficient and precise processing.", number: "02" },
  { icon: ShieldCheck, title: "Hygienic Process", description: "Strict hygiene protocols maintained throughout the entire production cycle.", number: "03" },
  { icon: ThumbsUp, title: "100% Satisfaction", description: "Dedicated to meeting and exceeding customer expectations every single time.", number: "04" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-green-light overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title text-foreground">
            The Standard of<br /><span className="text-primary">Excellence</span>
          </h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="section-subtitle mb-0">We combine tradition with technology to deliver the finest rice products.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`animate-reveal ${isVisible ? "visible" : ""} group relative bg-card rounded-2xl p-8 text-center premium-shadow border border-border/40 hover:border-primary/20 transition-all duration-500`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="absolute top-5 right-6 font-heading text-5xl font-bold text-primary/[0.06] select-none">{f.number}</span>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/8 group-hover:bg-primary/12 mb-6 transition-colors duration-300">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
