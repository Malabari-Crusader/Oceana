import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';
import { DhowSceneBackground } from './DhowSceneBackground';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-12 mt-auto bg-rich-black">
      {/* Repeating motif border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
      <div className="absolute top-0 left-0 w-full h-8 overflow-hidden pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="motif" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M0,10 Q10,0 20,10 T40,10" fill="none" stroke="#C9A84C" strokeWidth="1"/>
            <circle cx="20" cy="10" r="1.5" fill="#C9A84C"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#motif)" />
        </svg>
      </div>

      {/* SVG Background Scenery with slow wave animation */}
      <div className="wave-svg absolute inset-0 z-0">
        <DhowSceneBackground />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md">
              <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-sm text-obsidian font-display font-black text-2xl transition-transform duration-500 group-hover:rotate-12 shadow-[0_0_15px_rgba(201,168,76,0.4)]">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white tracking-[0.25em] uppercase transition-colors duration-300 group-hover:text-gold">Oceana</span>
                <span className="font-arabic text-gold text-lg tracking-normal mt-[-4px] leading-tight">أوشيانا</span>
              </div>
            </Link>
            <p className="text-ivory/60 text-[13px] leading-[1.6] font-sans font-normal tracking-wide">
              A culinary landmark on the Dammam Corniche since 1994. Where three global cultures converge by the Arabian Gulf.
            </p>
            <div className="flex gap-5 text-ivory/60 mt-2">
              <a href="#" className="hover:text-gold hover:scale-125 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm p-1" aria-label="Instagram"><Instagram size={24} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-gold hover:scale-125 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm p-1" aria-label="Facebook"><Facebook size={24} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-gold hover:scale-125 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm p-1" aria-label="Twitter"><Twitter size={24} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-gold font-bold tracking-[0.25em] uppercase text-xs mb-3">Contact</h4>
            <div className="flex items-start gap-3 text-ivory/70 font-sans text-[15px]">
              <Phone size={18} className="shrink-0 mt-1 text-crimson opacity-80" />
              <p className="leading-relaxed tracking-wide">057 096 2002<br />reservations@oceana.sa</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-gold font-bold tracking-[0.25em] uppercase text-xs mb-3">Location</h4>
            <div className="flex items-start gap-3 text-ivory/70 font-sans text-[15px]">
              <MapPin size={18} className="shrink-0 mt-1 text-crimson opacity-80" />
              <div className="leading-relaxed tracking-wide">
                <p>6656 King Abdullah 2266<br />Ash Shati Al Gharbi, Dammam 32412<br />Saudi Arabia</p>
                <p className="font-arabic text-gold mt-3 text-lg leading-snug">6656 الملك عبد الله 2266، حي الشاطئ الغربي، الدمام 32412</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-gold font-bold tracking-[0.25em] uppercase text-xs mb-3">Hours</h4>
            <div className="flex items-start gap-3 text-ivory/70 text-[15px]">
              <Clock size={18} className="shrink-0 mt-1 text-crimson opacity-80" />
              <div className="flex flex-col gap-1 leading-relaxed">
                <p><span className="font-sans font-bold text-ivory tracking-wide">Everyday:</span> <span className="font-serif italic text-lg">8am - 2am</span></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-serif text-ivory/50 flex flex-col items-center md:items-start gap-1">
            <span>© {new Date().getFullYear()} Oceana Restaurant. All rights reserved.</span>
            <span className="font-arabic text-gold text-lg">مطعم أوشيانا</span>
          </div>
          <div className="flex gap-6 font-display tracking-widest uppercase text-xs font-bold text-ivory/50">
            <Link to="#" className="hover:text-gold transition-colors duration-300 link-underline pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors duration-300 link-underline pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
