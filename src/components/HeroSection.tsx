import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Siddha healing" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-primary mb-6 border border-primary/30 px-4 py-2 rounded-full">
              AYUSH-Integrated Practices
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Healing the
            <br />
            <span className="text-gradient">Root</span>, Not Just
            <br />
            Symptoms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
          >
            Experience the ancient wisdom of Siddha medicine combined with modern holistic care at Lydia Siddha Hospital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="font-body inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-bold tracking-wide uppercase hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-0.5"
            >
              Book Consultation
            </a>
            <a
              href="#siddha"
              className="font-body inline-flex items-center px-8 py-4 border border-foreground/20 text-foreground rounded-full text-sm font-bold tracking-wide uppercase hover:border-primary hover:text-primary transition-all duration-500"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
