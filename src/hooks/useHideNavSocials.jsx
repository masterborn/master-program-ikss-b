import { useState, useEffect } from 'react';

export default function useHideNavSocials(homepageHeroRef, navbarHeight) {
  const [hideSocials, setHideSocials] = useState(false);

  useEffect(() => {
    if (homepageHeroRef?.current) {
      const options = {
        rootMargin: `-${navbarHeight}px`,
      };
      const observer = new IntersectionObserver(([entry]) => {
        setHideSocials(entry.isIntersecting);
      }, options);

      observer.observe(homepageHeroRef.current);

      return () => {
        observer.disconnect();
        setHideSocials(false);
      };
    }

    return null;
  }, [homepageHeroRef, navbarHeight]);

  return hideSocials;
}
