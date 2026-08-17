import { Camera } from 'lucide-react';
import { useStaggerReveal, useReveal } from '../hooks/useAnimations';

// Using product images as social gallery placeholders
const socialImages = [
  { src: '/images/product-classic-runner.png', alt: 'Manhar Shoes social post 1' },
  { src: '/images/category-men.png', alt: 'Manhar Shoes social post 2' },
  { src: '/images/product-street-luxe.png', alt: 'Manhar Shoes social post 3' },
  { src: '/images/brand-story.png', alt: 'Manhar Shoes social post 4' },
  { src: '/images/product-signature.png', alt: 'Manhar Shoes social post 5' },
  { src: '/images/category-women.png', alt: 'Manhar Shoes social post 6' },
];

export default function SocialGallery() {
  const { ref: headingRef, revealed: headingRevealed } = useReveal();
  const { containerRef, visibleItems } = useStaggerReveal(socialImages.length, 100);

  return (
    <section className="py-24 md:py-32 bg-black-deep">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-14 md:mb-20 reveal-up ${headingRevealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">@manharshoes</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
            FOLLOW THE JOURNEY
          </h2>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {socialImages.map((img, i) => (
            <a
              key={i}
              href="#"
              className="social-item relative aspect-square overflow-hidden rounded-sm cursor-pointer block"
              style={{
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="social-img w-full h-full object-cover"
                loading="lazy"
              />
              <div className="social-overlay absolute inset-0 bg-black/50 flex items-center justify-center">
                <Camera size={24} className="text-off-white" strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
