import { EligibilityInput, EligibilityResult } from '../types';

/**
 * Evaluates candidate cabin crew eligibility against international and regional airline standards.
 * Recommends either the 3-Month accelerated course or the 1-Year comprehensive diploma.
 */
export function evaluateEligibility(input: EligibilityInput): EligibilityResult {
  let score = 100;
  const notesEn: string[] = [];
  const notesAr: string[] = [];
  let isEligible = true;

  // 1. Height Evaluation
  const minHeight = input.gender === 'female' ? 160 : 168;
  if (input.heightCm < minHeight) {
    const diff = minHeight - input.heightCm;
    if (diff <= 2) {
      score -= 15;
      notesEn.push(`Height (${input.heightCm}cm) is close to the standard ${minHeight}cm requirement; arm reach tests (212cm) will be crucial.`);
      notesAr.push(`الطول (${input.heightCm} سم) قريب من الحد الأدنى (${minHeight} سم)؛ سيكون اختبار الوصول باليدين (212 سم) حاسماً.`);
    } else {
      score -= 35;
      isEligible = false;
      notesEn.push(`Height (${input.heightCm}cm) is below standard airline requirements (min ${minHeight}cm). Ground operations or aviation hospitality may be alternative paths.`);
      notesAr.push(`الطول (${input.heightCm} سم) أقل من متطلبات شركات الطيران (الحد الأدنى ${minHeight} سم). يُفضل التوجّه لخدمات الضيافة الأرضية.`);
    }
  } else {
    notesEn.push(`Height meets international cabin crew standards (>= ${minHeight}cm).`);
    notesAr.push(`الطول متوافق تماماً مع معايير الضيافة الجوية الدولية (>= ${minHeight} سم).`);
  }

  // 2. Age Evaluation
  if (input.age < 18) {
    isEligible = false;
    score -= 30;
    notesEn.push(`Candidates must be at least 18 years old to join commercial airline hiring.`);
    notesAr.push(`يجب أن يكون عمر المتقدم 18 عاماً على الأقل للالتحاق بشركات الطيران.`);
  } else if (input.age > 30) {
    score -= 20;
    notesEn.push(`Most international carriers hire new cabin crew between 18 and 30 years old.`);
    notesAr.push(`معظم شركات الطيران الدولية تقبل المتقدمين الجدد بين 18 و 30 عاماً.`);
  } else {
    notesEn.push(`Age is within prime airline recruitment range (18–30).`);
    notesAr.push(`العمر مثالي ومناسب تماماً لمتطلبات التوظيف لدى كبرى الخطوط الجوية.`);
  }

  // 3. English Proficiency
  let recommendedCourse: '3-month' | '1-year' = '3-month';
  if (input.englishLevel === 'basic') {
    score -= 25;
    recommendedCourse = '1-year';
    notesEn.push(`English is at basic level. The 1-Year Comprehensive Diploma is strongly recommended to achieve airline interview fluency.`);
    notesAr.push(`مستوى اللغة الإنجليزية مبتدئ. يُنصح بشدة بدبلومة السنة الكاملة المكثفة للوصول لطلاقة المقابلات الجوية.`);
  } else if (input.englishLevel === 'intermediate') {
    score -= 5;
    notesEn.push(`English is at intermediate level. Both 3-Month and 1-Year programs can prepare you effectively.`);
    notesAr.push(`مستوى الإنجليزية متوسط. كلا البرنامجين (3 أشهر أو سنة) مناسبان لتأهيلك لاجتياز المقابلات.`);
  } else {
    notesEn.push(`Advanced English proficiency is an outstanding advantage in airline screening.`);
    notesAr.push(`إتقان ممتاز للغة الإنجليزية يمنحك أفضلية كبرى في المقابلات الرسمية.`);
  }

  // 4. Education
  if (!input.hasHighSchoolDiploma) {
    isEligible = false;
    score -= 40;
    notesEn.push(`A High School Diploma or equivalent certificate is mandatory for airline licensing.`);
    notesAr.push(`شهادة الثانوية العامة أو ما يعادلها شرط إلزامي للترشح لمهنة الضيافة الجوية.`);
  }

  // 5. Visible Tattoos
  if (input.visibleTattoos) {
    score -= 20;
    notesEn.push(`Visible tattoos when wearing the airline uniform are strictly restricted by most regional and international carriers.`);
    notesAr.push(`الوشم الظاهر بالزي الرسمي غير مسموح به في معظم شركات الطيران الإقليمية والعالمية.`);
  }

  // 6. Swimming Ability
  if (input.swimmingAbility === 'no') {
    score -= 15;
    recommendedCourse = '1-year';
    notesEn.push(`Aviation safety training requires water ditching survival proficiency. Training includes water survival preparation.`);
    notesAr.push(`تدريبات السلامة البحرية تتطلب مهارات السباحة، وسيتضمن تدريب الأكاديمية إعداداً لمهارات النجاة المائية.`);
  }

  // Determine Final Status
  let status: 'excellent' | 'eligible' | 'needs-preparation' | 'not-eligible' = 'eligible';
  if (!isEligible || score < 50) {
    status = 'not-eligible';
  } else if (score >= 85) {
    status = 'excellent';
  } else if (score >= 70) {
    status = 'eligible';
  } else {
    status = 'needs-preparation';
  }

  return {
    isEligible: status !== 'not-eligible',
    score: Math.max(0, Math.min(100, score)),
    recommendedCourse,
    status,
    notesEn,
    notesAr,
  };
}
