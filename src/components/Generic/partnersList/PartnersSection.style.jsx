import styled from 'styled-components';

import { Header3, Header4 } from '@typography/headers';
import { ParagraphBody, ParagraphSmall } from '@typography/paragraphs';

export const LogosSection = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 113.4rem;
  height: auto;
  margin-top: 14.8rem;

  @media ${medias.mobile} {
    width: 100%;
    max-width: 55.0rem;
    padding: 0 2.6rem 0 2.6rem;
    height: auto;
  } ;
`,
);
export const PartnersHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;
  text-align: center;
  
  ${Header3};
  @media ${medias.mobile} {
    ${Header4};
    margin-bottom: 1.6rem;
  }
`,
);

export const PartnersDescription = styled.p(
  ({ theme: { medias } }) => `
  text-align: center;
  width: 63.5rem;
  height: 6.4rem;
  ${ParagraphBody};

  @media ${medias.mobile} {
    ${ParagraphSmall};
    width: 100%;
    max-width: 55.0rem;
    height: auto;
    min-height: 11.2rem;
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
  width: 113.4rem;
  margin-top: 8.0rem;

  @media ${medias.mobile} {
    width: 100%;
    max-width: 55.0rem;
    margin-top: 3.2rem;
    min-height: 30.2rem;
    height: auto;
  }
`,
);

export const Logo = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.6rem;
  height: 11.2rem;

  @media ${medias.mobile} {
    width: calc(100% / 3);
    height: auto;
    margin-bottom: 3.0rem;

    & a,
    img {
      width: 85%;
      height: auto;
      min-height: 3.5rem;
      max-height: 4.0rem;
    }
  } ;
`,
);
