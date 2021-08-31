import styled from 'styled-components';

const styledInfo = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: -30px;
  & path {
    stroke: ${(props) =>
      props.disabled ? props.theme.color.steelTints.steel40 : props.theme.color.ikssBlue};
  }
`;

export default styledInfo;
