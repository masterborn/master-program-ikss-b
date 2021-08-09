import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styledInput';
import Icon from './icon';
import StyledInputContainer from './styledInputContainer';

export default function InputContainer({ placeholder, disabled, withIcon, hasError }) {
  return (
    <StyledInputContainer withIcon={withIcon}>
      <StyledInput
        placeholder={placeholder}
        disabled={disabled}
        hasError={hasError}
        withIcon={withIcon}
      />
      {withIcon && <Icon hasError={hasError} disabled={disabled} />}
    </StyledInputContainer>
  );
}

InputContainer.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  hasError: PropTypes.bool,
};

InputContainer.defaultProps = {
  placeholder: '',
  disabled: false,
  withIcon: false,
  hasError: false,
};
