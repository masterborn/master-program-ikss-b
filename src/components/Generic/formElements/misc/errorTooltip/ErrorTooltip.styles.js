import styled from 'styled-components';

export const TooltipContainer = styled.div`
  max-width: 18rem;
  width: max-content;

  position: absolute;
  right: 2px;
  bottom: 3.5rem;
  z-index: 100;
  padding: 1.3rem 1.9rem 1.9rem;

  background: #ffcccc;
  border-radius: 4px;
`;

export const Text = styled.p(
  ({ theme: { color } }) => `
  font-size: 1.0rem;
  line-height: 1.8rem;
  color: ${color.steel};
`,
);

export const Tail = styled.div`
  width: 1.4rem;
  height: 1.4rem;

  position: absolute;
  right: 1rem;
  bottom: -0.7rem;
  transform: rotate(45deg);

  border-radius: 2px;

  background: #ffcccc;
`;
