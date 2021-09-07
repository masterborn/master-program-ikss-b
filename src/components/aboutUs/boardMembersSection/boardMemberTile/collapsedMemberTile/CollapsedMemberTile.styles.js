import styled from 'styled-components';
import { Header5 } from '@root/components/typography/headers';
import { ParagraphSmall } from '@root/components/typography/paragraphs';
import toggleTileVisibility from '../TileAnimations.styles';

export const StyledCollapsedMemberTile = styled.button`
  width: 90%;
  max-width: 384px;
  min-width: 252px;
  margin: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 1;
  border: none;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  ${({ isTileOpened }) => toggleTileVisibility(!isTileOpened, 'max-content', '23px 0')}
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 20px;

  border-radius: 50%;

  background-color: ${({ theme: { color } }) => color.blueTints.blue20};

  img {
    border-radius: 50%;
  }

  @media (max-width: 355px) {
    margin-left: 5px;
  }
`;

export const TextContent = styled.div`
  width: 130px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;

  text-align: left;

  @media (max-width: 355px) {
    width: 110px;
    margin-left: 5px;
  }
`;

export const NameText = styled(Header5)`
  color: ${({ theme: { color } }) => color.navy};
`;

export const RoleText = styled(ParagraphSmall)`
  color: ${({ theme: { color } }) => color.steel};
`;
