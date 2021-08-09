import React from 'react';
import PropTypes from 'prop-types';
import Icon from './secondaryIcon';
import StyledSecondaryButton from './styledSecondaryButton';

export default function SecondaryButton({ children, disabled, withIcon, onClick, size }) {
  return (
    <StyledSecondaryButton disabled={disabled} onClick={onClick} size={size}>
      {withIcon && <Icon />}
      {children}
    </StyledSecondaryButton>
  );
}

SecondaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'small']),
};

SecondaryButton.defaultProps = {
  onClick: () => {},
  children: '',
  disabled: false,
  withIcon: false,
  size: 'big',
};
