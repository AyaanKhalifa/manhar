import { useEffect, useRef, useState } from 'react';
import { cinematicFeatures } from '../data/products';

export default function CinematicSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setProgress(0.5);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = sectionRef.current.offsetHeight;

      // Calculate how far we've scrolled through this section
      const scrolled = (windowH - rect.top) / (sectionH + windowH);
      setProgress(Math.max(0, Math.min(1, scrolled)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shoeX = (progress - 0.5) * -200; // moves left to right
  const shoeScale = 1 + progress * 0.15;
  const textOpacity = progress > 0.2 && progress < 0.8 ? 1 : 0;
  const featureProgress = Math.max(0, (progress - 0.3) / 0.5);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-black-deep overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[150vw] md:w-[600px] h-[150vw] md:h-[600px] max-w-[600px] max-h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.04] blur-[150px] transition-transform duration-[2s]"
        style={{ transform: `translate(-50%, -50%) scale(${0.8 + progress * 0.4})` }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Giant heading */}
        <div
          className="text-center mb-16 md:mb-24 transition-all duration-700"
          style={{ opacity: textOpacity, transform: `translateY(${(1 - textOpacity) * 20}px)` }}
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-off-white text-shadow-glow">
            DESIGNED
          </h2>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-off-white/30">
            TO MOVE.
          </h2>
        </div>

        {/* Cinematic shoe */}
        <div className="flex justify-center mb-16 md:mb-24">
          <img
            src="/images/cinematic-shoe.png"
            alt="Cinematic premium shoe - designed to move"
            className="w-[85vw] max-w-[280px] sm:max-w-none sm:w-[360px] md:w-[480px] lg:w-[600px] transition-transform duration-100"
            loading="lazy"
            style={{
              transform: `translateX(${shoeX}px) scale(${shoeScale})`,
              filter: `drop-shadow(0 40px 80px rgba(0,0,0,0.5)) drop-shadow(0 0 ${40 + progress * 30}px rgba(201,169,110,${0.05 + progress * 0.1}))`,
            }}
          />
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {cinematicFeatures.map((feature, i) => {
            const itemProgress = Math.max(0, Math.min(1, (featureProgress - i * 0.15) / 0.4));
            return (
              <div
                key={feature}
                className="text-center transition-all duration-500"
                style={{
                  opacity: itemProgress,
                  transform: `translateY(${(1 - itemProgress) * 30}px)`,
                }}
              >
                <div className="w-px h-8 bg-gold/40 mx-auto mb-3" />
                <p className="text-xs tracking-[0.3em] uppercase text-off-white/70">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
