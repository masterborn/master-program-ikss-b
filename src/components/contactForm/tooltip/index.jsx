import React from 'react';
import PropTypes from 'prop-types';

import { TooltipContainer, Text, Tail } from './Tooltip.styles';

export default function Tooltip({ text, show }) {
  if (!show) return null;
  return (
    <TooltipContainer>
      <Text>{text}</Text>
      <Tail />
    </TooltipContainer>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

Tooltip.defaultProps = {
  show: false,
};
