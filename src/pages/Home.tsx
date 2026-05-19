import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ScrollTimeline from '../components/ScrollTimeline';
import { AnchorDivider } from '../components/AnchorDivider';
import { DhowSceneBackground } from '../components/DhowSceneBackground';
import { Helmet } from 'react-helmet-async';
import ReviewsSection from '../components/ReviewsSection';

export default function Home() {
  const { scrollYProgress } = useScroll();

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Oceana",
    "image": "https://oceana.sa/hero-background.jpg",
    "url": "https://oceana.sa",
    "telephone": "057 096 2002",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6656 الملك عبد الله 2266",
      "addressLocality": "Ash Shati Al Gharbi, Dammam",
      "addressRegion": "Eastern Province",
      "postalCode": "32412",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.4327",
      "longitude": "50.1171"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "02:00"
      }
    ],
    "menu": "https://oceana.sa/menu",
    "servesCuisine": ["Asian Fusion", "Indian", "Middle Eastern"]
  };

  return (
    <div className="bg-rich-black text-white selection:bg-burgundy selection:text-white">
      <Helmet>
        <title>Oceana | Where Cultures Converge by the Dammam Corniche</title>
        <meta name="description" content="A thirty-year legacy of culinary theater. Discover the sanctuary where the traditions of the East, Subcontinent, and Middle East converge on the historic Dammam Corniche." />
        <script type="application/ld+json">
          {JSON.stringify(restaurantSchema)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        {/* Full-bleed background image with dark overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero-background.jpg")' }}
        >
          {/* Enhanced gradient for better text legibility and luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/90 via-rich-black/70 to-rich-black"></div>
          <div className="absolute inset-0 bg-rich-black/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
            className="flex flex-col items-center"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: "easeOut" } }
              }}
              className="text-gold text-xs md:text-sm font-bold uppercase mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-display tracking-widest"
            >
              Dammam Corniche, Saudi Arabia — Est. 1994
            </motion.p>
            
            <div className="flex flex-col items-center mb-8">
              <div className="flex flex-wrap justify-center gap-4">
                {['The', 'Oceana'].map((word, i) => (
                  <motion.span 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                    className="font-serif italic text-6xl md:text-8xl lg:text-9xl font-light tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: "easeOut" } }
                }}
                className="font-arabic text-gold/90 text-[80px] md:text-[120px] lg:text-[160px] mt-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] leading-none"
              >
                أوشيانا
              </motion.span>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: "easeOut" } }
              }}
              className="mb-14"
            >
              <p className="text-xl md:text-3xl font-serif text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] font-medium tracking-wide leading-relaxed">
                Thirty years of stories, served by the sea.<br />
                Where <span className="text-crimson italic font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">three worlds converge</span>.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
              }}
              className="relative"
            >
              <Link 
                to="/reservations" 
                className="btn-press bg-gold text-rich-black px-12 py-4 rounded-full text-sm font-display tracking-[0.2em] uppercase inline-flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] font-bold transition-all duration-300"
              >
                <span className="btn-text">Reserve an Experience</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 z-10"
          >
            <AnchorDivider />
          </motion.div>
        </div>
      </section>      {/* Intro Quote */}
      <section className="relative py-32 px-4 bg-[#140a0d] overflow-hidden flex items-center justify-center min-h-[90vh]">
        
        {/* Background Visual Drawing - The 3 Cultures */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-60 mt-8">
          <svg viewBox="0 0 1400 700" className="absolute w-full h-full overflow-visible max-w-[1600px] preserve-3d">
            <defs>
              <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Connecting Paths with refined curves */}
            {/* East Path (Left) */}
            <motion.path
              d="M 150,200 C 350,200 450,230 670,202"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.8"
              strokeOpacity="0.6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Subcontinent Path (Right) */}
            <motion.path
              d="M 1250,200 C 1050,200 950,230 730,202"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.8"
              strokeOpacity="0.6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Middle East Path (Bottom) */}
            <motion.path
              d="M 700,550 C 700,450 720,300 700,220"
              fill="none"
              stroke="#d4af37"
              strokeWidth="0.8"
              strokeOpacity="0.6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            />

            {/* Center Unity Badge */}
            <g transform="translate(700, 200)">
              <motion.circle
                cx="0" cy="0" r="24"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.2"
                filter="url(#glowGold)"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 2.5 }}
              />
              <motion.text
                x="0" y="6"
                fill="#d4af37"
                fontSize="18"
                fontFamily="serif"
                textAnchor="middle"
                className="select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                A
              </motion.text>
              <motion.text
                x="0" y="-45"
                fill="#ffffff"
                fillOpacity="0.4"
                fontSize="12"
                fontWeight="700"
                letterSpacing="0.6em"
                textAnchor="middle"
                className="uppercase select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 4 }}
              >
                Oceana
              </motion.text>
            </g>

            {/* The East - Architectural Drawing */}
            <g transform="translate(80, 200) scale(0.65)">
              <g stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.8" fill="none">
                <motion.path d="M-40,-30 Q0,-35 40,-30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
                <motion.rect x="-35" y="-25" width="70" height="4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
                <motion.line x1="-20" y1="-20" x2="-20" y2="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.line x1="20" y1="-20" x2="20" y2="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.line x1="-25" y1="0" x2="25" y2="0" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
              </g>
              <motion.text
                x="0" y="65"
                fill="#d4af37"
                fillOpacity="0.6"
                fontSize="24"
                fontFamily="serif"
                fontStyle="italic"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                The East
              </motion.text>
            </g>

            {/* The Subcontinent - Architectural Drawing (Taj Mahal) */}
            <g transform="translate(1320, 200) scale(0.65)">
              <g stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <motion.line x1="-50" y1="30" x2="50" y2="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.path d="M-20,10 C-20,-15 -10,-25 0,-35 C10,-25 20,-15 20,10 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
                <motion.path d="M-35,15 C-35,5 -25,0 -20,10 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.path d="M35,15 C35,5 25,0 20,10 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.line x1="-45" y1="30" x2="-45" y2="0" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.line x1="45" y1="30" x2="45" y2="0" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.rect x="-25" y="10" width="50" height="20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} />
              </g>
              <motion.text
                x="0" y="65"
                fill="#d4af37"
                fillOpacity="0.6"
                fontSize="24"
                fontFamily="serif"
                fontStyle="italic"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.5 }}
              >
                The Subcontinent
              </motion.text>
            </g>

            {/* The Middle - Architectural Drawing (Mosque) */}
            <g transform="translate(700, 580) scale(0.65)">
              <g stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <motion.line x1="-30" y1="30" x2="30" y2="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.path d="M-20,15 C-30,5 -20,-15 0,-35 C20,-15 30,5 20,15 Z" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
                <motion.line x1="-20" y1="15" x2="-20" y2="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.line x1="20" y1="15" x2="20" y2="30" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
              </g>
              <motion.text
                x="0" y="65"
                fill="#d4af37"
                fillOpacity="0.6"
                fontSize="24"
                fontFamily="serif"
                fontStyle="italic"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 2 }}
              >
                The Middle
              </motion.text>
            </g>
          </svg>
        </div>

        {/* Existing Quote Content over the background */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mt-32 mix-blend-normal">
          <StaggeredQuote text="We don't just serve meals; we guard a legacy. A sanctuary on the Dammam Corniche where the salt of the Gulf meets the spices of three ancient worlds." />
          
          {/* Expanding Gold Underline with Pulsate */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative h-[2px] w-32 bg-gold/50 mx-auto mt-16 origin-center"
          >
            <motion.div 
              animate={{ 
                opacity: [0.4, 1, 0.4],
                boxShadow: [
                  "0 0 4px rgba(212,175,55,0.4)",
                  "0 0 20px rgba(212,175,55,1)",
                  "0 0 4px rgba(212,175,55,0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gold rounded-full"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Traditions */}
      {/* Interactive Traditions Convergence */}
      <TraditionsInteractive />

      <ReviewsSection />

      {/* Masters Section */}
      <section className="relative py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-rich-black to-rich-black pointer-events-none -z-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 relative z-10 border-b border-white/10 pb-8">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">The Artisans</span>
              <span className="h-px w-12 bg-gold/50"></span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl text-ivory mb-2 drop-shadow-md"
            >
              Masters of the <span className="italic text-gold">Craft</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-serif italic text-xl max-w-md"
            >
              Architects of flavor, guardians of a thirty-year legacy.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/story" className="group flex items-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 cursor-pointer p-2 rounded-md">
              <span className="border-b border-gold/30 pb-1 group-hover:border-white transition-colors">Read their story</span> 
              <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          <MasterCard 
            role="Executive Chef"
            name="Chef 1"
            nameArabic="الشيف ١"
            img="/Chef 1.jpeg"
            delay={0}
          />
          <MasterCard 
            role="Sommelier & Manager"
            name="Chef 2"
            nameArabic="الشيف ٢"
            img="/Chef 2.jpeg"
            delay={0.2}
            className="md:mt-32"
          />
        </div>
      </section>

      {/* Legacy Section */}
      <ScrollTimeline />

      {/* The Corniche Moment */}
      <section className="relative overflow-hidden py-32 md:py-40 min-h-[90vh] flex items-center justify-center">
        {/* SVG Dhow Horizon Background */}
        <DhowSceneBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center justify-between">
          
          <div className="flex-1 w-full max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-12"
            >
              The Setting · Dammam Corniche, Saudi Arabia
            </motion.p>

            <div className="flex">
              {/* Left vertical elegant border */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-px bg-gradient-to-b from-white/30 via-gold/50 to-transparent mr-8 sm:mr-12 origin-top" 
              />
              
              <div className="flex-1 pb-4">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-5xl sm:text-6xl text-white font-light leading-[1.15] mb-10"
                >
                  Outside, the <span className="text-gold">Gulf breathes</span>.<br />
                  <span className="italic text-gray-300">Inside, three worlds dine.</span>
                </motion.h2>

                <div className="flex flex-col gap-8 max-w-xl text-gray-300 font-serif leading-relaxed text-lg sm:text-xl">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    Tonight, somewhere on the Corniche, someone will get engaged. A father will close the deal that changes his family's future. A mother will mark a birthday that deserves far more than a dinner.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                  >
                    They will all come here. They have always come here. Because the Dammam Corniche has never been just a road by the sea — it is where the city's most important stories happen.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-white font-medium italic mt-2"
                  >
                    For thirty years, Oceana has been their table.
                  </motion.p>
                </div>

                {/* Numbers / Stats boxes imitating reference layout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-16 grid grid-cols-1 sm:grid-cols-3 max-w-2xl bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
                >
                  {[
                    { n: '30', label: 'Years on the', sub: 'Corniche' },
                    { n: '3', label: 'Cultures,', sub: 'One Table' },
                    { n: '∞', label: 'Stories', sub: 'Told Here' },
                  ].map((stat, i) => (
                    <div key={i} className="group relative flex flex-col items-center justify-center p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 hover:bg-white/[0.04] transition-colors duration-500">
                      <span className="font-serif text-4xl md:text-5xl text-gold font-light mb-4 leading-none group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]">{stat.n}</span>
                      <span className="text-[10px] tracking-[0.25em] text-white/90 uppercase mb-2 text-center">{stat.label}</span>
                      <span className="font-serif italic text-gray-400 text-sm text-center">{stat.sub}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Elegant Quote Circle block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="w-full lg:w-5/12 max-w-[380px] mx-auto relative mt-20 lg:mt-0 flex justify-center group"
          >
            {/* Concentric rings with subtle rotation and pulse */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-dashed border-white/[0.15] rounded-full pointer-events-none" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square border border-gold/20 rounded-full pointer-events-none group-hover:border-gold/40 transition-colors duration-1000" />
            
            <div className="relative z-10 p-14 bg-gradient-to-br from-rich-black/90 to-[#121c26]/90 backdrop-blur-xl rounded-full border border-white/10 aspect-square flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_80px_rgba(201,168,76,0.15)] transition-all duration-1000">
              <svg className="w-10 h-10 text-gold/60 mb-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-serif italic text-lg sm:text-xl text-white leading-relaxed mb-6 px-2">
                "We don't run a restaurant. We curate the backdrop for the most important evenings of people's lives."
              </p>
              <div className="border-t border-gold/30 w-20 pt-5 flex flex-col gap-2 mx-auto">
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">Oceana</span>
                <span className="text-gray-400 text-[10px] tracking-widest uppercase">Est. 1994</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 px-4 overflow-hidden border-t border-white/5 min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/timeline-modern-final.png" 
            alt="Oceana Corniche Stage" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/90 via-rich-black/70 to-rich-black/95" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-8"
          >
            The Dammam Corniche · Est. 1994
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-2xl leading-tight"
          >
            You could eat anywhere<br />
            <span className="italic text-gold">tonight.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-gray-200 text-lg md:text-xl font-serif leading-relaxed drop-shadow-lg">
              Or you could sit at the edge of the Arabian Gulf, where the air carries thirty years of extraordinary evenings — and let three civilizations compete to impress you.
            </p>
            <p className="text-white font-serif font-bold text-xl md:text-2xl italic mt-6">
              That second option is Oceana.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link 
              to="/reservations" 
              className="group relative overflow-hidden bg-gradient-to-br from-burgundy to-burgundy/80 text-white px-14 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_10px_30px_rgba(114,14,35,0.5)] hover:shadow-[0_20px_50px_rgba(114,14,35,0.7)] cursor-pointer hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10">Reserve Your Evening</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12"></div>
            </Link>
            <Link 
              to="/menu" 
              className="group flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 hover:border-gold/50 text-white px-14 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer hover:bg-white/10 hover:-translate-y-1 active:scale-95 shadow-xl"
            >
              <span className="group-hover:text-gold transition-colors duration-300">See What Awaits You</span>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-gray-600 text-xs tracking-wider mt-10 font-serif italic"
          >
            King Abdullah Road · Dammam Corniche · Dammam 32414 · Saudi Arabia
          </motion.p>
        </div>
      </section>
    </div>
  );
}

function TraditionsInteractive() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const traditions = [
    {
      num: "I",
      title: "The East",
      titleArabic: "الشرق",
      desc: "Precision, discipline, and the ancient alchemy of spice. From Kyoto to Bangkok, we source the unsourceable.",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      linkTo: "/menu"
    },
    {
      num: "II",
      title: "The Subcontinent",
      titleArabic: "شبه القارة",
      desc: "Technique honed in the fires of India, cooled by the breeze of the Dammam Corniche. A dedication to the product, elevated by mastery.",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      linkTo: "/menu"
    },
    {
      num: "III",
      title: "The Middle",
      titleArabic: "الشرق الأوسط",
      desc: "Rooted in the very soil of the Corniche. Saudi hospitality is the canvas upon which we paint—a thirty-year love letter to our home by the sea.",
      img: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      linkTo: "/menu"
    }
  ];

  return (
    <section className="relative bg-rich-black overflow-hidden border-y border-white/5 py-12 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-transparent to-rich-black z-10 pointer-events-none hidden md:block" />
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:h-screen w-full"
      >
        {traditions.map((t, i) => (
          <div 
            key={i}
            className="flex-none w-[85vw] md:w-1/3 h-[500px] md:h-full snap-center relative group border-r border-white/5 last:border-0 mx-2 md:mx-0 overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <img 
                  src={t.img} 
                  alt={t.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-50 group-hover:brightness-75" 
                  loading="lazy"
              />
            </div>

            {/* Gradient Fog */}
            <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 via-rich-black/40 to-transparent z-10 transition-opacity duration-500" />

            {/* Content container */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.8, delay: 0.1 * i }}
                 className="flex flex-col h-full justify-between"
               >
                  <div className="flex items-center gap-3">
                    <span className="text-gold text-[10px] font-display font-bold tracking-[0.4em] uppercase">Tradition</span>
                    <span className="h-px w-8 bg-gold/50"></span>
                    <span className="text-gold text-[10px] font-display font-bold tracking-[0.4em] uppercase">{t.num}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-col mb-4">
                      <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-lg mb-1">
                        {t.title}
                      </h3>
                      <span className="font-arabic text-gold/80 text-2xl drop-shadow-md">{t.titleArabic}</span>
                    </div>
                    
                    <div className="overflow-hidden mb-6">
                      <p className="text-ivory/80 font-serif italic text-base md:text-lg leading-relaxed transform transition-transform duration-500 opacity-80 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        {t.desc}
                      </p>
                    </div>
                    
                    <Link 
                      to={t.linkTo} 
                      className="btn-press inline-flex items-center gap-3 text-gold text-xs font-display font-bold tracking-[0.2em] uppercase border border-gold/40 px-6 py-3 rounded-full hover:bg-gold hover:text-rich-black transition-all duration-300 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CSS for hiding scrollbar but allowing scroll */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

// Reusable animated staggered quote component using IntersectionObserver logic
function StaggeredQuote({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const words = text.split(" ");
  
  return (
    <h2 
      ref={ref}
      className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed text-ivory px-4 md:px-8"
      style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

function MasterCard({ role, name, nameArabic, img, delay, className = "" }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden bg-rich-black border border-white/5 rounded-2xl ${className}`}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-1000"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-gold/50 transition-all duration-500 group-hover:w-10"></span>
          <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">{role}</p>
        </div>
        <div className="flex justify-between items-end">
          <h3 className="font-serif italic text-4xl md:text-5xl text-ivory drop-shadow-lg">{name}</h3>
          {nameArabic && <span className="font-arabic text-gold/60 text-2xl group-hover:text-gold/90 transition-colors duration-500">{nameArabic}</span>}
        </div>
      </div>
      
      {/* Decorative Border Glow on Hover */}
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 rounded-2xl transition-colors duration-1000 pointer-events-none"></div>
    </motion.div>
  );
}


