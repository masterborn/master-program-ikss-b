import styled from 'styled-components';

import { Header3, Header4 } from '@typography/headers';
import { ParagraphBody } from '@typography/paragraphs';

export const TeamTileContainer = styled.div(
  ({ theme: { medias } }) => `
  margin: 15.2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.6rem;
  height: auto;

  @media ${medias.mobile} {
    width: 100%;
    margin: 8.0rem 0 0;

    padding: 0 2.4rem;
  }
`,
);

export const TeamHeader = styled.h3(
  ({ theme: { medias } }) => `
  ${Header3};
  margin-bottom: 3.2rem;
  @media ${medias.mobile} {
    ${Header4};
    margin-bottom: 1.6rem;
  }
`,
);

export const TeamDescription = styled.p(
  ({ theme: { medias } }) => `
  ${ParagraphBody};
  width: 63.5rem;
  @media ${medias.mobile} {
    width: 100%;
    text-align: center;
  }
`,
);

export const TeamImage = styled.img(
  ({ theme: { medias } }) => `
  width: 99.6rem;
  height: auto;
  max-height: 50.5rem;
  margin-top: 6.4rem;
  border-radius: 1.6rem;
  @media ${medias.mobile} {
    min-height: 15.0rem;
    height: 50vw;
    width: 100%;
    margin-top: 3.2rem;
  }
`,
);
