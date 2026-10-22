import React, { useState, useEffect, useCallback } from 'react';
import { PageId, Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ApplicationModal } from './components/ApplicationModal';
import { EligibilityCheckerModal } from './components/EligibilityCheckerModal';
import { resolvePageFromUrl, PAGE_ROUTES, getPageTitle } from './utils/router';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    return resolvePageFromUrl(window.location.pathname, window.location.hash, window.location.search);
  });
  const [lang, setLang] = useState<Language>('en');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState<'3-month' | '1-year'>('3-month');

  // Navigate to page and sync browser URL
  const navigateTo = useCallback((page: PageId, updateUrl = true) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (updateUrl) {
      const targetPath = PAGE_ROUTES[page] || '/';
      const currentUrl = new URL(window.location.href);
      
      // Preserve lang query parameter if explicitly set
      if (lang === 'ar') {
        currentUrl.searchParams.set('lang', 'ar');
      } else {
        currentUrl.searchParams.delete('lang');
      }

      currentUrl.pathname = targetPath;
      window.history.pushState({ page }, '', currentUrl.toString());
    }
  }, [lang]);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const page = resolvePageFromUrl(window.location.pathname, window.location.hash, window.location.search);
      setCurrentPage(page);
      
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam === 'ar' || langParam === 'en') {
        setLang(langParam as Language);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'ar' || langParam === 'en') {
      setLang(langParam as Language);
    }
    if (params.get('apply') === 'true') {
      setIsApplyOpen(true);
    }
    if (params.get('eligibility') === 'true') {
      setIsEligibilityOpen(true);
    }
  }, []);

  // Update document language, direction and title
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = getPageTitle(currentPage, lang);

    if (lang === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    }
  }, [lang, currentPage]);

  const handleOpenApplyWithCourse = (courseId: '3-month' | '1-year') => {
    setSelectedCourseForApply(courseId);
    setIsApplyOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        lang={lang}
        setLang={setLang}
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={navigateTo}
            lang={lang}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={navigateTo}
            lang={lang}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            setCurrentPage={navigateTo}
            lang={lang}
            onOpenApply={() => setIsApplyOpen(true)}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
            setSelectedCourseForApply={setSelectedCourseForApply}
          />
        )}

        {currentPage === 'gallery-photos' && (
          <GalleryPage
            initialTab="photos"
            lang={lang}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'gallery-videos' && (
          <GalleryPage
            initialTab="videos"
            lang={lang}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            lang={lang}
            onOpenApply={() => setIsApplyOpen(true)}
          />
        )}
      </main>

      {/* Footer matching screenshot design */}
      <Footer
        setCurrentPage={navigateTo}
        lang={lang}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp lang={lang} />

      {/* Interactive Application / Enrollment Modal */}
      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        lang={lang}
        preselectedCourseId={selectedCourseForApply}
      />

      {/* Interactive Cabin Crew Eligibility Assessment Modal */}
      <EligibilityCheckerModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        lang={lang}
        onSelectCourse={handleOpenApplyWithCourse}
      />
    </div>
  );
}
