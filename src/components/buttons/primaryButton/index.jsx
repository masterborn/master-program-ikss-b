import React from 'react';
import PropTypes from 'prop-types';
import Icon from './primaryIcon';
import StyledPrimaryButton from './styledPrimaryButton';

export default function PrimaryButton({ children, disabled, withIcon, onClick, isBig }) {
  return (
    <StyledPrimaryButton disabled={disabled} onClick={onClick} isBig={isBig}>
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
  isBig: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  onClick: () => {},
  children: '',
  disabled: false,
  withIcon: false,
  isBig: false,
};
