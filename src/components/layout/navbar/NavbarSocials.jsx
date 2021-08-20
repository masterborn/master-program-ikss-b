import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SocialsCollection from '../../icons/SocialsCollection';

// Add 'hideNavSocials' class to a section,
// to specify if navbar's social icons should be hidden

export default function NavbarSocials({ socialsLinks, currPathname, navbarHeight }) {
  const [hideSocials, setHideSocials] = useState(false);

  useEffect(() => {
    const section = document.querySelector('.hideNavSocials');

    if (section) {
      const options = {
        rootMargin: `-${navbarHeight}`,
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setHideSocials(entry.isIntersecting);
        });
      }, options);

      observer.observe(section);

      return () => {
        observer.disconnect();
        setHideSocials(false);
      };
    }

    return null;
  }, [currPathname, navbarHeight]);

  if (hideSocials) return null;

  return <SocialsCollection className="socials" socialsLinks={socialsLinks} />;
}

NavbarSocials.propTypes = {
  socialsLinks: PropTypes.shape({
    fb: PropTypes.string,
    ig: PropTypes.string,
    yt: PropTypes.string,
    in: PropTypes.string,
  }).isRequired,
  currPathname: PropTypes.string.isRequired,
  navbarHeight: PropTypes.string.isRequired,
};
