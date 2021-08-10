import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.isBig) {
      return `
            font-size: 16px;
            padding: 0.7em 1.2em 0.7em 1.2em;
            `;
    }
    return `
        font-size: 14px;
        padding: 0.5em 0.88em 0.5em 0.88em;
        `;
  }}

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
  }
  &:active {
    background-color: #167bd2;
  }
  &:disabled {
    background-color: #badcf8;
  }
`;

export default StyledPrimaryButton;
