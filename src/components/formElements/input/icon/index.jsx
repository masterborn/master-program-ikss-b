import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from './error';
import InfoIcon from './info';

export default function Icon({ isInvalid, disabled }) {
  if (isInvalid) return <ErrorIcon />;
  return <InfoIcon disabled={disabled} />;
}

Icon.propTypes = {
  isInvalid: PropTypes.bool,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  isInvalid: false,
  disabled: false,
};
