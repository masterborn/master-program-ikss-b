import styled, { css } from 'styled-components';
import { ButtonBigText, ButtonSmallText } from '@root/styles/typography/buttonsText';

const defaultVariantStyles = css`
  height: 3.6rem;
  ${ButtonSmallText};
  padding: 0.9rem 1.6rem 0.9rem 1.8rem;
`;

const largeVariantStyles = css`
  height: 4.8rem;
  ${ButtonBigText};
  padding: 1.4rem 2.4rem 1.4rem 2.6rem;
`;

const StyledSecondaryButton = styled.button(
  ({ theme: { color }, large }) => `
  display: flex;
  align-items: center;
  justify-content: center;

  ${large ? largeVariantStyles : defaultVariantStyles};

  border: 2px solid ${color.navy};
  border-radius: 2.6rem;
  color: ${color.navy};
  background-color: ${color.white};
  & > .icon {
    height: 1em;
    margin-right: 0.6rem;
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
