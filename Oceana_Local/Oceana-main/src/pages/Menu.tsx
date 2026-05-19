import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { menuData } from '../data/menuData';
import { Helmet } from 'react-helmet-async';

export default function Menu() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Oceana Main Menu",
    "description": "A fusion of the East, Subcontinent, and Middle East masterfully curated for the most discerning palate.",
    "hasMenuSection": menuData.map(category => ({
      "@type": "MenuSection",
      "name": category.title,
      "description": category.subtitle,
      "hasMenuItem": category.items.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.desc,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace(' SAR', ''),
          "priceCurrency": "SAR"
        }
      }))
    }))
  };

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-[#0A0806] min-h-screen pb-20 relative overflow-hidden">
      {/* Luxury Texture Background Layers */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundColor: '#0A0806',
          backgroundImage: `
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(40, 20, 8, 0.5) 0%, transparent 65%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath d='M1 3h1v1H1zM3 1h1v1H3z' fill='%23C9A84C' fill-opacity='0.03'/%3E%3C/svg%3E")
          `,
          backgroundSize: 'auto, 200px 200px, 4px 4px',
          backgroundRepeat: 'no-repeat, repeat, repeat',
          height: '200%' // Ensure it covers long scroll
        }}
      ></div>

      <Helmet>
        <title>Menu | The Convergence of Three Cultures on the Dammam Corniche</title>
        <meta name="description" content="Embark on an epicurean journey at Oceana. Explore three distinct and masterful traditions—East, Subcontinent, and Middle East—curated on the Dammam Corniche." />
        <script type="application/ld+json">
          {JSON.stringify(menuSchema)}
        </script>
      </Helmet>
      {/* Header Section */}
      <div className="relative pt-48 pb-40 mb-20 flex flex-col items-center justify-center overflow-hidden min-h-[70vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/Menu Background image.jpeg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(10, 8, 6, 0.75) 0%, rgba(10, 8, 6, 0.35) 60%, rgba(10, 8, 6, 0.55) 100%)' }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 8, 6, 0.6) 0%, transparent 35%)' }}></div>
          {/* Texture Overlay for Photograph */}
          <div 
            className="absolute inset-0 opacity-60 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 100% 50% at 50% 0%, rgba(40, 20, 8, 0.3) 0%, transparent 65%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath d='M1 3h1v1H1zM3 1h1v1H3z' fill='%23C9A84C' fill-opacity='0.03'/%3E%3C/svg%3E")
              `,
              backgroundSize: 'auto, 200px 200px, 4px 4px',
              backgroundRepeat: 'no-repeat, repeat, repeat'
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-[560px] mx-auto px-6 flex flex-col">
          {/* Kicker */}
          <div className="text-left mb-6">
            <span className="font-serif text-[16px] md:text-[20px] tracking-[0.32em] text-[#C9A84C] uppercase">THE MENU · قائمة الطعام</span>
          </div>
          
          {/* Headline */}
          <div className="text-left flex flex-col">
            <span className="font-serif italic font-light text-[52px] md:text-[72px] text-white tracking-[-0.01em] leading-[1.05]">Three Worlds.</span>
            <span className="font-serif font-semibold text-[52px] md:text-[72px] text-[#C9A84C] tracking-[0.02em] leading-[1.05]">One Table.</span>
          </div>
          
          {/* Arabic Echo */}
          <div className="text-right mt-3 mb-8 w-full">
            <span className="font-serif text-[28px] md:text-[34px] font-normal text-[#C9A84C] tracking-[0.02em] opacity-90" dir="rtl">ثلاثة عوالم. طاولة واحدة.</span>
          </div>
          
          {/* Divider */}
          <div className="flex justify-center mb-8 opacity-80">
            <svg width="100" height="10" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="5" x2="40" y2="5" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
              <path d="M50,1 L53,5 L50,9 L47,5 Z" fill="#C9A84C" opacity="0.6"/>
              <line x1="60" y1="5" x2="100" y2="5" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4"/>
            </svg>
          </div>
          
          {/* Body Text */}
          <div className="text-left flex flex-col">
            <span className="text-[#D4C4A0] text-[19px] md:text-[21px] font-light italic mb-1">At the edge of the Dammam Corniche —</span>
            <span className="text-[#D4C4A0] text-[19px] md:text-[21px] font-light italic mb-10">where three civilisations compete to feed you.</span>
            <span className="font-serif text-[22px] md:text-[26px] tracking-[0.15em] text-[#C9A84C] font-normal uppercase">Explore thirty years of culinary theater.</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          <span className="text-[#C9A84C] uppercase tracking-[0.3em] text-[10px] font-serif opacity-80">Explore · استكشف</span>
          <div className="w-[1px] h-16 bg-[#C9A84C]/20 overflow-hidden relative">
            <div className="w-full h-[50%] bg-[#C9A84C] absolute top-0 left-0 animate-[scrollLine_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {menuData.map((category, index) => (
          <div 
            key={category.id}
            className="relative border border-[#221a15] rounded-xl p-8 md:p-14 overflow-hidden shadow-2xl"
            style={{
              backgroundColor: '#0A0806',
              backgroundImage: `
                radial-gradient(ellipse 100% 50% at 50% 0%, rgba(40, 20, 8, 0.5) 0%, transparent 65%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"),
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath d='M1 3h1v1H1zM3 1h1v1H3z' fill='%23C9A84C' fill-opacity='0.03'/%3E%3C/svg%3E")
              `,
              backgroundSize: 'auto, 200px 200px, 4px 4px',
              backgroundRepeat: 'no-repeat, repeat, repeat'
            }}
          >
            {/* Category Header */}
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif text-gold mb-3 leading-tight">{category.title}</h2>
                <p className="text-gray-300 font-serif italic text-xl md:text-2xl opacity-80">{category.subtitle}</p>
              </div>
              <category.icon className="text-gold/60 w-10 h-10 flex-shrink-0 ml-4 mt-1" />
            </div>

            {/* Category Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-start">
              {/* Items List */}
              <div className={`flex flex-col gap-10 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                {category.items.map((item, iIdx) => (
                  <div key={iIdx} className="group">
                    <div className="flex justify-between items-start mb-4 gap-6">
                      <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300 leading-tight">{item.name}</h3>
                      <span className="text-gold font-display text-sm md:text-base whitespace-nowrap mt-1 tracking-wide">{item.price}</span>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans opacity-80 max-w-xl">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Category Image */}
              <div className={`relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden border border-[#332211] sticky top-32 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Additional Items Expandable Section */}
            {category.additional && category.additional.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center gap-2 text-gold hover:text-white transition-colors duration-300 font-serif text-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md px-2 py-1 -ml-2"
                >
                  {expandedCategories[category.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  {expandedCategories[category.id] ? 'Hide Additional Items' : 'View Additional Items'}
                </button>

                {expandedCategories[category.id] && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.additional.map((group, gIdx) => (
                      <div key={gIdx}>
                        <h4 className="text-white font-serif text-xl mb-4 border-b border-white/10 pb-2">{group.group}</h4>
                        <ul className="space-y-3">
                          {group.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex justify-between items-center text-sm md:text-base">
                              <span className="text-gray-300">{item.name}</span>
                              <span className="text-gold font-serif font-medium">{item.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* The Cup & The Glass Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div 
          className="relative border border-[#221a15] rounded-xl p-8 md:p-14 overflow-hidden shadow-2xl"
          style={{
            backgroundColor: '#0A0806',
            backgroundImage: `
              radial-gradient(ellipse 100% 50% at 50% 0%, rgba(40, 20, 8, 0.5) 0%, transparent 65%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath d='M1 3h1v1H1zM3 1h1v1H3z' fill='%23C9A84C' fill-opacity='0.03'/%3E%3C/svg%3E")
            `,
            backgroundSize: 'auto, 200px 200px, 4px 4px',
            backgroundRepeat: 'no-repeat, repeat, repeat'
          }}
        >
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            {/* Dallah Icon - Option 1 */}
            <div className="mb-6">
              <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-85">
                <path d="M8 12 Q2 14 2 20 Q2 24 6 25" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" fill="none"/>
                <path d="M6 25 Q6 36 16 37 Q26 36 26 25 L24 14 Q22 10 16 10 Q10 10 8 14 Z" stroke="#C9A84C" strokeWidth="1" fill="none"/>
                <path d="M13 10 Q13 6 16 5 Q19 6 19 10" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" fill="none"/>
                <circle cx="16" cy="4" r="2" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
                <path d="M26 16 Q32 16 32 22 Q32 26 26 26" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span className="font-display text-[16px] md:text-[19px] tracking-[0.4em] text-[#C9A84C] uppercase mb-6">FROM THE KITCHEN · من المطبخ</span>
            <h2 className="text-[42px] md:text-[56px] font-serif italic text-white leading-tight">The Cup &amp; The Glass</h2>
            
            <div className="flex justify-center mt-10 mb-2 w-full text-[#C9A84C] opacity-70 tracking-[0.25em] text-[11px]">
              ──────── ✦ ────────
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Brewed & Steeped */}
            <div className="flex flex-col gap-10">
              <div className="text-center mb-2">
                <span className="font-display text-[15px] md:text-[17px] text-[#C9A84C] tracking-[0.3em] uppercase">Brewed &amp; Steeped</span>
              </div>
              
              <div className="flex flex-col gap-6">
                {[
                  { name: 'Turkish Coffee', price: 'SAR 21' },
                  { name: 'Coffee', price: 'SAR 24' },
                  { name: 'Filter Coffee', price: 'SAR 24' },
                  { name: 'Tea', price: 'SAR 17' },
                  { name: 'Green Tea', price: 'SAR 24' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-4 group">
                    <span className="text-xl md:text-2xl font-serif text-white group-hover:text-[#C9A84C] transition-colors duration-300">{item.name}</span>
                    <span className="text-[#C9A84C] font-display text-sm md:text-base whitespace-nowrap tracking-wide">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The House Signatures */}
            <div className="flex flex-col gap-10">
              <div className="flex justify-center items-center gap-4 mb-2">
                {/* Finjan Icon - Option 2 */}
                <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-85">
                  <path d="M6 8 Q5 20 14 22 Q23 20 22 8 Z" stroke="#C9A84C" strokeWidth="1" fill="none"/>
                  <path d="M5 8 Q14 6 23 8" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" fill="none"/>
                  <path d="M4 24 Q14 26 24 24" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
                  <path d="M10 5 Q11 2 10 0" stroke="#C9A84C" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4"/>
                  <path d="M14 4 Q15 1 14 -1" stroke="#C9A84C" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4"/>
                  <path d="M18 5 Q19 2 18 0" stroke="#C9A84C" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4"/>
                </svg>
                <span className="font-display text-[15px] md:text-[17px] text-[#C9A84C] tracking-[0.3em] uppercase">The House Signatures</span>
              </div>
              
              <div className="flex flex-col gap-8">
                {[
                  { name: 'Saudi Champagne', price: 'SAR 98 / SAR 133', desc: 'A cultural icon. Sparkling apple and mixed fruit celebration.' },
                  { name: 'Jal Jeera', price: 'SAR 28', desc: 'Mint, cumin, tamarind, chili, and water infused with house-made spice blend and served ice-cold.' },
                  { name: 'Chaas', price: 'SAR 35', desc: 'Fresh yogurt is churned with water, salt, and spices (cumin, black salt, coriander).' },
                  { name: 'Thabakath', price: 'SAR 49', desc: 'A layered presentation of fresh juices and nectars.' }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <span className="text-xl md:text-2xl font-serif text-white group-hover:text-[#C9A84C] transition-colors duration-300">{item.name}</span>
                      <span className="text-[#C9A84C] font-display text-sm md:text-base whitespace-nowrap tracking-wide">{item.price}</span>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-serif italic opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Cold Drinks / Additions */}
          <div className="mt-16 pt-12 border-t border-white/5 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div className="flex flex-col gap-6">
              {[
                { name: 'Cold Coffee', price: 'SAR 28' },
                { name: 'Cold Coffee with Ice Cream', price: 'SAR 52' },
                { name: 'Iced Tea', price: 'SAR 21' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4 group">
                  <span className="text-lg md:text-xl font-serif text-white group-hover:text-[#C9A84C] transition-colors duration-300">{item.name}</span>
                  <span className="text-[#C9A84C] font-display text-sm md:text-base whitespace-nowrap tracking-wide">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {[
                { name: 'Fresh Juices', price: 'SAR 42 / SAR 49' },
                { name: 'Shigaf', price: 'SAR 52' },
                { name: 'Beer (Non-Alcoholic)', price: 'SAR 17' },
                { name: 'Soft Drinks & Water', price: 'SAR 7 - SAR 10' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4 group">
                  <span className="text-lg md:text-xl font-serif text-white group-hover:text-[#C9A84C] transition-colors duration-300">{item.name}</span>
                  <span className="text-[#C9A84C] font-display text-sm md:text-base whitespace-nowrap tracking-wide">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-32 text-white/70 text-lg md:text-xl font-sans space-y-4 mb-20">
        <p className="tracking-wide">Prices are in Saudi Riyal (SAR) and inclusive of 15% VAT.</p>
        <p className="tracking-wide italic">Please inform your server of any dietary requirements or allergies.</p>
      </div>
    </div>
  );
}
