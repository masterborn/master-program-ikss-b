import styled from 'styled-components';

const styledInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  ${(props) => (props.withIcon ? 'padding-right: 38px;' : 'padding-right: 12px;')}

  box-sizing: border-box;

  height: 100%;

  outline: none;
  border: 1.5px solid
    ${(props) =>
      props.hasError ? props.theme.color.misc.errorRed : props.theme.color.steelTints.steel30};
  border-radius: 4px;

  font-size: 14px;

  color: ${(props) => props.theme.color.steel};

  &::placeholder {
    color: ${(props) => props.theme.color.steelTints.steel60};
  }

  &:focus {
    border-color: ${(props) => !props.hasError && props.theme.color.ikssBlue};
    color: ${(props) => props.theme.color.steel};
  }
  &:disabled {
    border-color: ${(props) => props.theme.color.steelTints.steel40};
    background-color: ${(props) => props.theme.color.blueTints.blue05};
  }
`;

export default styledInput;
