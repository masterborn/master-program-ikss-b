import React from 'react';
import PropTypes from 'prop-types';
import { TooltipContainer, Text, Tail } from './ErrorTooltip.styles';

export default function ErrorTooltip({ tooltipText, show }) {
  if (!show) return null;
  return (
    <TooltipContainer>
      <Text>{tooltipText}</Text>
      <Tail />
    </TooltipContainer>
  );
}

ErrorTooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

ErrorTooltip.defaultProps = {
  show: false,
};
