import styled from 'styled-components';

import { Header3, Header4 } from '@typography/headers';
import { ParagraphBody } from '@typography/paragraphs';

export const BottomCtaContainer = styled.div(
  ({ theme: { medias }, isOnProjects }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 63.5rem;
  height: auto;
  margin: ${isOnProjects ? '12.4rem 0 14.8rem 0' : '14.8rem 0'};

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
