import { css } from 'styled-components';

const toggleTiletransition = css`
  transition: opacity 0.2s linear, height 0.1s linear;
`;

const hideTile = css`
  height: 0;
  padding: 0;
  opacity: 0;
  ${toggleTiletransition}
`;
const showTile = (componenHeight, componentPadding) => css`
  height: ${componenHeight};
  padding: ${componentPadding};
  opacity: 1;
  ${toggleTiletransition}
`;

const toggleTileVisibility = (shouldDisplay, componenHeight, componentPadding = 0) =>
  shouldDisplay ? showTile(componenHeight, componentPadding) : hideTile;

export default toggleTileVisibility;
