import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ScrollTimeline() {
  const { isArabic } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Add physics damping so the dot glides smoothly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to the dot's vertical position (0% to 100% of the line height)
  const dotY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset opacity on elements so they re-animate on language toggle
    const allEntries = container.querySelectorAll<HTMLElement>('.timeline-text, .timeline-photo');
    allEntries.forEach((el) => {
      el.style.opacity = '0';
      el.style.animation = 'none';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.classList.contains('timeline-text')) {
              target.style.animation = 'fadeUp 0.8s ease-out forwards';
            } else if (target.classList.contains('timeline-photo')) {
              target.style.animation = 'fadeUp 0.8s ease-out 0.2s forwards';
            }
            target.style.opacity = '1';
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    allEntries.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isArabic]);

  return (
    <section className="py-32 bg-[#0A0806] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto relative px-4">
        
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl md:text-6xl text-white flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="ltr-only">A Legacy</span>
            <span className="rtl-only">إرث</span>
            <span className="italic relative">
              <span className="ltr-only">in Time</span>
              <span className="rtl-only">عبر الزمن</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold"></span>
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Main vertical line container */}
          <div className="timeline-line">
            {/* The Filled Track (Progress Line) */}
            <motion.div 
              className="absolute left-0 top-0 w-full bg-gold origin-top"
              style={{ 
                height: "100%",
                scaleY: smoothProgress 
              }}
            ></motion.div>
            
            {/* The Gliding Dot */}
            <motion.div 
              className="absolute z-20"
              style={{ 
                top: dotY,
                left: "50%",
                x: "-50%",
                y: "-50%"
              }}
            >
              <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,1)] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-[3px] border-[#0A0806] pointer-events-none"></div>
                <div className="absolute -inset-[6px] rounded-full border-[1.5px] border-[#C9A84C]/40 animate-[pulse-dot_2.5s_infinite] pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {/* 1994 */}
            <div className="timeline-entry">
              <div className="timeline-text">
                <span className="timeline-year">
                  <span className="rtl-only">١٩٩٤</span>
                  <span className="ltr-only">1994</span>
                </span>
                <h3 className="timeline-title">
                  <span className="ltr-only">A Table of Ten</span>
                  <span className="rtl-only">طاولة لعشرة</span>
                </h3>
                <p>
                  <span className="ltr-only">A small kitchen on the Dammam Corniche. A family of three cultures. A table of ten. No grand opening. No press. Just the sound of the Arabian Gulf, the smell of spices that had never been in the same room before, and a vision that would redefine fine dining in Eastern Saudi Arabia.</span>
                  <span className="rtl-only">مطبخ صغير على كورنيش الدمام. عائلة من ثلاث ثقافات. طاولة لعشرة. لم يكن هناك افتتاح كبير. ولا صحافة. فقط صوت الخليج العربي، ورائحة التوابل التي لم تجتمع في غرفة واحدة من قبل، ورؤية ستعيد تعريف مفهوم المطاعم الفاخرة في المنطقة الشرقية.</span>
                </p>
              </div>

              <div className="timeline-photo timeline-photo-1994">
                <img src="/hero-background.jpg" alt="1994" />
              </div>
            </div>

            {/* 2010 */}
            <div className="timeline-entry lg:flex-row-reverse">
              <div className="timeline-text">
                <span className="timeline-year">
                  <span className="rtl-only">٢٠١٠</span>
                  <span className="ltr-only">2010</span>
                </span>
                <h3 className="timeline-title">
                  <span className="ltr-only">The Corniche Calls</span>
                  <span className="rtl-only">نداء الكورنيش</span>
                </h3>
                <p>
                  <span className="ltr-only">After fifteen years of word-of-mouth legend, the Gulf itself seemed to summon us closer. We moved to the water's edge — our permanent home on the Corniche. We expanded not to grow bigger, but because the stories being told at our tables deserved a grander stage.</span>
                  <span className="rtl-only">بعد خمسة عشر عاماً من الأسطورة المتناقلة، بدا وكأن الخليج نفسه يستدعينا للاقتراب. انتقلنا إلى حافة الماء — موطننا الدائم على الكورنيش. لم نتوسع لنصبح أكبر، بل لأن القصص التي تُروى على طاولاتنا تستحق مسرحاً أروع.</span>
                </p>
              </div>

              <div className="timeline-photo timeline-photo-2010">
                <img src="/timeline-2010.png" alt="2010" />
              </div>
            </div>

            {/* 2024 */}
            <div className="timeline-entry">
              <div className="timeline-text">
                <span className="timeline-year">
                  <span className="rtl-only">٢٠٢٤</span>
                  <span className="ltr-only">2024</span>
                </span>
                <h3 className="timeline-title">
                  <span className="ltr-only">Thirty Years, Still Writing</span>
                  <span className="rtl-only">ثلاثون عاماً، وما زلنا نكتب</span>
                </h3>
                <p>
                  <span className="ltr-only">Three decades of proposals accepted over our tables. Of deals sealed over our menus. Of families gathering by the Gulf light. Oceana turns thirty not with a celebration, but with a promise: the next chapter is always the most beautiful one.</span>
                  <span className="rtl-only">ثلاثة عقود من عروض الزواج التي قُبلت على طاولاتنا. من الصفقات التي أُبرمت فوق قوائم طعامنا. من العائلات التي تتجمع تحت ضوء الخليج. تبلغ أوشيانا عامها الثلاثين ليس باحتفال، بل بوعد: الفصل القادم هو دائماً الأجمل.</span>
                </p>
              </div>

              <div className="timeline-photo timeline-photo-2024">
                <img src="/timeline-modern-final.png" alt="2024" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
