import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/products';
import { useStaggerReveal } from '../hooks/useAnimations';

export default function CategorySection() {
  const { containerRef, visibleItems } = useStaggerReveal(categories.length, 150);

  return (
    <section className="py-24 md:py-32 bg-black-deep">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Categories</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
            FIND YOUR NEXT PAIR
          </h2>
        </div>

        {/* Category Grid — desktop grid, mobile horizontal scroll */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#collection"
              className="category-card group relative block aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
              style={{
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${i * 100}ms`,
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={`${cat.name} footwear category`}
                className="absolute inset-0 w-full h-full object-cover img-zoom"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="category-overlay absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="category-name font-display text-2xl md:text-3xl font-bold text-off-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-off-white/60 text-sm mb-3">{cat.tagline}</p>
                <div className="category-arrow">
                  <ArrowUpRight size={20} className="text-gold" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
