import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedCollection from './components/FeaturedCollection';
import CinematicSection from './components/CinematicSection';
import TrendingCarousel from './components/TrendingCarousel';
import BrandStory from './components/BrandStory';
import WhyManhar from './components/WhyManhar';
import StoreSection from './components/StoreSection';
import Testimonials from './components/Testimonials';
import SocialGallery from './components/SocialGallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoadingComplete} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <CategorySection />
          <FeaturedCollection />
          <CinematicSection />
          <TrendingCarousel />
          <BrandStory />
          <WhyManhar />
          <StoreSection />
          <Testimonials />
          <SocialGallery />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
