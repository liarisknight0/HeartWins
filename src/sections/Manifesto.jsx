import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 12, suffix: '', label: 'Signature Flavors' },
  { value: 3, suffix: '+', label: 'Years of Craft' },
  { value: 10000, suffix: '+', label: 'Happy Hearts' },
];

export default function Manifesto() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/cocoa/1600/900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px) brightness(0.3)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Glass card */}
        <AnimatedSection>
          <div className="glass-strong p-8 md:p-14 text-center">
            <h2 className="font-display text-fluid-section font-bold text-cream mb-6">
              Our Manifesto
            </h2>
            <p className="font-body text-fluid-body text-cream/80 leading-relaxed max-w-2xl mx-auto mb-4">
              "We started Heartwins with a simple belief — that chocolate is more than a treat; it's an emotion.
              Every bar we craft carries the warmth of a handshake, the sweetness of a first love,
              and the comfort of coming home. We don't just make chocolate. We make moments."
            </p>
            <p className="font-body text-sm text-rose-gold italic">— Ananya Sharma, Founder</p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="glass p-6 text-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="font-body text-cream/70 text-sm mt-2">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
