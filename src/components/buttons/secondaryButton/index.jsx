import React from 'react';
import PropTypes from 'prop-types';
import Icon from './secondaryIcon';
import StyledSecondaryButton from './styledSecondaryButton';

export default function SecondaryButton({ children, disabled, withIcon, onClick, isBig }) {
  return (
    <StyledSecondaryButton disabled={disabled} onClick={onClick} isBig={isBig}>
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
  isBig: PropTypes.bool,
};

SecondaryButton.defaultProps = {
  onClick: () => {},
  children: '',
  disabled: false,
  withIcon: false,
  isBig: false,
};
