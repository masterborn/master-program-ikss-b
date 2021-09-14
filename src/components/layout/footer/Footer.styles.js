import styled from 'styled-components';
import { ButtonBigText } from '@root/styles/typography/buttonsText';
import ScrollUpButton from '../../Generic/buttons/ScrollUpButton';
import Logo from '../../Generic/logos/PlainLogo';
import { ParagraphSmall } from '../../../styles/typography/paragraphs';
import Socials from '../../Generic/icons/SocialsCollection';

export const StyledFooter = styled.footer(
  ({ theme: { medias, color } }) => `
  position: relative;

  width: 100%;
  height: 40.4rem;

  background-color: ${color.ikssBlue};

  @media ${medias.mobile} {
    height: auto;
  }
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
  position: absolute;
  top: ${isOnHomepage ? '-37.1rem' : '-4.7rem'};
  right: 12.6rem;
  z-index: 1;
  & > g:hover {
    cursor: pointer;
  }

  @media ${medias.mobile} {
    top: -5.7rem;
    right: 50%;
    transform: translateX(50%);
  }
`,
);

export const Centered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5.6rem;
  padding-bottom: 4.8rem;
  z-index: 1;
`;

export const LinksContainer = styled.div(
  ({ theme: { medias } }) => `
  width: fit-content;

  margin-bottom: 4.8rem;

  display: flex;
  justify-content: space-between;

  @media ${medias.mobile} {
    height: 14.4rem;
    flex-direction: column;
  }
`,
);

export const Label = styled.h3(
  ({ theme: { color } }) => `
  min-width: fit-content;
  margin: .0rem 3.2rem;

  cursor: pointer;

  color: ${color.white};
  text-decoration: none;
  ${ButtonBigText}
  text-align: center;
`,
);

export const StyledSocials = styled(Socials)(
  ({ theme: { medias } }) => `
  margin-bottom: 2.9rem;

  a {
    margin: .0rem 3.2rem;
  }

  @media ${medias.mobile} {
    width: 18.9rem;
    display: flex;
    justify-content: space-between;

    a {
      margin: 0;
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
    margin-top: 4.0rem;
  }
`,
);

export const MBLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
