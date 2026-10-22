export type Language = 'en' | 'ar';

export type PageId = 'home' | 'about' | 'services' | 'gallery-photos' | 'gallery-videos' | 'contact';

export interface Course {
  id: '3-month' | '1-year';
  titleEn: string;
  titleAr: string;
  durationEn: string;
  durationAr: string;
  descriptionEn: string;
  descriptionAr: string;
  badgeEn: string;
  badgeAr: string;
  featuresEn: string[];
  featuresAr: string[];
  curriculumEn: string[];
  curriculumAr: string[];
  targetEn: string;
  targetAr: string;
  intakeEn: string;
  intakeAr: string;
}

export interface EligibilityInput {
  gender: 'female' | 'male';
  heightCm: number;
  age: number;
  englishLevel: 'basic' | 'intermediate' | 'advanced' | 'fluent';
  hasHighSchoolDiploma: boolean;
  visibleTattoos: boolean;
  swimmingAbility: 'yes' | 'basic' | 'no';
}

export interface EligibilityResult {
  isEligible: boolean;
  score: number; // 0 to 100
  recommendedCourse: '3-month' | '1-year';
  status: 'excellent' | 'eligible' | 'needs-preparation' | 'not-eligible';
  notesEn: string[];
  notesAr: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  nationalIdOrPassport: string;
  gender: 'female' | 'male';
  birthDate: string;
  courseId: '3-month' | '1-year';
  heightCm: number;
  education: string;
  englishLevel: string;
  city: string;
  notes?: string;
}

export interface GalleryPhoto {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'simulator' | 'graduation' | 'grooming' | 'safety' | 'events';
  imageUrl: string;
  captionEn?: string;
  captionAr?: string;
}

export interface GalleryVideo {
  id: string;
  titleEn: string;
  titleAr: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
}
