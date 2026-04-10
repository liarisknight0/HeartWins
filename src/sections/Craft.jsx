import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { craftStages } from '../data';

gsap.registerPlugin(ScrollTrigger);

const stageIcons = [
  /* Bean Selection */
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14"><ellipse cx="22" cy="32" rx="14" ry="20" fill="#6B3A2A" opacity="0.7"/><ellipse cx="42" cy="32" rx="14" ry="20" fill="#3B1A0A" opacity="0.8"/><path d="M32 12c0 20 0 40 0 40" stroke="#F5E6C8" strokeWidth="2" strokeDasharray="3 3"/></svg>,
  /* Roasting */
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14"><rect x="12" y="28" width="40" height="24" rx="6" fill="#6B3A2A"/><path d="M20 28c0-10 8-18 12-18s12 8 12 18" stroke="#C9956C" strokeWidth="2"/><path d="M26 18c2-8 4-8 6 0M32 14c2-8 4-8 6 0" stroke="#F2C4A0" strokeWidth="1.5" opacity="0.6"/></svg>,
  /* Grinding */
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14"><circle cx="32" cy="32" r="20" fill="#6B3A2A" opacity="0.6"/><circle cx="32" cy="32" r="12" fill="#3B1A0A"/><circle cx="32" cy="32" r="4" fill="#C9956C"/><line x1="32" y1="12" x2="32" y2="20" stroke="#F5E6C8" strokeWidth="2"/></svg>,
  /* Tempering */
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14"><rect x="14" y="20" width="36" height="28" rx="4" fill="#3B1A0A"/><path d="M14 34h36" stroke="#C9956C" strokeWidth="2"/><path d="M22 20v-6h20v6" stroke="#6B3A2A" strokeWidth="2"/><circle cx="32" cy="40" r="3" fill="#F2C4A0"/></svg>,
  /* Molding */
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14"><rect x="10" y="22" width="44" height="24" rx="6" fill="#6B3A2A" opacity="0.5"/><rect x="16" y="26" width="10" height="10" rx="3" fill="#3B1A0A"/><rect x="28" y="26" width="10" height="10" rx="3" fill="#3B1A0A"/><rect x="40" y="26" width="10" height="10" rx="3" fill="#3B1A0A"/></svg>,
  /* Packaging */
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14"><rect x="14" y="18" width="36" height="30" rx="4" fill="#C9956C" opacity="0.7"/><path d="M14 28h36" stroke="#3B1A0A" strokeWidth="2"/><path d="M32 18v30" stroke="#3B1A0A" strokeWidth="1.5" strokeDasharray="4 2"/><path d="M26 28l6-6 6 6" stroke="#6B3A2A" strokeWidth="2"/><circle cx="32" cy="38" r="4" fill="#F5E6C8"/></svg>,
];

export default function Craft() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalScroll = track.scrollWidth - window.innerWidth;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(track, { x: -totalScroll, ease: 'none' }),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="craft" ref={sectionRef} className="relative overflow-hidden min-h-screen">
      <div className="flex items-center min-h-screen">
        <div ref={trackRef} className="flex gap-8 px-12 md:px-24 items-center" style={{ willChange: 'transform' }}>
          
          {/* Title Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center pr-8">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-fluid-section font-bold text-cream leading-tight mb-4"
            >
              From Bean to Bar — <br />
              <span className="text-rose-gold">The Heartwins Way</span>
            </motion.h2>
            <p className="font-body text-cream/60 text-fluid-body">
              Six meticulous stages. One extraordinary bar. Scroll to explore our craft.
            </p>
          </div>

          {/* Stage Cards */}
          {craftStages.map((stage, i) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="clay flex-shrink-0 w-[70vw] sm:w-[50vw] md:w-[300px] p-8 flex flex-col items-center text-center gap-4 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="mb-2">{stageIcons[i]}</div>
              <span className="font-display text-5xl font-bold text-rose-gold/40">{stage.num}</span>
              <h3 className="font-display text-xl font-bold text-cocoa">{stage.title}</h3>
              <p className="font-body text-sm text-cocoa/70 leading-relaxed">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
