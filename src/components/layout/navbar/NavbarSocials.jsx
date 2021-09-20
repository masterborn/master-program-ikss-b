import React from 'react';
import PropTypes from 'prop-types';
import useHideNavSocials from '@hooks/useHideNavSocials';
import SocialsCollection from '../../icons/SocialsCollection';

export default function NavbarSocials({ className, socialsLinks, navbarHeight, homepageHeroRef }) {
  const hideSocials = useHideNavSocials(homepageHeroRef, navbarHeight);

  if (hideSocials) return null;

  return <SocialsCollection className={className} socialsLinks={socialsLinks} />;
}

NavbarSocials.propTypes = {
  className: PropTypes.string.isRequired,
  socialsLinks: PropTypes.shape({
    fb: PropTypes.string,
    ig: PropTypes.string,
    yt: PropTypes.string,
    in: PropTypes.string,
  }).isRequired,
  homepageHeroRef: PropTypes.shape({}),
  navbarHeight: PropTypes.number.isRequired,
};

NavbarSocials.defaultProps = {
  homepageHeroRef: null,
};
