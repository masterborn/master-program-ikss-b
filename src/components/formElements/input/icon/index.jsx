import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from './error';
import InfoIcon from './info';

export default function Icon({ hasError, disabled }) {
  if (hasError) return <ErrorIcon />;
  return <InfoIcon disabled={disabled} />;
}

Icon.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  hasError: false,
  disabled: false,
};
