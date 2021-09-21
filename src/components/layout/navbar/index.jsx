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
  StyledNavbarSocials,
  ContactButton,
  HamburgerMenu,
  NavWrapper,
  PageLink,
} from './Navbar.styles';
import handleContactFormButton from './contactFormButton';
import Sidebar from './sidebar';

// Form on homepage must have 'contact-form' id

export default function Navbar({ socials, paths, currPathname, homepageHeroRef }) {
  const dispatch = useDispatch();
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const openContactModal = (isToggled) => dispatch(toggleModal(isToggled));
  const isMobile = useSelector((state) => state.isMobile);

  const navbarHeight = isMobile ? 56 : 88;

  const handleClickContactButton = () =>
    handleContactFormButton(currPathname, navbarHeight, openContactModal);

  const toggleSidebar = () => setIsSidebarOpened((prevState) => !prevState);
  return (
    <StyledNavbar>
      <NavWrapper>
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
              handleContactFormButton={handleClickContactButton}
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

            <StyledNavbarSocials
              socialsLinks={socials}
              navbarHeight={navbarHeight}
              homepageHeroRef={homepageHeroRef}
            />

            <ContactButton onClick={handleClickContactButton}>Skontaktuj się</ContactButton>
          </>
        )}
      </NavWrapper>
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
