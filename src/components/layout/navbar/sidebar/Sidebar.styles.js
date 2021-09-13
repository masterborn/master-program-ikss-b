import styled from 'styled-components';
import IconButton from '@root/components/buttons/misc/IconButton';
import PrimaryButton from '@root/components/buttons/primaryButton';
import Socials from '@root/components/icons/SocialsCollection';
import { ButtonBigText } from '@root/styles/typography/buttonsText';

export const SidebarContainer = styled.div(
  ({ isOpened }) => `
  width: ${isOpened ? '100%' : '0px'};
  height: 100%;
  position: absolute;
`,
);

export const SidebarBackground = styled.button(
  ({ theme: { color } }) => `
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;

  border: none;

  background-color: ${color.navy};
  opacity: 0.6;
`,
);

export const SidebarPanel = styled.div(
  ({ theme: { color }, isOpened }) => `
  width: ${isOpened ? '300px' : '0px'};
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  transition: width 0.15s ease-in;

  overflow-x: hidden;
  border-radius: 16px 0px 0px 0px;
  background-color: ${color.white};
`,
);

export const CloseButton = styled(IconButton)`
  margin: 21px 29px 21px 258px;
`;

export const Label = styled.h3(
  ({ theme: { color }, isHighlighted }) => `
  margin: 0 10px;

  width: fit-content;

  cursor: pointer;

  white-space: nowrap;
  text-align: center;
  
  ${ButtonBigText}

  text-decoration: none;

  color: ${isHighlighted ? color.navy : color.steel};
`,
);

export const LinksContainer = styled.div`
  width: 100%;
  height: 272px;

  display: flex;
  flex-direction: column;
`;

export const SubpageLink = styled.a(
  ({ pathname }) => `
  margin: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;

  text-decoration: none;

  box-shadow: ${
    pathname === 'Strona główna'
      ? 'inset 0px 1.5px 0px #EAF5FF, inset 0px -1.5px 0px #EAF5FF'
      : 'inset 0px -1.5px 0px #eaf5ff'
  };

  &:hover {
    h3 {
      opacity: 0.73;
    }
  }
`,
);

export const ContactButton = styled(PrimaryButton)`
  margin-top: 40px;
  margin-left: 87px;
  margin-right: auto;
`;

export const StyledSocials = styled(Socials)`
  width: 200px;

  margin-top: 40px;
  margin-left: 50px;
  margin-right: auto;

  display: flex;
  justify-content: space-between;

  svg {
    transform: scale(1.33);
  }
`;
