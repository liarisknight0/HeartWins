import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

const tagline = 'Every Bite Wins Your Heart.'.split(' ');

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <ParticleBackground count={35} />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="z-10 mb-4"
      >
        <img src="/images/logo.jpg" alt="Heartwins" className="w-64 md:w-80 mx-auto" />
      </motion.div>

      {/* Tagline — word by word */}
      <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 z-10 mb-10">
        {tagline.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="font-body text-lg md:text-2xl text-cream/80"
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="flex flex-wrap gap-4 z-10"
      >
        <a
          href="#products"
          className="glass px-8 py-3.5 text-cream font-semibold hover:bg-white/15 transition-all duration-200 text-center rounded-full"
        >
          Explore Chocolates
        </a>
        <a
          href="#story"
          className="glass px-8 py-3.5 text-cream font-semibold hover:bg-white/15 transition-all duration-200 text-center rounded-full"
        >
          Our Story
        </a>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-xs tracking-widest uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-cream/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-rose-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
