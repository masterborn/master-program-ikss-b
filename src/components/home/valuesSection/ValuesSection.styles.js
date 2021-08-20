import styled from 'styled-components';
import { Header3 } from '../../typography/headers';
import { ParagraphBody } from '../../typography/paragraphs';

export const StyledValuesSection = styled.section`
  min-width: 100%;
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Header3)`
  color: ${(props) => props.theme.color.navy};
`;

export const Paragraph = styled(ParagraphBody)`
  width: 551px;
  margin-top: 32px;
  text-align: center;
  color: ${(props) => props.theme.color.steel};
`;

export const TilesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default StyledValuesSection;
