import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useMouseParallax } from '../hooks/useAnimations';

export default function Hero() {
  const shoeRef = useMouseParallax(20);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black-deep"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep via-black-soft to-black-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] max-w-[800px] h-[150vw] max-h-[800px] rounded-full bg-gold/[0.03] blur-[100px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-24 pb-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="overflow-hidden mb-4">
            <p
              className={`text-xs tracking-[0.4em] uppercase text-gold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              Manhar Store
            </p>
          </div>

          <div className="space-y-1 mb-8">
            {['STEP', 'INTO', 'YOUR', 'STYLE.'].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <h1
                  className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight text-off-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transitionDelay: `${300 + i * 100}ms`,
                    transform: loaded ? 'translateY(0)' : 'translateY(110%)',
                    opacity: loaded ? 1 : 0,
                  }}
                >
                  {word}
                </h1>
              </div>
            ))}
          </div>

          <p
            className={`text-sm md:text-base text-off-white/50 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-700 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Premium footwear. Exceptional comfort. Made for every step.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[900ms] ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a href="#collection" className="btn-primary">
              <span className="flex items-center gap-2">
                Explore Collection
                <ArrowRight size={14} />
              </span>
            </a>
            <a href="#store" className="btn-outline">
              Visit Our Store
            </a>
          </div>
        </div>

        {/* Hero Shoe */}
        <div
          className={`flex-1 flex justify-center items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
            loaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          <div ref={shoeRef} className="relative" style={{ perspective: '1000px' }}>
            <img
              src="/images/hero-shoe.png"
              alt="Premium Manhar Store sneaker floating with dramatic lighting"
              className="w-[80vw] max-w-[320px] sm:max-w-none sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] animate-float drop-shadow-2xl"
              loading="eager"
              style={{
                filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 60px rgba(201,169,110,0.1))',
              }}
            />
            {/* Glow underneath */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[40px] bg-gold/10 rounded-full blur-[40px]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1200ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-off-white/30">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-off-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
