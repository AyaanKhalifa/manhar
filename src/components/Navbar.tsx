import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Store', href: '#store' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-display text-xl md:text-2xl font-bold tracking-[0.1em] text-off-white hover:text-gold transition-colors duration-300">
            MANHAR
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-off-white/70 hover:text-off-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-off-white/70 hover:text-off-white transition-colors duration-300 hidden md:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button aria-label="Cart" className="text-off-white/70 hover:text-off-white transition-colors duration-300 hidden md:block">
              <ShoppingBag size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Menu"
              className="text-off-white/70 hover:text-off-white transition-colors duration-300 md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black-deep transition-all duration-500 flex flex-col items-center justify-center ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          aria-label="Close menu"
          className="absolute top-6 right-6 text-off-white/70 hover:text-off-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-light tracking-[0.1em] text-off-white hover:text-gold transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-10 flex items-center gap-6">
          <button aria-label="Search" className="text-off-white/50 hover:text-off-white transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="text-off-white/50 hover:text-off-white transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </>
  );
}
