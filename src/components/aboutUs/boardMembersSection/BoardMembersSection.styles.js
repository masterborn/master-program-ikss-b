import styled from 'styled-components';
import { Header3 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';

export const StyledBoardMembersSection = styled.section`
  margin: 148px 108px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 95%;
    min-width: 252px;
    margin: 70px auto 0;
  }
`;

export const Title = styled(Header3)`
  text-align: center;
  color: ${({ theme: { color } }) => color.navy};

  @media ${({ theme: { medias } }) => medias.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const Description = styled(ParagraphBody)`
  width: 635px;
  margin-top: 32px;
  text-align: center;

  color: ${({ theme: { color } }) => color.steel};

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 95%;
    min-width: 252px;
    margin: 16px auto 0;
  }
`;

export const BoardMembersContainer = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 57px;
    flex-direction: column;
  }
`;
