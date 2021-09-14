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

const StyledPrimaryButton = styled.button(
  ({ theme: { color }, large }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;

  border: none;
  border-radius: 2em;
  color: ${color.white};
  background-color: ${color.ikssBlue};
  ${large ? largeVariantStyles : defaultVariantStyles};

  & > .icon {
    height: 1em;

    padding-right: 0.8em;
  }
  &:hover {
    background-color: #2f95eb;
    cursor: pointer;
  }
  &:active {
    background-color: #167bd2;
  }
  &:disabled {
    background-color: #badcf8;
  }
`,
);

export default StyledPrimaryButton;
