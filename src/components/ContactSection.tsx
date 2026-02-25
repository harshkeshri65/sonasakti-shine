import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We will get back to you soon." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title text-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="section-subtitle mb-0">We'd love to hear from you. Reach out for inquiries, orders, or partnerships.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Info + Map */}
          <div className={`lg:col-span-2 animate-reveal-left ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">ALOK HARSH RICE MILL</h3>
            <p className="text-sm text-muted-foreground mb-1">Private Limited Company</p>
            <p className="text-accent font-heading italic text-lg mb-8">Brand: SONASHAKTI</p>

            <div className="space-y-5 mb-10">
              {[
                { Icon: MapPin, text: "Gidha, Ara, Bihar", href: undefined },
                { Icon: Phone, text: "9931570543", href: "tel:9931570543" },
                  { Icon: Phone, text: "9934057080", href: "tel:9934057080" },
                { Icon: Mail, text: "alokharshricemillpvt.ltd@gmail.com", href: "mailto:alokharshricemillpvt.ltd@gmail.com" },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  {href ? (
                    <a href={href} className="text-foreground/70 hover:text-primary transition-colors font-body text-sm mt-2.5 break-all">
                      {text}
                    </a>
                  ) : (
                    <span className="text-foreground/70 font-body text-sm mt-2.5">{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden premium-shadow border border-border/50">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57576.0!2d84.65!3d25.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f1a0bba08c1%3A0x7b0cf5d1e2c5b1a!2sAra%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 animate-reveal-right ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 premium-shadow border border-border/50">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">Send us a Message</h3>
              <p className="text-sm text-muted-foreground mb-8 font-body">Fill out the form and we'll get back to you shortly.</p>
              <div className="space-y-6">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", key: "name" as const },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 99315 70543", key: "phone" as const },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground/80 mb-2 font-body">{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all font-body text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2 font-body">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all resize-none font-body text-sm"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="premium-btn-primary w-full justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
