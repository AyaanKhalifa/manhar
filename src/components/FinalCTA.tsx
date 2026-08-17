import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';

export default function FinalCTA() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section className="relative py-32 md:py-48 bg-black-deep overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[500px] h-[150vw] md:h-[500px] max-w-[500px] max-h-[500px] rounded-full bg-gold/[0.03] blur-[100px] md:blur-[120px]" />

      {/* Floating shoe */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none hidden lg:block">
        <img
          src="/images/hero-shoe.png"
          alt=""
          aria-hidden="true"
          className="w-[90vw] max-w-[600px] animate-float-slow"
          style={{ filter: 'brightness(0.5)' }}
        />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Huge typography */}
        <div
          className={`mb-12 reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-off-white leading-[0.95]">
            YOUR NEXT STEP
          </h2>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-off-white/20 leading-[0.95] mt-2">
            STARTS HERE.
          </h2>
        </div>

        {/* Gold line */}
        <div
          className={`w-16 h-px bg-gold mx-auto mb-10 reveal-scale ${revealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '300ms' }}
        />

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center reveal-up ${revealed ? 'revealed' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a href="#collection" className="btn-primary">
            <span className="flex items-center gap-2">
              Explore Manhar Store
              <ArrowRight size={14} />
            </span>
          </a>
          <a href="#store" className="btn-outline">
            Visit Store
          </a>
        </div>
      </div>
    </section>
  );
}
