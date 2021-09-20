import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '@dataMappers/contentful';
import { TooltipContainer, Text, Tail } from './Tooltip.styles';

export default function Tooltip({ tooltipText, show }) {
  const { text1: text } = tooltipText;

  const Body = convertRichTextToReactComponent(Text, text);

  if (!show) return null;
  return (
    <TooltipContainer>
      {Body}
      <Tail />
    </TooltipContainer>
  );
}

Tooltip.propTypes = {
  tooltipText: PropTypes.shape({
    text1: PropTypes.shape({}),
  }).isRequired,
  show: PropTypes.bool,
};

Tooltip.defaultProps = {
  show: false,
};
