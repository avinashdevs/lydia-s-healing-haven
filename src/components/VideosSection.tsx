import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const videos = [
  { src: "/videos/video1.mp4", title: "Siddha Wellness Talk" },
  { src: "/videos/video2.mp4", title: "Healing Through Nature" },
  { src: "/videos/video3.mp4", title: "Lifestyle & Health Tips" },
];

const VideosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="videos" className="py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Watch & Learn</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Health <span className="text-gradient">Insights</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Educational content from Dr. Lydia Thomas on Siddha medicine and holistic wellness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16] object-cover bg-muted"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-foreground">{video.title}</h3>
                <p className="font-body text-xs text-muted-foreground mt-1">Dr. Lydia Thomas</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
