import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  visible: boolean;
}

export default function ProductCard({ product, index, visible }: ProductCardProps) {
  return (
    <div
      className="product-card bg-black-soft rounded-lg overflow-hidden cursor-pointer"
      style={{
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        transitionDelay: `${index * 100}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
      }}
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-dark overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-img w-full h-full object-cover"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 bg-gold text-black-deep font-medium rounded-sm">
            {product.badge}
          </span>
        )}

        {/* View button */}
        <div className="view-btn absolute bottom-4 left-4 right-4">
          <button className="w-full py-3 bg-off-white/95 text-black-deep text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold transition-colors duration-300">
            View Product
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-1.5">{product.category}</p>
        <h3 className="font-display text-lg font-semibold text-off-white mb-3">{product.name}</h3>

        <div className="flex items-center justify-between">
          <span className="text-off-white/80 text-sm font-medium">
            ₹{product.price.toLocaleString('en-IN')}
          </span>

          {/* Color swatches */}
          <div className="flex gap-1.5">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="w-3.5 h-3.5 rounded-full border border-off-white/20"
                style={{ backgroundColor: color }}
                title={`Color option ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
