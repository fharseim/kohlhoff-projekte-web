import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-luxury-bg/95 backdrop-blur-md border-b border-luxury-border py-4 shadow-sm'
            : 'bg-transparent border-b border-white/10 py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Lockup */}
          <a href="#" className="flex items-center gap-4 group">
            {/* KP Box Logo - Always Black Box with White Text (Consistent with Contact Section) */}
            <div 
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shadow-sm bg-black transition-transform duration-300 group-hover:scale-105"
            >
                <span 
                  className="font-bold text-lg md:text-xl tracking-tighter leading-none text-white"
                >
                    KP
                </span>
            </div>
            
            {/* Text Logo */}
            <div className="flex flex-col justify-center">
                <span 
                  className={`font-serif text-sm md:text-base tracking-[0.15em] uppercase leading-tight transition-colors duration-500 ${
                    isScrolled ? 'text-luxury-text' : 'text-white'
                  }`}
                >
                    Kohlhoff
                </span>
                <span 
                  className={`font-serif text-sm md:text-base tracking-[0.15em] uppercase leading-tight transition-colors duration-500 ${
                    isScrolled ? 'text-luxury-text' : 'text-white'
                  }`}
                >
                    Projekte
                </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors duration-300 py-2 relative group ${
                  isScrolled ? 'text-luxury-text' : 'text-white/90'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 transition-colors duration-300 ${
              isScrolled ? 'text-luxury-text' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-luxury-bg z-40 flex flex-col items-center justify-center transition-all duration-700 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-luxury-text hover:text-luxury-gold hover:italic transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
