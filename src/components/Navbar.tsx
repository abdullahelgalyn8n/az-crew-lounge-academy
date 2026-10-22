import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Sparkles, 
  Send
} from 'lucide-react';
import { Language, PageId } from '../types';
import { t } from '../i18n/translations';
import { ACADEMY_INFO } from '../data/academyData';
import { PAGE_ROUTES } from '../utils/router';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenApply: () => void;
  onOpenEligibility: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  lang,
  setLang,
  onOpenApply,
  onOpenEligibility,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const isRtl = lang === 'ar';
  const strings = t[lang];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setGalleryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-md transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#0f1d30] text-slate-300 text-xs py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href={`tel:${ACADEMY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span dir="ltr">{ACADEMY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${ACADEMY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{ACADEMY_INFO.email}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRtl ? ACADEMY_INFO.addressAr : ACADEMY_INFO.address}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEligibility}
              className="flex items-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full text-xs font-medium transition-all"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{strings.nav.checker}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-800 transition-colors font-bold text-xs border border-slate-700"
              title="Toggle English / Arabic"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className={lang === 'en' ? 'font-cairo font-bold' : 'font-sans font-semibold'}>
                {lang === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#172b45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & ISO Accreditation */}
            <a 
              href={PAGE_ROUTES.home}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              className="flex items-center gap-3 sm:gap-4 cursor-pointer group py-2"
            >
              <div className="relative flex items-center py-1">
                <img 
                  src="/public/assets/extracted/logo_transparent.png" 
                  alt="Crew Lounge Egypt Academy" 
                  className="h-12 sm:h-14 w-auto object-contain drop-shadow"
                />
              </div>

              {/* ISO Certification Badge */}
              <div className="border-l border-slate-600/70 pl-3 sm:pl-4 hidden sm:flex items-center">
                <img 
                  src="/public/assets/extracted/iso_transparent.png" 
                  alt="ISO 9001:2015 Certified" 
                  className="h-9 sm:h-11 w-auto object-contain drop-shadow"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <a
                href={PAGE_ROUTES.home}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-all ${
                  currentPage === 'home'
                    ? 'text-amber-400 bg-slate-800/60 shadow-sm'
                    : 'text-slate-100 hover:text-amber-300 hover:bg-slate-800/40'
                }`}
              >
                {strings.nav.home}
              </a>

              <a
                href={PAGE_ROUTES.about}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-all ${
                  currentPage === 'about'
                    ? 'text-amber-400 bg-slate-800/60 shadow-sm'
                    : 'text-slate-100 hover:text-amber-300 hover:bg-slate-800/40'
                }`}
              >
                {strings.nav.about}
              </a>

              <a
                href={PAGE_ROUTES.services}
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-all ${
                  currentPage === 'services'
                    ? 'text-amber-400 bg-slate-800/60 shadow-sm'
                    : 'text-slate-100 hover:text-amber-300 hover:bg-slate-800/40'
                }`}
              >
                {strings.nav.services}
              </a>

              {/* Gallery Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                  onBlur={() => setTimeout(() => setGalleryDropdownOpen(false), 200)}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-semibold transition-all ${
                    currentPage === 'gallery-photos' || currentPage === 'gallery-videos'
                      ? 'text-amber-400 bg-slate-800/60 shadow-sm'
                      : 'text-slate-100 hover:text-amber-300 hover:bg-slate-800/40'
                  }`}
                >
                  <span>{strings.nav.gallery}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {galleryDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 rounded-lg shadow-xl bg-[#0f1d30] border border-slate-700 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <a
                      href={PAGE_ROUTES['gallery-photos']}
                      onClick={(e) => { e.preventDefault(); handleNavClick('gallery-photos'); }}
                      className={`block w-full text-start px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-amber-400 ${
                        currentPage === 'gallery-photos' ? 'text-amber-400 bg-slate-800/80 font-bold' : 'text-slate-200'
                      }`}
                    >
                      {strings.nav.photos}
                    </a>
                    <a
                      href={PAGE_ROUTES['gallery-videos']}
                      onClick={(e) => { e.preventDefault(); handleNavClick('gallery-videos'); }}
                      className={`block w-full text-start px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-amber-400 ${
                        currentPage === 'gallery-videos' ? 'text-amber-400 bg-slate-800/80 font-bold' : 'text-slate-200'
                      }`}
                    >
                      {strings.nav.videos}
                    </a>
                  </div>
                )}
              </div>

              <a
                href={PAGE_ROUTES.contact}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-all ${
                  currentPage === 'contact'
                    ? 'text-amber-400 bg-slate-800/60 shadow-sm'
                    : 'text-slate-100 hover:text-amber-300 hover:bg-slate-800/40'
                }`}
              >
                {strings.nav.contact}
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenApply}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>{strings.nav.applyNow}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenApply}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-md"
              >
                {strings.nav.applyNow}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 bg-[#0f1d30] px-4 pt-3 pb-6 space-y-2">
            <a
              href={PAGE_ROUTES.home}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              className={`block w-full text-start px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'home' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {strings.nav.home}
            </a>
            <a
              href={PAGE_ROUTES.about}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              className={`block w-full text-start px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'about' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {strings.nav.about}
            </a>
            <a
              href={PAGE_ROUTES.services}
              onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
              className={`block w-full text-start px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'services' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {strings.nav.services}
            </a>
            <a
              href={PAGE_ROUTES['gallery-photos']}
              onClick={(e) => { e.preventDefault(); handleNavClick('gallery-photos'); }}
              className={`block w-full text-start px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'gallery-photos' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {strings.nav.gallery} - {strings.nav.photos}
            </a>
            <a
              href={PAGE_ROUTES['gallery-videos']}
              onClick={(e) => { e.preventDefault(); handleNavClick('gallery-videos'); }}
              className={`block w-full text-start px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'gallery-videos' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {strings.nav.gallery} - {strings.nav.videos}
            </a>
            <a
              href={PAGE_ROUTES.contact}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className={`block w-full text-start px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'contact' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {strings.nav.contact}
            </a>

            <div className="pt-4 border-t border-slate-700/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEligibility();
                }}
                className="w-full py-2.5 px-3 rounded-md bg-slate-800 text-amber-400 font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{strings.nav.checker}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="w-full py-2.5 px-3 rounded-md border border-slate-700 text-slate-200 font-semibold flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'العربية (Arabic)' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
