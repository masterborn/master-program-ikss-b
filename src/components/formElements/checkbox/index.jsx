import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  padding-left: 2px;
  padding-top: 4px;
  padding-bottom: 0.25px;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  appearance: none;
  background-color: ${(props) => props.theme.color.white};

  border: 1.5px solid;
  border-color: ${(props) =>
    props.isInvalid ? props.theme.color.misc.errorRed : props.theme.color.steelTints.steel40};
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.color.ikssBlue};
  }

  &:disabled {
    cursor: default;
    border-color: ${(props) => props.theme.color.steelTints.steel40};
    background-color: ${(props) => props.theme.color.blueTints.blue05};
  }

  &:after {
    content: '\\00A0';
  }

  &:checked {
    background-color: ${(props) => props.theme.color.ikssBlue};
    border-color: ${(props) => props.theme.color.ikssBlue};
    &:after {
      content: url('./tick.svg');
      text-align: center;
    }
  }
`;

export default StyledCheckbox;
