import React from 'react';
import PropTypes from 'prop-types';

import { ErrorTooltipContainer, Text, ErrorTooltipTail } from './ErrorTooltip.styles';

export default function ErrorTooltip({ tooltipText, show }) {
  return (
    <ErrorTooltipContainer show={show}>
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
