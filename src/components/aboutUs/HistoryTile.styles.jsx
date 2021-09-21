import styled from 'styled-components';
import { Header2, Header4 } from '../../styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '../../styles/typography/paragraphs';

export const HistoryTileContainer = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  height: auto;
  width: 119.7rem;
  margin-top: 14.8rem;
  flex-wrap: wrap;
  @media ${medias.mobile} {
    margin-top: 8.0rem;
    width: 100%;
    padding: 0 2.4rem;
  }
`,
);

export const HistoryRow = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  height: auto;
  display: flex;
  &:first-child {
    margin-bottom: 3.2rem;
  }
  &:last-child {
    div{
      margin-top: -3.2rem;
    }
  }

  @media ${medias.mobile} {
    margin-bottom: 4.0rem;
    flex-direction: column-reverse;

    &:last-child {
      div{
        margin-top: 0;
      }
      img{
        margin-bottom: 3.2rem;
      }
    }
  }
`,
);
export const HistoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryHeader = styled.h2(
  ({ theme: { medias } }) => `
  ${Header2};
  margin: 3.2rem 0 1.6rem 0;
  @media ${medias.mobile} {
    ${Header4};
  }
`,
);
export const HistoryDescription = styled.p(
  ({ theme: { medias } }) => `
  ${ParagraphBody};

  @media ${medias.mobile} {
    ${ParagraphSmall};
  }
`,
);

export const HistoryImage = styled.img(
  ({ theme: { medias } }) => `
  width: 48.3rem;
  height: auto;
  border-radius: 1.6rem;
  margin-left: 5.6rem;
  max-height: 40rem;


  &:first-child {
    margin-bottom: 3.2rem;
  }
  @media ${medias.mobile} {
    width: 100%;
    margin-left: 0;
    border-radius: .8rem;
  }
`,
);
