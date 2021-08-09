import styled from 'styled-components';

const StyledSecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.size === 'big') {
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

  border: 2px solid ${(props) => props.theme.color.navy};
  border-radius: 2em;
  color: ${(props) => props.theme.color.navy};
  background-color: ${(props) => props.theme.color.white};
  & > .icon {
    height: 1em;
    padding-right: 0.8em;
    fill: ${(props) => props.theme.color.navy};
  }
  &:hover {
    border-color: #3c4863;
    color: #3c4863;
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
`;

export default StyledSecondaryButton;
