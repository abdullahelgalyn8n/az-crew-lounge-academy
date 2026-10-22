import React from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import { Language } from '../types';
import { WhatsAppIcon } from './BrandIcons';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isRtl = lang === 'ar';

  return (
    <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'left-6'} z-40 group`}>
      <a
        href={ACADEMY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Crew Lounge Egypt Academy"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing beacon */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

        <WhatsAppIcon className="w-7 h-7 fill-current drop-shadow relative z-10" />

        {/* Floating tooltip */}
        <div className={`absolute bottom-full mb-2 ${isRtl ? 'left-0' : 'left-0'} hidden group-hover:flex items-center gap-2 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-all duration-200 border border-slate-700`}>
          <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
          <span>{isRtl ? 'تواصل معنا فوراً عبر واتساب' : 'Chat with Admissions on WhatsApp'}</span>
        </div>
      </a>
    </div>
  );
};
