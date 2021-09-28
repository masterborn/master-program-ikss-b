import { css } from 'styled-components';

const toggleTiletransition = css`
  transition: opacity 0.15s linear, height 0.3s linear;
`.join('');

const hideTile = css`
  height: 0;
  padding: 0;
  opacity: 0;
  ${toggleTiletransition}
`.join('');

const showTile = (componentHeight, componentPadding) =>
  css`
    height: ${componentHeight};
    padding: ${componentPadding};
    opacity: 1;
    ${toggleTiletransition}
  `.join('');

const toggleTileVisibility = (shouldDisplay, componentHeight, componentPadding = 0) =>
  shouldDisplay ? showTile(componentHeight, componentPadding) : hideTile;

export default toggleTileVisibility;
