import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Logo from '../../logos/BubbleLogo';
import Socials from './NavbarSocials';
import PrimaryButton from '../../buttons/primaryButton';
import handleContactFormButton from './contactFormButton';

const MOCK_SOCIALS = {
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
};

// Form on homepage must have 'contact-form' id

export default function Navbar({ className, isMobile, paths, currPathname }) {
  const navbarHeight = isMobile ? '56px' : '88px';

  const handleClick = () => {
    handleContactFormButton(currPathname, navbarHeight);
  };

  return (
    <nav className={className}>
      <Link href="/" passHref>
        <a href>
          <Logo />
        </a>
      </Link>
      <div className="links">
        {paths.map(({ name, path }) => (
          <Link href={path} key={path} passHref>
            <a href className={currPathname === path ? 'highlighted' : ''}>
              {name}
            </a>
          </Link>
        ))}
      </div>

      <Socials
        socialsLinks={MOCK_SOCIALS}
        currPathname={currPathname}
        navbarHeight={navbarHeight}
      />

      <PrimaryButton onClick={handleClick}>Skontaktuj się</PrimaryButton>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  currPathname: PropTypes.string.isRequired,
};
