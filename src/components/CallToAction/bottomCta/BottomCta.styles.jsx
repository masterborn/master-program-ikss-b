import { Header3, Header4 } from '@root/styles/typography/headers';
import { ParagraphBody } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const BottomCtaContainer = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 63.5rem;
  height: auto;
  margin: 14.8rem 0;

  @media ${medias.mobile} {
    height: auto;
    margin: 10.3rem 0;
    width: 100%;
    padding: 0 2.4rem;
  }
`,
);

export const BottomCtaHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;
  ${Header3};
  text-align: center;
  @media ${medias.mobile} {
    margin-bottom: 1.6rem;
    ${Header4};
  }
`,
);

export const BottomCtaText = styled.p(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;
  ${ParagraphBody};
  text-align: center;

  @media ${medias.mobile} {
    margin-bottom: 1.6rem;
  }
`,
);
