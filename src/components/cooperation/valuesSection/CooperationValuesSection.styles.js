import styled from 'styled-components';
import { Header3, Header4 } from '@root/styles/typography/headers';
import ValuesTile from '@root/components/home/valuesSection/ValuesTile';

export const CooperationValuesSectionContainer = styled.div(
  ({ theme: { medias } }) => `
  width: 1224px;
  margin-top: 148px;

  text-align: center;

  @media ${medias.mobile} {
    margin-top: 80px;
    width: 100%;
  }
`,
);
export const Title = styled.h3(
  ({ theme, theme: { medias } }) => `
  ${Header3(theme)};
  color: ${({ theme: { color } }) => color.navy};

  @media ${medias.mobile} {
    ${Header4(theme)};
  }
`,
);
export const CooperationValuesTilesContainer = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  margin-top: 62px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${medias.mobile} {
    margin-top: 24px;

    flex-direction: column;
    align-items: center;
  }
`,
);

export const CooperationValuesTile = styled(ValuesTile)(
  ({ theme: { medias } }) => `
  margin: 50px 12px 12px;

  @media ${medias.mobile} {
    margin: 12px 0;
  }
`,
);
