import { useEffect } from 'react';

// Fades and slides `.reveal` elements into place the first time they scroll into view.
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
