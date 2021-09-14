import styled from 'styled-components';

const styledInput = styled.input(
  ({ theme: { color }, withIcon, isValid, isInvalid }) => `
  padding: 1.0rem 1.2rem;
  padding-right: ${withIcon && 'padding-right: 3.8rem'};

  box-sizing: border-box;

  height: 100%;
  width: 100%;

  outline: none;

  border-width: 1..5rem;
  border-style: solid;
  border-color: ${color.steelTints.steel30};
  border-color: ${isValid && color.misc.successGreen};
  border-color: ${isInvalid && color.misc.errorRed};

  border-radius: 4px;

  font-size: 1.4rem;

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
