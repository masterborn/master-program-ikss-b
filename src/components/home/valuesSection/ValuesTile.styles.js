import styled from 'styled-components';
import { Header5 } from '@root/styles/typography/headers';
import { ParagraphBody, ParagraphSmall } from '@root/styles/typography/paragraphs';

export const StyledValueTile = styled.div(
  ({ theme: { medias, color }, isOnHomepage }) => `
  width: 384px;
  height: 384px;
  display: flex;
  flex-direction: column;

  margin-top: 62px;

  text-align: center;

  z-index: 0;

  background-color: ${color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  @media ${medias.mobile} {
    width: 90%;
    min-width: 300px;
    max-width: 384px;
    height: ${isOnHomepage ? '334px' : '350px'};

    display: block;
  }
`,
);

export const ValueTileContent = styled.div(
  ({ theme: { medias }, isOnHomepage }) => `
  position: relative;
  top: ${isOnHomepage && '-62px'};

  margin: ${!isOnHomepage && '32px 0 -14px'};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${!isOnHomepage && '214px'};
    height: ${!isOnHomepage && '142px'};
  }

  @media ${medias.mobile} {
    top: ${isOnHomepage && '-38px'};
    margin-bottom: ${isOnHomepage && '-14px'};

    img {
      width: ${isOnHomepage ? '184px' : '197px'};
      height: ${isOnHomepage ? '144px' : '121px'};
    }
  }
`,
);

export const ValueTileImageFiller = styled.div(
  ({ theme: { medias }, isOnHomepage }) => `
  width: ${isOnHomepage ? '232px' : '214px'};
  height: ${isOnHomepage ? '232px' : '142px'};

  @media ${medias.mobile} {
    width: 133px;
    height: 133px;
    width: ${isOnHomepage ? '133px' : '214px'};
    height: ${isOnHomepage ? '133px' : '214px'};
  }
`,
);

export const ValueTileTitle = styled.h5(
  ({ theme: { medias, color } }) => `
  margin: 20px 24px 0;
  height: 72px;
  ${Header5};
  color: ${color.navy};
  overflow: hidden;

  @media ${medias.mobile} {
    margin: 20px 20px 0;
    height: 48px;
  }
`,
);
export const ValueTileParagraph = styled.p(
  ({ theme: { medias, color } }) => `
  margin: 0 24px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${ParagraphBody};
  text-align: center;
  color: ${color.steel};

  @media ${medias.mobile} {
    margin: 12px 20px 0;

    ${ParagraphSmall};
  }
`,
);
