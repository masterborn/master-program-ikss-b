import styled from 'styled-components';
import IconButton from '@root/components/buttons/misc/IconButton';
import { ButtonBigText } from '@root/styles/typography/buttonsText';
import Logo from '../../logos/BubbleLogo';
import NavbarSocials from './NavbarSocials';
import PrimaryButton from '../../buttons/primaryButton';

export const StyledNavbar = styled.nav(
  ({ theme: { medias, color } }) => `
  width: 100%;
  height: 88px;

  position: sticky;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  z-index: 99;

  background: ${color.white};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);

  @media ${medias.mobile} {
    height: 56px;
  }
`,
);

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinksContainer = styled.div`
  width: 413px;
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-left: 126px;
`;

export const StyledLogoLink = styled.a(
  ({ theme: { medias } }) => `
  margin-left: 120px;

  @media ${medias.mobile} {
    width: 56px;
    height: 35px;
    margin-left: 24px;
  }
`,
);

export const StyledLogo = styled(Logo)(
  ({ theme: { medias } }) => `
  width: 78px;
  height: 48.8px;

  @media ${medias.mobile} {
    width: 56px;
    height: 35px;
  }
`,
);

export const Label = styled.h3(
  ({ theme: { color }, isHighlighted }) => `
  margin: 0 10px;

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

  margin-left: 199px;

  & > a {
    margin: 0px 20px;
  }
`;

export const ContactButton = styled(PrimaryButton)`
  margin-left: auto;
  margin-right: 120px;
`;

export const HamburgerMenu = styled(IconButton)`
  margin-left: auto;
  margin-right: 22px;
`;
