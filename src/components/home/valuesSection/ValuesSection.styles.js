import styled from 'styled-components';
import { Header3, Header4 } from '../../../styles/typography/headers';
import { ParagraphBody } from '../../../styles/typography/paragraphs';

export const StyledValuesSection = styled.section(
  ({ theme: { medias } }) => `
  min-width: 100%;
  margin-top: 157px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${medias.mobile}{ 
    margin-top: 80px;
  }
`,
);

export const ValuesSectionTitle = styled.h3(
  ({ theme: { medias, color } }) => `
  ${Header3};
  color: ${color.navy};
  text-align: center;

  @media ${medias.mobile}{
    ${Header4};
  }
`,
);

export const ValuesSectionParagraph = styled.p(
  ({ theme: { medias, color } }) => `
  width: 551px;
  margin-top: 32px;
  ${ParagraphBody};
  text-align: center;
  color: ${color.steel};
  @media ${medias.mobile} {
    width: 300px;
    margin-top: 24px;
  }
`,
);
export const ValuesSectionTilesContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
