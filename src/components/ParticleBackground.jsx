import { useMemo } from 'react';
import { motion } from 'framer-motion';

function Particle({ size, x, y, delay, dur }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: 'radial-gradient(circle, rgba(201,149,108,0.5) 0%, rgba(59,26,10,0.2) 100%)',
      }}
      animate={{
        y: [0, -60, -120, -60, 0],
        x: [0, 15, -10, 20, 0],
        opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function ParticleBackground({ count = 30 }) {
  const particles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const n = isMobile ? Math.floor(count / 2) : count;
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      dur: Math.random() * 8 + 10,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}
