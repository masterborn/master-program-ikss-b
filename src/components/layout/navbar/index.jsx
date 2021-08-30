import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '@root/redux/actions/modalActions';
import { HamburgerMenuIcon } from '@root/components/icons/misc';
import {
  StyledNavbar,
  LinksContainer,
  StyledLogoLink,
  StyledLogo,
  Label,
  StyledNavbarSocials,
  ContactButton,
  HamburgerMenu,
} from './Navbar.styles';
import handleContactFormButton from './contactFormButton';
import Sidebar from './sidebar';

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

export default function Navbar({ paths, currPathname }) {
  const dispatch = useDispatch();
  const navbarHeight = '88px';
  const [isSidebarOpened, toggleSidebar] = useState(false);
  const openContactModal = (isToggled) => dispatch(toggleModal(isToggled));
  const isMobile = useSelector((state) => state.isMobile);

  const handleClickContactButton = () =>
    handleContactFormButton(currPathname, navbarHeight, openContactModal);

  const handleOpenSidebar = () => toggleSidebar(true);
  const handleCloseSidebar = () => toggleSidebar(false);
  return (
    <StyledNavbar>
      <Link href="/" passHref>
        <StyledLogoLink href>
          <StyledLogo />
        </StyledLogoLink>
      </Link>
      {isMobile ? (
        <>
          <HamburgerMenu icon={<HamburgerMenuIcon />} onClick={handleOpenSidebar} />
          <Sidebar
            isOpened={isSidebarOpened}
            handleCloseSidebar={handleCloseSidebar}
            paths={paths}
            currPathname={currPathname}
            handleContactFormButton={handleClickContactButton}
            socialsLinks={MOCK_SOCIALS}
          />
        </>
      ) : (
        <>
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

          <ContactButton onClick={handleClickContactButton}>Skontaktuj się</ContactButton>
        </>
      )}
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
