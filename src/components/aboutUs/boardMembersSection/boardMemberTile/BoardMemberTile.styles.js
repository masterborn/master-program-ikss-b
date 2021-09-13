import styled, { css } from 'styled-components';
import IconButton from '@root/components/buttons/misc/IconButton';
import { Header4, Header5 } from '@root/components/typography/headers';
import toggleTileVisibility from './TileAnimations.styles';

export const BoardMemberTileWrapper = styled.div`
  margin: 12px;

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 100%;
    min-height: fit-content;
    margin: 12px 0;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const toggleButtonOnCollapsedTile = css`
  position: absolute;
  top: 50%;
  right: 40px;

  transform: translateY(-50%);

  @media (max-width: 320px) {
    right: 20px;
  }
`;
const toggleButtonOnExpandedTile = css`
  position: absolute;
  top: 21px;
  right: 40px;

  transform: rotate(180deg);

  @media (max-width: 320px) {
    right: 20px;
  }
`;

export const ToggleButton = styled(IconButton)`
  ${({ isTileOpened }) => (isTileOpened ? toggleButtonOnExpandedTile : toggleButtonOnCollapsedTile)}
  z-index: 1;
  transition: transform linear 0.2s;
`;

export const StyledBoardMemberTile = styled.div`
  width: 384px;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 90%;
    max-width: 384px;
    min-width: 300px;

    opacity: 1;
    overflow: hidden;

    ${({ isTileOpened }) => toggleTileVisibility(isTileOpened, '423px')}
  }
`;

export const BoardMemberTileAvatar = styled.div`
  width: 164px;
  height: 164px;
  margin: 32px auto 0;
  border-radius: 50%;

  background-color: ${({ theme: { color } }) => color.blueTints.blue20};

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 151px;
    min-width: 151px;
    height: 151px;
    min-height: 151px;

    margin-top: 45px;
  }
  img {
    border-radius: 50%;
  }
`;
export const NameText = styled(Header4)`
  margin-top: 24px;
  color: ${({ theme: { color } }) => color.navy};

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 16px;

    font-size: 18px;
    line-height: 24px;
  }
`;
export const RoleText = styled(Header5)`
  margin: 8px 24px 0;
  height: 48px;

  text-align: center;
  color: ${({ theme: { color } }) => color.steel};

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: 8px;
    height: 36px;
    font-size: 14px;
    line-height: 18px;
  }
`;
export const ContactContainer = styled.div`
  margin-top: 12px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactLink = styled.a`
  margin-top: ${({ isBottom }) => (isBottom ? 'auto' : '0')};
  color: ${({ theme: { color } }) => color.ikssBlue};
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
`;
export const LinkedInButton = styled.a`
  margin: auto 0 40px;
  text-decoration: none;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-bottom: 32px;
  }
`;
