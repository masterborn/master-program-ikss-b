import styled from 'styled-components';
import { Header5 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';

export const StyledTile = styled.div`
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
`;

export const Content = styled.div`
  position: relative;
  top: -62px;

  margin-bottom: -14px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageFiller = styled.div`
  width: 232px;
  height: 232px;
`;

export const Title = styled(Header5)`
  max-width: 336px;

  height: 72px;
  color: ${(props) => props.theme.color.navy};
  overflow: hidden;
`;
export const Body = styled(ParagraphBody)`
  max-width: 336px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-align: center;
`;
