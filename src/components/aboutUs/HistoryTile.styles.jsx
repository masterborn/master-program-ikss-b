import styled from 'styled-components';
import { Header2, Header4 } from '../../styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '../../styles/typography/paragraphs';

export const HistoryTileContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  height: auto;
  width: 1197px;
  margin-top: 148px;
  flex-wrap: wrap;
  @media ${medias.mobile} {
    margin-top: 80px;
    width: 100%;
    padding: 0 24px;
  }
`,
);

export const HistoryRow = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  height: auto;
  display: flex;
  &:first-child {
    margin-bottom: 32px;
  }
  @media ${medias.mobile} {
    margin-bottom: 40px;
    flex-direction: column-reverse;
  }
`,
);
export const HistoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryHeader = styled.h2(
  ({ theme, theme: { medias } }) => `
  ${Header2(theme)};
  margin: 32px 0 16px 0;
  @media ${medias.mobile} {
    ${Header4(theme)};
  }
`,
);
export const HistoryDescription = styled.p(
  ({ theme, theme: { medias } }) => `
  ${ParagraphBody(theme)};

  @media ${medias.mobile} {
    ${ParagraphSmall(theme)};
  }
`,
);

export const HistoryImage = styled.img(
  ({ theme: { medias } }) => `
  width: 483px;
  height: auto;
  border-radius: 16px;
  margin-left: 56px;
  &:first-child {
    margin-bottom: 32px;
  }
  @media ${medias.mobile} {
    width: 100%;
    margin-left: 0;
    border-radius: 8px;
  }
`,
);
