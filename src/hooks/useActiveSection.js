import { useEffect, useState } from 'react';

const useActiveSection = (ids, enabled = true) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    if (typeof IntersectionObserver !== 'function') return;

    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (targets.length === 0) return;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let best = null;
        ratios.forEach((ratio, id) => {
          if (ratio > 0 && (best === null || ratio > best.ratio)) {
            best = { id, ratio };
          }
        });

        if (best) setActive(best.id);
      },
      { threshold: [0.1, 0.3, 0.5, 0.75], rootMargin: '-60px 0px -30% 0px' }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
};

export default useActiveSection;
