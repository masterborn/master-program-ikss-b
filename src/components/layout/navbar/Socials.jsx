import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FbCircleIcon, IgCircleIcon, YtCircleIcon, InCircleIcon } from '../../icons/socialCircle';

// Add 'hideNavSocials' class to a section,
// to specify if navbar's social icons should be hidden

export default function Socials({ socialsLinks, currPathname }) {
  const [hideSocials, setHideSocials] = useState(false);

  useEffect(() => {
    const section = document.querySelector('.hideNavSocials');

    if (section) {
      const options = {
        rootMargin: '-88px',
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
  }, [currPathname]);

  if (hideSocials) return null;

  return (
    <div className="socials">
      <a href={socialsLinks.fb}>
        <FbCircleIcon />
      </a>
      <a href={socialsLinks.ig}>
        <IgCircleIcon />
      </a>
      <a href={socialsLinks.yt}>
        <YtCircleIcon />
      </a>
      <a href={socialsLinks.in}>
        <InCircleIcon />
      </a>
    </div>
  );
}

Socials.propTypes = {
  socialsLinks: PropTypes.shape({
    fb: PropTypes.string,
    ig: PropTypes.string,
    yt: PropTypes.string,
    in: PropTypes.string,
  }).isRequired,
  currPathname: PropTypes.string.isRequired,
};
