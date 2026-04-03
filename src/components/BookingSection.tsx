import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", time: "", concern: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Consultation request submitted! We'll contact you shortly.");
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <section id="booking" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Get Started</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Book Your <span className="text-gradient">Consultation</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Take the first step toward natural healing. Dr. Lydia Thomas offers personalized Siddha consultations 
              to understand your unique constitution and provide tailored treatment plans.
            </p>

            <div className="space-y-6">
              {[
                { icon: Clock, text: "30-60 minute personalized session" },
                { icon: Calendar, text: "Flexible scheduling — in-person & online" },
                { icon: MessageSquare, text: "Comprehensive health assessment" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-body text-sm text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full bg-card rounded-3xl p-12 shadow-lg text-center"
              >
                <CheckCircle className="w-16 h-16 text-primary mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Request Submitted!</h3>
                <p className="font-body text-muted-foreground">We'll reach out to you shortly to confirm your appointment.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", time: "", concern: "" }); }}
                  className="mt-6 font-body text-sm text-primary hover:text-primary/80 transition-colors underline"
                >
                  Book another consultation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-lg space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required value={form.name} onChange={(e) => update("name", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required value={form.phone} onChange={(e) => update("phone", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="+91 00000 00000" type="tel"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      value={form.email} onChange={(e) => update("email", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="your@email.com" type="email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required value={form.date} onChange={(e) => update("date", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        type="date"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required value={form.time} onChange={(e) => update("time", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary/50 border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        type="time"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">Health Concern</label>
                  <textarea
                    value={form.concern} onChange={(e) => update("concern", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Briefly describe your health concern..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-body text-sm font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-0.5"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
