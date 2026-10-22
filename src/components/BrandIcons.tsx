import React from 'react';

// ==========================================
// 1. SOCIAL MEDIA ICONS (Official Brand SVGs)
// ==========================================

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.1-.476-.15-.677.15-.201.3-.778.977-.954 1.178-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.351.451-.527.151-.175.201-.3.301-.501.1-.201.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.234-.244-.587-.492-.507-.677-.516-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.378.197 1.897.12.579-.086 1.777-.727 2.028-1.429.251-.702.251-1.304.176-1.429-.075-.125-.276-.201-.577-.351zM12.042 21.928c-1.848 0-3.659-.497-5.242-1.442l-.376-.223-3.896 1.022 1.04-3.799-.245-.39a9.882 9.882 0 0 1-1.516-5.267c0-5.467 4.452-9.919 9.923-9.919 2.648 0 5.138 1.031 7.009 2.903a9.856 9.856 0 0 1 2.903 7.016c0 5.469-4.453 9.92-9.923 9.92zM12.042.001C5.402.001.002 5.402.002 12.044c0 2.12.552 4.188 1.602 6.009L0 24l6.136-1.609a12.004 12.004 0 0 0 5.906 1.536h.005c6.638 0 12.039-5.401 12.039-12.044 0-3.218-1.253-6.243-3.529-8.519A11.964 11.964 0 0 0 12.042 0z" />
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.41c.02 1.95-.56 3.95-1.74 5.51-1.6 2.14-4.22 3.44-6.9 3.44-2.87 0-5.61-1.49-7.05-3.95-1.55-2.61-1.44-6 .28-8.47 1.63-2.35 4.41-3.65 7.29-3.32v4.13c-1.52-.22-3.13.3-4.14 1.48-.99 1.14-1.26 2.8-.68 4.21.57 1.39 1.99 2.32 3.51 2.31 1.76.01 3.32-1.21 3.76-2.92.17-.67.22-1.37.21-2.07V.02z" />
  </svg>
);

// ==========================================
// 2. AIRLINE VECTOR LOGOS & CRESTS
// ==========================================

export interface AirlineLogoProps {
  className?: string;
  size?: number;
}

// EgyptAir: Iconic Horus Falcon in Blue & Gold
export const EgyptAirLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="EgyptAir">
    <circle cx="50" cy="50" r="48" fill="#0C2340" />
    {/* Sun disc / solar glow */}
    <circle cx="50" cy="30" r="11" fill="#D4AF37" />
    {/* Horus Falcon Wings & Crown stylized */}
    <path 
      d="M20 54 C32 38, 48 35, 52 46 C56 35, 72 38, 84 54 C74 56, 62 50, 52 64 C42 50, 30 56, 20 54 Z" 
      fill="#D4AF37" 
    />
    <path 
      d="M25 62 C35 52, 47 50, 52 58 C57 50, 69 52, 79 62 C70 63, 60 58, 52 70 C44 58, 34 63, 25 62 Z" 
      fill="#E5C158" 
    />
    <path 
      d="M32 70 C40 64, 48 62, 52 68 C56 62, 64 64, 72 70 C65 72, 58 68, 52 78 C46 68, 39 72, 32 70 Z" 
      fill="#FFFFFF" 
    />
    {/* Head of Falcon */}
    <path 
      d="M48 28 C50 25, 55 26, 56 30 C55 33, 51 34, 48 32 Z" 
      fill="#0C2340" 
    />
  </svg>
);

// Emirates: Iconic Emirates Red Ribbon Calligraphy Mark
export const EmiratesLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Emirates">
    <rect width="100" height="100" rx="20" fill="#D71921" />
    {/* Arabic Calligraphy Stylized Ribbon */}
    <path 
      d="M22 66 C28 66, 32 60, 34 50 C36 40, 42 34, 48 34 C54 34, 58 40, 60 52 C62 62, 68 66, 76 66 C70 62, 68 54, 66 42 C64 30, 56 22, 48 22 C40 22, 32 30, 30 42 C28 54, 26 62, 22 66 Z" 
      fill="#FFFFFF" 
    />
    <circle cx="36" cy="30" r="4" fill="#FFFFFF" />
    <circle cx="62" cy="30" r="4" fill="#FFFFFF" />
    <rect x="26" y="74" width="48" height="5" rx="2.5" fill="#D4AF37" />
  </svg>
);

// Qatar Airways: Iconic Maroon Arabian Oryx
export const QatarAirwaysLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Qatar Airways">
    <circle cx="50" cy="50" r="48" fill="#5C0632" />
    {/* Arabian Oryx Head & Long Horns */}
    <path 
      d="M42 22 L52 46 L46 54 L38 52 Z" 
      fill="#FFFFFF" 
    />
    <path 
      d="M58 22 L54 46 L60 54 L66 52 Z" 
      fill="#E6D3DC" 
    />
    <path 
      d="M42 20 L50 14 L52 20 Z" 
      fill="#FFFFFF" 
    />
    <path 
      d="M58 20 L50 14 L48 20 Z" 
      fill="#E6D3DC" 
    />
    {/* Oryx muzzle and neck */}
    <path 
      d="M46 52 C46 58, 48 64, 52 70 C54 73, 56 73, 58 70 C62 64, 64 58, 64 52 L55 58 Z" 
      fill="#FFFFFF" 
    />
    <circle cx="48" cy="54" r="2.5" fill="#5C0632" />
    <circle cx="60" cy="54" r="2.5" fill="#5C0632" />
    {/* Base rim */}
    <path d="M30 82 Q50 76 70 82" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Saudia: Crossed Swords and Palm Tree in Deep Green
export const SaudiaLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Saudia">
    <rect width="100" height="100" rx="20" fill="#006C35" />
    {/* Palm Tree */}
    <path d="M50 36 L50 64" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
    <path d="M50 36 C42 32, 34 38, 28 46 C36 44, 44 42, 50 46" fill="#D4AF37" />
    <path d="M50 36 C58 32, 66 38, 72 46 C64 44, 56 42, 50 46" fill="#D4AF37" />
    <path d="M50 30 C44 24, 34 26, 30 32 C38 32, 44 32, 50 36" fill="#FFFFFF" />
    <path d="M50 30 C56 24, 66 26, 70 32 C62 32, 56 32, 50 36" fill="#FFFFFF" />
    {/* Crossed Scimitar Swords */}
    <path d="M30 74 C40 68, 56 64, 70 56" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M70 74 C60 68, 44 64, 30 56" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
    {/* Sword Hilts */}
    <circle cx="30" cy="74" r="3.5" fill="#D4AF37" />
    <circle cx="70" cy="74" r="3.5" fill="#D4AF37" />
  </svg>
);

// flynas: Energetic Turquoise & Lime/Yellow Aviation Mark
export const FlynasLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="flynas">
    <rect width="100" height="100" rx="20" fill="#00A8B5" />
    {/* Stylized 'nas' wings */}
    <circle cx="38" cy="46" r="18" fill="#FDD000" />
    <circle cx="38" cy="46" r="10" fill="#00A8B5" />
    <path 
      d="M48 30 C58 30, 72 38, 80 52 C70 52, 60 44, 48 42 Z" 
      fill="#FFFFFF" 
    />
    <path 
      d="M44 48 C56 48, 70 56, 76 68 C66 68, 56 60, 44 58 Z" 
      fill="#FDD000" 
    />
    <circle cx="74" cy="34" r="4.5" fill="#FFFFFF" />
  </svg>
);

// Air Arabia: Iconic Red Seagull in Flight
export const AirArabiaLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Air Arabia">
    <circle cx="50" cy="50" r="48" fill="#E21E26" />
    {/* Soaring Seagull */}
    <path 
      d="M18 56 C32 44, 46 42, 54 48 C62 42, 74 44, 84 56 C74 54, 62 50, 54 58 C46 50, 30 54, 18 56 Z" 
      fill="#FFFFFF" 
    />
    <path 
      d="M32 64 C42 54, 50 54, 54 60 C58 54, 66 54, 74 64 C66 62, 58 58, 54 66 C50 58, 40 62, 32 64 Z" 
      fill="#F4A5A8" 
    />
    <circle cx="54" cy="38" r="4" fill="#FFFFFF" />
  </svg>
);

// Kuwait Airways: Blue Bird of Kuwait in Flight & Navy Roundel
export const KuwaitAirwaysLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Kuwait Airways">
    <circle cx="50" cy="50" r="48" fill="#003580" />
    {/* Blue Sky Bird / Falcon Silhouette */}
    <path 
      d="M24 58 C34 40, 48 32, 68 28 C62 36, 56 46, 54 56 C52 48, 44 52, 36 62 C34 62, 28 62, 24 58 Z" 
      fill="#00A3E0" 
    />
    <path 
      d="M36 66 C46 54, 56 50, 76 46 C70 54, 64 62, 60 70 C58 64, 50 64, 44 70 Z" 
      fill="#FFFFFF" 
    />
    <circle cx="68" cy="34" r="3.5" fill="#FFFFFF" />
  </svg>
);

// Etihad Airways: Faceted Golden Falcon Emblem
export const EtihadAirwaysLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Etihad Airways">
    <rect width="100" height="100" rx="20" fill="#1F2421" />
    {/* Faceted Geometric Falcon in Sand Gold & Bronze */}
    <polygon points="50,18 64,36 50,44 36,36" fill="#D4AF37" />
    <polygon points="36,36 50,44 42,66 22,50" fill="#BD9B60" />
    <polygon points="64,36 78,50 58,66 50,44" fill="#E8CD78" />
    <polygon points="50,44 58,66 50,82 42,66" fill="#F3E5AB" />
    <polygon points="22,50 42,66 32,78 18,60" fill="#A0783A" />
    <polygon points="78,50 82,60 68,78 58,66" fill="#D4AF37" />
  </svg>
);

// flyadeal: Vibrant Lime Green & Plum Purple Emblem
export const FlyadealLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="flyadeal">
    <rect width="100" height="100" rx="20" fill="#4B207F" />
    {/* Diagonal energetic speed bars in vibrant lime */}
    <path d="M22 72 L36 28 L48 28 L34 72 Z" fill="#9ACA3C" />
    <path d="M42 72 L56 28 L68 28 L54 72 Z" fill="#B4DC50" />
    <path d="M62 72 L76 38 L84 38 L72 72 Z" fill="#FFFFFF" />
    {/* Airplane silhouette accent */}
    <path d="M48 24 L54 18 L60 24 L56 26 Z" fill="#9ACA3C" />
  </svg>
);

// Air Cairo: Twin Cyan & Royal Blue Tail Fin Swirls
export const AirCairoLogo: React.FC<AirlineLogoProps> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-label="Air Cairo">
    <circle cx="50" cy="50" r="48" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    {/* Twin stylized aircraft vertical stabilizers */}
    <path 
      d="M32 72 L48 26 L58 26 L48 72 Z" 
      fill="#002D62" 
    />
    <path 
      d="M48 72 L62 34 L72 34 L62 72 Z" 
      fill="#00A3E0" 
    />
    <circle cx="64" cy="24" r="5" fill="#E31837" />
  </svg>
);

// Map of Airline Name to Component
export const AIRLINE_LOGO_MAP: Record<string, React.FC<AirlineLogoProps>> = {
  EgyptAir: EgyptAirLogo,
  Emirates: EmiratesLogo,
  'Qatar Airways': QatarAirwaysLogo,
  Saudia: SaudiaLogo,
  flynas: FlynasLogo,
  'Air Arabia': AirArabiaLogo,
  'Kuwait Airways': KuwaitAirwaysLogo,
  'Etihad Airways': EtihadAirwaysLogo,
  flyadeal: FlyadealLogo,
  'Air Cairo': AirCairoLogo,
};
