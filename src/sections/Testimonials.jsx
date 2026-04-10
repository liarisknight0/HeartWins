import AnimatedSection from '../components/AnimatedSection';
import { testimonials } from '../data';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'text-rose-gold' : 'text-cream/20'}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review, tall }) {
  return (
    <div
      className={`glass flex-shrink-0 w-[280px] p-6 flex flex-col ${tall ? 'min-h-[220px]' : 'min-h-[180px]'}`}
    >
      <StarRating count={review.stars} />
      <p className="font-body text-sm text-cream/80 leading-relaxed flex-1 mb-3">
        "{review.text}"
      </p>
      <div>
        <span className="font-display text-sm font-bold text-cream">{review.name}</span>
        <span className="font-body text-xs text-cream/50 ml-2">{review.city}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Double the array for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-fluid-section font-bold text-cream mb-4">
            Straight from the Heart
          </h2>
          <p className="font-body text-cream/60 text-fluid-body max-w-lg mx-auto">
            Don't take our word for it — hear what our chocolate-lovers have to say.
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="marquee-track">
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} tall={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
