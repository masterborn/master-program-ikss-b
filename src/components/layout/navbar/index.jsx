import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '@root/redux/actions/modalActions';
import { HamburgerMenuIcon } from '@root/components/Generic/icons/misc';
import {
  StyledNavbar,
  FooterWrapper,
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

// Form on homepage must have 'contact-form' id

export default function Navbar({ socials, paths, currPathname }) {
  const dispatch = useDispatch();
  const navbarHeight = '88px';
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const openContactModal = (isToggled) => dispatch(toggleModal(isToggled));
  const isMobile = useSelector((state) => state.isMobile);

  const handleClickContactButton = () =>
    handleContactFormButton(currPathname, navbarHeight, openContactModal);

  const toggleSidebar = () => setIsSidebarOpened((prevState) => !prevState);
  return (
    <StyledNavbar>
      <FooterWrapper>
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

            <ContactButton onClick={handleClickContactButton}>Skontaktuj się</ContactButton>
          </>
        )}
      </FooterWrapper>
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
