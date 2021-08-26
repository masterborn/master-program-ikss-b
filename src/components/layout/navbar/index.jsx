import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleModal } from '@root/redux/actions/modalActions';
import {
  StyledNavbar,
  LinksContainer,
  StyledLogo,
  Label,
  StyledNavbarSocials,
  ContactButton,
} from './Navbar.styles';
import handleContactFormButton from './contactFormButton';

// Form on homepage must have 'contact-form' id

export default function Navbar({ socials, paths, currPathname }) {
  const dispatch = useDispatch();
  const navbarHeight = '88px';

  const openContactModal = (isToggled) => dispatch(toggleModal(isToggled));

  const handleClick = () => handleContactFormButton(currPathname, navbarHeight, openContactModal);
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
        socialsLinks={socials}
        currPathname={currPathname}
        navbarHeight={navbarHeight}
      />

      <ContactButton onClick={handleClick}>Skontaktuj się</ContactButton>
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  socials: PropTypes.shape({}).isRequired,
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  currPathname: PropTypes.string.isRequired,
};
