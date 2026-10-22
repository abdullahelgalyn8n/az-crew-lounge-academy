import { PageId } from '../types';

export const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  'gallery-photos': '/gallery/photos',
  'gallery-videos': '/gallery/videos',
  contact: '/contact',
};

export const ROUTE_PAGES: Record<string, PageId> = {
  '/': 'home',
  '/home': 'home',
  '/about': 'about',
  '/about-us': 'about',
  '/services': 'services',
  '/courses': 'services',
  '/programs': 'services',
  '/gallery': 'gallery-photos',
  '/gallery/': 'gallery-photos',
  '/gallery/photos': 'gallery-photos',
  '/photos': 'gallery-photos',
  '/gallery/videos': 'gallery-videos',
  '/videos': 'gallery-videos',
  '/contact': 'contact',
  '/contact-us': 'contact',
};

/**
 * Resolves a URL pathname, hash, or search params to a valid PageId
 */
export function resolvePageFromUrl(pathname: string, hash: string = '', search: string = ''): PageId {
  // 1. Check query parameter `?page=about`
  if (search) {
    const params = new URLSearchParams(search);
    const pageParam = params.get('page');
    if (pageParam && pageParam in PAGE_ROUTES) {
      return pageParam as PageId;
    }
  }

  // 2. Check hash `/#about`, `/#services`, etc.
  if (hash) {
    const cleanHash = hash.replace(/^#\/?/, '').toLowerCase();
    if (cleanHash in PAGE_ROUTES) {
      return cleanHash as PageId;
    }
    const hashAsPath = '/' + cleanHash;
    if (hashAsPath in ROUTE_PAGES) {
      return ROUTE_PAGES[hashAsPath];
    }
  }

  // 3. Normalize pathname (remove trailing slashes unless root)
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '').toLowerCase() : pathname;

  if (normalizedPath in ROUTE_PAGES) {
    return ROUTE_PAGES[normalizedPath];
  }

  return 'home';
}

/**
 * Returns formatted page title according to page and language
 */
export function getPageTitle(page: PageId, lang: 'en' | 'ar'): string {
  const titles = {
    en: {
      home: 'Crew Lounge EGYPT Academy | Cabin Crew & Aviation Training',
      about: 'About Us | Crew Lounge EGYPT Academy',
      services: 'Aviation Courses & Training Programs | Crew Lounge EGYPT Academy',
      'gallery-photos': 'Photo Gallery | Crew Lounge EGYPT Academy',
      'gallery-videos': 'Video Gallery & Training Drills | Crew Lounge EGYPT Academy',
      contact: 'Contact Us | Crew Lounge EGYPT Academy',
    },
    ar: {
      home: 'أكاديمية كرو لاونج مصر | تدريب الضيافة الجوية وعلوم الطيران',
      about: 'من نحن | أكاديمية كرو لاونج مصر للضيافة الجوية',
      services: 'البرامج والدورات التدريبية المعتمدة | كرو لاونج مصر',
      'gallery-photos': 'معرض الصور | كرو لاونج مصر للضيافة الجوية',
      'gallery-videos': 'مقاطع الفيديو وتدريبات المحاكي | كرو لاونج مصر',
      contact: 'اتصل بنا وحجز موعد | أكاديمية كرو لاونج مصر',
    },
  };

  return titles[lang][page] || titles[lang].home;
}
