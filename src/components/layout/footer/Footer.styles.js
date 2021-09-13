import styled from 'styled-components';
import { ButtonBigText } from '@root/styles/typography/buttonsText';
import ScrollUpButton from '../../buttons/ScrollUpButton';
import Logo from '../../logos/PlainLogo';
import { ParagraphSmall } from '../../../styles/typography/paragraphs';
import Socials from '../../icons/SocialsCollection';

export const StyledFooter = styled.footer(
  ({ theme: { medias, color } }) => `
  position: relative;

  width: 100%;
  height: 404px;

  background-color: ${color.ikssBlue};

  @media ${medias.mobile} {
    height: auto;
    margin-top: 90px;
  }
`,
);

export const FooterWrapper = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  position: relative;

  text-align: center;
`;

export const Filler = styled.div(
  ({ theme: { medias, color } }) => `
  position: absolute;
  left: 0;
  top: -324px;
  width: 100%;
  z-index: -100;
  height: 324px;
  background-color: ${color.ikssBlue};

  @media ${medias.mobile} {
    top: -296px;
    height: 296px;
  }
`,
);

export const StyledSrollUpButton = styled(ScrollUpButton)(
  ({ theme: { medias }, isOnHomepage }) => `
  position: absolute;
  top: ${isOnHomepage ? '-371px' : '-47px'};
  right: 126px;
  z-index: 1;
  & > g:hover {
    cursor: pointer;
  }

  @media ${medias.mobile} {
    top: -57px;
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

  padding-top: 56px;
  padding-bottom: 48px;
  z-index: 1;
`;

export const LinksContainer = styled.div(
  ({ theme: { medias } }) => `
  width: fit-content;

  margin-bottom: 48px;

  display: flex;
  justify-content: space-between;

  @media ${medias.mobile} {
    height: 144px;
    flex-direction: column;
  }
`,
);

export const Label = styled.h3(
  ({ theme: { color } }) => `
  min-width: fit-content;
  margin: 0px 32px;

  cursor: pointer;

  color: ${color.white};
  text-decoration: none;
  ${ButtonBigText}
  text-align: center;
`,
);

export const StyledSocials = styled(Socials)(
  ({ theme: { medias } }) => `
  margin-bottom: 29px;

  a {
    margin: 0px 32px;
  }

  @media ${medias.mobile} {
    width: 189px;
    display: flex;
    justify-content: space-between;

    a {
      margin: 0;
    }
  }
`,
);

export const StyledLogo = styled(Logo)`
  width: 84px;
  height: 48px;
`;

export const Paragraph = styled.p(
  ({ theme, theme: { medias, color } }) => `
  ${ParagraphSmall(theme)};
  margin-top: 56px;
  color: ${color.white};

  text-align: center;

  @media ${medias.mobile} {
    width: 300px;
    margin-top: 40px;
  }
`,
);

export const MBLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
