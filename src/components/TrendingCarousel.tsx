import { products } from '../data/products';
import { useDragScroll, useReveal } from '../hooks/useAnimations';
import { Eye } from 'lucide-react';

export default function TrendingCarousel() {
  const { ref: headingRef, revealed: headingRevealed } = useReveal();
  const scrollRef = useDragScroll();

  return (
    <section className="py-24 md:py-32 bg-black-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-14 md:mb-20 reveal-up ${headingRevealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">What's Hot</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
            TRENDING NOW
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="scroll-carousel px-6 md:px-12"
      >
        {[...products, ...products.slice(0, 2)].map((product, i) => (
          <div
            key={`${product.id}-${i}`}
            className="w-[85vw] max-w-[280px] sm:max-w-none sm:w-[320px] md:w-[360px] bg-gray-dark rounded-lg overflow-hidden group cursor-pointer flex-shrink-0"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-off-white/90 flex items-center justify-center">
                    <Eye size={18} className="text-black-deep" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1">{product.category}</p>
              <h3 className="font-display text-base font-semibold text-off-white mb-2">{product.name}</h3>
              <span className="text-off-white/60 text-sm">₹{product.price.toLocaleString('en-IN')}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
