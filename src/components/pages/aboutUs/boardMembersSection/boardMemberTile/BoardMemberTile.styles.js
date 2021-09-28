import styled, { css } from 'styled-components';

import IconButton from '@buttons/misc/IconButton';
import { Header5 } from '@typography/headers';
import { ButtonSmallText } from '@typography/buttonsText';
import toggleTileVisibility from './TileAnimations.styles';

export const BoardMemberTileWrapper = styled.div(
  ({ theme: { medias }, isDiamond, isTileOpened }) => `
  margin: 1.2rem;
  ${
    isDiamond &&
    `
    display: inline-block;
    transform: translateZ(0);
    &:nth-child(1){
      margin-top: 26.4rem;
    }
    &:nth-child(6){
      margin-top: 26.4rem;
    }
    `
  }

  @media ${medias.mobile} {
    max-width: 48rem;
    width: 100%;
    min-width: 252px;
    height: ${isTileOpened ? '42.3rem' : '0'};
    min-height: fit-content;
    margin: 1.2rem 0;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.3s linear;

    &:first-child{
      margin-top: 0;
    }
    &:nth-child(6){
      margin-top: 1.2rem
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
`,
);

const toggleButtonOnCollapsedTile = css`
  position: absolute;
  top: 50%;
  right: 2rem;

  transform: translateY(-50%);
`;
const toggleButtonOnExpandedTile = css`
  position: absolute;
  top: 2.1rem;
  right: 2rem;

  transform: rotate(180deg);
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
  width: 38.4rem;
  height: 48.0rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.6rem;
  background-color: ${color.white};
  box-shadow: 3.38443rem 5.58976rem 8.0rem rgba(97, 121, 139, 0.07),
    1.71337rem 2.82982rem 3.4875rem rgba(97, 121, 139, 0.04725),
    .0676885rem 1.11795rem 1.3rem rgba(97, 121, 139, 0.035),
    .0148069rem 2.44552rem 4.625rem rgba(97, 121, 139, 0.02275);

  @media ${medias.mobile} {
    width:100%;
    min-width:252px;
    margin: 0;

    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    overflow: hidden;

    ${toggleTileVisibility(isTileOpened, '42.3rem')}

    z-index: ${!isTileOpened && '-1'};
  }
`,
);

export const BoardMemberTileAvatar = styled.div(
  ({ theme: { medias, color } }) => `
  width: 16.4rem;
  height: 16.4rem;
  margin: 3.2rem auto 0;
  border-radius: 50%;

  background-color: ${color.blueTints.blue20};

  @media ${medias.mobile} {
    width: 15.1rem;
    min-width: 15.1rem;
    height: 15.1rem;
    min-height: 15.1rem;

    margin-top: 4.5rem;
  }
  img {
    border-radius: 50%;
  }
`,
);

export const NameText = styled.h4(
  ({ theme: { medias } }) => `
  margin-top: 2.4rem;

  @media ${medias.mobile} {
    margin-top: 1.6rem;

    ${Header5};
  }
`,
);
export const RoleText = styled.h5(
  ({ theme: { medias, color } }) => `
  max-width: 300px;
  margin-top: 0.8rem;
  height: 4.8rem;
  text-align: center;
  color: ${color.steel};

  @media ${medias.mobile} {
    ${ButtonSmallText};
    height: 3.6rem;
    max-width: 250px;

  }
`,
);
export const ContactContainer = styled.div`
  margin-top: 2.4rem;
  height: 4.8rem;
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
  word-break: break-all;
`,
);
export const LinkedInButton = styled.a(
  ({ theme: { medias } }) => `
  margin: 2.4rem 0 4.0rem;
  text-decoration: none;

  @media ${medias.mobile} {
    margin-bottom: 3.2rem;
  }
`,
);
