import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  StyledNavbar,
  LinksContainer,
  StyledLogoLink,
  StyledLogo,
  Label,
  StyledNavbarSocials,
  ContactButton,
} from './Navbar.styles';
import handleContactFormButton from './contactFormButton';

const MOCK_SOCIALS = {
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
};

// Form on homepage must have 'contact-form' id

export default function Navbar({ isMobile, paths, currPathname }) {
  const navbarHeight = isMobile ? '56px' : '88px';

  const handleClick = () => {
    handleContactFormButton(currPathname, navbarHeight);
  };

  return (
    <StyledNavbar>
      <StyledLogoLink href="/" passHref>
        <a href>
          <StyledLogo />
        </a>
      </StyledLogoLink>
      <LinksContainer>
        {paths.map(({ name, path }) => (
          <Link href={path} key={path}>
            <Label isHighlighted={currPathname === path}>{name}</Label>
          </Link>
        ))}
      </LinksContainer>

      <StyledNavbarSocials
        socialsLinks={MOCK_SOCIALS}
        currPathname={currPathname}
        navbarHeight={navbarHeight}
      />

      <ContactButton onClick={handleClick}>Skontaktuj się</ContactButton>
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  currPathname: PropTypes.string.isRequired,
};
