import React, { useRef, useState, useEffect } from 'react';
import './CinematicEnter.css';
import { useLanguage } from '../context/LanguageContext';

const CinematicEnter: React.FC = () => {
  const { isArabic } = useLanguage();
  const stageRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasScrolledIntoView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    
    if (stageRef.current) {
      observer.observe(stageRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
    setIsHovering(true);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: (centerY - y) / 40,
      y: (x - centerX) / 40,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const particles = [
    {l:'12%',t:'18%',w:'2px',d:'4.2s',dl:'0s',c:'rgba(201,168,76,0.6)'},
    {l:'78%',t:'14%',w:'3px',d:'5.1s',dl:'0.4s',c:'rgba(232,201,122,0.5)'},
    {l:'8%',t:'68%',w:'2px',d:'6.3s',dl:'0.8s',c:'rgba(201,168,76,0.4)'},
    {l:'88%',t:'62%',w:'3px',d:'4.7s',dl:'0.2s',c:'rgba(255,215,0,0.5)'},
    {l:'48%',t:'8%',w:'2px',d:'7.2s',dl:'0.6s',c:'rgba(201,168,76,0.3)'},
    {l:'28%',t:'82%',w:'3px',d:'5.6s',dl:'0.1s',c:'rgba(232,201,122,0.45)'},
    {l:'72%',t:'78%',w:'2px',d:'4.9s',dl:'1.1s',c:'rgba(201,168,76,0.5)'},
    {l:'22%',t:'38%',w:'3px',d:'6.8s',dl:'0.5s',c:'rgba(255,215,0,0.4)'},
    {l:'92%',t:'38%',w:'2px',d:'5.4s',dl:'0.7s',c:'rgba(201,168,76,0.55)'},
    {l:'58%',t:'88%',w:'2px',d:'4.4s',dl:'1.3s',c:'rgba(232,201,122,0.35)'},
    {l:'38%',t:'28%',w:'3px',d:'6.1s',dl:'0.9s',c:'rgba(201,168,76,0.45)'},
    {l:'65%',t:'22%',w:'2px',d:'5.8s',dl:'1.5s',c:'rgba(255,215,0,0.35)'},
    {l:'18%',t:'52%',w:'2px',d:'7.5s',dl:'0.3s',c:'rgba(201,168,76,0.4)'},
    {l:'82%',t:'48%',w:'3px',d:'4.6s',dl:'1.0s',c:'rgba(232,201,122,0.5)'},
  ];

  const enterWord = 'Enter'.split('');
  const oceanaWord = 'Oceana'.split('');

  return (
    <div 
      className="cinematic-stage" 
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ce-bg-pattern"></div>
      <div className="ce-radial-glow"></div>
      
      <div className="ce-particles">
        {hasScrolledIntoView && particles.map((p, i) => (
          <div 
            key={i}
            className="ce-particle"
            style={{
              left: p.l,
              top: p.t,
              width: p.w,
              height: p.w,
              background: p.c,
              animationDuration: p.d,
              animationDelay: p.dl,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div 
        className="ce-cursor-glow"
        style={{
          opacity: isHovering ? 1 : 0,
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`,
        }}
      />

      <div 
        className="ce-content"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="ce-top-rule">
          <div className="ce-top-rule-line"></div>
        </div>

        <div className="ce-title" dir="ltr">
          <span className="ce-word-enter">
            {enterWord.map((char, i) => (
              <span 
                key={`e-${i}`}
                className="ce-letter"
                style={{ animationDelay: `${0.6 + i * 0.06}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="ce-word-oceana">
            {oceanaWord.map((char, i) => (
              <span 
                key={`o-${i}`}
                className="ce-letter ce-gold"
                style={{ animationDelay: `${1.0 + i * 0.08}s` }}
              >
                {char}
              </span>
            ))}
          </span>
          <span 
            className="ce-dot"
            style={{ animationDelay: '1.6s' }}
          >.</span>
        </div>

        <div className="ce-ornament">
          <div className="ce-orn-line"></div>
          <div className="ce-compass">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5"/>
              <circle cx="12" cy="12" r="7" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
              <path d="M12 2L13.5 10L12 12L10.5 10Z" fill="rgba(201,168,76,0.5)"/>
              <path d="M12 22L10.5 14L12 12L13.5 14Z" fill="rgba(201,168,76,0.3)"/>
              <path d="M2 12L10 10.5L12 12L10 13.5Z" fill="rgba(201,168,76,0.3)"/>
              <path d="M22 12L14 13.5L12 12L14 10.5Z" fill="rgba(201,168,76,0.3)"/>
              <circle cx="12" cy="12" r="1.5" fill="rgba(201,168,76,0.6)"/>
            </svg>
          </div>
          <div className="ce-orn-line"></div>
        </div>

        <div className="ce-arabic" dir="rtl">
          <span className="ce-ar-main">أَهْلًا بِكُمْ في أوشيانا</span>
          <div className="ce-banner">
            <span className="ce-banner-en" dir="ltr">{isArabic ? 'كورنيش الدمام' : 'DAMMAM CORNICHE'}</span>
            <span className="ce-banner-dot">·</span>
            <span className="ce-banner-ar" dir="rtl">منذ ١٩٩٤</span>
          </div>
        </div>
      </div>

      <div className="ce-ripples">
        {hasScrolledIntoView && [1, 2, 3].map((i) => (
          <div 
            key={i}
            className="ce-ripple"
            style={{ animationDelay: `${0.3 + i * 0.4}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicEnter;
