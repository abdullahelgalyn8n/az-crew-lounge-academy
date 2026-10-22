import React from 'react';
import { 
  Plane, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  HelpCircle,
  PhoneCall,
  Calendar,
  Compass,
  Check,
  Star
} from 'lucide-react';
import { Language, PageId } from '../types';
import { t } from '../i18n/translations';
import { COURSES, AIRLINE_PARTNERS, TESTIMONIALS, FAQS, ACADEMY_INFO, ADMISSION_STEPS, UPCOMING_BATCHES } from '../data/academyData';
import { AIRLINE_LOGO_MAP } from '../components/BrandIcons';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  onOpenApply: () => void;
  onOpenEligibility: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  lang,
  onOpenApply,
  onOpenEligibility,
}) => {
  const strings = t[lang];
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* HERO SECTION matching screencapture-crewlounge-eg-com-index_fae06c55.png */}
      <section className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Text & Call to Actions */}
            <div className="lg:col-span-5 z-10 text-center lg:text-start space-y-6">
              {/* "Welcome to" accent label matching screenshot */}
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-slate-800"></span>
                <span className="text-slate-800 text-sm font-semibold tracking-wide">
                  {strings.hero.welcome}
                </span>
              </div>

              {/* Huge Brand Heading matching screenshot typography */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-none">
                {strings.hero.title}
              </h1>

              {/* Tagline matching original screenshot */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                {strings.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-3 bg-[#172b45] hover:bg-[#0f1d30] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                >
                  {strings.hero.contactBtn}
                </button>

                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm flex items-center gap-2"
                >
                  <span>{strings.nav.applyNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEligibility}
                  className="px-4 py-3 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg font-semibold text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{strings.hero.checkEligibility}</span>
                </button>
              </div>

              {/* Stat badges */}
              <div className="pt-4 grid grid-cols-3 gap-2 border-t border-slate-200/80">
                <div className="text-center lg:text-start">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#172b45]">
                    {isRtl ? ACADEMY_INFO.stats.graduatesCountAr : ACADEMY_INFO.stats.graduatesCount}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {isRtl ? 'خريج بمختلف الخطوط' : 'Graduates Placed'}
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#172b45]">
                    {isRtl ? ACADEMY_INFO.stats.interviewPassRateAr : ACADEMY_INFO.stats.interviewPassRate}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {isRtl ? 'نسبة اجتياز المقابلات' : 'Interview Pass Rate'}
                  </div>
                </div>
                <div className="text-center lg:text-start">
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-600">
                    ISO 9001
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {isRtl ? 'جودة معتمدة دولياً' : 'Certified Quality'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Curved Aviation Wave & Real Student Batch Image */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                {/* Dynamic Dark Navy Wave Frame matching original screenshot */}
                <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-br from-[#172b45] via-[#102035] to-[#172b45] shadow-2xl overflow-hidden border-4 border-slate-100">
                  {/* Decorative curved SVG aviation waves */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="relative rounded-2xl overflow-hidden shadow-inner aspect-[16/10] bg-slate-900">
                    <img 
                      src="/public/assets/extracted/hero_students.png" 
                      alt="Crew Lounge Egypt Academy Students Batch" 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay for luxury feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 start-4 end-4 text-white flex items-center justify-between text-xs">
                      <span className="font-semibold drop-shadow flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        {isRtl ? 'دفعة خريجي أكاديمية كرو لاونج مصر' : 'Crew Lounge Egypt Academy Graduation Batch'}
                      </span>
                      <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px]">
                        ISO 9001:2015
                      </span>
                    </div>
                  </div>

                  {/* Flight Route Dotted Line with Plane matching original screenshot graphic */}
                  <div className="mt-3 flex items-center justify-between px-2 text-slate-300 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                      <span className="font-mono text-[11px] text-amber-300">CAIRO (CAI) ➔ GLOBAL AIRLINES</span>
                    </div>
                    <Plane className="w-4 h-4 text-amber-400 transform rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAP CARDS: "OUR SERVICES - What We Do?" matching the 3 cards in screenshot */}
      <section className="relative -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Navy Blue "What We Do?" Card */}
          <div className="bg-[#172b45] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border-t-4 border-amber-500 hover:-translate-y-1 transition-transform duration-300">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-2">
                {strings.servicesOverview.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
                {strings.servicesOverview.heading}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {strings.servicesOverview.desc}
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-amber-400 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 self-start"
            >
              <span>{strings.servicesOverview.exploreMore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: White Card - Three-month course */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              {/* Airplane sketch icon matching original screenshot */}
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 border border-amber-100">
                <Plane className="w-6 h-6 transform -rotate-45" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {isRtl ? COURSES[0].titleAr : COURSES[0].titleEn}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {isRtl ? COURSES[0].descriptionAr : COURSES[0].descriptionEn}
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="text-amber-600 hover:text-amber-700 font-bold text-sm inline-flex items-center gap-1.5 self-start group"
            >
              <span>{isRtl ? 'تفاصيل المنهج' : 'Course Details'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: White Card - One-year course */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#172b45] flex items-center justify-center mb-6 border border-blue-100">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {isRtl ? COURSES[1].titleAr : COURSES[1].titleEn}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {isRtl ? COURSES[1].descriptionAr : COURSES[1].descriptionEn}
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="text-amber-600 hover:text-amber-700 font-bold text-sm inline-flex items-center gap-1.5 self-start group"
            >
              <span>{isRtl ? 'تفاصيل المنهج' : 'Course Details'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION matching screencapture-crewlounge-eg-com-index_fae06c55.png */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Authentic Flight Attendant in Royal Blue Uniform Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400 to-[#172b45] opacity-30 blur-sm"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img 
                    src="/public/assets/extracted/cabin_crew_stewardess.png" 
                    alt="Crew Lounge Egypt Academy Cabin Crew Flight Attendant" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle watermarked academy badge */}
                  <div className="absolute top-4 end-4 bg-[#172b45]/90 backdrop-blur-sm p-2 rounded-xl border border-amber-400/40 text-center">
                    <img 
                      src="/public/assets/extracted/logo_final.png" 
                      alt="Crew Lounge" 
                      className="h-8 w-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content & 4 Pillars matching original screenshot */}
            <div className="lg:col-span-6 space-y-6">
              {/* Yellow label "WHO WE ARE" matching screenshot */}
              <div className="inline-block bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 uppercase tracking-wider rounded">
                {strings.whoWeAre.tag}
              </div>

              {/* Title matching screenshot */}
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                {strings.whoWeAre.heading}
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {strings.whoWeAre.desc1}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {strings.whoWeAre.desc2}
              </p>

              {/* 4 Feature Checkmark Circles matching screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar1}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar2}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar3}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar4}
                  </span>
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-6 py-3 bg-[#172b45] hover:bg-[#0f1d30] text-white font-bold rounded-lg shadow transition-colors text-sm"
                >
                  {strings.whoWeAre.exploreMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM COMPARISON CONTAINER matching screencapture-crewlounge-eg-com-services_0e3c0440.png */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">
              {strings.curriculum.title}
            </h2>
            <p className="text-slate-600 text-sm">
              {strings.curriculum.subtitle}
            </p>
          </div>

          {/* Dark Navy Rounded Panel with Dotted Border matching original screenshot */}
          <div className="bg-[#172b45] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-dashed border-slate-500/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {/* Column 1: Three-month course */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    {isRtl ? COURSES[0].badgeAr : COURSES[0].badgeEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {isRtl ? COURSES[0].titleAr : COURSES[0].titleEn}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {isRtl ? COURSES[0].descriptionAr : COURSES[0].descriptionEn}
                  </p>
                </div>

                {/* Features Checkmark list matching screenshot */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                  {(isRtl ? COURSES[0].featuresAr : COURSES[0].featuresEn).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenApply}
                  className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  {strings.curriculum.applyForCourse}
                </button>
              </div>

              {/* Column 2: One-year course */}
              <div className="space-y-6 border-t md:border-t-0 md:border-l border-slate-700/80 pt-8 md:pt-0 md:pl-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    {isRtl ? COURSES[1].badgeAr : COURSES[1].badgeEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {isRtl ? COURSES[1].titleAr : COURSES[1].titleEn}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {isRtl ? COURSES[1].descriptionAr : COURSES[1].descriptionEn}
                  </p>
                </div>

                {/* Features Checkmark list matching screenshot */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                  {(isRtl ? COURSES[1].featuresAr : COURSES[1].featuresEn).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenApply}
                  className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  {strings.curriculum.applyForCourse}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP ADMISSION JOURNEY PIPELINE */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">
              {isRtl ? 'خارطة طريقك إلى السماء' : 'Your Roadmap to the Skies'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              {isRtl ? 'مراحل القبول والتدريب حتى التعيين في ٥ خطوات' : '5-Step Admission, Training & Placement Journey'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isRtl 
                ? 'رحلة واضحة ومدروسة تبدأ من فحص الشروط والمقابلة المبدئية حتى اجتياز أيام التوظيف المفتوحة لشركات الطيران.'
                : 'A structured sequential pathway from your first physical measurement to global airline recruitment days.'}
            </p>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
            {ADMISSION_STEPS.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400 font-mono tracking-tighter">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-700/60 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-300 flex items-center justify-center text-xs font-bold transition-colors">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-white text-base mb-2 group-hover:text-amber-300 transition-colors">
                    {isRtl ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isRtl ? step.descAr : step.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>{isRtl ? `المرحلة ${idx + 1}` : `Phase ${idx + 1}`}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Next Batch Quick Callout Bar */}
          <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-400/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-center md:text-start">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                  <span className="font-extrabold text-white text-lg sm:text-xl">
                    {isRtl ? UPCOMING_BATCHES[0].monthAr : UPCOMING_BATCHES[0].monthEn}
                  </span>
                  <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                    {isRtl ? 'المقاعد محدودة' : 'Limited Seats'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isRtl ? `${UPCOMING_BATCHES[0].startDateAr} • ${UPCOMING_BATCHES[0].scheduleAr}` : `${UPCOMING_BATCHES[0].startDateEn} • ${UPCOMING_BATCHES[0].scheduleEn}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenApply}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-transform active:scale-95 shadow-md flex items-center gap-2"
              >
                <span>{isRtl ? 'حجز المقعد الآن' : 'Reserve Your Seat'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEligibility}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm border border-slate-600 transition-colors"
              >
                {strings.hero.checkEligibility}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AIRLINE PLACEMENTS & PARTNERS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            {isRtl ? 'شركات الطيران التي يعمل بها خريجونا' : 'Airlines Employing Our Graduates Worldwide'}
          </p>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
            {isRtl ? 'الريادة في تأهيل وتوظيف الضيافة الجوية' : 'Leading Airline Placement Partnerships'}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {AIRLINE_PARTNERS.map((partner) => {
              const LogoComp = AIRLINE_LOGO_MAP[partner.name] || Plane;
              return (
                <div 
                  key={partner.id}
                  className="group relative p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between text-center hover:-translate-y-1"
                >
                  {/* Airline Brand Vector Logo */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-2 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                    <LogoComp className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Names */}
                  <div className="w-full mb-2">
                    <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                      {isRtl ? partner.nameAr : partner.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {isRtl ? partner.countryAr : partner.country}
                    </p>
                  </div>

                  {/* Aviation Hub & Partnership Badge */}
                  <div className="mt-2 pt-2 w-full border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                      {partner.hub}
                    </span>
                    <span className="text-amber-600 font-semibold truncate max-w-[85px]">
                      {isRtl ? partner.badgeAr : partner.badgeEn}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRADUATE TESTIMONIALS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              {isRtl ? 'قصص النجاح' : 'Success Stories'}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              {isRtl ? 'ماذا يقول خريجونا العاملون في كبرى الخطوط؟' : 'Hear From Our Flying Cabin Crew Graduates'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                    "{isRtl ? testimonial.quoteAr : testimonial.quoteEn}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.nameEn} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      {isRtl ? testimonial.nameAr : testimonial.nameEn}
                    </h5>
                    <p className="text-xs text-amber-600 font-medium">
                      {isRtl ? testimonial.airlineAr : testimonial.airlineEn}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {isRtl ? testimonial.courseAr : testimonial.courseEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <HelpCircle className="w-10 h-10 text-amber-500 mx-auto mb-2" />
            <h2 className="text-3xl font-black text-slate-900">
              {isRtl ? 'الأسئلة الشائعة حول الأكاديمية' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  {isRtl ? faq.qAr : faq.qEn}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {isRtl ? faq.aAr : faq.aEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 bg-gradient-to-r from-[#172b45] to-[#0f1d30] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black">
            {isRtl ? 'جاهز للانطلاق في مهنة أحلامك مع كرو لاونج؟' : 'Ready to Take Off with Crew Lounge EGYPT?'}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            {isRtl ? 'سجل بياناتك الآن لحضور اليوم التعريفي وتحديد موعد اختبار القبول والمقابلة الشخصية.' : 'Register now for the next intake cohort and start your journey towards international airline placement.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenApply}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg transition-transform active:scale-95 text-base"
            >
              {strings.nav.applyNow}
            </button>
            <a
              href={`tel:${ACADEMY_INFO.phone}`}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 flex items-center gap-2 text-base transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span dir="ltr">{ACADEMY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
