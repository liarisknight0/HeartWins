import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Craft from './sections/Craft';
import Products from './sections/Products';
import Gifting from './sections/Gifting';
import HowToOrder from './sections/HowToOrder';
import OurStory from './sections/OurStory';
import Makers from './sections/Makers';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      {/* Animated gradient mesh background */}
      <div className="gradient-mesh" />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Manifesto />
        <Craft />
        <Products />
        <Gifting />
        <HowToOrder />
        <OurStory />
        <Makers />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
