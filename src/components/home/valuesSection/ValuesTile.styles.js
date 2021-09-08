import styled from 'styled-components';
import { Header5 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';

export const StyledValueTile = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;

  margin-top: 62px;

  text-align: center;

  z-index: 0;

  background-color: ${(props) => props.theme.color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  @media (max-width: 550px) {
    width: 90%;
    min-width: 300px;
    max-width: 384px;
    height: 300px;

    display: block;
  }
`;

export const ValueTileContent = styled.div`
  position: relative;
  top: -62px;

  margin-bottom: -14px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 550px) {
    top: -38px;
    margin-bottom: -14px;

    img {
      width: 133px;
    }
  }
`;

export const ValueTileImageFiller = styled.div`
  width: 232px;
  height: 232px;

  @media (max-width: 550px) {
    width: 133px;
    height: 133px;
  }
`;

export const ValueTileTitle = styled(Header5)`
  margin: 0 24px;

  height: 72px;
  color: ${(props) => props.theme.color.navy};
  overflow: hidden;

  @media (max-width: 550px) {
    margin: 0 20px;
  }
`;
export const ValueTileParagraph = styled(ParagraphBody)`
  margin: 0 24px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-align: center;
  color: ${(props) => props.theme.color.steel};

  @media (max-width: 550px) {
    margin: 0 20px;

    font-size: 14px;
    line-height: 28px;
  }
`;
