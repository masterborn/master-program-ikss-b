import styled from 'styled-components';

import { ButtonSmallText } from '@typography/buttonsText';
import toggleTileVisibility from '../TileAnimations.styles';

export const StyledCollapsedBoardMemberTile = styled.button(
  ({ theme: { color }, isTileOpened }) => `
  max-width:100vw;
  width:100%;
  min-width:252px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 1;
  border: none;
  background-color: ${color.white};
  box-shadow: 3.38443rem 5.58976rem 8.0rem rgba(97, 121, 139, 0.07),
    1.71337rem 2.82982rem 3.4875rem rgba(97, 121, 139, 0.04725),
    .0676885rem 1.11795rem 1.3rem rgba(97, 121, 139, 0.035),
    .0148069rem 2.44552rem 4.625rem rgba(97, 121, 139, 0.02275);
  border-radius: 1.6rem;

  ${toggleTileVisibility(!isTileOpened, 'max-content', '2rem 0')}
`,
);

export const BoardMemberTileAvatar = styled.div(
  ({ theme: { color } }) => `
  width: 8.0rem;
  min-width: 8.0rem;
  height: 8.0rem;
  min-height: 8.0rem;
  margin-left: 2.0rem;

  border-radius: 50%;

  background-color: ${color.blueTints.blue20};

  img {
    border-radius: 50%;
  }

  @media (max-width: 35.5rem) {
    margin-left: 2rem;
  }
`,
);

export const BoardMemberTileTextContent = styled.div`
  margin-left: 2.4rem;
  margin-right: 6.2rem;
  display: flex;
  flex-direction: column;

  text-align: left;

  @media (max-width: 35.5rem) {
    width: fit-content;
    margin-left: 2.4rem;
  }
`;

export const NameText = styled.h5(
  ({ theme: { color } }) => `
  color: ${color.navy};
  margin-bottom: 0.8rem;
`,
);

export const RoleText = styled.p(
  ({ theme: { color } }) => `
  ${ButtonSmallText}
  color: ${color.steel};
`,
);
