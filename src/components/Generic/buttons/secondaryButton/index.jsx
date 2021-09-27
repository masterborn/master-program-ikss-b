import React from 'react';
import PropTypes from 'prop-types';

import Icon from './SecondaryIcon';
import StyledSecondaryButton from './StyledSecondaryButton';

export default function SecondaryButton({ children, disabled, withIcon, onClick, large }) {
  return (
    <StyledSecondaryButton disabled={disabled} onClick={onClick} large={large}>
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
  large: PropTypes.bool,
};

SecondaryButton.defaultProps = {
  onClick: () => {},
  children: '',
  disabled: false,
  withIcon: false,
  large: false,
};
