import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Cake, Heart, Briefcase, PartyPopper, Gem, Anchor, Star } from 'lucide-react';

export default function Reservations() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay();

  const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  
  const [selectedTime, setSelectedTime] = useState<string | null>('7:30 PM');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState<string | null>(null);
  const [requests, setRequests] = useState('');
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const times = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];
  const occasions = [
    { name: 'Anniversary', ar: 'استذكار', icon: Heart },
    { name: 'Birthday', ar: 'عيد ميلاد', icon: Cake },
    { name: 'Business', ar: 'أعمال', icon: Briefcase },
    { name: 'Proposal', ar: 'خطوبة', icon: Gem },
    { name: 'Celebration', ar: 'احتفال', icon: PartyPopper },
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const dateToCheck = new Date(currentYear, currentDate.getMonth(), day);
    const todayCheck = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    if (dateToCheck < todayCheck) return; // Past dates are not allowed

    setSelectedDate(day);
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentYear);
  };

  const displaySelectedMonth = new Date(selectedYear, selectedMonth, 1).toLocaleString('default', { month: 'long' });

  const isToday = (day: number) => {
    return day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentYear === today.getFullYear();
  };

  const isPast = (day: number) => {
    const dateToCheck = new Date(currentYear, currentDate.getMonth(), day);
    const todayCheck = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dateToCheck < todayCheck;
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="shared-pattern-bg min-h-screen text-[#E8E8E8] font-sans selection:bg-[#C9A84C] selection:text-[#0A0806] relative">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-display text-[14px] text-[#C9A84C] tracking-[0.28em] uppercase mb-3 flex items-center justify-center gap-3">
            <span>THE DAMMAM CORNICHE</span>
            <span className="text-[10px] opacity-60">·</span>
            <span className="font-arabic text-[22px] tracking-normal pt-1" dir="rtl">احجز طاولتك</span>
          </span>
          <h1 className="font-serif italic font-light text-[42px] md:text-[56px] text-white leading-[1.1] mb-4">
            Reserve Your Evening
          </h1>
          <p className="font-serif italic text-[24px] text-[#8A7A62]">
            A table on the Corniche is waiting. Tell us when.
          </p>
          <div className="w-[40px] h-[1px] bg-[#C9A84C] opacity-50 mx-auto mt-5 mb-9"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Choose Your Evening */}
            <div className="bg-[#141008] border-[0.5px] border-[rgba(201,168,76,0.12)] rounded-lg p-8">
              <h3 className="font-display text-[12px] text-[#C9A84C] tracking-[0.22em] uppercase mb-8">Choose Your Evening</h3>
              
              <div className="flex items-center justify-between mb-6 px-2">
                <button onClick={handlePrevMonth} className="text-[#C9A84C] hover:text-white transition-colors p-2 w-11 h-11 flex items-center justify-center cursor-pointer">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="font-serif text-[16px] text-white tracking-wide">{currentMonth} <span className="font-numbers">{currentYear}</span></span>
                <button onClick={handleNextMonth} className="text-[#C9A84C] hover:text-white transition-colors p-2 w-11 h-11 flex items-center justify-center cursor-pointer">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-y-4 text-center">
                {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => (
                  <div key={day} className="font-display text-[11px] tracking-[0.15em] text-[#8A7A62] pb-2">{day}</div>
                ))}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-10"></div>
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const isSelected = selectedDate === day && selectedMonth === currentDate.getMonth() && selectedYear === currentYear;
                  const past = isPast(day);
                  const todayFlag = isToday(day);

                  return (
                    <div key={day} className="relative flex justify-center items-center h-10 w-full">
                      <button
                        onClick={() => handleDateSelect(day)}
                        disabled={past}
                        className={`h-10 w-10 flex items-center justify-center font-serif text-[16px] transition-all cursor-pointer
                          ${past ? 'text-[rgba(212,196,160,0.2)] cursor-not-allowed' : 'text-[#D4C4A0] hover:text-white'}
                          ${isSelected ? 'bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.5)] rounded-[4px] text-[#C9A84C] font-medium' : ''}
                        `}
                      >
                        <span className="font-numbers">{day}</span>
                      </button>
                      {todayFlag && (
                        <div className="absolute bottom-[2px] w-[2px] h-[2px] bg-[#C9A84C] rounded-full opacity-60 pointer-events-none"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* When Shall We Expect You */}
            <div className="bg-[#141008] border-[0.5px] border-[rgba(201,168,76,0.12)] rounded-lg p-8">
              <h3 className="font-display text-[12px] text-[#C9A84C] tracking-[0.18em] uppercase mb-8">When Shall We Expect You</h3>
              <div className="flex flex-wrap gap-3">
                {times.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`flex h-[40px] min-w-[76px] items-center justify-center rounded-[4px] px-4 transition-all duration-200 active:scale-95 cursor-pointer
                      ${selectedTime === time
                        ? 'bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.6)] text-[#C9A84C] font-medium'
                        : 'bg-transparent border-[0.5px] border-[rgba(201,168,76,0.2)] text-[#D4C4A0] font-serif text-[16px] hover:border-[rgba(201,168,76,0.4)] hover:text-white'
                      }`}
                  >
                    <span className="font-numbers">{time}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Your Table For */}
            <div className="bg-[#141008] border-[0.5px] border-[rgba(201,168,76,0.12)] rounded-lg p-8">
              <h3 className="font-display text-[12px] text-[#C9A84C] tracking-[0.22em] uppercase mb-8">Your Table For</h3>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-[40px] h-[40px] rounded-[4px] border-[0.5px] border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[#C9A84C] text-[18px] bg-transparent transition-all active:scale-95 active:bg-[rgba(201,168,76,0.08)] hover:border-[#C9A84C] cursor-pointer"
                >
                  -
                </button>
                <div className="flex items-baseline gap-3 min-w-[48px] justify-center">
                  <span className="font-numbers text-[32px] font-light text-white leading-none">{guests}</span>
                  <span className="font-serif italic text-[16px] text-[#8A7A62]">Guests</span>
                </div>
                <button 
                  onClick={() => setGuests(guests + 1)}
                  className="w-[40px] h-[40px] rounded-[4px] border-[0.5px] border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[#C9A84C] text-[18px] bg-transparent transition-all active:scale-95 active:bg-[rgba(201,168,76,0.08)] hover:border-[#C9A84C] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* So We Can Reach You */}
            <div className="bg-[#141008] border-[0.5px] border-[rgba(201,168,76,0.12)] rounded-lg p-8">
              <h3 className="font-display text-[12px] text-[#C9A84C] tracking-[0.22em] uppercase mb-8">So We Can Reach You</h3>
              <div className="flex flex-col gap-5">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="contact-name"
                    placeholder=" " 
                    value={contact.name}
                    onChange={(e) => setContact({...contact, name: e.target.value})}
                    className="peer w-full rounded-[4px] border-[0.5px] border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] h-[48px] px-4 pt-3 font-serif text-[16px] text-white focus:outline-none focus:border-[rgba(201,168,76,0.45)] focus:bg-[rgba(201,168,76,0.05)] transition-colors"
                  />
                  <label 
                    htmlFor="contact-name"
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-250 ease-in-out font-serif italic text-[16px] text-[rgba(212,196,160,0.35)] peer-focus:top-[14px] peer-focus:-translate-y-1/2 peer-focus:text-[11px] peer-focus:font-display peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-[#C9A84C] peer-focus:not-italic peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-display peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:text-[#C9A84C] peer-[:not(:placeholder-shown)]:not-italic"
                  >
                    Full Name
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="contact-email"
                      placeholder=" " 
                      value={contact.email}
                      onChange={(e) => setContact({...contact, email: e.target.value})}
                      className="peer w-full rounded-[4px] border-[0.5px] border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] h-[48px] px-4 pt-3 font-serif text-[16px] text-white focus:outline-none focus:border-[rgba(201,168,76,0.45)] focus:bg-[rgba(201,168,76,0.05)] transition-colors"
                    />
                    <label 
                      htmlFor="contact-email"
                      className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-250 ease-in-out font-serif italic text-[16px] text-[rgba(212,196,160,0.35)] peer-focus:top-[14px] peer-focus:-translate-y-1/2 peer-focus:text-[11px] peer-focus:font-display peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-[#C9A84C] peer-focus:not-italic peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-display peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:text-[#C9A84C] peer-[:not(:placeholder-shown)]:not-italic"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      id="contact-phone"
                      placeholder=" " 
                      value={contact.phone}
                      onChange={(e) => setContact({...contact, phone: e.target.value})}
                      className="peer w-full rounded-[4px] border-[0.5px] border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] h-[48px] px-4 pt-3 font-serif text-[16px] text-white focus:outline-none focus:border-[rgba(201,168,76,0.45)] focus:bg-[rgba(201,168,76,0.05)] transition-colors"
                    />
                    <label 
                      htmlFor="contact-phone"
                      className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-250 ease-in-out font-serif italic text-[16px] text-[rgba(212,196,160,0.35)] peer-focus:top-[14px] peer-focus:-translate-y-1/2 peer-focus:text-[11px] peer-focus:font-display peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-[#C9A84C] peer-focus:not-italic peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-display peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.15em] peer-[:not(:placeholder-shown)]:text-[#C9A84C] peer-[:not(:placeholder-shown)]:not-italic"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Special Occasion */}
            <div className="bg-[#141008] border-[0.5px] border-[rgba(201,168,76,0.12)] rounded-lg p-8">
              <div className="mb-10">
                <h3 className="font-display text-[22px] text-[#C9A84C] tracking-[0.25em] uppercase mb-4">Is This a Special Evening</h3>
                <p className="font-serif italic text-[32px] text-[#8A7A62] leading-tight">We'll make sure it feels like one.</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {occasions.map(occ => {
                  const isSelected = occasion === occ.name;
                  return (
                    <button
                      key={occ.name}
                      onClick={() => setOccasion(isSelected ? null : occ.name)}
                      className={`flex flex-col items-center justify-center gap-1.5 w-[calc(50%-6px)] py-2.5 rounded-[6px] border transition-all duration-200 cursor-pointer
                        ${isSelected
                          ? 'border border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.08)]'
                          : 'border-[0.5px] border-[rgba(201,168,76,0.15)] bg-transparent hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.04)]'
                        }`}
                    >
                      <occ.icon size={22} strokeWidth={1.2} className={isSelected ? 'text-[#C9A84C] opacity-100' : 'text-[#C9A84C] opacity-60'} />
                      <div className="flex flex-col items-center gap-[2px]">
                        <span className={`font-display text-[10px] tracking-[0.15em] uppercase ${isSelected ? 'text-[#C9A84C]' : 'text-[#D4C4A0]'}`}>{occ.name}</span>
                        <span className={`font-arabic text-[14px] leading-none ${isSelected ? 'text-[rgba(201,168,76,0.9)]' : 'text-[rgba(201,168,76,0.6)]'}`} dir="rtl">{occ.ar}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <textarea 
                className="w-full mt-6 rounded-[6px] border-[0.5px] border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] p-[14px] font-serif italic text-[16px] text-[#D4C4A0] placeholder-[rgba(212,196,160,0.35)] focus:outline-none focus:border-[rgba(201,168,76,0.4)] focus:bg-[rgba(201,168,76,0.05)] transition-colors resize-none"
                placeholder="Any special requests, dietary needs, or details we should know?"
                rows={3}
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
              ></textarea>
            </div>

            {/* Booking Summary */}
            <div className="bg-[rgba(201,168,76,0.04)] border-[0.5px] border-[rgba(201,168,76,0.18)] border-t-2 border-t-[rgba(201,168,76,0.4)] rounded-lg p-8 sticky top-32">
              <h3 className="font-display text-[12px] text-[#C9A84C] tracking-[0.22em] uppercase mb-8">Your Evening At A Glance</h3>
              
              <div className="flex flex-col">
                {/* Date Row */}
                <div className="flex justify-between items-center py-[12px] border-b border-[rgba(201,168,76,0.06)]">
                  <span className="flex items-center gap-3">
                    <Calendar size={14} className="text-[#C9A84C] opacity-50" />
                    <span className="font-display text-[11px] tracking-[0.15em] text-[#8A7A62] uppercase">Date</span>
                  </span>
                  <span className="font-serif text-[16px] text-white">
                    {displaySelectedMonth.substring(0, 3)} <span className="font-numbers">{selectedDate}</span>, <span className="font-numbers">{selectedYear}</span>
                  </span>
                </div>
                
                {/* Time Row */}
                <div className="flex justify-between items-center py-[12px] border-b border-[rgba(201,168,76,0.06)]">
                  <span className="flex items-center gap-3">
                    <Clock size={14} className="text-[#C9A84C] opacity-50" />
                    <span className="font-display text-[11px] tracking-[0.15em] text-[#8A7A62] uppercase">Time</span>
                  </span>
                  <span className="font-numbers text-[16px] text-white">
                    {selectedTime || '—'}
                  </span>
                </div>
                
                {/* Guests Row */}
                <div className="flex justify-between items-center py-[12px] border-b border-[rgba(201,168,76,0.06)]">
                  <span className="flex items-center gap-3">
                    <Users size={14} className="text-[#C9A84C] opacity-50" />
                    <span className="font-display text-[11px] tracking-[0.15em] text-[#8A7A62] uppercase">Guests</span>
                  </span>
                  <span className="font-numbers text-[16px] text-white">
                    {guests}
                  </span>
                </div>
                
                {/* Occasion Row */}
                <div className="flex justify-between items-center py-[12px]">
                  <span className="flex items-center gap-3">
                    <Star size={14} className="text-[#C9A84C] opacity-50" />
                    <span className="font-display text-[11px] tracking-[0.15em] text-[#8A7A62] uppercase">Occasion</span>
                  </span>
                  <span className={`font-serif text-[16px] ${occasion ? 'text-[#C9A84C]' : 'text-white'}`}>
                    {occasion || 'None'}
                  </span>
                </div>
              </div>

              <button 
                onClick={handleConfirm}
                className="relative overflow-hidden w-full bg-[#8B1A2B] hover:bg-[#7a1625] text-white font-display text-[12px] tracking-[0.2em] uppercase h-[54px] rounded-[4px] mt-5 transition-all duration-300 active:scale-95 group cursor-pointer"
              >
                <span className="relative z-10">CONFIRM YOUR EVENING →</span>
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent z-0 pointer-events-none"
                />
              </button>
              
              <p className="font-serif italic text-[18px] text-[rgba(138,122,98,0.7)] text-center mt-[16px]">
                By confirming you agree to our reservation terms.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Success State Overlay */}
      <AnimatePresence>
        {isConfirmed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0806] flex flex-col items-center justify-center px-4"
          >
            <div className="max-w-md w-full text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Anchor size={40} strokeWidth={1} className="text-[#C9A84C] mb-8" />
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif italic font-light text-[32px] text-white leading-tight mb-2"
              >
                Your evening is confirmed.
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-arabic text-[28px] text-[#C9A84C] opacity-60 mb-8" 
                dir="rtl"
              >
                أُحجزت سهرتك
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" className="mb-6 mx-auto">
                  <line x1="0" y1="10" x2="40" y2="10" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
                  <rect x="47" y="7" width="6" height="6" transform="rotate(45 50 10)" fill="#C9A84C" opacity="0.7"/>
                  <line x1="60" y1="10" x2="100" y2="10" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
                </svg>

                <p className="font-display text-[12px] text-[#C9A84C] tracking-[0.2em] uppercase mb-8">
                  {displaySelectedMonth.substring(0, 3)} <span className="font-numbers">{selectedDate}</span> · <span className="font-numbers">{selectedTime}</span> · <span className="font-numbers">{guests}</span> Guests
                </p>

                <p className="font-serif italic text-[16px] text-[#8A7A62] max-w-sm mx-auto mb-10">
                  A confirmation has been sent to your email. We look forward to your evening.
                </p>

                  <button 
                    onClick={() => setIsConfirmed(false)}
                    className="bg-transparent border border-[#C9A84C] text-[#C9A84C] font-display text-[11px] tracking-[0.2em] uppercase h-[40px] px-8 rounded-[4px] transition-all hover:bg-[rgba(201,168,76,0.1)] active:scale-95 cursor-pointer"
                  >
                  ADD TO CALENDAR
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
