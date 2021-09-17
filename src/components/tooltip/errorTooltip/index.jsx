import React from 'react';
import PropTypes from 'prop-types';
import { ErrorTooltipContainer, Text, ErrorTooltipTail } from './ErrorTooltip.styles';

export default function ErrorTooltip({ tooltipText, show }) {
  if (!show) return null;
  return (
    <ErrorTooltipContainer>
      <Text>{tooltipText}</Text>
      <ErrorTooltipTail />
    </ErrorTooltipContainer>
  );
}

ErrorTooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

ErrorTooltip.defaultProps = {
  show: false,
};
