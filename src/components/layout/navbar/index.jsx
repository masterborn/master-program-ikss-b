import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { toggleModal } from '@redux/actions/modalActions';
import { HamburgerMenuIcon } from '@icons/misc';
import handleContactButton from '@generic/misc/contactFormActions';
import NavbarSocials from './navbarSocials';
import {
  StyledNavbar,
  NavbarWrapper,
  LinksContainer,
  StyledLogoLink,
  StyledLogo,
  ContactButton,
  HamburgerMenu,
  PageLink,
} from './Navbar.styles';
import Sidebar from './sidebar';

// Form on homepage must have 'contact-form' id

export default function Navbar({ socials, paths, currPathname, homepageHeroRef }) {
  const dispatch = useDispatch();
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const openContactModal = (isToggled) => dispatch(toggleModal(isToggled));
  const isMobile = useSelector((state) => state.isMobile);

  const navbarHeight = isMobile ? 56 : 88;

  const handleClickContactButton = () =>
    handleContactButton(currPathname, navbarHeight, openContactModal);

  const toggleSidebar = () => setIsSidebarOpened((prevState) => !prevState);
  return (
    <StyledNavbar>
      <NavbarWrapper>
        <Link href="/" passHref>
          <StyledLogoLink href>
            <StyledLogo />
          </StyledLogoLink>
        </Link>
        {isMobile ? (
          <>
            <HamburgerMenu icon={<HamburgerMenuIcon />} onClick={toggleSidebar} />
            <Sidebar
              isOpened={isSidebarOpened}
              handleCloseSidebar={toggleSidebar}
              paths={paths}
              currPathname={currPathname}
              handleContactButton={handleClickContactButton}
              socialsLinks={socials}
            />
          </>
        ) : (
          <>
            <LinksContainer>
              {paths.map(({ name, path }) => (
                <Link passHref href={path} key={path}>
                  <PageLink href isHighlighted={currPathname === path}>
                    {name}
                  </PageLink>
                </Link>
              ))}
            </LinksContainer>

            <NavbarSocials
              socialsLinks={socials}
              navbarHeight={navbarHeight}
              homepageHeroRef={homepageHeroRef}
            />

            <ContactButton onClick={handleClickContactButton}>Skontaktuj si??</ContactButton>
          </>
        )}
      </NavbarWrapper>
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
  homepageHeroRef: PropTypes.shape({}),
};

Navbar.defaultProps = {
  homepageHeroRef: null,
};
