import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styledInput';
import Icon from './icon';
import StyledInputContainer from './styledInputContainer';

export default function InputContainer({
  placeholder,
  disabled,
  withIcon,
  isInvalid,
  value,
  onChange,
  className,
}) {
  return (
    <StyledInputContainer withIcon={withIcon} className={className}>
      <StyledInput
        placeholder={placeholder}
        disabled={disabled}
        isInvalid={isInvalid}
        withIcon={withIcon}
        onChange={onChange}
        value={value}
      />

      {withIcon && <Icon isInvalid={isInvalid} disabled={disabled} />}
    </StyledInputContainer>
  );
}

InputContainer.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  isInvalid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

InputContainer.defaultProps = {
  placeholder: '',
  disabled: false,
  withIcon: false,
  isInvalid: false,
  className: '',
};
