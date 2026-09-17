import { useEffect, useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Features', href: '#features' },
  { label: 'Details', href: '#details' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-stone-900' : 'bg-white/20 backdrop-blur-sm'
            }`}
          >
            <Home
              className={`w-5 h-5 transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}
            />
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}
          >
            Maison
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative group ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-stone-900' : 'bg-white'
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-md'
                : 'bg-white text-stone-900 hover:bg-stone-100 shadow-lg'
            }`}
          >
            Book a Viewing
          </a>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-stone-900' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-stone-200 mt-3">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-700 font-medium hover:text-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-stone-900 text-white text-center px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Book a Viewing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
