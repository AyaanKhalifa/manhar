import { useState, useEffect } from 'react';
import { testimonials } from '../data/products';
import { useReveal } from '../hooks/useAnimations';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref: headingRef, revealed: headingRevealed } = useReveal();
  const [active, setActive] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-black-soft">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 reveal-up ${headingRevealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white">
            WHAT PEOPLE SAY
          </h2>
        </div>

        {/* Testimonial */}
        <div className="text-center">
          <Quote size={32} className="text-gold/30 mx-auto mb-8" strokeWidth={1} />

          <div className="relative min-h-[120px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-off-white/80 italic leading-relaxed max-w-2xl">
                  "{t.text}"
                </p>
                <div className="mt-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-off-white/40">
                    {t.author} — {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-gold w-6' : 'bg-off-white/20 hover:bg-off-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
