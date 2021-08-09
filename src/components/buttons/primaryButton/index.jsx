import React from 'react';
import PropTypes from 'prop-types';
import Icon from './primaryIcon';
import StyledPrimaryButton from './styledPrimaryButton';

export default function PrimaryButton({ children, disabled, withIcon, onClick, size }) {
  return (
    <StyledPrimaryButton disabled={disabled} onClick={onClick} size={size}>
      {withIcon && <Icon />}
      {children}
    </StyledPrimaryButton>
  );
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'small']),
};

PrimaryButton.defaultProps = {
  onClick: () => {},
  children: '',
  disabled: false,
  withIcon: false,
  size: 'big',
};
