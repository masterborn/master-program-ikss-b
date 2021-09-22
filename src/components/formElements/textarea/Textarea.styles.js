import { ParagraphSmall } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';
import ErrorIcon from '../misc/icon/ErrorIcon';

export const TextareaContainer = styled.div(
  ({ theme: { color }, isValid, isInvalid, disabled }) => `
  width:100%;
  height:100%;

  border-color: ${color.steelTints.steel30};
  border-color: ${isValid && color.misc.successGreen};
  border-color: ${isInvalid && color.misc.errorRed};

  &:focus-within {
    border-color: ${color.ikssBlue};
  }

  position: relative;
  padding: 1rem 0 1rem 1rem;
  padding-bottom: ${isInvalid && '3.0rem'};

  border-width: 0.15rem;
  border-style: solid;
  
  border-radius: 4px;

  ${
    disabled &&
    `border-color: ${color.steelTints.steel40};
    background-color: ${color.blueTints.blue05};`
  }

  
`,
);
export const StyledTextarea = styled.textarea(
  ({ theme: { color } }) => `
  
  box-sizing: border-box;

  height: 100%;
  width:100%;
  resize: none;
  padding-right:1rem;
  border: none;
  outline: none;

  ${ParagraphSmall}

  color: ${color.steel};
  background-color: transparent;

  &::placeholder {
    color: ${color.steelTints.steel60};
  }
  
`,
);
export const StyledErrorIcon = styled(ErrorIcon)`
  position: absolute;
  right: 0rem;
  bottom: 0.25rem;
`;
