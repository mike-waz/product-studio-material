// Reusable icon components for visual variety throughout the site

export function IconRocket({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 7 7 7 12C7 14.5 8.5 17 12 17C15.5 17 17 14.5 17 12C17 7 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function IconShield({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L4 7V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLightning({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconTarget({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  );
}

export function IconBrain({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C9 4 7 6 7 8C5 8 4 10 4 12C4 14 5.5 16 8 16C8 18 10 20 12 20C14 20 16 18 16 16C18.5 16 20 14 20 12C20 10 19 8 17 8C17 6 15 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function IconUsers({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 19C3 15.6863 5.68629 13 9 13C12.3137 13 15 15.6863 15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 13C18.7614 13 21 15.2386 21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconGear({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2V4M12 20V22M22 12H20M4 12H2M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconChart({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 16L11 11L15 14L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLayers({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconArrowRight({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconClock({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconCheck({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconEye({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function IconAccessibility({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 14L8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 14L16 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPuzzle({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7H20V13C18.3431 13 17 14.3431 17 16C17 17.6569 18.3431 19 20 19V20H4V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 20V17C8.65685 17 10 15.6569 10 14C10 12.3431 8.65685 11 7 11V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconMessage({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconStar({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconTrophy({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 3H7V9C7 12.3137 9.68629 15 13 15H11C14.3137 15 17 12.3137 17 9V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5H19C20.1046 5 21 5.89543 21 7V8C21 9.10457 20.1046 10 19 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 5H5C3.89543 5 3 5.89543 3 7V8C3 9.10457 3.89543 10 5 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconCode({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconRefresh({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3313 3 18.2398 4.80905 19.796 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 3V7.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
