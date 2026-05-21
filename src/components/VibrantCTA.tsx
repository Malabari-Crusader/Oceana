import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './VibrantCTA.css';

export default function VibrantCTA() {
  const { isArabic } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pData = [
      {l:'6%',t:'8%',w:'3px',c:'rgba(255,180,40,0.7)',x:'12px',y:'-16px',d:'5s',dl:'0s'},
      {l:'90%',t:'6%',w:'2px',c:'rgba(201,168,76,0.6)',x:'-10px',y:'14px',d:'6s',dl:'0.4s'},
      {l:'3%',t:'50%',w:'4px',c:'rgba(220,140,30,0.55)',x:'14px',y:'-10px',d:'7s',dl:'0.8s'},
      {l:'94%',t:'55%',w:'3px',c:'rgba(201,168,76,0.65)',x:'-12px',y:'-14px',d:'5.5s',dl:'0.2s'},
      {l:'47%',t:'3%',w:'2px',c:'rgba(255,200,60,0.5)',x:'8px',y:'18px',d:'8s',dl:'1s'},
      {l:'20%',t:'92%',w:'3px',c:'rgba(201,168,76,0.55)',x:'16px',y:'-8px',d:'6.5s',dl:'0.6s'},
      {l:'75%',t:'88%',w:'4px',c:'rgba(180,120,20,0.6)',x:'-14px',y:'-12px',d:'5.2s',dl:'1.3s'},
      {l:'32%',t:'12%',w:'2px',c:'rgba(240,190,50,0.45)',x:'10px',y:'12px',d:'7.5s',dl:'0.3s'},
      {l:'63%',t:'94%',w:'3px',c:'rgba(201,168,76,0.5)',x:'-8px',y:'-10px',d:'4.8s',dl:'0.9s'},
      {l:'14%',t:'36%',w:'2px',c:'rgba(220,160,40,0.5)',x:'12px',y:'10px',d:'6.2s',dl:'1.5s'},
      {l:'56%',t:'16%',w:'3px',c:'rgba(201,168,76,0.4)',x:'-6px',y:'14px',d:'9s',dl:'0.7s'},
      {l:'84%',t:'32%',w:'2px',c:'rgba(160,100,20,0.55)',x:'-10px',y:'-8px',d:'5.8s',dl:'1.1s'},
      {l:'42%',t:'78%',w:'2px',c:'rgba(255,170,30,0.45)',x:'8px',y:'-12px',d:'6.8s',dl:'0.5s'},
      {l:'70%',t:'20%',w:'3px',c:'rgba(201,168,76,0.5)',x:'-6px',y:'10px',d:'7.2s',dl:'1.4s'},
    ];

    const rings = [
      {w:200,h:200,rs:2.5,rd:'6s',rdl:'0s'},
      {w:300,h:300,rs:2.2,rd:'8s',rdl:'2s'},
      {w:150,h:150,rs:3,rd:'7s',rdl:'4s'},
    ];

    const seq = [
      {id:'h0',dl:0},{id:'h1',dl:250},
      {id:'p1',dl:450},{id:'p2',dl:680},
      {id:'p3',dl:910},{id:'p4',dl:1140},
      {id:'h6',dl:1350},
      {id:'c1',dl:1550},{id:'c2',dl:1780},{id:'c3',dl:2010},
      {id:'h10',dl:2280},
    ];

    const st = containerRef.current;
    if (!st) return;

    const pc = st.querySelector('#v-pts');
    const rc = st.querySelector('#v-ris');
    
    if (pc && pc.children.length === 0) {
      pData.forEach(p => {
        const el = document.createElement('div');
        el.className = 'v-pt';
        el.style.cssText = `left:${p.l};top:${p.t};width:${p.w};height:${p.w};background:${p.c};--x:${p.x};--y:${p.y};--d:${p.d};--dl:${p.dl}`;
        pc.appendChild(el);
      });
    }

    if (rc && rc.children.length === 0) {
      rings.forEach(r => {
        const el = document.createElement('div');
        el.className = 'v-ri';
        el.style.cssText = `width:${r.w}px;height:${r.h}px;--rs:${r.rs};--rd:${r.rd};--rdl:${r.rdl}`;
        rc.appendChild(el);
      });
    }

    const obs = new IntersectionObserver(e => {
      if(e[0].isIntersecting){
        seq.forEach(s => {
          setTimeout(() => {
            const el = st.querySelector(`#${s.id}`);
            if(el) el.classList.add('v');
          }, s.dl);
        });
        obs.disconnect();
      }
    }, { threshold: 0.06 });

    obs.observe(st);

    return () => obs.disconnect();
  }, []);

  return (
    <div className="vibrant-cta" ref={containerRef}>
      <div className="v-bg"></div>
      <div className="v-cv">
        <div className="v-geo-grid"></div>
        <div className="v-hex-pattern"></div>
        <div className="v-arabesque"></div>
        <div className="v-diagonal-lines"></div>
        <div className="v-noise"></div>
        <div className="v-glow-warm"></div>
        <div className="v-glow-cool"></div>
        <div className="v-glow-mid"></div>
        <div className="v-scan-line"></div>
        <div id="v-pts"></div>
        <div id="v-ris"></div>
        <div className="v-waves">
          <svg viewBox="0 0 800 160" preserveAspectRatio="none">
            <path d="M0 90 Q100 60 200 85 Q300 110 400 80 Q500 50 600 75 Q700 100 800 70 L800 160 L0 160 Z" fill="rgba(120,50,8,0.18)"/>
            <path d="M0 110 Q150 75 300 105 Q450 135 600 100 Q700 80 800 110 L800 160 L0 160 Z" fill="rgba(201,168,76,0.06)"/>
            <path d="M0 130 Q200 105 400 125 Q600 145 800 120 L800 160 L0 160 Z" fill="rgba(6,18,40,0.2)"/>
            <path d="M0 145 Q400 130 800 145 L800 160 L0 160 Z" fill="rgba(201,168,76,0.04)"/>
          </svg>
        </div>
      </div>

      <div className="v-inn">
        <div className="v-hw" id="h0">
          <h2 className="v-hd">{isArabic ? 'لما الكورنيش يهم،' : 'WHEN THE CORNICHE MATTERS,'}<br/><span className="v-g">OCEANA</span> {isArabic ? 'هو المكان.' : 'IS WHERE IT HAPPENS.'}</h2>
        </div>
        <div className="v-rw" id="h1">
          <div className="v-rl"></div><div className="v-rd"></div><div className="v-rl v-r"></div>
        </div>
        <div className="v-pairs">
          <div className="v-pair" id="p1"><span className="v-q">{isArabic ? 'عشاء عمل محتاج يختم الصفقة؟' : 'Corporate dinner that needs to seal the deal?'}</span><span className="v-a">Oceana.</span></div>
          <div className="v-pair" id="p2"><span className="v-q">{isArabic ? 'طلب زواج محتاج يكون أسطوري؟' : 'Proposal that needs to be legendary?'}</span><span className="v-a">Oceana.</span></div>
          <div className="v-pair" id="p3"><span className="v-q">{isArabic ? 'احتفال عائلي يستحق أكثر من مجرد أكلة؟' : 'Family celebration that deserves more than a meal?'}</span><span className="v-a">Oceana.</span></div>
          <div className="v-pair" id="p4"><span className="v-q">{isArabic ? 'مناسبة مهمة لازم تكون لا تنسى؟' : 'Milestone evening that must be unforgettable?'}</span><span className="v-a">Oceana.</span></div>
        </div>
        <div className="v-fr" id="h6"></div>
        <div className="v-cls">
          <span className="v-cl v-cl1" id="c1">{isArabic ? 'هذا مو تواضع.' : "This isn't modesty."}</span>
          <span className="v-cl v-cl2" id="c2">{isArabic ? 'هذا مو كلام تسويق.' : "This isn't marketing speak."}</span>
          <span className="v-cl v-cl3" id="c3">{isArabic ? 'هذا اللي أثبتته ثلاثين سنة على الكورنيش.' : 'This is what three decades on the Corniche have proven.'}</span>
        </div>
        <div className="v-btns" id="h10">
          <Link to="/reservations" className="v-bp">{isArabic ? 'احجز لحظتك' : 'RESERVE YOUR MOMENT'} <span className="v-ar">→</span></Link>
          <Link to="/menu" className="v-bs">{isArabic ? 'استكشف قائمتنا' : 'EXPLORE OUR MENU'} <span className="v-ar">→</span></Link>
        </div>
      </div>
    </div>
  );
}
