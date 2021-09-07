import styled from 'styled-components';
import { Header3 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';

export const StyledBoardMembersSection = styled.section`
  margin: 148px 108px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled(Header3)`
  color: ${({ theme: { color } }) => color.navy};
`;
export const Description = styled(ParagraphBody)`
  width: 635px;
  margin-top: 32px;

  color: ${({ theme: { color } }) => color.steel};
`;

export const BoardMembersContainer = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
