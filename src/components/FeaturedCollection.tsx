import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useStaggerReveal, useReveal } from '../hooks/useAnimations';

export default function FeaturedCollection() {
  const { ref: headingRef, revealed: headingRevealed } = useReveal();
  const { containerRef, visibleItems } = useStaggerReveal(products.length, 120);

  return (
    <section id="collection" className="py-24 md:py-32 bg-black-soft">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 md:mb-20 reveal-up ${headingRevealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Featured</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
            FEATURED COLLECTION
          </h2>
        </div>

        {/* Product Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              visible={visibleItems[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
