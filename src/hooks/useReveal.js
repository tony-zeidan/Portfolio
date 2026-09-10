import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const useReveal = () => {
  const ref = useRef(null);
  const [shown, setShown] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver !== 'function'
  );

  useEffect(() => {
    if (shown || !ref.current) return;

    let delivered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(ref.current);

    const fallback = setTimeout(() => {
      if (!delivered) setShown(true);
    }, 1000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [shown]);

  return [ref, shown];
};

export default useReveal;
