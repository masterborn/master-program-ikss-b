import React from 'react';
import PropTypes from 'prop-types';
import Icon from './PrimaryIcon';
import StyledPrimaryButton from './StyledPrimaryButton';

export default function PrimaryButton({ className, children, disabled, withIcon, onClick, isBig }) {
  return (
    <StyledPrimaryButton className={className} disabled={disabled} onClick={onClick} isBig={isBig}>
      {withIcon && <Icon />}
      {children}
    </StyledPrimaryButton>
  );
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  isBig: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  className: '',
  onClick: () => {},
  children: '',
  disabled: false,
  withIcon: false,
  isBig: false,
};
