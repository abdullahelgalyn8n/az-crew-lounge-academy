import React, { useState } from 'react';
import { X, CheckCircle, Send, Award, Plane } from 'lucide-react';
import { Language, ApplicationFormData } from '../types';
import { t } from '../i18n/translations';
import { COURSES, ACADEMY_INFO } from '../data/academyData';
import { WhatsAppIcon } from './BrandIcons';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedCourseId?: '3-month' | '1-year';
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedCourseId = '3-month',
}) => {
  const strings = t[lang].applicationModal;
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    nationalIdOrPassport: '',
    gender: 'female',
    birthDate: '',
    courseId: preselectedCourseId,
    heightCm: 165,
    education: 'Bachelor Degree',
    englishLevel: 'Intermediate',
    city: 'Cairo',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage(isRtl ? 'يرجى إدخال الاسم ورقم الهاتف على الأقل.' : 'Please provide your full name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppSend = () => {
    const courseTitle = formData.courseId === '3-month' ? 'Three-Month Course' : 'One-Year Diploma';
    const text = encodeURIComponent(
      `Hello Crew Lounge Egypt Academy! I have submitted my application for the ${courseTitle}.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nHeight: ${formData.heightCm}cm\nEducation: ${formData.education}`
    );
    window.open(`https://wa.me/201012159298?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative bg-white text-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 my-auto"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div className="bg-[#172b45] text-white px-6 py-5 flex items-center justify-between border-b border-amber-500/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">{strings.title}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{strings.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{strings.successTitle}</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  {strings.successDesc}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-start text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">{isRtl ? 'الاسم:' : 'Applicant:'}</span>
                  <span className="font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">{isRtl ? 'البرنامج:' : 'Program:'}</span>
                  <span className="font-semibold text-amber-600">
                    {formData.courseId === '3-month' ? COURSES[0].titleEn : COURSES[1].titleEn}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{isRtl ? 'رقم الهاتف:' : 'Phone:'}</span>
                  <span className="font-semibold" dir="ltr">{formData.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow flex items-center justify-center gap-2 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>{isRtl ? 'تأكيد الحجز فورياً عبر واتساب' : 'Confirm Instantly via WhatsApp'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl transition-colors"
                >
                  {isRtl ? 'إغلاق النافذة' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Course Selection Cards */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  {strings.course} *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COURSES.map((course) => {
                    const isSelected = formData.courseId === course.id;
                    return (
                      <div
                        key={course.id}
                        onClick={() => setFormData({ ...formData, courseId: course.id })}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/50 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {isRtl ? course.durationAr : course.durationEn}
                          </span>
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-amber-500 bg-amber-500' : 'border-slate-300'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {isRtl ? course.titleAr : course.titleEn}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {isRtl ? course.descriptionAr : course.descriptionEn}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    placeholder={isRtl ? 'مثال: سارة أحمد محمود' : 'e.g. Sarah Ahmed'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    placeholder="01012345678"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    placeholder="example@mail.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.gender}
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'female' | 'male' })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                  >
                    <option value="female">{isRtl ? 'أنثى' : 'Female'}</option>
                    <option value="male">{isRtl ? 'ذكر' : 'Male'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.height}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={150}
                      max={210}
                      value={formData.heightCm}
                      onChange={(e) => setFormData({ ...formData, heightCm: Number(e.target.value) })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                    <span className="text-xs text-slate-500 shrink-0">cm</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.education}
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                  >
                    <option value="High School">{isRtl ? 'ثانوية عامة / أزهرية / دبلوم' : 'High School Diploma'}</option>
                    <option value="Undergraduate">{isRtl ? 'طالب جامعي حالي' : 'Undergraduate Student'}</option>
                    <option value="Bachelor Degree">{isRtl ? 'مؤهل عالي / بكالوريوس / ليسانس' : 'Bachelor Degree'}</option>
                    <option value="Postgraduate">{isRtl ? 'دراسات عليا / ماجستير' : 'Postgraduate Degree'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {strings.notes}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={isRtl ? 'أي استفسار عن مواعيد المحاضرات أو خطط السداد...' : 'Any question about schedules, simulator hours, or installment plans...'}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? strings.submitting : strings.submitBtn}</span>
                </button>
                <p className="text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>{ACADEMY_INFO.isoBadge}</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
