import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Language, EligibilityInput, EligibilityResult } from '../types';
import { t } from '../i18n/translations';
import { evaluateEligibility } from '../utils/eligibility';
import { COURSES } from '../data/academyData';

interface EligibilityCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectCourse: (courseId: '3-month' | '1-year') => void;
}

export const EligibilityCheckerModal: React.FC<EligibilityCheckerModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectCourse,
}) => {
  const strings = t[lang].checkerModal;
  const isRtl = lang === 'ar';

  const [input, setInput] = useState<EligibilityInput>({
    gender: 'female',
    heightCm: 165,
    age: 21,
    englishLevel: 'intermediate',
    hasHighSchoolDiploma: true,
    visibleTattoos: false,
    swimmingAbility: 'yes',
  });

  const [result, setResult] = useState<EligibilityResult | null>(null);

  if (!isOpen) return null;

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    const evaluation = evaluateEligibility(input);
    setResult(evaluation);
  };

  const handleEnrollRecommended = () => {
    if (result) {
      onSelectCourse(result.recommendedCourse);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative bg-white text-slate-800 rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 my-auto"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="bg-[#172b45] text-white px-6 py-5 flex items-center justify-between border-b border-amber-500/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
              <Sparkles className="w-5 h-5" />
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

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {result ? (
            <div className="space-y-5 animate-in fade-in duration-300">
              {/* Score Indicator */}
              <div className={`p-5 rounded-xl border text-center ${
                result.status === 'excellent'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : result.status === 'eligible'
                  ? 'bg-blue-50 border-blue-200 text-blue-900'
                  : result.status === 'needs-preparation'
                  ? 'bg-amber-50 border-amber-200 text-amber-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {result.isEligible ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  )}
                  <span className="text-3xl font-extrabold">{result.score}%</span>
                </div>
                <h4 className="text-lg font-bold">
                  {result.status === 'excellent' && (isRtl ? 'مؤهل بامتياز للانطلاق في عالم الطيران!' : 'Excellent Airline Match!')}
                  {result.status === 'eligible' && (isRtl ? 'مستوفٍ لشروط القبول في الضيافة الجوية' : 'Eligible for Airline Cabin Crew')}
                  {result.status === 'needs-preparation' && (isRtl ? 'مؤهل ولكن يحتاج لتطوير وتأسيس إضافي' : 'Eligible with Preparation Required')}
                  {result.status === 'not-eligible' && (isRtl ? 'بعض الشروط الأساسية غير مستوفاة حالياً' : 'Criteria Not Fully Met for Flying Roles')}
                </h4>
              </div>

              {/* Recommended Course Box */}
              <div className="bg-[#172b45] text-white p-5 rounded-xl space-y-2">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  {strings.recommended}
                </span>
                <h5 className="text-xl font-bold">
                  {result.recommendedCourse === '3-month' 
                    ? (isRtl ? COURSES[0].titleAr : COURSES[0].titleEn)
                    : (isRtl ? COURSES[1].titleAr : COURSES[1].titleEn)
                  }
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {result.recommendedCourse === '3-month'
                    ? (isRtl ? COURSES[0].descriptionAr : COURSES[0].descriptionEn)
                    : (isRtl ? COURSES[1].descriptionAr : COURSES[1].descriptionEn)
                  }
                </p>
              </div>

              {/* Detailed Breakdown Notes */}
              <div className="space-y-2">
                <h6 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {isRtl ? 'تحليل المعايير الدقيقة:' : 'Aviation Criteria Breakdown:'}
                </h6>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {(isRtl ? result.notesAr : result.notesEn).map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleEnrollRecommended}
                  className="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow flex items-center justify-center gap-2 transition-all"
                >
                  <span>{strings.applyNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setResult(null)}
                  className="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl transition-colors"
                >
                  {isRtl ? 'إعادة الفحص' : 'Re-check'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEvaluate} className="space-y-4">
              {/* Gender and Height */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.gender}
                  </label>
                  <select
                    value={input.gender}
                    onChange={(e) => setInput({ ...input, gender: e.target.value as 'female' | 'male' })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="female">{strings.female}</option>
                    <option value="male">{strings.male}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.height}
                  </label>
                  <input
                    type="number"
                    min={140}
                    max={220}
                    value={input.heightCm}
                    onChange={(e) => setInput({ ...input, heightCm: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                  />
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {input.gender === 'female' ? (isRtl ? 'الحد الأدنى للبنات: ١٦٠ سم' : 'Min for females: 160 cm') : (isRtl ? 'الحد الأدنى للشباب: ١٦٨ سم' : 'Min for males: 168 cm')}
                  </p>
                </div>
              </div>

              {/* Age and English */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.age}
                  </label>
                  <input
                    type="number"
                    min={16}
                    max={45}
                    value={input.age}
                    onChange={(e) => setInput({ ...input, age: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.englishLevel}
                  </label>
                  <select
                    value={input.englishLevel}
                    onChange={(e) => setInput({ ...input, englishLevel: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="fluent">{strings.fluent}</option>
                    <option value="advanced">{strings.advanced}</option>
                    <option value="intermediate">{strings.intermediate}</option>
                    <option value="basic">{strings.basic}</option>
                  </select>
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-medium text-slate-700">
                    {strings.highSchool}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setInput({ ...input, hasHighSchoolDiploma: true })}
                      className={`px-3 py-1 rounded text-xs font-bold ${
                        input.hasHighSchoolDiploma ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {strings.yes}
                    </button>
                    <button
                      type="button"
                      onClick={() => setInput({ ...input, hasHighSchoolDiploma: false })}
                      className={`px-3 py-1 rounded text-xs font-bold ${
                        !input.hasHighSchoolDiploma ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {strings.no}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-xs font-medium text-slate-700">
                    {strings.tattoos}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setInput({ ...input, visibleTattoos: false })}
                      className={`px-3 py-1 rounded text-xs font-bold ${
                        !input.visibleTattoos ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {strings.no}
                    </button>
                    <button
                      type="button"
                      onClick={() => setInput({ ...input, visibleTattoos: true })}
                      className={`px-3 py-1 rounded text-xs font-bold ${
                        input.visibleTattoos ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {strings.yes}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {strings.swimming}
                  </label>
                  <select
                    value={input.swimmingAbility}
                    onChange={(e) => setInput({ ...input, swimmingAbility: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="yes">{strings.swimYes}</option>
                    <option value="basic">{strings.swimBasic}</option>
                    <option value="no">{strings.swimNo}</option>
                  </select>
                </div>
              </div>

              {/* Evaluate Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{strings.evaluateBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
