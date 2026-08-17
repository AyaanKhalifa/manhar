import { MessageCircle } from 'lucide-react';
import { storeInfo } from '../data/products';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${storeInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(storeInfo.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 animate-pulse-glow group"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
        <path d="M11.42 21.815a10.033 10.033 0 0 1-5.1-1.39l-.36-.21-3.79 1 .99-3.7-.23-.37a10.005 10.005 0 0 1-1.54-5.32A10.037 10.037 0 0 1 11.42 1.773a10.013 10.013 0 0 1 10.02 10.018 10.027 10.027 0 0 1-10.02 10.024zm0-18.34A8.32 8.32 0 0 0 3.106 11.8a8.337 8.337 0 0 0 1.284 4.417l.15.24-.65 2.42 2.48-.65.23.14a8.297 8.297 0 0 0 4.82 1.53c4.58 0 8.31-3.73 8.31-8.31a8.33 8.33 0 0 0-8.31-8.312zm4.56 11.39c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.67-1.24-1.5-1.39-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.55-.44h-.47c-.2 0-.52.08-.8.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.17c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.3-.2-.55-.33z"/>
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded bg-gray-dark text-off-white text-xs tracking-wide opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 hidden md:block">
        Chat with us
      </span>
    </a>
  );
}
