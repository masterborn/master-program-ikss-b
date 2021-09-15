import styled from 'styled-components';

import { Header1, Header3 } from '@typography/headers';
import { ParagraphBody, ParagraphSmall } from '@typography/paragraphs';

export const TopSectionContainer = styled.section(
  ({ theme: { medias }, isOnCooperationPage }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${isOnCooperationPage ? '58.3rem' : 'auto'};

  height: auto;
  text-align: center;
  @media ${medias.mobile} {
    padding: 0 2.4rem;
    width: auto;
  }
`,
);
export const TopSectionImage = styled.img(
  ({ theme: { medias } }) => `
  margin-top: 6.4rem;

  @media ${medias.mobile} {
    margin-top: 3.2rem;
  }
`,
);

export const TopSectionHeader = styled.h1(
  ({ theme: { medias } }) => `
  ${Header1};
  margin-top: 1.6rem;

  @media ${medias.mobile} {
    ${Header3};
    margin-top: .8rem;
  }
`,
);

export const TopSectionDescription = styled.p(
  ({ theme: { medias } }) => `
  margin-top: 3.2rem;
  max-width: 99.6rem;
  height: 9.6rem;
  ${ParagraphBody};

  @media ${medias.mobile} {
    ${ParagraphSmall};
    width: 100%;
    height: auto;
    margin-top: 2.4rem;
  }
`,
);
