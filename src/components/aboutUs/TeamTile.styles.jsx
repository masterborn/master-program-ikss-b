import styled from 'styled-components';
import { Header3 } from '../typography/headers';
import { ParagraphBody } from '../typography/paragraphs';

export const TeamTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 996px;
  height: auto;

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 24px;
  }
`;

export const TeamHeader = styled(Header3)`
  margin-bottom: 32px;
  @media (max-width: 550px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`;

export const TeamDescription = styled(ParagraphBody)`
  width: 635px;
  @media (max-width: 550px) {
    width: 100%;
    text-align: center;
  }
`;

export const TeamImage = styled.img`
  width: 996px;
  height: auto;
  max-height: 505px;
  margin-top: 64px;
  @media (max-width: 550px) {
    min-height: 150px;
    height: 50vw;
    width: 100%;
    margin-top: 32px;
  }
`;
