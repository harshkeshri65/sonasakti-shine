import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We will get back to you soon." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <p className="text-accent font-heading text-center text-sm tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="section-title text-foreground">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="section-subtitle">We'd love to hear from you. Reach out for inquiries or orders.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div>
            <div className="space-y-6 mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground">ALOK HARSH RICE MILL PVT. LTD.</h3>
              <p className="text-accent font-heading italic">Brand: SONASAKTI</p>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Gidha, Ara, Bihar</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:9931570543" className="hover:text-primary transition-colors">9931570543</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:alokharshricemillpvt.ltd@gmail.com" className="hover:text-primary transition-colors text-sm break-all">
                  alokharshricemillpvt.ltd@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57576.0!2d84.65!3d25.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5f1a0bba08c1%3A0x7b0cf5d1e2c5b1a!2sAra%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-green-light rounded-xl p-8 shadow-lg border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full green-gradient text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-md"
                >
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
