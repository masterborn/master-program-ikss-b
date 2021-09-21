import styled from 'styled-components';
import IconButton from '@root/components/buttons/misc/IconButton';
import { ButtonBigText } from '@root/styles/typography/buttonsText';
import Logo from '../../logos/BubbleLogo';
import NavbarSocials from './NavbarSocials';
import PrimaryButton from '../../buttons/primaryButton';

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

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinksContainer = styled.div`
  width: 41.3rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

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

export const Label = styled.h3(
  ({ theme: { color }, isHighlighted }) => `
  margin: 0 1.0rem;

  width: fit-content;

  cursor: pointer;

  text-align: center;
  
  ${ButtonBigText}

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

export const ContactButton = styled(PrimaryButton)`
  margin-left: auto;
  margin-right: 12rem;
`;

export const HamburgerMenu = styled(IconButton)`
  margin-left: auto;
  margin-right: 2.2rem;
`;
