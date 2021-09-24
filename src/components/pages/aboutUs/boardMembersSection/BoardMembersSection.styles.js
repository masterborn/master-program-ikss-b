import styled from 'styled-components';

import { Header3, Header4 } from '@typography/headers';
import { ParagraphBody } from '@typography/paragraphs';

export const StyledBoardMembersSection = styled.section(
  ({ theme: { medias } }) => `
  margin: 14.8rem 10.8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${medias.mobile} {
    width: 100%;
    min-width: 25.2rem;
    padding: 0 2.4rem;
    margin: 7rem 0 0 0;
  }
`,
);

export const Title = styled.h3(
  ({ theme: { medias, color } }) => `
  ${Header3};
  text-align: center;
  color: ${color.navy};

  @media ${medias.mobile} {
    ${Header4};
  }
`,
);
export const Description = styled.p(
  ({ theme: { medias, color } }) => `
  width: 63.5rem;
  margin-top: 3.2rem;
  ${ParagraphBody};
  text-align: center;

  color: ${color.steel};

  @media ${medias.mobile} {
    width: 95%;
    min-width: 25.2rem;
    margin: 1.6rem auto 0;
  }
`,
);

export const BoardMembersContainer = styled.div(
  ({ theme: { medias }, isDiamond }) => `
  margin-top: 6.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${
    isDiamond &&
    `
    display: block;
    column-count: 3;
    column-gap: 24px;
  `
  }
  }

  @media ${medias.mobile} {
    display: flex;
    margin-top: 5.7rem;
    flex-direction: column;
  }
`,
);
