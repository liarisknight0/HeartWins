import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { milestones } from '../data';

export default function OurStory() {
  return (
    <section
      id="story"
      className="relative py-24 md:py-32 px-6"
      style={{
        background: 'linear-gradient(180deg, rgba(242,196,160,0.15) 0%, rgba(245,230,200,0.1) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left — Founder Photo */}
          <AnimatedSection>
            <div
              className="clay p-4 max-w-sm mx-auto md:mx-0"
              style={{
                boxShadow:
                  '-8px -8px 16px rgba(255,255,255,0.6), 8px 8px 16px rgba(59,26,10,0.25), 0 0 60px rgba(201,149,108,0.2)',
              }}
            >
              <img
                src="https://picsum.photos/seed/founder/500/600"
                alt="Ananya Sharma, Founder of Heartwins"
                className="w-full rounded-2xl object-cover"
                style={{ aspectRatio: '5/6' }}
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Right — Story */}
          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-fluid-section font-bold text-cream mb-6">
              Our Story
            </h2>
            <h3 className="font-display text-xl text-rose-gold mb-4">Ananya Sharma</h3>
            <p className="font-body text-fluid-body text-cream/80 leading-relaxed mb-6">
              It started in a small kitchen in Deoghar, Jharkhand — a passion for making chocolates
              that bring smiles. What began as a weekend hobby quickly became a purpose: to craft
              chocolates that don't just taste extraordinary, but carry emotion in every bite.
              Today, Heartwins ships across Jharkhand and beyond, and every piece is still made by hand
              with love and care.
            </p>
            <div
              className="glass-strong p-6 border-l-4"
              style={{ borderLeftColor: '#C9956C' }}
            >
              <p className="font-display text-lg italic text-cream/90">
                "We don't mass-produce. We hand-pour love into every mold."
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Milestone Timeline */}
        <AnimatedSection>
          <h3 className="font-display text-xl text-cream text-center mb-10">Our Journey</h3>
          <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-rose-gold/30" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex-1 text-center md:text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-rose-gold flex items-center justify-center text-cocoa font-display font-bold text-sm mb-3 relative z-10">
                  {m.year}
                </div>
                <h4 className="font-display text-base font-bold text-cream mb-1">{m.title}</h4>
                <p className="font-body text-sm text-cream/60">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
