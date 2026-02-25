import { Award, Cog, ShieldCheck, ThumbsUp } from "lucide-react";

const features = [
  { icon: Award, title: "Premium Quality Rice", description: "Carefully selected and processed grains ensuring the highest quality standards." },
  { icon: Cog, title: "Modern Machinery", description: "State-of-the-art rice milling equipment for efficient and precise processing." },
  { icon: ShieldCheck, title: "Hygienic Processing", description: "Strict hygiene protocols maintained throughout the entire production process." },
  { icon: ThumbsUp, title: "Customer Satisfaction", description: "Dedicated to meeting and exceeding customer expectations every time." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-green-light">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">Our Strengths</p>
        <h2 className="section-title text-foreground">
          Why Choose <span className="text-primary">Us</span>
        </h2>
        <p className="section-subtitle">We combine tradition with technology to deliver the finest rice products.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-light mb-5">
                <f.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
