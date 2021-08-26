import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  StyledNavbar,
  LinksContainer,
  StyledLogo,
  Label,
  StyledNavbarSocials,
  ContactButton,
} from './Navbar.styles';
import handleContactFormButton from './contactFormButton';

const MOCK_SOCIALS = {
  socialFb: {
    page: 'common',
    identifier: 'social-facebook',
    title: 'URL do Facebooka',
    linkUrl: 'https://www.facebook.com/IKSSUE/',
    linkCaption: 'Facebook',
  },
  socialIn: {
    page: 'common',
    identifier: 'social-linkedin',
    title: 'URL do LinkedIn',
    linkUrl: 'https://www.linkedin.com/company/informacjakulturalnosportowastudentowikss/',
  },
  socialIg: {
    page: 'common',
    identifier: 'social-instagram',
    title: 'URL do Instagrama',
    linkUrl: 'https://www.instagram.com/ikssue/',
  },
  socialYt: {
    page: 'common',
    identifier: 'social-youtube',
    title: 'URL do YouTube',
    linkUrl: 'https://www.youtube.com/channel/UC6cKLW4YEBqA7FWmkY0HThQ',
  },
};

// Form on homepage must have 'contact-form' id

export default function Navbar({ isMobile, paths, currPathname }) {
  const navbarHeight = isMobile ? '56px' : '88px';

  const handleClick = () => {
    handleContactFormButton(currPathname, navbarHeight);
  };

  return (
    <StyledNavbar>
      <Link href="/" passHref>
        <a href>
          <StyledLogo />
        </a>
      </Link>
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
