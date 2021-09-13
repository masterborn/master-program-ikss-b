import styled, { css } from 'styled-components';
import { ButtonBigText, ButtonSmallText } from '@root/styles/typography/buttonsText';

const defaultVariantStyles = css`
  height: 36px;
  ${ButtonSmallText};
  padding: 0.5em 0.88em 0.5em 0.88em;
`;

const largeVariantStyles = css`
  height: 48px;
  ${ButtonBigText};
  padding: 0.7em 1.2em 0.7em 1.2em;
`;

const StyledSecondaryButton = styled.button(
  ({ theme: { color }, large }) => `
  display: flex;
  align-items: center;
  justify-content: center;

  ${large ? largeVariantStyles : defaultVariantStyles};

  border: 2px solid ${color.navy};
  border-radius: 2em;
  color: ${color.navy};
  background-color: ${color.white};
  & > .icon {
    height: 1em;
    margin-right: 6.5px;
    fill: ${color.navy};
  }
  &:hover {
    border-color: #3c4863;
    color: #3c4863;
    cursor: pointer;
    & > .icon {
      fill: #3c4863;
    }
  }
  &:active {
    border-color: #535e75;
    color: #535e75;

    & > .icon {
      fill: #535e75;
    }
  }
  &:disabled {
    border-color: #babec8;
    color: #babec8;

    & > .icon {
      fill: #babec8;
    }
  }
`,
);

export default StyledSecondaryButton;
