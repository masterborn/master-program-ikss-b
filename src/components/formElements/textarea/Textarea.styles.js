import styled from 'styled-components';
import ErrorIcon from '../misc/icon/ErrorIcon';

export const TextareaContainer = styled.div`
  position: relative;
`;
export const StyledTextarea = styled.textarea(
  ({ theme: { color }, isValid, isInvalid }) => `
  padding: 1.0rem 2.0rem 1.0rem 1.2rem;

  box-sizing: border-box;

  height: 100%;
  width: 100%;

  resize: none;

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
    color: ${color.steel};
  }
  &:disabled {
    border-color: ${color.steelTints.steel40};
    background-color: ${color.blueTints.blue05};
  }
`,
);
export const StyledErrorIcon = styled(ErrorIcon)`
  position: absolute;
  bottom: 0;
  right: -3.5rem;
`;
