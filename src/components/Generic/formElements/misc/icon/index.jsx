import React from 'react';
import PropTypes from 'prop-types';

import ErrorIcon from './ErrorIcon';
import InfoIcon from './info';

export default function Icon({ errorTooltipText, isInvalid, disabled }) {
  if (isInvalid) return <ErrorIcon tooltipText={errorTooltipText} />;
  return <InfoIcon disabled={disabled} />;
}

Icon.propTypes = {
  errorTooltipText: PropTypes.string,
  isInvalid: PropTypes.bool,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  errorTooltipText: '',
  isInvalid: false,
  disabled: false,
};
