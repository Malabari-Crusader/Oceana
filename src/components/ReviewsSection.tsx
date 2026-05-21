import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const REVIEWS = [
  {
    id: 1,
    name: 'ZAHRA HUSSAIN',
    nameAr: 'زهراء حسين',
    tag: 'Dammam · Recent Visit',
    stars: 5,
    avatar: 'Z',
    avatarClass: 'av-z',
    short: "Oceana is a winner — generous, delicious, and somehow still underrated after 35 years.",
    short_ar: "أوشيانا فوز — سخية، لذيذة، ولسه مقيمة رغم ٣٥ سنة.",
    full: "This was our first experience at this restaurant, and honestly, it was a fantastic experience. I loved everything we ordered, and the food was generous and delicious. Oceana is a great restaurant, but it's underrated despite being 35 years old. In short — this restaurant is a winner.",
    full_ar: "هذه كانت تجربتنا الأولى في هالمطعم، وبصراحة، كانت تجربة رائعة. عجبني كل شي طلبناه، والأكل كان لذيذ وسخي. أوشيانا مطعم عظيم، لكنه مقيم رغم إن عمره ٣٥ سنة. باختصار — هالمطعم فوز."
  },
  {
    id: 2,
    name: 'HABEEB MOGRAL',
    nameAr: 'حبيب مغرل',
    tag: 'Dammam · Local Guide · 64 Reviews',
    stars: 5,
    avatar: 'H',
    avatarClass: 'av-h',
    short: "A comfort and warmth you simply cannot find anywhere else in Dammam.",
    short_ar: "راحة ودفى ما تحصلهم في أي مكان ثاني في الدمام.",
    full: "Frequently I prefer this restaurant because of its comfort and warmth — a coziness you can't experience in many other restaurants in Dammam. The ambiance makes you calm, and the food with excellent service makes you come back again and again. They have private huts if you like more privacy, and a meeting room for corporate events.",
    full_ar: "دائماً أفضل هالمطعم لراحته ودفاه — شي ما تحسه في كثير مطاعم الدمام. الأجواء تهديك، والأكل مع الخدمة الممتازة يخلّيك ترجع مرة ومرة. عندهم كبائن خاصة إذا تحب خصوصية أكثر، وغرفة اجتماعات."
  },
  {
    id: 3,
    name: 'TASNIM MOHAMMAD',
    nameAr: 'تسنيم محمد',
    tag: 'Dammam · Local Guide · Regular Since 2010',
    stars: 5,
    avatar: 'T',
    avatarClass: 'av-t',
    short: "Since 2010, visiting regularly. One thing never changes — the consistency.",
    short_ar: "من ٢٠١٠ وأنا أزورهم باستمرار. شي واحد دايم — الاستمرارية.",
    full: "Since 2010 we have been visiting this restaurant regularly and one thing I really like is the consistency in food quality and the well-behaved service of the entire team — from the receptionist to the front-line staff. Value for money, this is one of the best restaurants in Dammam.",
    full_ar: "من ٢٠١٠ واحنا نزور هالمطعم باستمرار، وأكثر شي يعجبني هو الاستمرارية في جودة الأكل والخدمة المحترمة من كل الفريق — من الاستقبال للموظفين. قيمة مقابل السعر، هذا واحد من أفضل مطاعم الدمام."
  },
  {
    id: 4,
    name: 'MERVIN JACOB',
    nameAr: 'ميرفين جاكوب',
    tag: 'Dammam · Grew Up Here',
    stars: 4,
    avatar: 'M',
    avatarClass: 'av-m',
    short: "Having dinner at Oceana was a flex growing up in Dammam. The Chicken Tibetian lives rent-free in my memory from Canada.",
    short_ar: "لما كنت أصغر، العشاء في أوشيانا كان فخر. الدجاج تبتي عايش في ذاكرتي من كندا.",
    full: "I was born and brought up in Saudi, Dammam 1996. I remember having dinner at Oceana — it was the place for year-end corporate gatherings, school celebrations, everything. Oceana had that dish called Chicken Tibetian. It was the signature item, along with the Saudi Cocktail. That curry with garlic naan was lip-smacking. Sitting here in Canada now, I hope they still have their bars high.",
    full_ar: "أنا ولدت وتربيت في السعودية، الدمام ١٩٩٦. أذكر العشاء في أوشيانا — كان المكان لتجمعات الشركات، احتفالات المدرسة، كل شي. أوشيانا عنده ذاك الأكل الاسمه دجاج تبتي. كان الشي المميز، مع السعودي كوكتيل. ذاك الكاري مع الخبز كان لذيذ. أنا في كندا الحين، وأتمنى لسى عندهم نفس المستوى."
  },
  {
    id: 5,
    name: 'FAZIN UMMER',
    nameAr: 'فازين أمّر',
    tag: 'Dammam · Local Guide · 83 Reviews',
    stars: 5,
    avatar: 'F',
    avatarClass: 'av-f',
    short: "Chicken Tibeteyen — a very unique dish I haven't seen anywhere else in the world.",
    short_ar: "دجاج تبتي — أكلة فريدة ما شفتها في أي مكان ثاني بالعالم.",
    full: "Chicken Tibeteyen is what everyone goes for. It has a very creamy, cheesy-like flavour — a truly unique dish that I haven't seen in any other place. Better order a Beef Shezwan alongside it, or it might taste too rich on its own.",
    full_ar: "دجاج تبتي هو اللي الكل يجي عشانه. طعمه كريمي، جبني — أكلة فريدة بصراحة ما شفتها في أي مكان ثاني. الأفضل تطلب لحم شيزوان معاه، عشان لا يكون تقيل."
  }
];

function ReviewCard({ review, index }: { review: typeof REVIEWS[0], index: number, key?: React.Key }) {
  const [expanded, setExpanded] = useState(false);
  const { isArabic } = useLanguage();

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.25, 0, 0.1, 1], delay: index * 0.08 }}
      className="review-card"
    >
      <div className="review-top">
        <div className="review-left">
          <div className={`review-avatar ${review.avatarClass}`}>{review.avatar}</div>
          <div>
            <p className="review-name">{isArabic && review.nameAr ? review.nameAr : review.name}</p>
            <p className="review-tag">{review.tag}</p>
          </div>
        </div>
        <div className="review-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ opacity: i < review.stars ? 1 : 0.25 }}>★</span>
          ))}
        </div>
      </div>
      
      {!expanded ? (
        <p className="review-short">
          {isArabic && review.short_ar ? review.short_ar : review.short}
        </p>
      ) : (
        <p className="review-full">
          {isArabic && review.full_ar ? review.full_ar : review.full}
        </p>
      )}
      
      <button className="read-toggle" onClick={() => setExpanded(!expanded)}>
        <span className="toggle-label">{expanded ? (isArabic ? 'اقرأ أقل' : 'Read less') : (isArabic ? 'اقرأ المزيد' : 'Read more')}</span>
        <span className="toggle-arrow" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
      </button>
    </motion.article>
  );
}

export default function ReviewsSection() {
  const { isArabic } = useLanguage();
  return (
    <section className="reviews">
      <div className="reviews-header">
        <span className="reviews-eyebrow">{isArabic ? 'ثلاثين سنة طاولات' : 'THIRTY YEARS OF TABLES'}</span>
        <h2 className="reviews-title">
          {isArabic ? 'كلمات تركها اللي' : 'Words left behind by those'}<br />
          <em>{isArabic ? 'تعشوا على الخليج.' : 'who dined near the Gulf.'}</em>
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="reviews-rule"
          style={{ transformOrigin: "left" }}
        ></motion.div>
      </div>

      <div className="reviews-cards max-w-3xl mx-auto">
        {REVIEWS.map((review, i) => (
          <ReviewCard key={review.id} review={review} index={i} />
        ))}
      </div>

      <div className="reviews-footer">
        <span className="reviews-rating"><span className="rating-stars">★★★★½</span> &nbsp; {isArabic ? 'متوسط ٤٫٧ من أكثر من ١٤٠٠ تقييم' : '4.7 average across 1.4k+ reviews'}</span>
        <a href="#" className="reviews-all">{isArabic ? 'عرض كل التقييمات ←' : 'VIEW ALL REVIEWS →'}</a>
      </div>
    </section>
  );
}
