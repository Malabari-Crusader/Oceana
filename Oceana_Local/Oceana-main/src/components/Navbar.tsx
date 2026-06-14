import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { isArabic, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { en: 'Menu', ar: 'القائمة', path: '/menu' },
    { en: 'Private Dining', ar: 'غرف الطعام الخاصة', path: '/private-dining' },
    { en: 'Our Story', ar: 'قصتنا', path: '/story' },
    { en: 'Contact', ar: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-rich-black/95 backdrop-blur-md border-b border-white/10 py-0' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer text-white">
              <Utensils className="text-gold w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display text-2xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-gold flex gap-2 items-center">
                <span>Oceana</span>
                {isArabic && <span className="font-arabic text-xl tracking-normal mt-1">أوشيانا</span>}
              </span>
            </Link>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="hidden md:flex items-center justify-center border border-white/20 rounded-full px-3 py-1 text-xs font-bold tracking-widest text-gray-300 hover:text-gold hover:border-gold transition-colors duration-300 cursor-pointer"
            >
              <span className={!isArabic ? 'text-gold' : ''}>EN</span>
              <span className="mx-2 opacity-30">|</span>
              <span className={`font-arabic text-sm ${isArabic ? 'text-gold' : ''}`}>عر</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.en}
                to={link.path}
                className={`font-display text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-rich-black cursor-pointer link-underline ${
                  isActive(link.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {isArabic ? <span className="font-arabic text-lg tracking-normal">{link.ar}</span> : link.en}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="bg-burgundy hover:bg-burgundy/90 text-white px-6 py-2.5 rounded-full font-display text-sm font-bold tracking-widest transition-colors uppercase btn-press shadow-lg shadow-burgundy/20"
            >
              {isArabic ? <span className="font-arabic text-base tracking-normal">حجز طاولة</span> : 'Reserve Table'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center border border-white/20 rounded-full px-2 py-0.5 text-[10px] font-bold text-gray-300 hover:text-gold transition-colors duration-300"
            >
              <span className={!isArabic ? 'text-gold' : ''}>EN</span>
              <span className="mx-1 opacity-30">|</span>
              <span className={`font-arabic text-xs ${isArabic ? 'text-gold' : ''}`}>عر</span>
            </button>
            <button
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-rich-black border-b border-white/10 absolute w-full left-0 top-full shadow-2xl">
          <div className="px-4 pt-4 pb-8 space-y-6 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.en}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-display text-lg tracking-widest block transition-colors duration-300 cursor-pointer hover:text-gold ${
                  isActive(link.path) ? 'text-gold pl-2 border-l-2 border-gold' : 'text-gray-300'
                }`}
              >
                {isArabic ? <span className="font-arabic text-xl tracking-normal">{link.ar}</span> : link.en}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setIsOpen(false)}
              className="bg-burgundy text-white px-6 py-4 rounded-sm text-center font-display font-bold tracking-widest mt-4 uppercase btn-press"
            >
              {isArabic ? <span className="font-arabic text-lg tracking-normal">حجز طاولة</span> : 'Reserve Table'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
