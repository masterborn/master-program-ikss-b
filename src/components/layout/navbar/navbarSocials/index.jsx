import React from 'react';
import PropTypes from 'prop-types';

import useHideNavSocials from '@hooks/useHideNavSocials';
import { NavbarSocialsContainer, StyledSocialsCollection } from './NavbarSocials.styles';

export default function NavbarSocials({ socialsLinks, navbarHeight, homepageHeroRef }) {
  const isHidden = useHideNavSocials(homepageHeroRef, navbarHeight);

  return (
    <NavbarSocialsContainer isHidden={isHidden}>
      <StyledSocialsCollection socialsLinks={socialsLinks} isHidden={isHidden} />
    </NavbarSocialsContainer>
  );
}

NavbarSocials.propTypes = {
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
