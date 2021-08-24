import styled from 'styled-components';

export const TooltipContainer = styled.div`
  width: 347px;

  position: absolute;
  right: 0;
  bottom: 30px;

  padding: 13px 19px 19px;

  background: #e8f3fd;
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
  left: 50%;
  bottom: -7px;
  transform: translateX(-50%);
  transform: rotate(45deg);

  background: #e8f3fd;
`;
