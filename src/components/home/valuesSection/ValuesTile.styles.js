import styled from 'styled-components';
import { Header5 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';

export const StyledTile = styled.div`
  width: 384px;
  height: 384px;
  display: flex;
  flex-direction: column;

  margin: 12px;

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
    height: ${({ isOnHomepage }) => (isOnHomepage ? '334px' : '350px')};
    margin: 24px 0 0;

    display: block;
  }
`;

export const Content = styled.div`
  position: relative;
  top: ${({ isOnHomepage }) => isOnHomepage && '-62px'};

  margin-top: ${({ isOnHomepage }) => !isOnHomepage && '32px'};
  margin-bottom: ${({ isOnHomepage }) => isOnHomepage && '-14px'};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${({ isOnHomepage }) => !isOnHomepage && '214px'};
    height: ${({ isOnHomepage }) => !isOnHomepage && '142px'};
  }

  @media (max-width: 550px) {
    top: ${({ isOnHomepage }) => isOnHomepage && '-38px'};
    margin-bottom: ${({ isOnHomepage }) => isOnHomepage && '-14px'};

    img {
      width: ${({ isOnHomepage }) => (isOnHomepage ? '184px' : '197px')};
      height: ${({ isOnHomepage }) => (isOnHomepage ? '144px' : '121px')};
    }
  }
`;

export const ImageFiller = styled.div`
  width: ${({ isOnHomepage }) => (isOnHomepage ? '232px' : '214px')};
  height: ${({ isOnHomepage }) => (isOnHomepage ? '232px' : '142px')};

  @media (max-width: 550px) {
    width: 133px;
    height: 133px;
    width: ${({ isOnHomepage }) => (isOnHomepage ? '133px' : '214px')};
    height: ${({ isOnHomepage }) => (isOnHomepage ? '133px' : '214px')};
  }
`;

export const Title = styled(Header5)`
  margin: 20px 24px 0;

  height: 72px;
  color: ${(props) => props.theme.color.navy};
  overflow: hidden;

  @media (max-width: 550px) {
    margin: 20px 20px 0;
    height: 48px;
  }
`;
export const Paragraph = styled(ParagraphBody)`
  margin: 0 24px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-align: center;
  color: ${(props) => props.theme.color.steel};

  @media (max-width: 550px) {
    margin: 12px 20px 0;

    font-size: 14px;
    line-height: 28px;
  }
`;
