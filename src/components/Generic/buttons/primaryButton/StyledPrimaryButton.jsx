import styled, { css } from 'styled-components';

import { ButtonBigText, ButtonSmallText } from '@typography/buttonsText';

const defaultVariantStyles = css`
  ${ButtonSmallText};
  height: 3.6rem;
  padding: 0.9rem 1.6rem 0.9rem 1.8rem;
`;

const largeVariantStyles = css`
  ${ButtonBigText};
  height: 4.8rem;
  padding: 1.4rem 2.4rem 1.4rem 2.6rem;
`;

const StyledPrimaryButton = styled.button(
  ({ theme: { color, medias }, large }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;

  border: none;
  border-radius: 2.6rem;
  color: ${color.white};
  background-color: ${color.ikssBlue};
  ${large ? largeVariantStyles : defaultVariantStyles};

  & > .icon {
    height: 1em;
    margin-right: 1.15rem;
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

  @media ${medias.mobile} {
  ${ButtonSmallText};
  height: 3.6rem;
  padding: 0.9rem 1.6rem 0.9rem 1.8rem;
  }
`,
);

export default StyledPrimaryButton;
