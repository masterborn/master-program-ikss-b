import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openModal } from '@root/redux/actions/modalActions';
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
  fb: 'https://www.facebook.com/',
  ig: 'https://www.instagram.com/',
  yt: 'https://www.youtube.com/',
  in: 'https://www.linkedin.com/',
};

// Form on homepage must have 'contact-form' id

export default function Navbar({ paths, currPathname }) {
  const dispatch = useDispatch();
  const navbarHeight = '88px';

  const closeContactModal = () => dispatch(openModal());

  const handleClick = () => handleContactFormButton(currPathname, navbarHeight, closeContactModal);
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
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  currPathname: PropTypes.string.isRequired,
};
