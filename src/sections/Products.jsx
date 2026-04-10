import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { products, categories } from '../data';

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="clay overflow-hidden relative cursor-pointer group"
      style={{ borderRadius: '28px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.03,
        rotateX: 2,
        rotateY: -2,
        boxShadow: '-12px -12px 24px rgba(255,255,255,0.7), 12px 12px 24px rgba(59,26,10,0.35), 0 0 50px rgba(201,149,108,0.2)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-cocoa mb-1">{product.name}</h3>
        <span className="inline-block text-xs font-body bg-rose-gold/20 text-choco-brown px-3 py-1 rounded-full mb-2">
          {product.flavor}
        </span>
        <div className="flex items-center justify-between mt-2">
          <span className="font-body text-sm text-cocoa/60">{product.weight}</span>
          <span className="font-display text-lg font-bold text-choco-brown">{product.price}</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 glass-strong flex flex-col items-center justify-center p-6 text-center"
            style={{ borderRadius: '28px' }}
          >
            <h4 className="font-display text-lg font-bold text-cream mb-3">{product.name}</h4>
            <p className="font-body text-sm text-cream/80 mb-4 leading-relaxed">{product.ingredients}</p>
            <button className="glass px-6 py-2.5 text-cream font-semibold hover:bg-white/20 transition-all duration-200 rounded-full text-sm">
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Products() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-fluid-section font-bold text-cream mb-4">
            Fall in Love with Every Bite
          </h2>
          <p className="font-body text-cream/60 text-fluid-body max-w-xl mx-auto">
            From single-origin dark bars to curated gift boxes — there's a Heartwins chocolate for every heart.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-rose-gold text-cocoa shadow-lg'
                  : 'glass text-cream/70 hover:text-cream hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
