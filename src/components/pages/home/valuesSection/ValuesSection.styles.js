import styled from 'styled-components';
import { Header4 } from '@typography/headers';
import { ParagraphBody } from '@typography/paragraphs';

export const StyledValuesSection = styled.section(
  ({ theme: { medias } }) => `
  width: 100%;
  margin-top: 15.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${medias.mobile}{ 
    margin-top: 8.0rem;
    width: 100%;

  }
`,
);

export const ValuesSectionTitle = styled.h3(
  ({ theme: { medias, color } }) => `
  margin: 0 2.4rem;
  color: ${color.navy};
  text-align: center;

  @media ${medias.mobile}{
    ${Header4};
  }
`,
);

export const ValuesSectionParagraph = styled.p(
  ({ theme: { medias, color } }) => `
  width: 55.1rem;
  margin-top: 3.2rem;
  padding: 0 2.4rem;

  ${ParagraphBody};
  text-align: center;
  color: ${color.steel};
  @media ${medias.mobile} {
    width: 100%;
    margin-top: 2.4rem;
  }
`,
);
export const ValuesSectionTilesContainer = styled.div`
  max-width: 120rem;
  width: auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
