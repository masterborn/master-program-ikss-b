import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styledInput';
import Icon from './icon';
import StyledInputContainer from './styledInputContainer';

export default function InputContainer({
  placeholder,
  disabled,
  isControlled,
  withIcon,
  hasError,
  value,
  onChange,
}) {
  return (
    <StyledInputContainer withIcon={withIcon}>
      {isControlled ? (
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          hasError={hasError}
          withIcon={withIcon}
          onChange={onChange}
          value={value}
        />
      ) : (
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          hasError={hasError}
          withIcon={withIcon}
        />
      )}

      {withIcon && <Icon hasError={hasError} disabled={disabled} />}
    </StyledInputContainer>
  );
}

InputContainer.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isControlled: PropTypes.bool,
  withIcon: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputContainer.defaultProps = {
  placeholder: '',
  disabled: false,
  isControlled: false,
  withIcon: false,
  hasError: false,
  value: '',
  onChange: () => {},
};
