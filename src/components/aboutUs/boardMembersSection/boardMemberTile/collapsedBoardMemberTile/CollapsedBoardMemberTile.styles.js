import styled from 'styled-components';
import { Header5 } from '@root/styles/typography/headers';
import { ButtonSmallText } from '@root/styles/typography/buttonsText';
import toggleTileVisibility from '../TileAnimations.styles';

export const StyledCollapsedBoardMemberTile = styled.button(
  ({ theme: { color }, isTileOpened }) => `
  width: 90%;
  max-width: 384px;
  min-width: 300px;
  margin: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 1;
  border: none;
  background-color: ${color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  ${toggleTileVisibility(!isTileOpened, 'max-content', '23px 0')}
`,
);

export const BoardMemberTileAvatar = styled.div(
  ({ theme: { color } }) => `
  width: 80px;
  height: 80px;
  margin-left: 20px;

  border-radius: 50%;

  background-color: ${color.blueTints.blue20};

  img {
    border-radius: 50%;
  }

  @media (max-width: 355px) {
    margin-left: 5px;
  }
`,
);

export const BoardMemberTileTextContent = styled.div`
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

export const NameText = styled.h5(
  ({ theme: { color } }) => `
  ${Header5};
  color: ${color.navy};
`,
);

export const RoleText = styled.p(
  ({ theme: { color } }) => `
  ${ButtonSmallText}
  color: ${color.steel};
`,
);
