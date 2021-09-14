import styled, { css } from 'styled-components';
import IconButton from '@root/components/buttons/misc/IconButton';
import { Header4, Header5 } from '@root/styles/typography/headers';
import { ButtonSmallText } from '@root/styles/typography/buttonsText';
import toggleTileVisibility from './TileAnimations.styles';

export const BoardMemberTileWrapper = styled.div(
  ({ theme: { medias } }) => `
  margin: 12px;

  @media ${medias.mobile} {
    width: 100%;
    min-height: fit-content;
    margin: 12px 0;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,
);

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

export const ToggleButton = styled(IconButton)(
  ({ isTileOpened }) => `
  ${isTileOpened ? toggleButtonOnExpandedTile : toggleButtonOnCollapsedTile}
  z-index: 1;
  transition: transform linear 0.2s;
`,
);

export const StyledBoardMemberTile = styled.div(
  ({ theme: { medias, color }, isTileOpened }) => `
  width: 384px;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);

  @media ${medias.mobile} {
    width: 90%;
    max-width: 384px;
    min-width: 300px;

    opacity: 1;
    overflow: hidden;

    ${toggleTileVisibility(isTileOpened, '423px')}
  }
`,
);

export const BoardMemberTileAvatar = styled.div(
  ({ theme: { medias, color } }) => `
  width: 164px;
  height: 164px;
  margin: 32px auto 0;
  border-radius: 50%;

  background-color: ${color.blueTints.blue20};

  @media ${medias.mobile} {
    width: 151px;
    min-width: 151px;
    height: 151px;
    min-height: 151px;

    margin-top: 45px;
  }
  img {
    border-radius: 50%;
  }
`,
);

export const NameText = styled.h4(
  ({ theme: { medias } }) => `
  margin-top: 24px;
  ${Header4};

  @media ${medias.mobile} {
    margin-top: 16px;

    ${Header5};
  }
`,
);
export const RoleText = styled.h5(
  ({ theme: { medias, color } }) => `
  margin: 8px 24px 0;
  height: 48px;
  ${Header5};
  text-align: center;
  color: ${color.steel};

  @media ${medias.mobile} {
    margin-top: 8px;
    height: 36px;
    ${ButtonSmallText}
  }
`,
);
export const ContactContainer = styled.div`
  margin-top: 12px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactLink = styled.a(
  ({ theme: { color }, isBottom }) => `
  margin-top: ${isBottom ? 'auto' : '0'};
  color: ${color.ikssBlue};
  ${ButtonSmallText}
  text-decoration: none;
`,
);
export const LinkedInButton = styled.a(
  ({ theme: { medias } }) => `
  margin: auto 0 40px;
  text-decoration: none;

  @media ${medias.mobile} {
    margin-bottom: 32px;
  }
`,
);
