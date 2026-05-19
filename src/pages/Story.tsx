import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Flame, Coffee, Utensils } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ScrollTimeline from '../components/ScrollTimeline';

const OceanaPulse = ({ text = "Oceana", dot = false }: { text?: string, dot?: boolean }) => (
  <motion.span
    animate={{
      scale: [1, 1.03, 1],
      filter: [
        "brightness(1) drop-shadow(0 0 0px rgba(230, 179, 37, 0))",
        "brightness(1.2) drop-shadow(0 0 10px rgba(230, 179, 37, 0.4))",
        "brightness(1) drop-shadow(0 0 0px rgba(230, 179, 37, 0))"
      ],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="inline-block text-[#E6B325] font-bold"
  >
    {text}{dot && "."}
  </motion.span>
);

const formatOceanaText = (text: string) => {
  const parts = text.split(/(Oceana\.?|OCEANA\.?)/g);
  return parts.map((part, i) => {
    if (part.toUpperCase().startsWith("OCEANA")) {
      const isAllCaps = part.startsWith("OCEANA");
      const hasDot = part.endsWith(".");
      return <OceanaPulse key={i} text={isAllCaps ? "OCEANA" : "Oceana"} dot={hasDot} />;
    }
    return part;
  });
};

export default function Story() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#FFF8F3] text-[#3A1C1C] selection:bg-[#A70000] selection:text-white overflow-hidden font-sans">
      <Helmet>
        <title>Our Legacy | Three Cultures, One Table by the Dammam Corniche</title>
        <meta name="description" content="Discover the story of Oceana. A thirty-year journey where the Dammam Corniche became the meeting point for three ancient culinary worlds." />
      </Helmet>
      <HeroSection />
      <PioneerPositioning />
      <ThreeCultures />
      <FusionPhilosophy />
      <ScrollTimeline />
      <CallToAction />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Atmospheric Gradient Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-center scale-110"
      >
        <div 
          className="absolute inset-0"
          style={{ 
            background: `
              linear-gradient(
                to bottom,
                rgba(10,8,6,0.15) 0%,
                rgba(10,8,6,0.65) 100%
              ),
              linear-gradient(
                160deg,
                #0D2A48 0%,
                #0A1E35 20%,
                #1A2814 45%,
                #281808 70%,
                #140A04 100%
              )`
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-[560px] mx-auto flex flex-col gap-10 mt-20"
      >
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#E6B325] font-serif italic text-[20px] md:text-[24px] tracking-[0.2em] drop-shadow-md font-medium uppercase"
        >
          THE DAMMAM CORNICHE
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-serif italic text-[32px] md:text-[42px] font-light text-[#FFF8F3] tracking-tight leading-[1.2] drop-shadow-xl">
            Thirty years ago,<br/>
            three worlds sat down together.
          </h1>
          <h2 className="font-serif italic text-[28px] md:text-[36px] text-[#E6B325] drop-shadow-lg font-medium">
            They haven't left.
          </h2>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 text-[#E6B325] animate-bounce z-10"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

function PioneerPositioning() {
  const paragraphs = [
    "Oceana was not built in a day, but in three decades of sunset watching on the Dammam Corniche.",
    "This strip of coastline has seen the city transform, and we have been here for it all. From the first families who gathered by the water to the latest corporate leaders who shape the future—every story has passed through our doors.",
    "The Dammam Corniche isn't just a view; it's our witness. It connects the desert dunes to the Persian Gulf, and in that same spirit, we connect the spices of the East, the techniques of the Subcontinent, and the soul of Arabia.",
    "For thirty years, we haven't just served dinner. We have curated the very energy of the Corniche."
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 w-full flex flex-col items-center">
      {/* Texture Background - Minimal opacity for clear text background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 0C40 22.0914 22.0914 40 0 40C22.0914 40 40 57.9086 40 80C40 57.9086 57.9086 40 80 40C57.9086 40 40 22.0914 40 0Z\' fill=\'%23C9A84C\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 flex flex-col items-center px-6"
      >
        <h2 className="font-serif italic text-[clamp(28px,6vw,42px)] text-[#1A1410] mb-3 leading-tight font-light">
          The Corniche's Living Legacy
        </h2>
        <p className="font-arabic text-[24px] text-[#C9A84C] mb-8 font-medium leading-relaxed" dir="rtl">
          إرث الكورنيش الحي
        </p>
        <div className="w-[60px] h-[1.5px] bg-[#C9A84C]/60"></div>
      </motion.div>

      <div className="flex flex-col gap-12 text-[#1A1410] text-[22px] md:text-[23px] leading-[1.8] text-left md:text-center max-w-[620px] w-full mx-auto relative z-10">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`font-serif leading-[1.75] ${i === 0 ? "border-l-[2px] md:border-l-0 border-[#C9A84C]/50 pl-[24px] md:pl-0 text-[24px] md:text-[26px] font-medium text-[#1A1410]" : "pl-0 font-medium text-[#2A1F14]"}`}
          >
            {formatOceanaText(p)}
          </motion.p>
        ))}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-center flex flex-col items-center"
        >
          <div className="w-[60px] h-[1px] bg-[#C9A84C]/50 mb-8"></div>
          <p className="font-serif italic text-[42px] md:text-[46px] text-[#C9A84C] font-light">
            Enter {formatOceanaText("Oceana.")}
          </p>
          <p className="font-arabic text-[20px] text-[#C9A84C]/80 mt-[12px] font-medium" dir="rtl">
            أهلاً بكم في الأوقيانا
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ThreeCultures() {
  return (
    <section className="pt-14 pb-16 md:pb-24 px-4 max-w-7xl mx-auto">
      {/* Ornamental Divider */}
      <div className="flex items-center justify-center gap-4 text-[#C9A84C]/40 mb-14 select-none">
        <span className="w-8 h-[1px] bg-current"></span>
        <span className="text-[10px]">◆</span>
        <span className="w-8 h-[1px] bg-current"></span>
      </div>

      <div className="text-center mb-20 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-normal text-[13px] tracking-[0.2em] text-[#2A1F14] mb-8"
        >
          WHERE THREE TRADITIONS CONVERGE
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-2xl text-[#E6B325] mb-10 mt-4"
        >
          Not by accident. By intention.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-sans text-[21px] md:text-[22px] text-[#1A1410] leading-relaxed font-medium"
        >
          {formatOceanaText("The Dammam Corniche has always been a place of arrival. Ships from the East, spices from the Subcontinent, and the hospitality of the desert all meet at the water's edge. At Oceana, we didn't invent this convergence—we simply gave it a seat at the table.")}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
        <CultureCard 
          title="THE SPIRIT OF INDIA"
          quote="Food is prayer. Spices are its language."
          desc="Indian cuisine understands the sacred act of gathering. For centuries, kitchens have been temples. Recipes have been prayers. Each spice chosen not for flavor alone, but for meaning. At Oceana, we honor this. Our tandoors burn the same way they've burned for 300 years. Our spice blends follow recipes passed down through generations. This is not modern Indian cuisine. This is Indian tradition, elevated."
          img="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop"
          color="#A70000"
          delay={0}
          icon={Flame}
        />
        <CultureCard 
          title="THE HEART OF ARABIA"
          quote="Generosity is the highest virtue. Hospitality is how you show it."
          desc="Arabic culture has built its identity around the gathering. The majlis. The coffee ceremony. The shared meal where strangers become family in the span of an evening. At Oceana, we learned from this. Every dish is meant to be shared. Every flavor is layered generously. Every guest arrives as a stranger and leaves as family. This is Arabian warmth, translated into cuisine."
          img="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop"
          color="#E6B325"
          delay={0.2}
          icon={Coffee}
        />
        <CultureCard 
          title="THE SOUL OF CHINA"
          quote="Perfect balance is the way. Fire and water, motion and stillness."
          desc="Chinese philosophy teaches that greatness comes from understanding opposition. Hot and cold. Salt and sweet. Bold and delicate. Chinese cuisine is not decoration. It is philosophy made edible. Every technique learned over millennia. Every flavor considered. At Oceana, we embrace this discipline. Our wok work is meditation. Our spice balance is precision. Our food is philosophy. This is Chinese mastery, honored completely."
          img="https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop"
          color="#2D6B4F"
          delay={0.4}
          icon={Utensils}
        />
      </div>
    </section>
  );
}

function CultureCard({ title, quote, desc, img, color, delay, icon: Icon }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 20;
    const rotateY = (x - centerX) / 20;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-[500px] md:h-full cursor-pointer perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out border ${
          isHovered 
            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_20px_rgba(230,179,37,0.2)] border-[#E6B325]/50' 
            : 'shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-white/5'
        }`}
        animate={{ 
          rotateX: tilt.x, 
          rotateY: tilt.y,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Background Image with inverse parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${img}")`,
            scale: 1.1,
            x: -tilt.y * 2,
            y: tilt.x * 2
          }}
        />
        
        {/* Permanent Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
          {/* Icon at Top */}
          <motion.div 
            animate={{ 
              y: isHovered ? -5 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            style={{ color: '#E6B325' }}
            className="filter drop-shadow-[0_0_10px_rgba(230,179,37,0.5)]"
          >
            {Icon && <Icon size={40} />}
          </motion.div>
          
          {/* Title and Hint */}
          <div className="space-y-2">
            <h3 className="text-white font-sans font-bold tracking-[0.2em] uppercase text-2xl md:text-3xl drop-shadow-lg">
              {title}
            </h3>
            <p className={`font-serif italic text-xl transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ color: color }}>
              Tap to explore
            </p>
          </div>
        </div>

        {/* Expanded State Content (Glassmorphism) */}
        <motion.div 
          className="absolute inset-0 bg-black/85 backdrop-blur-md p-8 md:p-12 flex flex-col justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 40
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8" style={{ color: '#E6B325' }}>
            {Icon && <Icon size={48} strokeWidth={1} className="filter drop-shadow-[0_0_15px_rgba(230,179,37,0.3)]" />}
          </div>
          
          <h3 className="text-white font-sans font-bold tracking-[0.25em] uppercase text-[clamp(24px,4vw,32px)] mb-4 leading-tight" style={{ color: color }}>
            {title}
          </h3>
          <p className="font-serif italic text-[clamp(20px,3vw,26px)] mb-8 leading-relaxed" style={{ color: color }}>
            "{quote}"
          </p>
          <div className="h-px w-16 bg-[#E6B325] mb-8 opacity-40"></div>
          <p className="text-[#F5E6C8] font-sans text-[clamp(16px,2vw,19px)] leading-relaxed font-normal opacity-95">
            {formatOceanaText(desc)}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FusionPhilosophy() {
  const lines = [
    { text: "Indian cuisine says: \"Food is sacred.\"", color: "text-[#8B1A2B]" },
    { text: "Arabic tradition says: \"Sharing is sacred.\"", color: "text-[#8A6520]" },
    { text: "Chinese philosophy says: \"Balance is sacred.\"", color: "text-[#2D6B4F]" }
  ];

  return (
    <section className="py-[100px] px-4 w-full flex flex-col items-center text-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-[50px]"
      >
        <h2 className="font-sans font-bold text-[16px] md:text-[18px] tracking-[0.3em] text-[#1A1410] uppercase leading-[1.8]">
          WHY THESE THREE<br/>CONVERGE AT {formatOceanaText("OCEANA")}
        </h2>
      </motion.div>

      <div className="flex flex-col w-full max-w-[580px]">
        {lines.map((line, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`font-serif italic text-[30px] md:text-[34px] leading-[2.2] w-full font-medium ${line.color}`}
            >
              {line.text}
            </motion.p>
            {i < lines.length - 1 && (
              <div className="w-full h-[1.5px] bg-[#1A1410]/[0.08] my-2"></div>
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-[50px] mb-[16px] max-w-[500px]"
      >
        <p className="font-serif text-[34px] md:text-[38px] font-bold text-[#1A1410] leading-tight">
          {formatOceanaText("At Oceana, we honoured all three.")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-[48px] font-serif italic text-[23px] md:text-[25px] text-[#4A3224] leading-[2.2] font-medium"
      >
        <p>The result is not confusion.</p>
        <p>The result is harmony.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-[56px] font-serif italic text-[22px] md:text-[24px] text-[#4A3224] leading-[2.0] font-medium"
      >
        <p>Three separate stories, one unified moment.</p>
        <p>That moment happens on the Dammam Corniche.</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mt-[48px] font-serif font-bold text-[28px] md:text-[32px] text-[#B87520]"
      >
        {formatOceanaText("That moment is dinner at Oceana.")}
      </motion.p>
    </section>
  );
}


function CallToAction() {
  const pairs = [
    { q: "Corporate dinner that needs to seal the deal?", a: "Oceana." },
    { q: "Proposal that needs to be legendary?", a: "Oceana." },
    { q: "Family celebration that deserves more than a meal?", a: "Oceana." },
    { q: "Milestone evening that must be unforgettable?", a: "Oceana." }
  ];

  return (
    <section className="relative pt-[100px] pb-[60px] px-[28px] w-full bg-[#0A1628]">
      {/* Texture Background - Extreme low opacity for maximum contrast */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 0C40 22.0914 22.0914 40 0 40C22.0914 40 40 57.9086 40 80C40 57.9086 57.9086 40 80 40C57.9086 40 40 22.0914 40 0Z\' fill=\'%23C9A84C\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }}></div>
      
      <div className="max-w-[600px] mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 w-full"
        >
          <h2 className="font-sans font-bold text-[18px] tracking-[0.25em] text-[#FFFFFF] uppercase leading-[1.8] mb-[32px]">
            WHEN THE CORNICHE MATTERS,<br/>{formatOceanaText("OCEANA")} IS WHERE IT HAPPENS.
          </h2>
          <div className="w-[60px] h-[1.5px] bg-[#C9A84C] mx-auto mb-[40px]"></div>
          
          <div className="flex flex-col text-left md:text-center w-full">
            {pairs.map((pair, i) => (
              <div key={i} className={`py-[32px] ${i !== pairs.length - 1 ? 'border-b border-[#C9A84C]/[0.15]' : ''} flex flex-col`}>
                <p className="font-serif font-medium text-[24px] md:text-[26px] text-[#F5E6C8] mb-[10px] text-left md:text-center leading-[1.4]">
                  {pair.q}
                </p>
                <div className="font-serif font-bold italic text-[38px] md:text-[46px] text-[#E6B325] leading-[1.0] text-left md:text-center tracking-tight">
                  {formatOceanaText(pair.a)}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full border-t border-[#C9A84C]/[0.2] mt-[60px] pt-[40px]">
            {/* Crisp footer text with high contrast */}
            <p className="font-serif italic text-[22px] md:text-[24px] text-[#F5E6C8] leading-[2.0] text-center font-medium">
              This isn't modesty.<br/>
              This isn't marketing speak.<br/>
              This is what three decades on the Corniche have proven.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row w-full max-w-[420px] md:max-w-none justify-center gap-[20px] mt-12"
        >
          <Link 
            to="/reservations" 
            className="flex items-center justify-center bg-[#8B1A2B] text-white h-[64px] w-full md:w-auto md:px-12 rounded-[3px] text-[14px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-[0.98] shadow-xl shadow-black/40"
          >
            RESERVE YOUR MOMENT <ArrowRight size={18} className="ml-2" />
          </Link>
          
          <Link 
            to="/menu" 
            className="flex items-center justify-center bg-transparent border-[2px] border-[#E6B325] text-[#E6B325] h-[64px] w-full md:w-auto md:px-12 rounded-[3px] text-[14px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#E6B325]/10 active:scale-[0.98]"
          >
            EXPLORE OUR MENU <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
