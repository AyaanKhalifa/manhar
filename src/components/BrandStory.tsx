import { useReveal } from '../hooks/useAnimations';

export default function BrandStory() {
  const { ref: sectionRef, revealed } = useReveal(0.1);

  return (
    <section id="about" className="py-24 md:py-32 bg-black-deep overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative overflow-hidden rounded-lg aspect-[4/5] lg:aspect-[3/4] reveal-scale ${revealed ? 'revealed' : ''}`}
          >
            <img
              src="/images/brand-story.png"
              alt="Manhar Store lifestyle - walking in premium footwear"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep/40 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <div
              className={`reveal-up ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white mb-8 leading-tight">
                MORE THAN<br />A SHOE STORE.
              </h2>
            </div>

            <div
              className={`reveal-up ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-off-white/50 text-base md:text-lg leading-relaxed mb-6">
                Manhar Store brings together style, comfort and everyday confidence
                for the people of Chikhli and beyond.
              </p>
              <p className="text-off-white/40 text-base leading-relaxed mb-10">
                We believe that every step should feel as good as it looks. Our carefully
                curated collection brings you footwear that fits your life — whether
                you're heading to work, hitting the streets, or chasing adventures.
              </p>
            </div>

            <div
              className={`reveal-up ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex items-center gap-8">
                <div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-gold">M</div>
                  <p className="text-xs tracking-[0.2em] uppercase text-off-white/40 mt-1">Manhar</p>
                </div>
                <div className="w-px h-12 bg-off-white/10" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-off-white/40">Where every step</p>
                  <p className="text-sm text-off-white/60 mt-1 italic font-display">makes a statement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
