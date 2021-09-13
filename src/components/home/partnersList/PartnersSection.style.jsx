import { Header3, Header4 } from '@root/styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const LogosSection = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1134px;
  height: auto;
  margin-top: 148px;

  @media ${medias.mobile} {
    width: 100%;
    max-width: 550px;
    padding: 0 26px 0 26px;
    height: auto;
  } ;
`,
);
export const PartnersHeader = styled.h3(
  ({ theme, theme: { medias } }) => `
  margin-bottom: 32px;
  ${Header3(theme)};
  @media ${medias.mobile} {
    ${Header4(theme)};
    margin-bottom: 16px;
  }
`,
);

export const PartnersDescription = styled.p(
  ({ theme, theme: { medias } }) => `
  text-align: center;
  width: 635px;
  height: 64px;
  ${ParagraphBody(theme)};

  @media ${medias.mobile} {
    ${ParagraphSmall(theme)};
    width: 100%;
    max-width: 550px;
    height: auto;
    min-height: 112px;
  }
`,
);

export const LogosContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  height: auto;
  width: 1134px;
  margin-top: 80px;

  @media ${medias.mobile} {
    width: 100%;
    max-width: 550px;
    margin-top: 32px;
    min-height: 302px;
    height: auto;
  }
`,
);

export const Logo = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 226px;
  height: 112px;

  @media ${medias.mobile} {
    width: calc(100% / 3);
    height: auto;
    margin-bottom: 30px;

    & a,
    img {
      width: 85%;
      height: auto;
      min-height: 35px;
      max-height: 40px;
    }
  } ;
`,
);
