import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './styledInput';
import Icon from '../misc/icon';
import StyledInputContainer from './styledInputContainer';

export default function InputContainer({
  name,
  placeholder,
  disabled,
  withIcon,
  isInvalid,
  isValid,
  value,
  onChange,
  className,
  errorTooltipText,
}) {
  return (
    <StyledInputContainer withIcon={withIcon} className={className}>
      <StyledInput
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        isInvalid={isInvalid}
        isValid={isValid}
        withIcon={withIcon}
        onChange={onChange}
        value={value}
      />

      {withIcon && (
        <Icon errorTooltipText={errorTooltipText} isInvalid={isInvalid} disabled={disabled} />
      )}
    </StyledInputContainer>
  );
}

InputContainer.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  errorTooltipText: PropTypes.string,
};

InputContainer.defaultProps = {
  name: '',
  placeholder: '',
  disabled: false,
  withIcon: false,
  isInvalid: false,
  isValid: false,
  className: '',
  errorTooltipText: '',
};
