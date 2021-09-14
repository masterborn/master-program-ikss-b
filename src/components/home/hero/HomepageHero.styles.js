import styled from 'styled-components';
import Socials from '@root/components/icons/SocialsCollection';
import { Header1, Header4 } from '../../../styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '../../../styles/typography/paragraphs';

export const StyledHomepageHero = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${medias.mobile} {
    max-width: 550px;
    min-width: 300px;
    width: 100%;
  }
`,
);

export const Content = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;

  @media ${medias.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,
);

export const TextSection = styled.div(
  ({ theme: { medias } }) => `
  min-width: 416px;
  margin-top: 77px;
  margin-left: 120px;
  @media ${medias.mobile} {
    min-width: 300px;
    margin-top: 40px;
    margin-left: 0;
    padding: 0 24px;
    order: 2;
  }
`,
);

export const HomepageHeroVideo = styled.video(
  ({ theme: { medias } }) => `
  width: 808px;
  height: 505px;

  @media ${medias.mobile} {
    order: 1;
    width: 100%;
    max-width: 550px;
    height: auto;
  }
`,
);

export const StyledSocials = styled(Socials)(
  ({ theme: { medias, color } }) => `
  width: 1037px;
  height: 137px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 120px;
  padding-left: 56px;

  background-color: ${color.white};

  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px 0px 0px 16px;

  @media ${medias.mobile} {
    width: 80%;
    height: 80px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: space-around;
  }

  a {
    height: 48px;
    display: flex;
    flex: row;
    align-items: center;

    text-decoration: none;

    color: ${color.navy};
    svg {
      transform: scale(2);
      margin-right: 24px;
      margin-left: 24px;

      @media ${medias.mobile} {
        transform: scale(1.5);
        margin: 0;
      }
    }
    @media ${medias.mobile} {
      height: 32px;
      width: 32px;
    }
  }
`,
);

export const Header = styled.h1(
  ({ theme: { medias } }) => `
  width: 100%;
  ${Header1};

  @media ${medias.mobile} {
    ${Header4};
  }
`,
);
export const HomepageHeroImage = styled.img`
  width: 808px;
  height: 505px;
`;

export const Paragraph = styled.p(
  ({ theme: { medias, color } }) => `
  width: 100%;
  margin: 32px 0;
  ${ParagraphBody};
  color: ${color.steel};

  @media ${medias.mobile} {
    margin: 24px 0;

    ${ParagraphSmall};
  }
`,
);
