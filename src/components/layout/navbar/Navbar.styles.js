import styled from 'styled-components';

import IconButton from '@buttons/misc/IconButton';
import { ButtonBigText } from '@typography/buttonsText';
import Logo from '@logos/BubbleLogo';
import StyledPrimaryButton from '@generic/buttons/primaryButton/StyledPrimaryButton';
import NavbarSocials from './NavbarSocials';

export const StyledNavbar = styled.nav(
  ({ theme: { medias, color } }) => `
  width: 100%;
  height: 8.8rem;

  position: sticky;
  left: .0rem;
  top: .0rem;

  display: flex;
  flex-direction: row;
  justify-content: center;

  z-index: 99;

  background: ${color.white};
  box-shadow: 0 0.4rem 1.6rem rgba(97, 121, 139, 0.1);

  @media ${medias.mobile} {
    height: 5.6rem;
  }
`,
);

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinksContainer = styled.ul`
  width: 41.3rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
  justify-content: space-between;

  margin-left: 12.6rem;
`;

export const StyledLogoLink = styled.a(
  ({ theme: { medias } }) => `
  margin-left: 12.0rem;

  @media ${medias.mobile} {
    width: 5.6rem;
    height: 3.5rem;
    margin-left: 2.4rem;
  }
`,
);

export const StyledLogo = styled(Logo)(
  ({ theme: { medias } }) => `
  width: 7.8rem;
  height: 4.88rem;

  @media ${medias.mobile} {
    width: 5.6rem;
    height: 3.5rem;
  }
`,
);

export const PageLink = styled.a(
  ({ theme: { color }, isHighlighted }) => `
  ${ButtonBigText}

  margin: 0 1.0rem;
  width: fit-content;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${isHighlighted ? color.navy : color.steel};
`,
);

export const StyledNavbarSocials = styled(NavbarSocials)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-left: 19.9rem;

  & > a {
    margin: 0rem 2rem;
  }
`;

export const ContactButton = styled(StyledPrimaryButton)`
  margin-left: auto;
  margin-right: 12rem;
  min-width: 130px;
`;

export const HamburgerMenu = styled(IconButton)`
  margin-left: auto;
  margin-right: 2.2rem;
`;
