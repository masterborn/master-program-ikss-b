import styled from 'styled-components';

import IconButton from '@buttons/misc/IconButton';
import PrimaryButton from '@buttons/primaryButton';
import Socials from '@icons/SocialsCollection';
import { ButtonBigText } from '@typography/buttonsText';

export const SidebarContainer = styled.div(
  ({ isOpened }) => `
  width: ${isOpened ? '100%' : '.0rem'};
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
  width: ${isOpened ? '30.0rem' : '.0rem'};
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  transition: width 0.15s ease-in;

  overflow-x: hidden;
  border-radius: 1.6rem .0rem .0rem .0rem;
  background-color: ${color.white};
`,
);

export const CloseButton = styled(IconButton)`
  margin: 2.1rem 2.9rem 2.1rem 25.8rem;
`;

export const Label = styled.h3(
  ({ theme: { color }, isHighlighted }) => `
  margin: 0 1.0rem;

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
  height: 27.2rem;

  display: flex;
  flex-direction: column;
`;

export const SubpageLink = styled.a(
  ({ pathname }) => `
  margin: 0;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-left: 2.4rem;

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
  margin-top: 4rem;
  margin-left: 8.7rem;
  margin-right: auto;
`;

export const StyledSocials = styled(Socials)`
  width: 20rem;

  margin-top: 4rem;
  margin-left: 5rem;
  margin-right: 5rem;

  display: flex;
  justify-content: flex-start;

  a {
    width: 3.2rem;
    margin-right: 2.4rem;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    transform: scale(1.33);
  }
`;
