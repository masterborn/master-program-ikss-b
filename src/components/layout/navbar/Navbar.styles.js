import styled from 'styled-components';
import IconButton from '@root/components/buttons/misc/IconButton';
import Logo from '../../logos/BubbleLogo';
import NavbarSocials from './NavbarSocials';
import PrimaryButton from '../../buttons/primaryButton';

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 88px;

  position: sticky;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: row;
  align-items: center;

  z-index: 9999;

  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);

  @media (max-width: 550px) {
    height: 56px;
  }
`;

export const LinksContainer = styled.div`
  width: 413px;
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-left: 126px;
`;

export const StyledLogoLink = styled.a`
  margin-left: 120px;

  @media (max-width: 550px) {
    width: 56px;
    height: 35px;
    margin-left: 24px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 78px;
  height: 48.8px;

  @media (max-width: 550px) {
    width: 56px;
    height: 35px;
  }
`;

export const Label = styled.h3`
  margin: 0 10px;

  width: fit-content;

  cursor: pointer;

  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;

  color: ${(props) => (props.isHighlighted ? props.theme.color.navy : props.theme.color.steel)};
`;

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
