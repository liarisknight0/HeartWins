import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const steps = [
  {
    num: '1',
    title: 'Browse & Pick',
    desc: 'Explore our collection and choose the chocolates that speak to your heart.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="6" fill="#C9956C" opacity="0.3"/>
        <circle cx="24" cy="24" r="8" fill="#6B3A2A"/>
        <path d="M22 24l2 2 4-4" stroke="#F5E6C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Customize Your Box',
    desc: 'Pick your flavors, add a personal note, and choose your wrapping style.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="8" y="12" width="32" height="26" rx="5" fill="#C9956C" opacity="0.3"/>
        <path d="M24 12v26M8 25h32" stroke="#6B3A2A" strokeWidth="2"/>
        <path d="M18 12l6-5 6 5" stroke="#6B3A2A" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Delivered Fresh',
    desc: 'We pack your order with insulated care and deliver it to your doorstep.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="4" y="20" width="28" height="16" rx="3" fill="#C9956C" opacity="0.3"/>
        <polygon points="32,20 44,28 44,36 32,36" fill="#6B3A2A" opacity="0.5"/>
        <circle cx="14" cy="38" r="4" fill="#6B3A2A"/><circle cx="14" cy="38" r="2" fill="#F5E6C8"/>
        <circle cx="36" cy="38" r="4" fill="#6B3A2A"/><circle cx="36" cy="38" r="2" fill="#F5E6C8"/>
      </svg>
    ),
  },
];

export default function HowToOrder() {
  return (
    <section id="order" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-fluid-section font-bold text-cream mb-4">
            Getting Your Chocolates is Simple
          </h2>
        </AnimatedSection>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="clay p-8 text-center flex flex-col items-center gap-4 h-full"
              >
                <span className="font-display text-6xl font-bold text-rose-gold/30">{step.num}</span>
                {step.icon}
                <h3 className="font-display text-xl font-bold text-cocoa">{step.title}</h3>
                <p className="font-body text-sm text-cocoa/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Order Buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://wa.me/919296874223"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'rgba(37,211,102,0.2)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(37,211,102,0.3)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            💬 WhatsApp Us
          </a>
          <a
            href="#"
            className="px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'rgba(59,26,10,0.4)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(201,149,108,0.3)',
              color: '#F5E6C8',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            📋 Fill Order Form
          </a>
        </AnimatedSection>

        {/* Delivery Info */}
        <AnimatedSection>
          <div className="glass p-6 flex flex-wrap justify-center gap-8 text-center text-sm text-cream/70 font-body">
            <div>
              <span className="font-semibold text-cream block mb-1">Areas Served</span>
              Deoghar, Ranchi, Dhanbad, Jamshedpur & all India
            </div>
            <div>
              <span className="font-semibold text-cream block mb-1">Delivery Time</span>
              2–4 business days · Insulated packaging
            </div>
            <div>
              <span className="font-semibold text-cream block mb-1">Minimum Order</span>
              ₹499 · Free shipping above ₹999
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
