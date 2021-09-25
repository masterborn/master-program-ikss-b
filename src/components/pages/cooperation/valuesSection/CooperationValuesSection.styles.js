import styled from 'styled-components';

import { Header3, Header4 } from '@typography/headers';
import ValueTile from '@valueTile';

export const CooperationValuesSectionContainer = styled.div(
  ({ theme: { medias } }) => `
  width: 122.4rem;
  margin-top: 14.8rem;

  text-align: center;

  @media ${medias.mobile} {
    margin-top: 8.0rem;
    width: 100%;
    padding: 0 1.2rem;
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
  margin-top: 6.4rem;
  margin-bottom: -2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${medias.mobile} {
    margin-top: 2.4rem;
    margin-bottom: -1.2rem;
    flex-direction: column;
    align-items: center;
  }
`,
);

export const CooperationValueTile = styled(ValueTile)(
  ({ theme: { medias } }) => `
  margin: 0 1.2rem 2.4rem;

  @media ${medias.mobile} {
    margin: 1.2rem 0;
  }
`,
);
