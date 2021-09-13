import styled from 'styled-components';
import { Header2, Header4 } from '../../styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '../../styles/typography/paragraphs';

export const HistoryTileContainer = styled.div`
  display: flex;
  height: auto;
  width: 1197px;
  margin-top: 148px;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    margin-top: 80px;
    width: 100%;
    padding: 0 24px;
  }
`;

export const HistoryRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  &:first-child {
    margin-bottom: 32px;
  }
  @media (max-width: 550px) {
    margin-bottom: 40px;
    flex-direction: column-reverse;
  }
`;
export const HistoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryHeader = styled.h2`
  ${Header2}
  margin: 32px 0 16px 0;
  @media ${({ theme: { media } }) => media.mobile} {
    ${Header4}
  }
`;
export const HistoryDescription = styled.p(
  ({ theme: { media } }) => `
  ${ParagraphBody}

  @media ${media.mobile} {
    ${ParagraphSmall}
  }
`,
);

export const HistoryImage = styled.img`
  width: 483px;
  height: auto;
  border-radius: 16px;
  margin-left: 56px;
  &:first-child {
    margin-bottom: 32px;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin-left: 0;
    border-radius: 8px;
  }
`;
