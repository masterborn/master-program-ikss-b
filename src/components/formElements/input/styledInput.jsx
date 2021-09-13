import styled from 'styled-components';

const styledInput = styled.input(
  ({ theme: { color }, withIcon, isValid, isInvalid }) => `
  padding: 10px 12px;
  padding-right: ${withIcon && 'padding-right: 38px'};

  box-sizing: border-box;

  height: 100%;
  width: 100%;

  outline: none;

  border-width: 1.5px;
  border-style: solid;
  border-color: ${color.steelTints.steel30};
  border-color: ${isValid && color.misc.successGreen};
  border-color: ${isInvalid && color.misc.errorRed};

  border-radius: 4px;

  font-size: 14px;

  color: ${color.steel};

  &::placeholder {
    color: ${color.steelTints.steel60};
  }

  &:focus {
    border-color: ${color.ikssBlue};
  }
  &:disabled {
    border-color: ${color.steelTints.steel40};
    background-color: ${color.blueTints.blue05};
  }
`,
);

export default styledInput;
