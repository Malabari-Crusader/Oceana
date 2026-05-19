import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Wine, ChefHat } from 'lucide-react';
import { useState } from 'react';

export default function PrivateDining() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen text-[#E8E8E8] font-sans selection:bg-[#E6B325] selection:text-[#1a1a1a] overflow-x-hidden">
      <HeroSection />
      <ExperienceCards />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-24 px-4 md:px-8">
      {/* Atmospheric Background Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 30% 50%, rgba(60, 30, 8, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 80% 30%, rgba(10, 22, 40, 0.5) 0%, transparent 55%),
            radial-gradient(ellipse 100% 100% at 50% 100%, rgba(139, 26, 43, 0.08) 0%, transparent 50%),
            #0A0806
          `
        }}
      ></div>
      
      {/* Candle Glow Effect */}
      <div className="candle-glow"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto w-full flex flex-col items-center pt-12 text-center">
        
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="font-display text-[18px] text-[#C9A84C] tracking-[0.5em] uppercase flex items-center justify-center gap-4">
            <span>BY INVITATION</span>
            <span className="text-[14px] opacity-60">·</span>
            <span className="font-arabic tracking-normal normal-case pt-1 text-[38px]">بالدعوة فقط</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <h1 className="font-serif italic font-light text-[54px] md:text-[72px] text-white leading-[1.1] mb-2 text-center flex flex-col">
            <span>An Evening</span>
            <span>That Belongs</span>
            <span className="text-[#C9A84C]">Only to You.</span>
          </h1>
          <span className="font-arabic text-[72px] text-[rgba(201,168,76,0.85)] mt-12 block leading-tight" dir="rtl">
            سهرة خاصة بك وحدك
          </span>
        </motion.div>

        {/* Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center my-8"
        >
          <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10" x2="40" y2="10" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
            <rect x="47" y="7" width="6" height="6" transform="rotate(45 50 10)" fill="#C9A84C" opacity="0.7"/>
            <line x1="60" y1="10" x2="100" y2="10" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
          </svg>
        </motion.div>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="font-serif font-light italic text-[19px] text-[#D4C4A0] leading-[2.0] max-w-[480px] text-center mx-auto mb-6">
            Where intimacy meets excellence.<br/>
            Where celebration becomes ceremony.<br/>
            Where the Corniche's finest tables belong to you.
          </div>
          
          <div className="font-serif italic text-[38px] text-[rgba(201,168,76,0.9)] text-center mt-16 flex items-center justify-center gap-10">
            <span className="opacity-40 text-[24px]">──</span>
            <span>Not just exclusive. Exclusively yours.</span>
            <span className="opacity-40 text-[24px]">──</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6 mt-20"
        >
          <Link 
            to="/reservations" 
            className="group flex items-center justify-center bg-transparent border border-[rgba(201,168,76,0.6)] text-[#C9A84C] font-display text-[10px] tracking-[0.22em] uppercase h-[52px] min-w-[240px] px-8 rounded-sm transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.9)] active:scale-95"
          >
            REQUEST YOUR EVENING →
          </Link>

          <button 
            className="bg-transparent border-none text-[rgba(255,255,255,0.5)] font-serif italic text-[16px] underline underline-offset-[5px] transition-colors duration-300 hover:text-[rgba(255,255,255,0.8)] cursor-pointer"
            onClick={() => {
              document.getElementById('experience-cards')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See What Awaits
          </button>
        </motion.div>

        {/* Scroll Indicator - Integrated into flow to prevent overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-4 mt-24 mb-8"
        >
          <span className="font-display text-[9px] text-[#C9A84C] tracking-[0.22em] uppercase opacity-50">
            Discover the Experience
          </span>
          <div className="w-px h-10 bg-[#C9A84C] animate-pulse opacity-60"></div>
        </motion.div>

      </div>
    </section>
  );
}

function ExperienceCards() {
  const cards = [
    {
      id: 1,
      accent: "#C9A84C",
      title: "The Setting",
      icon: Star,
      desc1: "Corniche views. Candlelit tables. Intimate acoustics. Unobstructed sunset access.",
      desc2: "Your private moment, with the Gulf as backdrop.",
      bgImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      accent: "#C9A84C",
      title: "The Menu",
      icon: ChefHat,
      desc1: "Custom curated menus spanning three traditions. Personal chef consultations. Bespoke wine pairings.",
      desc2: "Flavors designed exclusively for your table.",
      bgImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      accent: "#C9A84C",
      title: "The Service",
      icon: Wine,
      desc1: "Dedicated waitstaff. Unobtrusive attention. Seamless execution from arrival to departure.",
      desc2: "Hospitality that anticipates, never interrupts.",
      bgImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="experience-cards" className="py-24 md:py-32 px-4 bg-[#0A0806]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="font-display text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase mb-6">
            A CURATED JOURNEY
          </span>
          <h2 className="font-serif italic font-light text-[40px] md:text-[50px] text-white leading-tight mb-8">
            The Oceana Experience
          </h2>
          <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10" x2="40" y2="10" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
            <rect x="47" y="7" width="6" height="6" transform="rotate(45 50 10)" fill="#C9A84C" opacity="0.7"/>
            <line x1="60" y1="10" x2="100" y2="10" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
          </svg>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {cards.map((card, i) => (
            <ExperienceCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ card, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group h-[480px] w-full bg-transparent rounded-sm overflow-hidden border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] z-20 bg-[#C9A84C]/30 group-hover:bg-[#C9A84C]/80 transition-colors duration-500"></div>
      
      {/* Faint Background Image Reveal (Corniche Silhouette style) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-[0.08] z-0 ${isHovered ? 'translate-y-0 scale-[1.05] grayscale-0 opacity-[0.2]' : 'translate-y-4 scale-100 grayscale'}`}
        style={{ backgroundImage: `url("${card.bgImage}")`, mixBlendMode: 'screen' }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-[#0A0806]/80 to-transparent z-0"></div>

      {/* Card Content */}
      <div className="relative z-10 w-full h-full p-8 lg:p-10 flex flex-col justify-between transition-transform duration-500">
        
        {/* Header */}
        <div>
          <div className="mb-8 opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transform transition-all duration-500" style={{ color: card.accent }}>
            <Icon size={28} strokeWidth={1} />
          </div>
          
          <h3 className="font-serif italic font-light text-[32px] text-white mb-6">
            {card.title}
          </h3>
          {/* Animated Underline */}
          <div className="h-[1px] w-8 bg-[#C9A84C]/30 group-hover:w-16 group-hover:bg-[#C9A84C]/80 transition-all duration-700 ease-out"></div>
        </div>

        {/* Text Body */}
        <div className="mt-auto space-y-6">
          <p className="font-serif text-[17px] text-[#D4C4A0] leading-[1.8] font-light group-hover:text-white transition-colors duration-500">
            {card.desc1}
          </p>
          
          <p className="font-serif italic text-[15px] leading-snug drop-shadow-md text-[rgba(201,168,76,0.6)]">
            {card.desc2}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
