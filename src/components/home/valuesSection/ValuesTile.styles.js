import styled from 'styled-components';
import { Header5 } from '@root/styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '@root/styles/typography/paragraphs';

export const StyledValueTile = styled.div(
  ({ theme: { medias, color }, isOnCooperation }) => `
  width: 38.4rem;
  height: 38.4rem;
  display: flex;
  flex-direction: column;

  margin-top: 6.2rem;

  text-align: center;

  z-index: 0;

  background-color: ${color.white};
  box-shadow: 3.38443rem 5.58976rem 8.0rem rgba(97, 121, 139, 0.07),
    1.71337rem 2.82982rem 3.4875rem rgba(97, 121, 139, 0.04725),
    .0676885rem 1.11795rem 1.3rem rgba(97, 121, 139, 0.035),
    .0148069rem 2.44552rem 4.625rem rgba(97, 121, 139, 0.02275);
  border-radius: 1.6rem;

  @media ${medias.mobile} {
    width: 90%;
    min-width: 25.2rem;
    max-width: 38.4rem;
    height: ${!isOnCooperation ? '33.4rem' : '35.0rem'};

    display: block;
  }
`,
);

export const ValueTileContent = styled.div(
  ({ theme: { medias }, isOnCooperation }) => `
  position: relative;
  top: ${!isOnCooperation && '-6.2rem'};

  margin: ${isOnCooperation && '3.2rem 0 -1.4rem'};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${isOnCooperation && '21.4rem'};
    height: ${isOnCooperation && '14.2rem'};
  }

  @media ${medias.mobile} {
    top: ${!isOnCooperation && '-3.8rem'};
    margin-bottom: ${!isOnCooperation && '-1.4rem'};

    img {
      width: ${!isOnCooperation ? '18.4rem' : '19.7rem'};
      height: ${!isOnCooperation ? '14.4rem' : '12.1rem'};
    }
  }
`,
);

export const ValueTileImageFiller = styled.div(
  ({ theme: { medias }, isOnCooperation }) => `
  width: ${!isOnCooperation ? '23.2rem' : '21.4rem'};
  height: ${!isOnCooperation ? '23.2rem' : '14.2rem'};

  @media ${medias.mobile} {
    width: 13.3rem;
    height: 13.3rem;
    width: ${!isOnCooperation ? '13.3rem' : '21.4rem'};
    height: ${!isOnCooperation ? '13.3rem' : '21.4rem'};
  }
`,
);

export const ValueTileTitle = styled.h5(
  ({ theme: { medias, color } }) => `
  margin: 2.0rem 2.4rem 0;
  height: 7.2rem;
  ${Header5};
  color: ${color.navy};
  overflow: hidden;

  @media ${medias.mobile} {
    margin: 2.0rem 2.0rem 0;
    height: 4.8rem;
  }
`,
);
export const ValueTileParagraph = styled.p(
  ({ theme: { medias, color } }) => `
  margin: 0 2.4rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${ParagraphBody};
  text-align: center;
  color: ${color.steel};

  @media ${medias.mobile} {
    margin: 1.2rem 2.0rem 0;

    ${ParagraphSmall};
  }
`,
);
