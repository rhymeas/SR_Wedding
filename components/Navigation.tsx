import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-creme/90 backdrop-blur-md py-4 shadow-sm border-b border-forest/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="relative group">
           <span className="font-serif text-2xl tracking-[0.2em] uppercase font-bold text-forest">S & R</span>
           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-citron transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-forest text-xs uppercase tracking-[0.2em] font-medium hover:text-forest/60 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-citron rounded-full opacity-0 transform -translate-x-1/2 transition-all group-hover:opacity-100"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-forest p-2 hover:bg-forest/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-creme flex flex-col items-center pt-24 space-y-8 shadow-lg animate-slide-up z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-forest font-serif text-3xl italic hover:text-citron transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;