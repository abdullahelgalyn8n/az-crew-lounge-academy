import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Users, 
  ShieldCheck, 
  Compass, 
  Building2, 
  Sparkles, 
  ArrowRight,
  PlaneTakeoff,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { Language, PageId } from '../types';
import { t } from '../i18n/translations';
import { ACADEMY_INFO, INSTRUCTORS } from '../data/academyData';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  onOpenApply: () => void;
  onOpenEligibility: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  setCurrentPage,
  lang,
  onOpenApply,
  onOpenEligibility,
}) => {
  const strings = t[lang];
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-[#172b45] text-white py-16 lg:py-20 border-b border-amber-500/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#172b45] via-[#112237] to-[#172b45] opacity-90"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold border border-amber-400/30">
            <Award className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 Certified Aviation Academy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            {isRtl ? 'عن أكاديمية كرو لاونج مصر' : 'About Crew Lounge EGYPT Academy'}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {isRtl 
              ? 'الصرح الرائد في مصر والشرق الأوسط لإعداد وتأهيل أطقم الضيافة الجوية وتدريبهم بمحاكاة واقعية واحترافية متكاملة.'
              : 'Egypt and the Middle East’s leading cabin crew training center, delivering rigorous simulation, grooming, and career placement.'}
          </p>
        </div>
      </section>

      {/* Primary Section matching screencapture-crewlounge-eg-com-about_e0469162.png */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo matching original about page */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-2 rounded-3xl bg-amber-400/20 blur-md"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img 
                    src="/public/assets/extracted/cabin_crew_stewardess.png" 
                    alt="Crew Lounge Egypt Stewardess" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 end-4 bg-[#172b45]/90 p-2 rounded-xl border border-amber-400/40 text-center">
                    <img 
                      src="/public/assets/extracted/logo_final.png" 
                      alt="Crew Lounge Logo" 
                      className="h-8 w-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 uppercase tracking-wider rounded">
                {strings.whoWeAre.tag}
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                {strings.whoWeAre.heading}
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {strings.whoWeAre.desc1}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {strings.whoWeAre.desc2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar1}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar2}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar3}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {strings.whoWeAre.pillar4}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={onOpenApply}
                  className="px-6 py-3 bg-[#172b45] hover:bg-[#0f1d30] text-white font-bold rounded-lg shadow transition-colors text-sm"
                >
                  {strings.nav.applyNow}
                </button>
                <button
                  onClick={onOpenEligibility}
                  className="px-5 py-3 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{strings.hero.checkEligibility}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {isRtl ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isRtl 
                  ? 'أن نكون المنصة الأكاديمية الأولى في الشرق الأوسط وأفريقيا التي تخرّج أطقم ضيافة جوية مؤهلين بأعلى المعايير، قادرين على تمثيل أفضل شركات الطيران العالمية بكل فخر وكفاءة.'
                  : 'To be the preeminent aviation academy in the Middle East & Africa, setting benchmark standards in cabin crew training, safety excellence, and global airline placement.'}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#172b45]/15 text-[#172b45] flex items-center justify-center mb-5">
                <PlaneTakeoff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {isRtl ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isRtl 
                  ? 'تمكين الشباب والشابات من تحقيق أحلامهم المهنية في عالم الطيران من خلال مناهج عملية معتمدة، ومحاكاة دقيقة، وتدريب لغوي وشخصي يتطابق مع شروط التوظيف لكبرى خطوط الطيران.'
                  : 'To empower aspiring flight attendants with state-of-the-art simulator training, rigorous safety drills, professional grooming, and interview mastery.'}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {isRtl ? 'معايير الجودة الدولية' : 'Quality Accreditation'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isRtl 
                  ? 'حاصلون على شهادة الجودة الدولية ISO 9001:2015 في إدارة التدريب والتطوير، مما يضمن أن كل ساعة تدريبية تخضع لأعلى معايير الرقابة والاحتراف.'
                  : 'Certified under ISO 9001:2015 Quality Management Systems, ensuring audited training methodologies aligned with international airline governing bodies.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Simulator Tour */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              {isRtl ? 'مرافق الأكاديمية' : 'Academy Facilities'}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              {isRtl ? 'تجهيزات ومحاكيات تحاكي كابينة الطائرة الحقيقية' : 'World-Class Aviation Training Facilities'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=600&q=80" 
                  alt="Cabin Simulator" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-slate-900">
                {isRtl ? 'مجسم كابينة الطائرة (Cabin Mockup)' : 'Aircraft Cabin Simulator'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isRtl ? 'مقاعد ركاب حقيقية، إضاءة طوارئ، وأنظمة صوت ومطابخ طيران متكاملة.' : 'True-to-scale passenger cabin with functioning overhead bins, galleys, and emergency lighting.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" 
                  alt="Safety Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-slate-900">
                {isRtl ? 'معمل السلامة ومعدات الطوارئ' : 'Safety & Door Operations'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isRtl ? 'أبواب طائرات حقيقية لتدريب الإغلاق والفتح في حالات الطوارئ وسترات النجاة.' : 'Door trainers for Boeing and Airbus types, smoke hoods, fire extinguishers, and life vests.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-slate-900">
                <img 
                  src="/public/assets/extracted/cabin_crew_stewardess.png" 
                  alt="Grooming Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-slate-900">
                {isRtl ? 'استوديو المظهر والبروتوكول (Grooming Studio)' : 'Grooming & Poise Studio'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isRtl ? 'مرايا متخصصة لتدريب الزي الرسمي، وقفة المضيف، وتصفيف الشعر والمكياج الهادئ.' : 'Professional styling mirrors for airline grooming compliance, uniform fitting, and posture.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-slate-900">
                <img 
                  src="/public/assets/extracted/hero_students.png" 
                  alt="Lecture Hall" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-slate-900">
                {isRtl ? 'قاعات المحاضرات الذكية' : 'Smart Aviation Classrooms'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isRtl ? 'شاشات تفاعلية لدراسة أنظمة الملاحة ومصطلحات الطيران ومحاكاة المقابلات.' : 'Interactive digital presentation suites for theoretical instruction and airline video interview simulations.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY & CHIEF PURSER INSTRUCTORS */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              {isRtl ? 'كبار خبراء الطيران' : 'Elite Aviation Faculty'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              {isRtl ? 'هيئة التدريس ورؤساء أطقم الضيافة الجوية' : 'Learn Directly from Chief Flight Pursers & Captains'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isRtl 
                ? 'مدربونا قضوا عقوداً في أطقم كبرى شركات الطيران العالمية مثل طيران الإمارات ومصر للطيران، وينقلون إليك أسرار اجتياز المقابلات والتميز المهني.'
                : 'Our instructors bring decades of active flying service with top carriers like Emirates and EgyptAir to mentor you toward success.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUCTORS.map((instructor, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-square w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.nameEn} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 start-2 bg-[#172b45]/90 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      {instructor.airline}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-amber-600 transition-colors">
                      {isRtl ? instructor.nameAr : instructor.nameEn}
                    </h4>
                    <p className="text-xs font-bold text-amber-600 mb-2">
                      {isRtl ? instructor.roleAr : instructor.roleEn}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {isRtl ? instructor.experienceAr : instructor.experienceEn}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isRtl ? 'مدرب معتمد بالأكاديمية' : 'Certified Academy Faculty'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-14 bg-gradient-to-r from-[#172b45] to-[#0f1d30] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl font-black">
            {isRtl ? 'انضم إلى دفعتنا القادمة وابدأ مستقبلك في عالم الطيران' : 'Join Our Upcoming Cohort & Start Your Aviation Career'}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            {isRtl 
              ? 'تواصل مع فريق القبول وتعرف على مواعيد اختبارات الطول واللغة والمقابلة الشخصية.'
              : 'Speak directly with our admissions advisors to schedule your physical check and English assessment.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenApply}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg transition-transform active:scale-95 text-base"
            >
              {strings.nav.applyNow}
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 flex items-center gap-2 text-base transition-colors"
            >
              <span>{isRtl ? 'استعراض البرامج التدريبية' : 'View Training Programs'}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

