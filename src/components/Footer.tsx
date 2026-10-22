import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Language, PageId } from '../types';
import { t } from '../i18n/translations';
import { ACADEMY_INFO } from '../data/academyData';
import { PAGE_ROUTES } from '../utils/router';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon, TikTokIcon } from './BrandIcons';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, lang }) => {
  const strings = t[lang];
  const isRtl = lang === 'ar';

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#172b45] text-white pt-16 pb-8 border-t-4 border-amber-500/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div 
              onClick={() => navigateTo('home')}
              className="cursor-pointer mb-5 inline-block"
            >
              <img 
                src="/public/assets/extracted/logo_transparent.png" 
                alt="Crew Lounge Egypt" 
                className="h-20 w-auto object-contain drop-shadow mx-auto md:mx-0"
              />
            </div>
            
            <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
              {isRtl 
                ? 'أكاديمية كرو لاونج مصر – صرح رائد ومعتمد دولياً لإعداد وتأهيل أطقم الضيافة الجوية وتدريبهم على أعلى معايير الطيران العالمي.'
                : 'Crew Lounge EGYPT Academy is an accredited premier center dedicated to grooming, training, and placing future world-class cabin crew.'
              }
            </p>

            {/* Circular Social Icons with Official Brand SVGs */}
            <div className="flex items-center gap-3">
              <a 
                href={ACADEMY_INFO.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-amber-400/80 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={ACADEMY_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-amber-400/80 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={ACADEMY_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-amber-400/80 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href={ACADEMY_INFO.socials.tiktok} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-amber-400/80 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 shadow-sm"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a 
                href={ACADEMY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-green-400 text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200 shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Pages Links matching original screenshot */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-wide pb-2 border-b border-slate-700/60 inline-block">
              {strings.footer.pages}
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a 
                  href={PAGE_ROUTES.home}
                  onClick={(e) => { e.preventDefault(); navigateTo('home'); }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {strings.footer.home}
                </a>
              </li>
              <li>
                <a 
                  href={PAGE_ROUTES.about}
                  onClick={(e) => { e.preventDefault(); navigateTo('about'); }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {strings.footer.aboutUs}
                </a>
              </li>
              <li>
                <a 
                  href={PAGE_ROUTES.services}
                  onClick={(e) => { e.preventDefault(); navigateTo('services'); }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {strings.footer.services}
                </a>
              </li>
              <li>
                <a 
                  href={PAGE_ROUTES['gallery-photos']}
                  onClick={(e) => { e.preventDefault(); navigateTo('gallery-photos'); }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {strings.footer.ourPhotos}
                </a>
              </li>
              <li>
                <a 
                  href={PAGE_ROUTES['gallery-videos']}
                  onClick={(e) => { e.preventDefault(); navigateTo('gallery-videos'); }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {strings.footer.ourVideos}
                </a>
              </li>
              <li>
                <a 
                  href={PAGE_ROUTES.contact}
                  onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span> {strings.footer.contactUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info matching screenshot icons and data */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 tracking-wide pb-2 border-b border-slate-700/60 inline-block">
              {strings.footer.contactInfo}
            </h4>
            <div className="space-y-5 text-sm text-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shrink-0 text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a 
                    href={`tel:${ACADEMY_INFO.phone}`} 
                    className="hover:text-amber-400 font-semibold tracking-wide transition-colors"
                    dir="ltr"
                  >
                    {ACADEMY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">{strings.hero.welcome} Crew Lounge</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shrink-0 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a 
                    href={`mailto:${ACADEMY_INFO.email}`} 
                    className="hover:text-amber-400 font-medium transition-colors break-all"
                  >
                    {ACADEMY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">{strings.contactSection.supportEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shrink-0 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-100">
                    {isRtl ? ACADEMY_INFO.addressAr : ACADEMY_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Nasr City, Cairo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-700/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 ps-16 sm:ps-0">
          <p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{isRtl ? 'شهادة الأيزو ISO 9001:2015 سارية وموثقة' : 'ISO 9001:2015 Certified Management System'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
