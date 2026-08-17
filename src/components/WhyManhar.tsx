import { features } from '../data/products';
import { useStaggerReveal } from '../hooks/useAnimations';
import { Gem, Heart, Sparkles, MapPin } from 'lucide-react';

const icons = [Gem, Heart, Sparkles, MapPin];

export default function WhyManhar() {
  const { containerRef, visibleItems } = useStaggerReveal(features.length, 150);

  return (
    <section className="py-24 md:py-32 bg-black-soft">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Why Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
            WHY SHOP WITH US
          </h2>
        </div>

        {/* Feature Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={feature.id}
                className="group text-center p-8 md:p-10 rounded-lg border border-off-white/[0.06] hover:border-gold/30 bg-black-deep/50 transition-all duration-500"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), border-color 0.5s ease',
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 mb-6 group-hover:border-gold/50 transition-colors duration-500">
                  <Icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>

                {/* Gold line */}
                <div className="w-6 h-px bg-gold/40 mx-auto mb-6" />

                <h3 className="font-display text-xl font-bold text-off-white mb-3 tracking-wide uppercase">
                  {feature.title}
                </h3>
                <p className="text-off-white/40 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
