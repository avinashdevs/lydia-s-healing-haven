import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users, Instagram } from "lucide-react";

const stats = [
  { icon: Award, label: "AYUSH Certified", value: "Practitioner" },
  { icon: BookOpen, label: "Siddha & Lifestyle", value: "Specialist" },
  { icon: Users, label: "Mental Health", value: "Advocate" },
];

const DoctorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="doctor" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Meet Your Doctor</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Dr. Lydia <span className="text-gradient">Thomas</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video intro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <video
              src="/videos/video1.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-[9/16] max-h-[550px] object-cover bg-muted"
              poster=""
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-lg">
              Dr. Lydia Thomas is a passionate Siddha medicine practitioner dedicated to healing the root cause of ailments, not just the symptoms.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              With expertise in AYUSH-integrated practices, she combines the ancient wisdom of Siddha medicine with modern lifestyle approaches, 
              including mental health support, dietary guidance, and holistic wellness programs.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 italic border-l-2 border-primary pl-4">
              "Healing the root, not just symptoms" — 1 Corinthians 13
            </p>

            <div className="grid gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/60 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">{stat.value}</p>
                    <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/dr_lydi?igsh=OGNvN2xtcnVlNDFj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram size={18} />
              Follow on Instagram @dr_lydi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
