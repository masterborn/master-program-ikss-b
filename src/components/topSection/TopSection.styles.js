import { Header1, Header3 } from '@root/styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const TopSectionContainer = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ isOnCooperationPage }) => (isOnCooperationPage ? '583px' : 'auto')};

  height: auto;
  text-align: center;
  @media ${medias.mobile} {
    padding: 0 24px;
    width: auto;
  }
`,
);
export const TopSectionImage = styled.img(
  ({ theme: { medias } }) => `
  margin-top: 64px;

  @media ${medias.mobile} {
    margin-top: 32px;
  }
`,
);

export const TopSectionHeader = styled.h1(
  ({ theme: { medias } }) => `
  ${Header1};
  margin-top: 16px;

  @media ${medias.mobile} {
    ${Header3};
    margin-top: 8px;
  }
`,
);

export const TopSectionDescription = styled.p(
  ({ theme: { medias } }) => `
  margin-top: 32px;
  max-width: 996px;
  height: 96px;
  ${ParagraphBody};

  @media ${medias.mobile} {
    ${ParagraphSmall};
    width: 100%;
    height: auto;
    margin-top: 24px;
  }
`,
);
