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
    margin-top: ${isOnProjects ? '5.6rem' : '10.3rem'};
    margin-bottom: ${isOnProjects ? '10.3rem' : '13.1rem'};
    width: 100%;
    padding: 0 2.4rem;
  }
`,
);

export const BottomCtaHeader = styled.h3(
  ({ theme: { medias } }) => `
  ${Header3};
  margin-bottom: 3.2rem;
  text-align: center;
  @media ${medias.mobile} {
    ${Header4};
    margin-bottom: 1.6rem;
  }
`,
);

export const BottomCtaText = styled.p(
  ({ theme: { medias } }) => `
  ${ParagraphBody};
  margin-bottom: 3.2rem;
  text-align: center;

  @media ${medias.mobile} {
    margin-bottom: 1.6rem;
  }
`,
);
