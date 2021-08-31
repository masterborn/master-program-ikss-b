import styled from 'styled-components';

export const TooltipContainer = styled.div`
  max-width: 180px;
  width: max-content;

  position: absolute;
  right: 2px;
  bottom: 35px;
  z-index: 100;
  padding: 13px 19px 19px;

  background: #ffcccc;
  border-radius: 4px;
`;

export const Text = styled.p`
  font-size: 10px;
  line-height: 18px;
  color: ${(props) => props.theme.color.steel};
`;

export const Tail = styled.div`
  width: 14px;
  height: 14px;

  position: absolute;
  right: 10px;
  bottom: -7px;
  transform: rotate(45deg);

  border-radius: 2px;

  background: #ffcccc;
`;
