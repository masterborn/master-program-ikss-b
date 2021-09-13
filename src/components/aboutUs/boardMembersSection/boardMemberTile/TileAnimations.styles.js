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
const showTile = (componentHeight, componentPadding) => css`
  height: ${componentHeight};
  padding: ${componentPadding};
  opacity: 1;
  ${toggleTiletransition}
`;

const toggleTileVisibility = (shouldDisplay, componentHeight, componentPadding = 0) =>
  shouldDisplay ? showTile(componentHeight, componentPadding) : hideTile;

export default toggleTileVisibility;
