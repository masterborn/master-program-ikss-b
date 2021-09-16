import styled, { css } from 'styled-components';

const defaultVariantStyles = css`
  height: 36px;
  font-size: 14px;
  padding: 0.5em 0.88em 0.5em 0.88em;
`;

const largeVariantStyles = css`
  height: 48px;
  font-size: 16px;
  padding: 0.7em 1.2em 0.7em 1.2em;
`;

const StyledPrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;

  ${({ large }) => (large ? largeVariantStyles : defaultVariantStyles)}

  font-weight: 700;

  border: none;
  border-radius: 2em;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.ikssBlue};
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
`;

export default StyledPrimaryButton;
