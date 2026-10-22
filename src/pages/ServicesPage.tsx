import React, { useState } from 'react';
import { 
  Plane, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  Check, 
  FileCheck2,
  GraduationCap
} from 'lucide-react';
import { Language, PageId } from '../types';
import { t } from '../i18n/translations';
import { COURSES, ACADEMY_INFO } from '../data/academyData';

interface ServicesPageProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  onOpenApply: () => void;
  onOpenEligibility: () => void;
  setSelectedCourseForApply?: (courseId: '3-month' | '1-year') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  setCurrentPage,
  lang,
  onOpenApply,
  onOpenEligibility,
  setSelectedCourseForApply,
}) => {
  const strings = t[lang];
  const isRtl = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'all' | '3-month' | '1-year'>('all');

  const handleEnrollCourse = (courseId: '3-month' | '1-year') => {
    if (setSelectedCourseForApply) {
      setSelectedCourseForApply(courseId);
    }
    onOpenApply();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner */}
      <section className="bg-[#172b45] text-white py-16 lg:py-20 border-b border-amber-500/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{isRtl ? 'برامج معتمدة ومطابقة للمواصفات الدولية' : 'Internationally Accredited Aviation Programs'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            {isRtl ? 'برامج ودورات الضيافة الجوية' : 'Our Aviation Training Services'}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl 
              ? 'صممت دوراتنا لتزويدك بالمعرفة والمهارات العملية والمحاكاة الواقعية لاجتياز اختبارات كبرى شركات الطيران العالمية.'
              : 'Comprehensive cabin crew training programs tailored to take you from foundational training to international airline placement.'}
          </p>
        </div>
      </section>

      {/* OVERVIEW CARDS matching screencapture-crewlounge-eg-com-services_0e3c0440.png */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Navy Blue "What We Do?" Card */}
          <div className="bg-[#172b45] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border-t-4 border-amber-500">
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
              onClick={onOpenEligibility}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200 self-start"
            >
              <span>{strings.hero.checkEligibility}</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: White Card - Three-month course */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
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
              onClick={() => handleEnrollCourse('3-month')}
              className="px-5 py-2.5 bg-[#172b45] hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-lg text-xs transition-colors self-start"
            >
              {strings.curriculum.applyForCourse}
            </button>
          </div>

          {/* Card 3: White Card - One-year course */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
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
              onClick={() => handleEnrollCourse('1-year')}
              className="px-5 py-2.5 bg-[#172b45] hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-lg text-xs transition-colors self-start"
            >
              {strings.curriculum.applyForCourse}
            </button>
          </div>
        </div>
      </section>

      {/* CURRICULUM BLUE CONTAINER matching screencapture-crewlounge-eg-com-services_0e3c0440.png */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

              {/* Features matching original screenshot */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                {(isRtl ? COURSES[0].featuresAr : COURSES[0].featuresEn).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleEnrollCourse('3-month')}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-colors shadow-md flex items-center gap-2"
                >
                  <span>{strings.curriculum.applyForCourse}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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

              {/* Features matching original screenshot */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                {(isRtl ? COURSES[1].featuresAr : COURSES[1].featuresEn).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleEnrollCourse('1-year')}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-colors shadow-md flex items-center gap-2"
                >
                  <span>{strings.curriculum.applyForCourse}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING BATCHES & INTAKE SCHEDULE */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                {isRtl ? 'المواعيد والدفعات القادمة' : 'Intake Calendar'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {isRtl ? 'جدول الدفعات الجديدة وحجز المقاعد' : 'Upcoming Cohorts & Shift Timings'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {isRtl 
                ? 'تقبل الأكاديمية عدداً محدوداً من الطلاب في كل دفعة (بحد أقصى ٢٠ طالباً) لضمان جودة التدريب العملي بالمحاكي.'
                : 'Cohorts are strictly capped at 20 trainees to guarantee personalized simulator drill time for every student.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Batch 1: Next Month */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 sm:p-8 rounded-2xl border-2 border-amber-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {isRtl ? 'دفعة الشهر القادم' : 'Immediate Intake'}
                  </span>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                    {isRtl ? 'متبقي ٦ مقاعد فقط' : 'Only 6 Seats Left'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {isRtl ? 'دفعة شهر نوفمبر المكثفة' : 'November 2026 Cohort'}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>{isRtl ? 'البداية: الأحد الأول من الشهر' : 'Starts: 1st Week of Next Month'}</span>
                </p>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-amber-200 space-y-2 text-xs sm:text-sm text-slate-800 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{isRtl ? 'الفترة الصباحية:' : 'Morning Shift:'}</span>
                    <span className="font-bold">10:00 AM – 1:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="text-slate-500">{isRtl ? 'الفترة المسائية:' : 'Evening Shift:'}</span>
                    <span className="font-bold">5:00 PM – 8:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="text-slate-500">{isRtl ? 'المقر التدريبي:' : 'Location:'}</span>
                    <span className="font-bold">{isRtl ? 'مقر الأكاديمية، مدينة نصر' : 'Nasr City Campus'}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleEnrollCourse('3-month')}
                className="w-full py-3 bg-[#172b45] hover:bg-slate-900 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>{isRtl ? 'حجز مقعد في هذه الدفعة' : 'Reserve a Seat in this Batch'}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Batch 2: Next Following Month / Weekend */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#172b45] text-amber-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {isRtl ? 'التسجيل المبكر مفتوح' : 'Early Enrollment'}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {isRtl ? 'متاح ١٤ مقعداً' : '14 Seats Available'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {isRtl ? 'دفعة شهر ديسمبر الشاملة' : 'December 2026 Diploma Cohort'}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#172b45]" />
                  <span>{isRtl ? 'البداية: منتصف الشهر القادم' : 'Starts: Mid of Month'}</span>
                </p>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{isRtl ? 'المسار الأسبوعي:' : 'Weekday Cohort:'}</span>
                    <span className="font-bold">{isRtl ? 'أيام الأحد، الثلاثاء، الخميس' : 'Sun, Tue, Thu'}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="text-slate-500">{isRtl ? 'مسار عطلة نهاية الأسبوع:' : 'Weekend Track:'}</span>
                    <span className="font-bold">{isRtl ? 'الجمعة والسبت (مكثف)' : 'Fri & Sat (Intensive)'}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                    <span className="text-slate-500">{isRtl ? 'المقر التدريبي:' : 'Location:'}</span>
                    <span className="font-bold">{isRtl ? 'مقر الأكاديمية، مدينة نصر' : 'Nasr City Campus'}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleEnrollCourse('1-year')}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>{isRtl ? 'تسجيل مبكر لدبلومة السنة' : 'Enroll in 1-Year Diploma'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT TUITION & 0% INSTALLMENT PLANS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              {isRtl ? 'الشفافية والتسهيلات المالية' : 'Tuition & Payment Options'}
            </span>
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              {isRtl ? 'خطط التقسيط الميسرة بدون فوائد' : 'Transparent Tuition & 0% Installments'}
            </h2>
            <p className="text-slate-600 text-sm">
              {isRtl 
                ? 'توفر الأكاديمية أنظمة سداد مرنة بدون أي فوائد لتسهيل انطلاقك في مستقبلك المهني مع كبرى شركات الطيران.'
                : 'We offer interest-free flexible monthly installment plans to make your world-class aviation training accessible.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 3-Month Plan Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-md flex flex-col justify-between hover:border-amber-400 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    {isRtl ? COURSES[0].badgeAr : COURSES[0].badgeEn}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {isRtl ? 'سداد ميسر على ٣ أقساط' : 'Split across 3 Installments'}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {isRtl ? COURSES[0].titleAr : COURSES[0].titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  {isRtl ? 'مسار سريع لمن يمتلك لغة إنجليزية ويرغب في جاهزية فورية للمقابلات.' : 'Accelerated fast-track for immediate airline interview readiness.'}
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {isRtl ? 'نظام التقسيط:' : 'Installment Structure:'}
                  </p>
                  <p className="text-base font-extrabold text-[#172b45]">
                    {isRtl ? 'دفعة مقدمة عند حجز المقعد + دفعتين شهريتين (بدون فوائد ٠٪)' : 'Initial seat deposit + 2 equal monthly installments (0% interest)'}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {isRtl ? 'ما تشمله الرسوم التدريبية:' : 'What Is Included in this Plan:'}
                  </p>
                  {[
                    isRtl ? 'الزي الرسمي الموحد المعتمد للأكاديمية مع شارة الأجنحة الرسمية' : 'Official Crew Lounge Uniform & Wing Pin Included',
                    isRtl ? 'ساعات تدريب عملي داخل محاكي كابينة الطائرة ومقصورة القيادة' : 'Flight Deck & Cabin Simulator Training Hours',
                    isRtl ? 'شهادة تخرج معتمدة وفق نظام الجودة الدولي ISO 9001:2015' : 'ISO 9001:2015 Accredited Course Certificate',
                    isRtl ? 'ورشة عمل كاملة لمحاكاة اختبارات شركات الطيران والمقابلات' : 'Airline Assessment Day Simulation Masterclass',
                    isRtl ? 'إعداد السيرة الذاتية الطيرانية ومواصفات جلسة التصوير الرسمية' : 'Professional Cabin Crew CV & Photo Portfolio Guide',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleEnrollCourse('3-month')}
                className="w-full py-3.5 bg-[#172b45] hover:bg-slate-900 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>{isRtl ? 'التقديم لدورة الـ ٣ أشهر' : 'Apply for 3-Month Course'}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* 1-Year Comprehensive Diploma Plan Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-amber-400 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 end-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 font-black text-[11px] px-4 py-1 rounded-bl-xl shadow-sm">
                {isRtl ? 'الأكثر طلباً وتأهيلاً' : 'Most Popular Diploma'}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#172b45] text-amber-300">
                    {isRtl ? COURSES[1].badgeAr : COURSES[1].badgeEn}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {isRtl ? 'تقسيط شهري مريح على مدار السنة' : 'Flexible Monthly Installments (10-12 Mo.)'}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {isRtl ? COURSES[1].titleAr : COURSES[1].titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  {isRtl ? 'إعداد شامل من الصفر حتى استلام عقد العمل بشركات الطيران الدولية.' : 'Complete ground-up qualification including aviation English and door operations.'}
                </p>

                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 mb-6">
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                    {isRtl ? 'نظام التقسيط:' : 'Installment Structure:'}
                  </p>
                  <p className="text-base font-extrabold text-slate-950">
                    {isRtl ? 'دفعة حجز أولى + أقساط شهرية مريحة حتى نهاية البرنامج (٠٪ فوائد)' : 'Initial registration deposit + comfortable monthly payments throughout the year (0% interest)'}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {isRtl ? 'ما تشمله الرسوم التدريبية:' : 'What Is Included in this Plan:'}
                  </p>
                  {[
                    isRtl ? 'برنامج تأسيسي واحترافي لطلاقة اللغة الإنجليزية ومصطلحات الطيران' : 'Complete Aviation English Fluency Mastery Program',
                    isRtl ? 'تدريب مكثف على أبواب الطوارئ ومطابخ الطائرات ومقصورة الركاب' : 'Advanced Cabin Mockup, Galley & Door Trainers',
                    isRtl ? 'شهادة إسعافات أولية وإنعاش قلبي معتمدة لحالات الطوارئ الجوية' : 'Aviation First Aid & CPR Medical Certificate',
                    isRtl ? 'شهادة توعية بنقل البضائع والمواد الخطرة (DGR)' : 'Dangerous Goods Regulations (DGR) Awareness Certificate',
                    isRtl ? 'تدريب عملي للنجاة في المسطحات المائية (Wet Drills)' : 'Wet Drills / Water Ditching Sea Survival Practicum',
                    isRtl ? 'الزي الرسمي المتكامل للأكاديمية مع كافة الملحقات' : 'Full Uniform Set with Aviation Accessories',
                    isRtl ? 'متابعة وتأهيل مستمر لمقابلات شركات الطيران حتى اجتياز المقابلة' : 'Guaranteed Airline Assessment Coaching until Hired',
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleEnrollCourse('1-year')}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{isRtl ? 'التقديم لدبلومة السنة الشاملة' : 'Apply for 1-Year Diploma'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SYLLABUS & MODULES */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">
              {isRtl ? 'المحاور والوحدات التدريبية المعتمدة' : 'Detailed Training Modules & Syllabus'}
            </h2>
            <p className="text-slate-600 text-sm">
              {isRtl ? 'نظرة معمقة في المواد العملية والنظرية التي ستدرسها طوال فترة البرنامج.' : 'A deep dive into each theoretical and practical module covered by our instructors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 3-Month Detailed Modules */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">
                    {isRtl ? COURSES[0].titleAr : COURSES[0].titleEn}
                  </h4>
                  <span className="text-xs text-amber-600 font-semibold">{isRtl ? COURSES[0].intakeAr : COURSES[0].intakeEn}</span>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold rounded-full text-xs">
                  {isRtl ? COURSES[0].durationAr : COURSES[0].durationEn}
                </span>
              </div>

              <div className="space-y-2.5">
                {(isRtl ? COURSES[0].curriculumAr : COURSES[0].curriculumEn).map((module, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1-Year Detailed Modules */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">
                    {isRtl ? COURSES[1].titleAr : COURSES[1].titleEn}
                  </h4>
                  <span className="text-xs text-amber-600 font-semibold">{isRtl ? COURSES[1].intakeAr : COURSES[1].intakeEn}</span>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-[#172b45] font-bold rounded-full text-xs">
                  {isRtl ? COURSES[1].durationAr : COURSES[1].durationEn}
                </span>
              </div>

              <div className="space-y-2.5">
                {(isRtl ? COURSES[1].curriculumAr : COURSES[1].curriculumEn).map((module, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#172b45] text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

