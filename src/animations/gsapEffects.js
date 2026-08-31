import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks if user prefers reduced motion
 */
export const isReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Premium Hero Entrance Animation
 */
export const animateHeroEntrance = (targets) => {
  if (isReducedMotion() || !targets) return;

  const { badge, titleLines, subtitle, ctas, visual } = targets;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1.1 }
  });

  if (badge) {
    tl.fromTo(
      badge,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }

  if (titleLines && titleLines.length > 0) {
    tl.fromTo(
      titleLines,
      { opacity: 0, y: 40, skewY: 2 },
      { opacity: 1, y: 0, skewY: 0, stagger: 0.15, duration: 1.2 },
      '-=0.5'
    );
  }

  if (subtitle) {
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.9 },
      '-=0.7'
    );
  }

  if (ctas) {
    tl.fromTo(
      ctas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
      '-=0.6'
    );
  }

  if (visual) {
    tl.fromTo(
      visual,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
      '-=1.0'
    );
  }

  return tl;
};

/**
 * Scroll Trigger Reveal for Editorial Sections
 */
export const animateSectionReveal = (element, options = {}) => {
  if (isReducedMotion() || !element) return;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: options.y || 40
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 1.0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 85%',
        toggleActions: 'play none none reverse',
        once: options.once !== undefined ? options.once : true
      }
    }
  );
};
