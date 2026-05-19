import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Coffee, Utensils, Sparkles, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ScrollTimeline from '../components/ScrollTimeline';

const ChopstickIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 18L18 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 16L16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const formatOceanaText = (text: string) => {
  const parts = text.split(/(Oceana)/g);
  return parts.map((part, i) =>
    part === 'Oceana' ? (
      <span
        key={i}
        style={{ 
          color: '#C9A84C',
          fontWeight: 400
        }}
      >
        {part}
      </span>
    ) : part
  );
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
      <ReviewsSection />
      <CallToAction />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const wave = waveRef.current;
    if (wave) wave.style.willChange = 'transform';
    return () => {
      if (wave) wave.style.willChange = 'auto';
    };
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0A1628]">
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
        {/* Subtle Wave SVG */}
        <div 
          ref={waveRef}
          className="absolute bottom-0 left-0 w-[200%] h-[30%] opacity-40 pointer-events-none wave-svg"
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full block">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="rgba(10,22,40,0.4)"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" opacity=".5" fill="rgba(10,22,40,0.4)"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="rgba(10,22,40,0.4)"></path>
          </svg>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full h-full px-6 flex flex-col justify-center"
      >
        <div className="absolute top-[15%] left-6 md:left-[10%]">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[9px] tracking-[0.32em] text-[#C9A84C]/70 uppercase"
          >
            THE DAMMAM CORNICHE · منذ ١٩٩٤
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col text-center w-full mt-20"
        >
          <h1 className="font-serif italic text-[clamp(28px,6vw,42px)] font-light text-white/85 tracking-tight leading-[1.2] drop-shadow-xl">
            Thirty years ago,<br/>
            three worlds sat down together.
          </h1>
          <h2 className="font-serif italic text-[clamp(44px,11vw,72px)] text-[#C9A84C] font-normal mt-[12px] drop-shadow-lg">
            They haven't left.
          </h2>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-[48px]"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-[48px] bg-[#C9A84C] opacity-50 animate-pulse"></div>
          <span className="font-display text-[9px] tracking-[0.2em] text-[#C9A84C]/55 uppercase">
            Discover the Story · اكتشف القصة
          </span>
        </div>
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
    <section id="positioning" className="section-light relative py-32 px-4 w-full flex flex-col items-center bg-[#F7F2E8]">
      {/* Texture Background - Minimal opacity for clear text background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 0C40 22.0914 22.0914 40 0 40C22.0914 40 40 57.9086 40 80C40 57.9086 57.9086 40 80 40C57.9086 40 40 22.0914 40 0Z\' fill=\'%23C9A84C\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 flex flex-col items-center px-6"
      >
        <h2 className="font-display text-[13px] tracking-[0.28em] text-[#8B1A2B] mb-2 font-normal uppercase">
          Pioneering the Culinary Arts
        </h2>
        <p className="font-arabic text-[14px] text-[#8B1A2B]/70 mb-8 font-medium" dir="rtl">
          ريادة فنون الطهي
        </p>
        <div className="w-[60px] h-[1.5px] bg-[#C9A84C]/60"></div>
      </motion.div>

      <div className="flex flex-col gap-12 text-[#1A1410] text-[22px] leading-[1.8] text-left md:text-center max-w-[620px] w-full mx-auto relative z-10">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`font-serif leading-[1.75] font-medium text-[#1A1410] ${i === 0 ? "border-l-[2px] md:border-l-0 border-[#C9A84C]/50 pl-[24px] md:pl-0 text-[24px]" : "pl-0"}`}
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
          <p className="font-serif italic text-[38px] text-[#C9A84C] font-medium">
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
    <section id="cultures" className="section-dark pt-14 pb-16 md:pb-32 px-4 max-w-7xl mx-auto bg-[#0A0806]">
      {/* Ornamental Divider */}
      <div className="flex items-center justify-center gap-4 text-[#C9A84C]/40 mb-14 select-none">
        <span className="w-8 h-[1px] bg-current"></span>
        <span className="text-[10px]">◆</span>
        <span className="w-8 h-[1px] bg-current"></span>
      </div>

      <div className="text-center mb-24 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-normal text-[13px] tracking-[0.2em] text-[#C9A84C] mb-8"
        >
          WHERE THREE TRADITIONS CONVERGE
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-[24px] text-[#C9A84C] mb-10 mt-4"
        >
          Not by accident. By intention.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-serif text-[22px] md:text-[24px] text-[#F7F2E8] leading-[1.8] font-medium"
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
          color="#C9A84C"
          delay={0}
          icon={Sparkles}
        />
        <CultureCard 
          title="THE HEART OF ARABIA"
          quote="Generosity is the highest virtue. Hospitality is how you show it."
          desc="Arabic culture has built its identity around the gathering. The majlis. The coffee ceremony. The shared meal where strangers become family in the span of an evening. At Oceana, we learned from this. Every dish is meant to be shared. Every flavor is layered generously. Every guest arrives as a stranger and leaves as family. This is Arabian warmth, translated into cuisine."
          img="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop"
          color="#C9A84C"
          delay={0.2}
          icon={Coffee}
        />
        <CultureCard 
          title="THE SOUL OF CHINA"
          quote="Perfect balance is the way. Fire and water, motion and stillness."
          desc="Chinese philosophy teaches that greatness comes from understanding opposition. Hot and cold. Salt and sweet. Bold and delicate. Chinese cuisine is not decoration. It is philosophy made edible. Every technique learned over millennia. Every flavor considered. At Oceana, we embrace this discipline. Our wok work is meditation. Our spice balance is precision. Our food is philosophy. This is Chinese mastery, honored completely."
          img="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop"
          color="#C9A84C"
          delay={0.4}
          icon={ChopstickIcon}
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
            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_20px_rgba(201,168,76,0.2)] border-[#C9A84C]/50' 
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.2) 100%)' }}></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
          {/* Icon at Top */}
          <motion.div 
            animate={{ 
              y: isHovered ? -5 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            style={{ color: '#C9A84C' }}
            className="filter drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]"
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
          className="absolute inset-0 bg-[#0A0806]/85 backdrop-blur-md p-8 md:p-12 flex flex-col justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 40
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8" style={{ color: '#C9A84C' }}>
            {Icon && <Icon size={48} strokeWidth={1} className="filter drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" />}
          </div>
          
          <h3 className="text-white font-sans font-bold tracking-[0.25em] uppercase text-[clamp(24px,4vw,32px)] mb-4 leading-tight" style={{ color: color }}>
            {title}
          </h3>
          <p className="font-serif italic text-[clamp(20px,3vw,26px)] mb-8 leading-relaxed" style={{ color: color }}>
            "{quote}"
          </p>
          <div className="h-px w-16 bg-[#C9A84C] mb-8 opacity-40"></div>
          <p className="text-[#F7F2E8] font-sans text-[clamp(16px,2vw,19px)] leading-relaxed font-normal opacity-95">
            {formatOceanaText(desc)}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FusionPhilosophy() {
  const lines = [
    { text: "Indian cuisine says: Food is sacred.", sizeClass: "text-[26px]", color: "text-[#1A1410]" },
    { text: "Arabic tradition says: Sharing is sacred.", sizeClass: "text-[32px]", color: "text-[#1A1410]" },
    { text: "Chinese philosophy says: Balance is sacred.", sizeClass: "text-[40px] italic", color: "text-[#C9A84C]" }
  ];

  return (
    <section id="philosophy" className="section-light py-[120px] px-4 w-full flex flex-col items-center text-center relative bg-[#F7F2E8]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-[50px]"
      >
        <h2 className="font-display font-normal text-[13px] tracking-[0.28em] text-[#8B1A2B] uppercase leading-[1.8]">
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
              className={`font-serif leading-[2.2] w-full font-medium ${line.sizeClass} ${line.color}`}
            >
              {line.text}
            </motion.p>
            {i < lines.length - 1 && (
              <div className="w-full h-[1px] bg-[#C9A84C]/20 my-4"></div>
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-[60px] mb-[16px] max-w-[500px]"
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
        className="mt-[48px] font-serif italic text-[23px] md:text-[25px] text-[#4A3224] leading-[2.2] font-medium opacity-80"
      >
        <p>The result is not confusion.</p>
        <p>The result is harmony.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-[56px] font-serif italic text-[22px] md:text-[24px] text-[#4A3224] leading-[2.0] font-medium opacity-60"
      >
        <p>Three separate stories, one unified moment.</p>
        <p>That moment happens on the Dammam Corniche.</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mt-[48px] font-serif font-bold italic text-[28px] md:text-[32px] text-[#C9A84C] opacity-100"
      >
        {formatOceanaText("That moment is dinner at Oceana.")}
      </motion.p>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      initial: "S",
      avatarClass: "av-h",
      name: "S. Al-Dossary",
      tag: "Business Executive",
      quote: "The only place in the Eastern Province where I bring my international clients. The fusion is seamless.",
      stars: "★★★★★"
    },
    {
      initial: "M",
      avatarClass: "av-m",
      name: "M. Abdulrahman",
      tag: "Local Resident",
      quote: "Thirty years on the Corniche, and they still surprise us. The Indian spices with Arabic generosity is a masterstroke.",
      stars: "★★★★★"
    },
    {
      initial: "F",
      avatarClass: "av-z",
      name: "Fatima R.",
      tag: "Culinary Enthusiast",
      quote: "I thought I knew what fusion meant until I ate here. The wok techniques applied to Gulf seafood are genuinely brilliant.",
      stars: "★★★★★"
    }
  ];

  return (
    <section id="reviews" className="reviews section-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="reviews-header"
      >
        <span className="reviews-eyebrow">THE VERDICT</span>
        <h2 className="reviews-title">
          Three Decades of <em>Excellence</em>
        </h2>
        <div className="reviews-rule"></div>
      </motion.div>

      <div className="reviews-cards max-w-2xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="review-card"
          >
            <div className="review-top">
              <div className="review-left">
                <div className={`review-avatar ${review.avatarClass}`}>{review.initial}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-tag">{review.tag}</div>
                </div>
              </div>
              <div className="review-stars">{review.stars}</div>
            </div>
            <div className="review-short">
              {review.quote}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="reviews-footer"
      >
        <div className="reviews-rating">
          <span className="rating-stars">★★★★★</span> 4.9/5 from over 2,000 guests
        </div>
        <a href="#reservations" className="reviews-all">RESERVE A TABLE</a>
      </motion.div>
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
    <section id="cta" className="section-dark relative pt-[100px] pb-[100px] px-[28px] w-full bg-[#0A1628]">
      {/* Texture Background - Extreme low opacity for maximum contrast */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 0C40 22.0914 22.0914 40 0 40C22.0914 40 40 57.9086 40 80C40 57.9086 57.9086 40 80 40C57.9086 40 40 22.0914 40 0Z\' fill=\'%23C9A84C\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }}></div>
      
      <div className="max-w-[700px] mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 w-full"
        >
          <h2 className="font-display font-normal text-[13px] tracking-[0.28em] text-[#C9A84C] uppercase leading-[1.8] mb-[32px]">
            WHEN THE CORNICHE MATTERS,<br/>{formatOceanaText("OCEANA")} IS WHERE IT HAPPENS.
          </h2>
          <div className="w-[60px] h-[1.5px] bg-[#C9A84C] mx-auto mb-[40px]"></div>
          
          <div className="flex flex-col text-left md:text-center w-full">
            {pairs.map((pair, i) => (
              <div key={i} className={`py-[32px] ${i !== pairs.length - 1 ? 'border-b border-[#C9A84C]/[0.15]' : ''} flex flex-col`}>
                <p className="font-serif font-medium text-[24px] md:text-[26px] text-[#F7F2E8] mb-[10px] text-left md:text-center leading-[1.4]">
                  {pair.q}
                </p>
                <div className="font-serif font-medium italic text-[32px] md:text-[38px] text-[#C9A84C] leading-[1.0] text-left md:text-center tracking-tight">
                  {formatOceanaText(pair.a)}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full border-t border-[#C9A84C]/[0.2] mt-[60px] pt-[40px]">
            {/* Crisp footer text with high contrast */}
            <p className="font-serif italic text-[22px] md:text-[24px] text-[#F7F2E8] leading-[2.0] text-center font-medium opacity-90">
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
          className="flex flex-col md:flex-row w-full max-w-[460px] md:max-w-none justify-center gap-[24px] mt-12"
        >
          <Link 
            to="/reservations" 
            className="btn-primary btn-lux-gold flex items-center justify-center bg-[#8B1A2B] text-white h-[64px] w-full md:w-auto md:px-12 rounded-[3px] text-[14px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-[0.98] shadow-xl shadow-black/40"
          >
            <span className="btn-text flex items-center">
              RESERVE YOUR MOMENT <ChevronRight size={18} className="ml-2" />
            </span>
          </Link>
          
          <Link 
            to="/menu" 
            className="flex items-center justify-center bg-transparent border-[1.5px] border-[#C9A84C]/50 text-[#C9A84C] h-[64px] w-full md:w-auto md:px-12 rounded-[3px] text-[14px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] active:scale-[0.98]"
          >
            EXPLORE OUR MENU <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
