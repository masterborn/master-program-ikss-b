import styled from 'styled-components';
import { Header3, Header4 } from '../../styles/typography/headers';
import { ParagraphBody } from '../../styles/typography/paragraphs';

export const TeamTileContainer = styled.div`
  margin: 164px 0 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 996px;
  height: auto;

  @media (max-width: 550px) {
    width: 100%;
    margin: 80px 0 130px;

    padding: 0 24px;
  }
`;

export const TeamHeader = styled.h3`
  ${Header3}
  margin-bottom: 32px;
  @media (max-width: 550px) {
    ${Header4}
    margin-bottom: 16px;
  }
`;

export const TeamDescription = styled.p`
  ${ParagraphBody}
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
  border-radius: 16px;
  @media (max-width: 550px) {
    min-height: 150px;
    height: 50vw;
    width: 100%;
    margin-top: 32px;
  }
`;
