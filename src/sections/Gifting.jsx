import { useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { occasions } from '../data';

export default function Gifting() {
  const constraintsRef = useRef(null);

  return (
    <section id="gifting" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-fluid-section font-bold text-cream mb-4">
            Chocolate for Every Moment
          </h2>
          <p className="font-body text-cream/60 text-fluid-body max-w-lg mx-auto">
            Whether it's a birthday, a festival, or just a "thinking of you" — we have the perfect box.
          </p>
        </AnimatedSection>

        {/* Draggable Carousel */}
        <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            className="flex gap-6 pb-4"
          >
            {occasions.map((occ, i) => (
              <motion.div
                key={occ.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="glass-strong flex-shrink-0 w-[260px] md:w-[280px] p-8 flex flex-col items-center text-center gap-4"
                style={{
                  background: `linear-gradient(160deg, rgba(201,149,108,0.25), rgba(242,196,160,0.15))`,
                  minHeight: '340px',
                }}
              >
                <span className="text-5xl">{occ.icon}</span>
                <h3 className="font-display text-xl font-bold text-cream">{occ.name}</h3>
                <p className="font-body text-sm text-cream/60">
                  Curated chocolate bundles crafted for {occ.name.toLowerCase()} celebrations.
                </p>
                <button className="glass px-5 py-2 text-sm font-semibold text-cream hover:bg-white/15 transition-all duration-200 rounded-full mt-auto">
                  Shop Bundles
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Build Your Own Box CTA */}
        <AnimatedSection className="text-center mt-14" delay={0.2}>
          <a
            href="#order"
            className="inline-block font-display text-2xl md:text-3xl font-bold text-rose-gold hover:text-cream transition-colors duration-300"
          >
            Build Your Own Box →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
