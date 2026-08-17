import { Camera, MapPin, Phone, ArrowUp } from 'lucide-react';
import { storeInfo } from '../data/products';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Store', href: '#store' },
  { label: 'Contact', href: '#store' },
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(storeInfo.whatsappMessage)}`;

  return (
    <footer className="bg-black-soft border-t border-off-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-off-white tracking-[0.1em] mb-2">
              MANHAR STORE
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Step Into Your Style.
            </p>
            <p className="text-off-white/30 text-sm leading-relaxed">
              Where every step makes a statement.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-off-white/50 mb-6 font-medium">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-off-white/40 text-sm hover:text-off-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-off-white/50 mb-6 font-medium">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                <span className="text-off-white/40 text-sm">{storeInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                <a href={`tel:${storeInfo.phone}`} className="text-off-white/40 text-sm hover:text-off-white transition-colors">
                  {storeInfo.phone}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href={storeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <Camera size={14} strokeWidth={1.5} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                  <path d="M11.42 21.815a10.033 10.033 0 0 1-5.1-1.39l-.36-.21-3.79 1 .99-3.7-.23-.37a10.005 10.005 0 0 1-1.54-5.32A10.037 10.037 0 0 1 11.42 1.773a10.013 10.013 0 0 1 10.02 10.018 10.027 10.027 0 0 1-10.02 10.024zm0-18.34A8.32 8.32 0 0 0 3.106 11.8a8.337 8.337 0 0 0 1.284 4.417l.15.24-.65 2.42 2.48-.65.23.14a8.297 8.297 0 0 0 4.82 1.53c4.58 0 8.31-3.73 8.31-8.31a8.33 8.33 0 0 0-8.31-8.312zm4.56 11.39c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.67-1.24-1.5-1.39-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.55-.44h-.47c-.2 0-.52.08-.8.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.17c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.3-.2-.55-.33z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-off-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-off-white/20 text-xs tracking-wider">
            &copy; 2026 Manhar Store. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-off-white/10 flex items-center justify-center text-off-white/30 hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <ArrowUp size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
}
