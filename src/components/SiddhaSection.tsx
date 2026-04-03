import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Brain, Sparkles } from "lucide-react";
import siddhaHerbs from "@/assets/siddha-herbs.jpg";

const principles = [
  { icon: Leaf, title: "Natural Remedies", desc: "Herbal medicines crafted from nature's finest ingredients" },
  { icon: Heart, title: "Holistic Healing", desc: "Treating body, mind, and spirit as an interconnected whole" },
  { icon: Brain, title: "Root Cause Focus", desc: "Identifying and treating the origin, not just the symptoms" },
  { icon: Sparkles, title: "Lifestyle Integration", desc: "Sustainable wellness through diet, yoga, and daily practices" },
];

const SiddhaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="siddha" className="py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img src={siddhaHerbs} alt="Siddha medicine herbs" width={1280} height={720} loading="lazy" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="font-display text-3xl font-bold text-primary">5000+</p>
              <p className="font-body text-sm text-muted-foreground">Years of Ancient Wisdom</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Ancient Science</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              What is <span className="text-gradient">Siddha</span> Medicine?
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Siddha medicine is one of the oldest traditional medical systems originating from Tamil Nadu, India. 
              Rooted in the teachings of the Siddhars — ancient sages who attained spiritual perfection — 
              this system emphasizes balance among the three humors (Vatham, Pitham, Kapham) for complete wellness.
              It uses herbs, minerals, and animal products in carefully prepared formulations to restore health naturally.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SiddhaSection;
