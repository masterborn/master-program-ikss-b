import styled from 'styled-components';
import { Header3, Header4 } from '@root/styles/typography/headers';
import { ParagraphBody } from '@root/styles/typography/paragraphs';

export const StyledBoardMembersSection = styled.section(
  ({ theme: { medias } }) => `
  margin: 148px 108px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${medias.mobile} {
    width: 95%;
    min-width: 252px;
    margin: 70px auto 0;
  }
`,
);

export const Title = styled.h3(
  ({ theme, theme: { medias, color } }) => `
  ${Header3(theme)};
  text-align: center;
  color: ${color.navy};

  @media ${medias.mobile} {
    ${Header4(theme)};
  }
`,
);
export const Description = styled.p(
  ({ theme, theme: { medias, color } }) => `
  width: 635px;
  margin-top: 32px;
  ${ParagraphBody(theme)};
  text-align: center;

  color: ${color.steel};

  @media ${medias.mobile} {
    width: 95%;
    min-width: 252px;
    margin: 16px auto 0;
  }
`,
);

export const BoardMembersContainer = styled.div(
  ({ theme: { medias } }) => `
  margin-top: 64px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${medias.mobile} {
    margin-top: 57px;
    flex-direction: column;
  }
`,
);
