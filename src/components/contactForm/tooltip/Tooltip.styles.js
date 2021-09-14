import styled from 'styled-components';

export const TooltipContainer = styled.div`
  width: 34.7rem;

  position: absolute;
  right: 0;
  bottom: 3rem;

  padding: 1.3rem 1.9rem 1.9rem;

  background: #e8f3fd;
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
  left: 50%;
  bottom: -0.7rem;
  transform: translateX(-50%);
  transform: rotate(45deg);

  border-radius: 2px;

  background: #e8f3fd;
`;
