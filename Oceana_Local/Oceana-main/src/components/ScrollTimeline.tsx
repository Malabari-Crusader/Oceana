import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const entries = [
  {
    yearRtl: '١٩٩٤',
    yearLtr: '1994',
    titleRtl: 'طاولة لعشرة',
    titleLtr: 'A Table of Ten',
    descRtl: 'مطبخ صغير على كورنيش الدمام. عائلة من ثلاث ثقافات. طاولة لعشرة. لم يكن هناك افتتاح كبير. ولا صحافة. فقط صوت الخليج العربي، ورائحة التوابل التي لم تجتمع في غرفة واحدة من قبل، ورؤية ستعيد تعريف مفهوم المطاعم الفاخرة في المنطقة الشرقية.',
    descLtr: 'A small kitchen on the Dammam Corniche. A family of three cultures. A table of ten. No grand opening. No press. Just the sound of the Arabian Gulf, the smell of spices that had never been in the same room before, and a vision that would redefine fine dining in Eastern Saudi Arabia.',
    photoClass: 'timeline-photo-1994',
    photoSrc: '/hero-background.jpg',
    reverse: false,
  },
  {
    yearRtl: '٢٠١٠',
    yearLtr: '2010',
    titleRtl: 'نداء الكورنيش',
    titleLtr: 'The Corniche Calls',
    descRtl: 'بعد خمسة عشر عاماً من الأسطورة المتناقلة، بدا وكأن الخليج نفسه يستدعينا للاقتراب. انتقلنا إلى حافة الماء — موطننا الدائم على الكورنيش. لم نتوسع لنصبح أكبر، بل لأن القصص التي تُروى على طاولاتنا تستحق مسرحاً أروع.',
    descLtr: 'After fifteen years of word-of-mouth legend, the Gulf itself seemed to summon us closer. We moved to the water\'s edge — our permanent home on the Corniche. We expanded not to grow bigger, but because the stories being told at our tables deserved a grander stage.',
    photoClass: 'timeline-photo-2010',
    photoSrc: '/timeline-2010.png',
    reverse: true,
  },
  {
    yearRtl: '٢٠٢٤',
    yearLtr: '2024',
    titleRtl: 'ثلاثون عاماً، وما زلنا نكتب',
    titleLtr: 'Thirty Years, Still Writing',
    descRtl: 'ثلاثة عقود من عروض الزواج التي قُبلت على طاولاتنا. من الصفقات التي أُبرمت فوق قوائم طعامنا. من العائلات التي تتجمع تحت ضوء الخليج. تبلغ أوشيانا عامها الثلاثين ليس باحتفال، بل بوعد: الفصل القادم هو دائماً الأجمل.',
    descLtr: 'Three decades of proposals accepted over our tables. Of deals sealed over our menus. Of families gathering by the Gulf light. Oceana turns thirty not with a celebration, but with a promise: the next chapter is always the most beautiful one.',
    photoClass: 'timeline-photo-2024',
    photoSrc: '/timeline-modern-final.png',
    reverse: false,
  },
];

export default function ScrollTimeline() {
  const { isArabic } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const dotY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-[#0A0806] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto relative px-4">

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
          <div className="timeline-line">
            <motion.div
              className="absolute left-0 top-0 w-full bg-gold origin-top"
              style={{
                height: "100%",
                scaleY: smoothProgress
              }}
            ></motion.div>

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
            {entries.map((entry, i) => (
              <div key={`entry-${i}`} className={`timeline-entry ${entry.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  key={`text-${i}-${isArabic}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="timeline-text"
                >
                  <span className="timeline-year">
                    <span className="rtl-only">{entry.yearRtl}</span>
                    <span className="ltr-only">{entry.yearLtr}</span>
                  </span>
                  <h3 className="timeline-title">
                    <span className="ltr-only">{entry.titleLtr}</span>
                    <span className="rtl-only">{entry.titleRtl}</span>
                  </h3>
                  <p>
                    <span className="ltr-only">{entry.descLtr}</span>
                    <span className="rtl-only">{entry.descRtl}</span>
                  </p>
                </motion.div>

                <motion.div
                  key={`photo-${i}-${isArabic}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className={`timeline-photo ${entry.photoClass}`}
                >
                  <img src={entry.photoSrc} alt={entry.yearLtr} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
