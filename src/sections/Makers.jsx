import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { teamMembers } from '../data';

function MakerCard({ member, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, rotateY: 2, rotateX: -1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="clay p-6 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-rose-gold/30"
        loading="lazy"
      />
      <h3 className="font-display text-lg font-bold text-cocoa">{member.name}</h3>
      <p className="font-body text-sm text-choco-brown/70 mb-2">{member.role}</p>
      <p className="font-body text-xs text-cocoa/50 italic">"Passionate about every detail."</p>

      {/* Fun Fact Bloom */}
      <motion.div
        initial={false}
        animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-3 px-4 py-2 rounded-xl text-xs font-body text-choco-brown"
        style={{ background: 'rgba(201,149,108,0.2)' }}
      >
        🍫 {member.funFact}
      </motion.div>
    </motion.div>
  );
}

export default function Makers() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-fluid-section font-bold text-cream mb-4">
            The Hands Behind Every Bar
          </h2>
          <p className="font-body text-cream/60 text-fluid-body max-w-lg mx-auto">
            A small team with a big heart — each member brings a unique ingredient to the Heartwins recipe.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <MakerCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
