import React from 'react';

export const AnchorDivider: React.FC = () => {
  return (
    <div className="divider">
      <div className="divider-row">

        {/* Left line */}
        <div className="divider-line"></div>

        {/* Anchor + ripple */}
        <div className="anchor-wrap">
          <svg className="anchor-svg" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ring at top */}
            <circle cx="16" cy="5" r="3.5" stroke="#b48c3c" strokeWidth="1.5" fill="none"/>
            {/* Vertical shaft */}
            <line x1="16" y1="8.5" x2="16" y2="31"
                  stroke="#b48c3c" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Horizontal crossbar */}
            <line x1="6" y1="13" x2="26" y2="13"
                  stroke="#b48c3c" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Crossbar end caps */}
            <circle cx="6"  cy="13" r="1.6" fill="#b48c3c"/>
            <circle cx="26" cy="13" r="1.6" fill="#b48c3c"/>
            {/* Left fluke */}
            <path d="M16,31 Q8,31 6,27 Q5,24 8.5,23"
                  stroke="#b48c3c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Right fluke */}
            <path d="M16,31 Q24,31 26,27 Q27,24 23.5,23"
                  stroke="#b48c3c" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Fluke tip dots */}
            <circle cx="8.2"  cy="23.5" r="1.4" fill="#b48c3c"/>
            <circle cx="23.8" cy="23.5" r="1.4" fill="#b48c3c"/>
          </svg>

          {/* Ripple waves */}
          <div className="anchor-ripple">
            <svg viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path className="ripple-wave"
                d="M0,4 C5,1 10,7 18,4 C26,1 31,7 36,4"
                stroke="#b48c3c" strokeWidth="1.3" strokeLinecap="round"/>
              <path className="ripple-wave-2"
                d="M-4,7 C3,4 10,10 18,7 C26,4 33,8 40,7"
                stroke="#b48c3c" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Right line */}
        <div className="divider-line"></div>

      </div>
    </div>
  );
};
