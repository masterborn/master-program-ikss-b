import styled from 'styled-components';
import { Header3 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';

export const StyledValuesSection = styled.section`
  width: 100%;
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 550px) {
    margin-top: 80px;
  }
`;

export const ValuesSectionTitle = styled(Header3)`
  color: ${({ theme: { color } }) => color.navy};
  text-align: center;

  @media (max-width: 550px) {
    margin: 0 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ValuesSectionParagraph = styled(ParagraphBody)`
  margin: 32px 24px 0;
  text-align: center;
  color: ${({ theme: { color } }) => color.steel};
  @media (max-width: 550px) {
    margin-top: 24px;
  }
`;

export const ValuesSectionTilesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
