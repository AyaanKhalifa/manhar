import { MapPin, Phone, Clock, MessageCircle, Navigation, ArrowRight } from 'lucide-react';
import { storeInfo } from '../data/products';
import { useReveal } from '../hooks/useAnimations';

export default function StoreSection() {
  const { ref: sectionRef, revealed } = useReveal(0.1);

  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(storeInfo.whatsappMessage)}`;

  return (
    <section id="store" className="py-24 md:py-32 bg-black-deep">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`text-center mb-16 md:mb-20 reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Visit Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-off-white">
            COME WALK IN.
          </h2>
          <p className="text-off-white/40 text-base mt-4">
            Visit MANHAR STORE in Chikhli, Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <div
            className={`space-y-8 reveal-up ${revealed ? 'revealed' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-off-white mb-1 tracking-wide uppercase">Address</h3>
                <p className="text-off-white/50 text-sm">{storeInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={16} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-off-white mb-1 tracking-wide uppercase">Phone</h3>
                <a href={`tel:${storeInfo.phone}`} className="text-off-white/50 text-sm hover:text-gold transition-colors">
                  {storeInfo.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={16} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-off-white mb-2 tracking-wide uppercase">Hours</h3>
                <div className="flex flex-col gap-1 w-full max-w-[200px]">
                  {storeInfo.hoursList.map((h, i) => (
                    <div key={i} className="flex justify-between text-off-white/50 text-sm">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-off-white mb-1 tracking-wide uppercase">Google Rating</h3>
                <p className="text-off-white/50 text-sm flex items-center gap-2">
                  <span className="text-gold font-bold">{storeInfo.rating}</span> 
                  <span>({storeInfo.reviewsCount})</span>
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M11.42 21.815a10.033 10.033 0 0 1-5.1-1.39l-.36-.21-3.79 1 .99-3.7-.23-.37a10.005 10.005 0 0 1-1.54-5.32A10.037 10.037 0 0 1 11.42 1.773a10.013 10.013 0 0 1 10.02 10.018 10.027 10.027 0 0 1-10.02 10.024zm0-18.34A8.32 8.32 0 0 0 3.106 11.8a8.337 8.337 0 0 0 1.284 4.417l.15.24-.65 2.42 2.48-.65.23.14a8.297 8.297 0 0 0 4.82 1.53c4.58 0 8.31-3.73 8.31-8.31a8.33 8.33 0 0 0-8.31-8.312zm4.56 11.39c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.67-1.24-1.5-1.39-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.55-.44h-.47c-.2 0-.52.08-.8.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.17c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.3-.2-.55-.33z"/>
                  </svg>
                  WhatsApp
                </span>
              </a>
              <a
                href={`tel:${storeInfo.phone}`}
                className="btn-outline"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href={storeInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Navigation size={14} />
                Get Directions
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div
            className={`reveal-scale ${revealed ? 'revealed' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-dark border border-off-white/[0.06]">
              <iframe
                title="Manhar Store Location"
                src="https://maps.google.com/maps?q=Manhar%20Store,%20Bazar%20St,%20Chikhli%20Bazar,%20Chikhli,%20Gujarat%20396521&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.6)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
