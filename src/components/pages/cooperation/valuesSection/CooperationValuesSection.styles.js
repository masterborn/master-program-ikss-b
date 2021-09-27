import styled from 'styled-components';

import { Header3, Header4 } from '@typography/headers';
import ValuesTile from '@valueTile';

export const CooperationValuesSectionContainer = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  margin-top: 14.8rem;
  text-align: center;

  @media ${medias.mobile} {
    margin-top: 8.0rem;
    width: 100%;
    padding: 0 2.4rem;
  }
`,
);
export const Title = styled.h3(
  ({ theme: { medias, color } }) => `
  ${Header3};
  color: ${color.navy};

  @media ${medias.mobile} {
    ${Header4};
  }
`,
);
export const CooperationValuesTilesContainer = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${medias.mobile} {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }
`,
);

export const CooperationValueTile = styled(ValuesTile)(
  ({ theme: { medias } }) => `
  margin: 0 1.2rem 0;

  @media ${medias.mobile} {
    margin: 1.2rem 0;
  }
`,
);
