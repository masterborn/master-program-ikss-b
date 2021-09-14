import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })(
  ({ theme: { color }, isInvalid }) => `
  padding-left: 2px;
  padding-top: 4px;
  padding-bottom: .025rem;
  box-sizing: border-box;
  width: 2.4rem;
  height: 2.4rem;
  appearance: none;
  background-color: ${color.white};

  border: 1..5rem solid;
  border-color: ${isInvalid ? color.misc.errorRed : color.steelTints.steel40};
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    border-color: ${color.ikssBlue};
  }

  &:disabled {
    cursor: default;
    border-color: ${color.steelTints.steel40};
    background-color: ${color.blueTints.blue05};
  }

  &:after {
    content: '\\00A0';
  }

  &:checked {
    background-color: ${color.ikssBlue};
    border-color: ${color.ikssBlue};
    &:after {
      content: url('./tick.svg');
      text-align: center;
    }
  }
`,
);

export default StyledCheckbox;
