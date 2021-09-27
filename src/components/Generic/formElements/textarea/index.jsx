import React from 'react';
import PropTypes from 'prop-types';

import { TextareaContainer, StyledTextarea, StyledErrorIcon } from './Textarea.styles';

export default function Textarea({
  className,
  value,
  onChange,
  placeholder,
  disabled,
  isValid,
  isInvalid,
  errorTooltipText,
  name,
}) {
  return (
    <TextareaContainer
      className={className}
      isValid={isValid}
      isInvalid={isInvalid}
      disabled={disabled}
    >
      <StyledTextarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        isValid={isValid}
        isInvalid={isInvalid}
      />
      {isInvalid && <StyledErrorIcon tooltipText={errorTooltipText} />}
    </TextareaContainer>
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorTooltipText: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
  name: '',
  placeholder: '',
  disabled: false,
  isValid: false,
  isInvalid: false,
  errorTooltipText: '',
};
