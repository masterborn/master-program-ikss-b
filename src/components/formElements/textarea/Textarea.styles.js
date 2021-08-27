import styled from 'styled-components';
import ErrorIcon from '../input/icon/ErrorIcon';

export const TextareaContainer = styled.div`
  position: relative;
`;
export const StyledTextarea = styled.textarea`
  padding-top: ${(props) => (props.isInvalid ? '30px' : '10px')};
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 20px;

  box-sizing: border-box;

  height: 100%;
  width: 100%;

  resize: none;

  outline: none;
  border: 1.5px solid
    ${(props) => {
      if (props.isInvalid) return props.theme.color.misc.errorRed;
      if (props.isValid) return props.theme.color.misc.successGreen;

      return props.theme.color.steelTints.steel30;
    }};
  border-radius: 4px;

  font-size: 14px;

  color: ${(props) => props.theme.color.steel};

  &::placeholder {
    color: ${(props) => props.theme.color.steelTints.steel60};
  }

  &:focus {
    border-color: ${(props) => !props.isInvalid && props.theme.color.ikssBlue};
    color: ${(props) => props.theme.color.steel};
  }
  &:disabled {
    border-color: ${(props) => props.theme.color.steelTints.steel40};
    background-color: ${(props) => props.theme.color.blueTints.blue05};
  }
`;
export const StyledErrorIcon = styled(ErrorIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;