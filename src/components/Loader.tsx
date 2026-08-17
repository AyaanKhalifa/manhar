import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'manhar' | 'shoes' | 'exit'>('manhar');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('shoes'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 1400);
    const t3 = setTimeout(() => onComplete(), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`loader-overlay transition-all duration-700 ease-in-out ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* MANHAR */}
        <div className="overflow-hidden mb-2">
          <h1
            className={`font-display text-5xl md:text-7xl font-bold tracking-[0.15em] text-off-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase === 'manhar' || phase === 'shoes' || phase === 'exit'
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
          >
            MANHAR
          </h1>
        </div>
        {/* SHOES */}
        <div className="overflow-hidden">
          <p
            className={`font-sans text-sm md:text-base tracking-[0.5em] text-gray-light uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
              phase === 'shoes' || phase === 'exit'
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
          >
            SHOES
          </p>
        </div>
        {/* Gold line */}
        <div
          className={`mx-auto mt-6 h-px bg-gold transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
            phase === 'shoes' || phase === 'exit' ? 'w-16 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
