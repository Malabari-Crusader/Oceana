export const DhowSceneBackground = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 900" 
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <defs>
      <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#03050c"/>
        <stop offset="30%" stopColor="#060d1a"/>
        <stop offset="62%" stopColor="#0a1828"/>
        <stop offset="100%" stopColor="#0c1f30"/>
      </linearGradient>
      <linearGradient id="g-sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0c1e30"/>
        <stop offset="40%" stopColor="#091626"/>
        <stop offset="100%" stopColor="#040c14"/>
      </linearGradient>
      <linearGradient id="g-moon-halo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c9aa71" stopOpacity="0.13"/>
        <stop offset="100%" stopColor="#c9aa71" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="g-horizon-glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#163348" stopOpacity="0.55"/>
        <stop offset="100%" stopColor="#0c1f30" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="g-reflect" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c9aa71" stopOpacity="0.18"/>
        <stop offset="100%" stopColor="#c9aa71" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="g-wave1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#c9aa71" stopOpacity="0"/>
        <stop offset="30%" stopColor="#c9aa71" stopOpacity="0.06"/>
        <stop offset="70%" stopColor="#c9aa71" stopOpacity="0.06"/>
        <stop offset="100%" stopColor="#c9aa71" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="g-dhow-hull" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e3248"/>
        <stop offset="100%" stopColor="#0e1f2e"/>
      </linearGradient>
    </defs>

    {/* SKY BASE */}
    <rect width="1440" height="900" fill="url(#g-sky)"/>

    {/* SKY HAZE */}
    <ellipse cx="720" cy="480" rx="900" ry="160" fill="#0e2236" opacity="0.18"/>
    <ellipse cx="720" cy="460" rx="600" ry="80" fill="#0e2236" opacity="0.1"/>

    {/* MILKY WAY SUGGESTION */}
    <g opacity="0.22">
      <circle cx="880" cy="55" r="0.6" fill="#ddd8c4"/>
      <circle cx="905" cy="38" r="0.5" fill="#ddd8c4"/>
      <circle cx="930" cy="62" r="0.7" fill="#ddd8c4"/>
      <circle cx="955" cy="42" r="0.5" fill="#ddd8c4"/>
      <circle cx="975" cy="70" r="0.6" fill="#ddd8c4"/>
      <circle cx="998" cy="30" r="0.5" fill="#ddd8c4"/>
      <circle cx="1015" cy="58" r="0.7" fill="#ddd8c4"/>
      <circle cx="1038" cy="48" r="0.5" fill="#ddd8c4"/>
      <circle cx="1058" cy="72" r="0.6" fill="#ddd8c4"/>
      <circle cx="1078" cy="35" r="0.5" fill="#ddd8c4"/>
      <circle cx="1095" cy="60" r="0.6" fill="#ddd8c4"/>
      <circle cx="1115" cy="44" r="0.5" fill="#ddd8c4"/>
      <circle cx="862" cy="80" r="0.5" fill="#ddd8c4"/>
      <circle cx="942" cy="88" r="0.5" fill="#ddd8c4"/>
      <circle cx="1022" cy="85" r="0.5" fill="#ddd8c4"/>
      <circle cx="1070" cy="88" r="0.5" fill="#ddd8c4"/>
    </g>

    {/* STARS */}
    <circle cx="72" cy="58" r="1.3" fill="#ece8d8" opacity="0.58"/>
    <circle cx="148" cy="32" r="0.9" fill="#ece8d8" opacity="0.42"/>
    <circle cx="223" cy="72" r="1.1" fill="#ece8d8" opacity="0.5"/>
    <circle cx="305" cy="44" r="0.8" fill="#ece8d8" opacity="0.38"/>
    <circle cx="388" cy="88" r="1.4" fill="#ece8d8" opacity="0.62"/>
    <circle cx="450" cy="26" r="0.7" fill="#ece8d8" opacity="0.32"/>
    <circle cx="512" cy="58" r="1.0" fill="#ece8d8" opacity="0.46"/>
    <circle cx="598" cy="78" r="0.8" fill="#ece8d8" opacity="0.36"/>
    <circle cx="655" cy="30" r="1.2" fill="#ece8d8" opacity="0.55"/>
    <circle cx="718" cy="64" r="0.7" fill="#ece8d8" opacity="0.30"/>
    <circle cx="790" cy="44" r="1.0" fill="#ece8d8" opacity="0.44"/>
    <circle cx="840" cy="18" r="0.6" fill="#ece8d8" opacity="0.28"/>
    <circle cx="1138" cy="92" r="1.2" fill="#ece8d8" opacity="0.52"/>
    <circle cx="1205" cy="50" r="0.8" fill="#ece8d8" opacity="0.38"/>
    <circle cx="1262" cy="76" r="1.1" fill="#ece8d8" opacity="0.5"/>
    <circle cx="1318" cy="36" r="0.7" fill="#ece8d8" opacity="0.33"/>
    <circle cx="1375" cy="62" r="1.3" fill="#ece8d8" opacity="0.58"/>
    <circle cx="1410" cy="28" r="0.9" fill="#ece8d8" opacity="0.4"/>
    <circle cx="182" cy="138" r="0.8" fill="#ece8d8" opacity="0.3"/>
    <circle cx="420" cy="148" r="0.7" fill="#ece8d8" opacity="0.26"/>
    <circle cx="620" cy="126" r="0.9" fill="#ece8d8" opacity="0.32"/>
    <circle cx="1180" cy="140" r="0.8" fill="#ece8d8" opacity="0.3"/>
    <circle cx="1340" cy="122" r="0.7" fill="#ece8d8" opacity="0.26"/>
    <circle cx="340" cy="60" r="1.8" fill="#fff8e8" opacity="0.70"/>
    <circle cx="560" cy="38" r="1.6" fill="#fff8e8" opacity="0.65"/>
    <circle cx="1290" cy="58" r="1.7" fill="#fff8e8" opacity="0.68"/>

    {/* MOON */}
    <circle cx="1148" cy="108" r="56" fill="#1a1710" opacity="0.98"/>
    <circle cx="1133" cy="103" r="44" fill="#05080e" opacity="0.97"/>
    <circle cx="1148" cy="108" r="60" fill="none" stroke="#c9aa71" strokeWidth="0.5" opacity="0.18"/>
    <circle cx="1148" cy="108" r="68" fill="none" stroke="#c9aa71" strokeWidth="0.3" opacity="0.08"/>
    <ellipse cx="1148" cy="108" rx="100" ry="180" fill="url(#g-moon-halo)"/>
    <path d="M1122 90 Q1135 88 1148 92" fill="none" stroke="#c9aa71" strokeWidth="0.3" opacity="0.14"/>
    <path d="M1118 102 Q1133 99 1148 103" fill="none" stroke="#c9aa71" strokeWidth="0.3" opacity="0.1"/>

    {/* DISTANT CITY SKYLINE */}
    <rect x="580" y="452" width="14" height="30" fill="#162a3c" opacity="0.55"/>
    <rect x="600" y="446" width="10" height="36" fill="#162a3c" opacity="0.5"/>
    <rect x="616" y="454" width="16" height="28" fill="#162a3c" opacity="0.48"/>
    <rect x="638" y="448" width="8" height="34" fill="#162a3c" opacity="0.52"/>
    <rect x="652" y="458" width="12" height="24" fill="#162a3c" opacity="0.44"/>
    <rect x="670" y="450" width="10" height="32" fill="#162a3c" opacity="0.5"/>
    <rect x="686" y="455" width="18" height="27" fill="#162a3c" opacity="0.46"/>
    <rect x="710" y="445" width="10" height="37" fill="#162a3c" opacity="0.52"/>
    <rect x="726" y="456" width="14" height="26" fill="#162a3c" opacity="0.44"/>
    <rect x="746" y="449" width="8" height="33" fill="#162a3c" opacity="0.5"/>
    <rect x="760" y="458" width="12" height="24" fill="#162a3c" opacity="0.42"/>
    <rect x="778" y="452" width="16" height="30" fill="#162a3c" opacity="0.46"/>
    <rect x="800" y="447" width="10" height="35" fill="#162a3c" opacity="0.5"/>
    <rect x="816" y="455" width="14" height="27" fill="#162a3c" opacity="0.44"/>
    <ellipse cx="700" cy="453" rx="200" ry="22" fill="#c9aa71" opacity="0.04"/>

    {/* HORIZON GLOW */}
    <rect x="0" y="458" width="1440" height="28" fill="url(#g-horizon-glow)"/>

    {/* SEA */}
    <rect x="0" y="482" width="1440" height="418" fill="url(#g-sea)"/>

    {/* HORIZON WAVE EDGE */}
    <path d="M0,484 C160,478 320,492 480,484 C640,476 800,492 960,484 C1120,476 1280,492 1440,484 L1440,490 L0,490 Z" fill="#142636" opacity="0.7"/>
    <path d="M0,488 C120,483 240,496 360,488 C480,480 600,496 720,488 C840,480 960,496 1080,488 C1200,480 1320,496 1440,488 L1440,494 L0,494 Z" fill="#0f1e2c" opacity="0.85"/>

    {/* MOON REFLECTION */}
    <rect x="1098" y="486" width="100" height="414" fill="url(#g-reflect)" opacity="0.55"/>
    <ellipse cx="1148" cy="510" rx="48" ry="5" fill="#c9aa71" opacity="0.10"/>
    <ellipse cx="1148" cy="535" rx="38" ry="4" fill="#c9aa71" opacity="0.08"/>
    <ellipse cx="1148" cy="562" rx="30" ry="3" fill="#c9aa71" opacity="0.07"/>
    <ellipse cx="1148" cy="590" rx="24" ry="2.5" fill="#c9aa71" opacity="0.05"/>
    <ellipse cx="1148" cy="620" rx="18" ry="2" fill="#c9aa71" opacity="0.04"/>
    <ellipse cx="1148" cy="655" rx="14" ry="1.5" fill="#c9aa71" opacity="0.03"/>

    {/* WATER WAVE SHIMMER BANDS */}
    <path d="M200,505 C360,500 520,512 680,505 C840,498 1000,512 1100,506 L1100,510 L200,510 Z" fill="url(#g-wave1)" opacity="0.9"/>
    <path d="M100,524 C300,518 500,532 700,524 C900,516 1100,530 1300,524 L1300,528 L100,528 Z" fill="url(#g-wave1)" opacity="0.75"/>
    <path d="M0,544 C240,538 480,550 720,544 C960,538 1200,550 1440,544 L1440,548 L0,548 Z" fill="url(#g-wave1)" opacity="0.65"/>
    <path d="M80,566 C280,560 480,574 680,566 C880,558 1080,572 1280,566 L1280,570 L80,570 Z" fill="url(#g-wave1)" opacity="0.55"/>
    <path d="M160,590 C360,585 560,596 760,590 C960,584 1160,595 1320,590 L1320,593 L160,593 Z" fill="url(#g-wave1)" opacity="0.45"/>
    <path d="M0,616 C220,611 440,621 660,616 C880,611 1100,621 1340,616 L1340,619 L0,619 Z" fill="url(#g-wave1)" opacity="0.36"/>
    <path d="M100,645 C300,641 500,650 700,645 C900,640 1100,649 1300,645 L1300,648 L100,648 Z" fill="url(#g-wave1)" opacity="0.28"/>
    <path d="M0,678 C240,674 480,682 720,678 C960,674 1200,682 1440,678 L1440,680 L0,680 Z" fill="url(#g-wave1)" opacity="0.20"/>

    {/* DHOW 1 — hero, left-center */}
    <g opacity="0.88">
      <path d="M260,470 C300,465 420,465 470,470 L450,486 C410,490 300,490 270,486 Z" fill="url(#g-dhow-hull)"/>
      <line x1="268" y1="470" x2="255" y2="450" stroke="#1e3248" strokeWidth="2"/>
      <line x1="340" y1="468" x2="340" y2="388" stroke="#1c2e42" strokeWidth="1.5"/>
      <line x1="340" y1="420" x2="430" y2="468" stroke="#1c2e42" strokeWidth="1"/>
      <path d="M340,392 C360,410 400,440 430,468 C400,455 365,430 340,392 Z" fill="#182c3e" opacity="0.75"/>
      <rect x="340" y="472" width="60" height="14" rx="2" fill="#12253a" opacity="0.85"/>
      <ellipse cx="460" cy="467" rx="3.5" ry="2.5" fill="#c9aa71" opacity="0.55"/>
      <ellipse cx="460" cy="467" rx="10" ry="7" fill="#c9aa71" opacity="0.10"/>
      <ellipse cx="460" cy="492" rx="8" ry="2" fill="#c9aa71" opacity="0.07"/>
      <line x1="340" y1="388" x2="270" y2="470" stroke="#1a2e40" strokeWidth="0.6" opacity="0.7"/>
      <line x1="340" y1="388" x2="440" y2="468" stroke="#1a2e40" strokeWidth="0.6" opacity="0.5"/>
      <line x1="340" y1="388" x2="340" y2="468" stroke="#1a2e40" strokeWidth="0.5" opacity="0.4"/>
      <path d="M270,488 C300,492 420,492 450,488 L448,500 C410,504 298,504 268,500 Z" fill="#0d1e2e" opacity="0.35"/>
    </g>

    {/* DHOW 2 — mid-distance, right */}
    <g opacity="0.62">
      <path d="M1020,464 C1048,460 1130,461 1155,465 L1140,476 C1115,479 1048,479 1025,476 Z" fill="#152538"/>
      <line x1="1070" y1="463" x2="1070" y2="408" stroke="#152538" strokeWidth="1.2"/>
      <line x1="1070" y1="430" x2="1140" y2="464" stroke="#152538" strokeWidth="0.8"/>
      <path d="M1070,410 C1085,425 1115,448 1140,464 C1112,452 1082,432 1070,410 Z" fill="#122030" opacity="0.7"/>
      <ellipse cx="1148" cy="464" rx="2.5" ry="2" fill="#c9aa71" opacity="0.40"/>
      <ellipse cx="1148" cy="464" rx="7" ry="5" fill="#c9aa71" opacity="0.07"/>
      <line x1="1070" y1="408" x2="1025" y2="464" stroke="#152538" strokeWidth="0.5" opacity="0.6"/>
      <line x1="1070" y1="408" x2="1140" y2="464" stroke="#152538" strokeWidth="0.5" opacity="0.5"/>
    </g>

    {/* DHOW 3 — very distant, far right */}
    <g opacity="0.38">
      <path d="M1340,466 C1356,463 1400,464 1415,466 L1408,473 C1392,475 1356,475 1342,473 Z" fill="#122030"/>
      <line x1="1368" y1="465" x2="1368" y2="440" stroke="#122030" strokeWidth="0.9"/>
      <path d="M1368,441 C1378,450 1398,461 1412,466 C1395,458 1375,449 1368,441 Z" fill="#0f1c2c" opacity="0.6"/>
      <ellipse cx="1412" cy="466" rx="2" ry="1.5" fill="#c9aa71" opacity="0.30"/>
    </g>

    {/* SURFACE FOAM */}
    <path d="M270,487 C285,485 295,489 310,487" fill="none" stroke="#e8f0f5" strokeWidth="0.4" opacity="0.12"/>
    <path d="M440,487 C455,485 465,489 478,487" fill="none" stroke="#e8f0f5" strokeWidth="0.4" opacity="0.10"/>

    {/* DEEP FOREGROUND WATER */}
    <rect x="0" y="800" width="1440" height="100" fill="#040b12" opacity="0.6"/>
    <path d="M0,820 C180,814 360,826 540,820 C720,814 900,826 1080,820 C1260,814 1350,824 1440,820 L1440,826 L0,826 Z" fill="#0c1e2e" opacity="0.7"/>
    <path d="M0,842 C200,837 400,848 600,842 C800,836 1000,848 1200,842 C1300,839 1370,845 1440,842 L1440,847 L0,847 Z" fill="#0a1a28" opacity="0.55"/>

    {/* VIGNETTE */}
    <rect x="0" y="0" width="280" height="900" fill="#03050c" opacity="0.35"/>
    <rect x="1160" y="0" width="280" height="900" fill="#03050c" opacity="0.20"/>
    <rect x="0" y="0" width="1440" height="80" fill="#03050c" opacity="0.28"/>
  </svg>
);
