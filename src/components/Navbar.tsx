
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Цены', href: '#prices' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Блог', href: '#blog' },
    { name: 'Контакты', href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onHomeClick) {
      e.preventDefault();
      onHomeClick();
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-effect shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="text-2xl font-serif font-bold tracking-wider text-brand-dark"
        >
          ИРИНА <span className="text-brand-muted font-light">СУББОТИНА</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.name === 'Главная' && onHomeClick) {
                  e.preventDefault();
                  onHomeClick();
                }
                setIsMenuOpen(false);
              }}
              className="text-sm font-medium uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-brand-dark"
              onClick={(e) => {
                if (link.name === 'Главная' && onHomeClick) {
                  e.preventDefault();
                  onHomeClick();
                }
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
