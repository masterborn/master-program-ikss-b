import styled from 'styled-components';

import { ButtonBigText, ButtonSmallText } from '@typography/buttonsText';
import ScrollUpButton from '@buttons/ScrollUpButton';
import Logo from '@logos/PlainLogo';
import { ParagraphSmall } from '@typography/paragraphs';
import Socials from '@icons/SocialsCollection';

export const StyledFooter = styled.footer(
  ({ theme: { color } }) => `
  position: relative;

  width: 100%;

  background-color: ${color.ikssBlue};
`,
);

export const FooterWrapper = styled.div`
  max-width: 144rem;
  height: 100%;
  margin: 0 auto;

  position: relative;

  text-align: center;
`;

export const Filler = styled.div(
  ({ theme: { medias, color } }) => `
  position: absolute;
  left: 0;
  top: -32.4rem;
  width: 100%;
  z-index: -100;
  height: 32.4rem;
  background-color: ${color.ikssBlue};

  @media ${medias.mobile} {
    top: -29.6rem;
    height: 29.6rem;
  }
`,
);

export const StyledSrollUpButton = styled(ScrollUpButton)(
  ({ theme: { medias }, isOnHomepage }) => `
  margin-left: 49.9rem;
  position: absolute;
  top: ${isOnHomepage ? '-37.1rem' : '-4.7rem'};
  
  z-index: 1;
  & > g:hover {
    cursor: pointer;
  }

  @media ${medias.mobile} {
    transform: scale(0.625);
    margin-left: 0;
    position: relative;
    top: -5.4rem;
    margin-bottom: -11rem;
  }
`,
);

export const Centered = styled.div(
  ({ theme: { medias }, isOnHomepage }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${isOnHomepage ? '10.1rem' : '5.6rem'};
  padding-bottom: 4.8rem;
  z-index: 1;

  @media ${medias.mobile} {
    padding-top: 4rem;
  }
`,
);

export const LinksContainer = styled.div(
  ({ theme: { medias } }) => `
  width: 41.3rem;

  margin-bottom: 4.8rem;

  display: flex;
  justify-content: space-between;

  @media ${medias.mobile} {
    width: 100%;
    height: 14.4rem;
    margin-bottom: 4.1rem;

    flex-direction: column;
  }
`,
);

export const Label = styled.h3(
  ({ theme: { color, medias } }) => `
  cursor: pointer;

  color: ${color.white};
  text-decoration: none;
  ${ButtonBigText}
  text-align: center;

  @media ${medias.mobile} {
    ${ButtonSmallText}
  }
`,
);

export const StyledSocials = styled(Socials)(
  ({ theme: { medias } }) => `
  width: 18.9rem;

  margin-bottom: 5rem;

  display: flex;
  justify-content: space-between;

  @media ${medias.mobile} {
    width: 18.9rem;

    margin-bottom: 4.2rem;


    a {
      margin: 0;
      transform: scale(0.75);
    }
  }
`,
);

export const StyledLogo = styled(Logo)`
  width: 8.4rem;
  height: 4.8rem;
`;

export const Paragraph = styled.p(
  ({ theme: { medias, color } }) => `
  ${ParagraphSmall};
  margin-top: 5.6rem;
  color: ${color.white};

  text-align: center;

  @media ${medias.mobile} {
    width: 30.0rem;
    margin-top: 4rem;
  }
`,
);

export const MBLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
