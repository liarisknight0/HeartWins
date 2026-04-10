import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Final CTA Banner */}
      <div className="py-20 px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-fluid-section font-bold text-cream mb-8">
            Ready to Fall in Love?
          </h2>
          <motion.a
            href="#order"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '-6px -6px 12px rgba(255,255,255,0.5), 6px 6px 12px rgba(59,26,10,0.3), 0 0 30px rgba(201,149,108,0.15)',
                '-6px -6px 12px rgba(255,255,255,0.5), 6px 6px 12px rgba(59,26,10,0.3), 0 0 50px rgba(201,149,108,0.35)',
                '-6px -6px 12px rgba(255,255,255,0.5), 6px 6px 12px rgba(59,26,10,0.3), 0 0 30px rgba(201,149,108,0.15)',
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="clay inline-block px-10 py-4 font-display text-xl font-bold text-cocoa hover:text-choco-brown transition-colors duration-200"
            style={{ borderRadius: '40px' }}
          >
            Order Now 🍫
          </motion.a>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div
        className="relative bg-cocoa noise-overlay px-6 py-16"
        style={{ borderTop: '1px solid rgba(201,149,108,0.15)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/images/logo.jpg" alt="Heartwins" className="h-14 w-auto mb-3" />
            <p className="font-body text-sm text-cream/50 leading-relaxed">
              Handcrafted chocolates made with love in Deoghar, Jharkhand, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-cream mb-4 uppercase tracking-wider">Explore</h4>
            <div className="flex flex-col gap-2">
              {['Chocolates', 'Our Craft', 'Gifting', 'Our Story', 'Order'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, '')}`}
                  className="font-body text-sm text-cream/50 hover:text-cream transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-cream mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/heartwins" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-cream/50 hover:text-cream transition-colors duration-200">
                📸 Instagram
              </a>
              <a href="https://wa.me/919296874223" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-cream/50 hover:text-cream transition-colors duration-200">
                💬 WhatsApp
              </a>
              <a href="mailto:heartwins.chocolates@gmail.com"
                className="font-body text-sm text-cream/50 hover:text-cream transition-colors duration-200">
                ✉️ heartwins.chocolates@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-bold text-cream mb-4 uppercase tracking-wider">Stay Sweet</h4>
            <p className="font-body text-sm text-cream/50 mb-3">
              Get drops, deals, and chocolate stories in your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="clay flex-1 px-4 py-2.5 text-sm font-body text-cocoa placeholder:text-cocoa/40 outline-none"
                style={{ borderRadius: '16px', background: 'linear-gradient(145deg, #F5E6C8, #e8d4b0)' }}
              />
              <button
                className="clay px-5 py-2.5 text-sm font-bold text-cocoa hover:text-choco-brown transition-colors duration-200"
                style={{ borderRadius: '16px' }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-cream/10 text-center relative z-10">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Heartwins Chocolates. All rights reserved. Made with ❤️ in Deoghar, Jharkhand.
          </p>
        </div>
      </div>
    </footer>
  );
}
