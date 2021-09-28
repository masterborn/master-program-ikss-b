import styled from 'styled-components';

export const InfoTooltipContainer = styled.div(
  ({ show }) => `
  width: 34.7rem;
  position: absolute;
  right: 0;
  bottom: 130%;

  padding: 1.3rem 1.9rem 1.9rem;

  background: #e8f3fd;
  border-radius: 4px;

  opacity: ${show ? '1' : '0'};
  z-index: ${show ? '1' : '-1'};
  transition: 0.2s ease;

  @media (max-width: 550px) {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`,
);

export const Text = styled.p(
  ({ theme: { color } }) => `
  font-size: 1.0rem;
  line-height: 1.8rem;
  color: ${color.steel};
`,
);

export const InfoTooltipTail = styled.div`
  width: 1.4rem;
  height: 1.4rem;

  position: absolute;
  left: 50%;
  bottom: -0.7rem;
  transform: translateX(-50%);
  transform: rotate(45deg);

  border-radius: 2px;

  background: #e8f3fd;
`;
