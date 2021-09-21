import styled from 'styled-components';

const styledInfo = styled.svg`
  width: 2rem;
  height: 2rem;
  margin-left: -3rem;
  & path {
    stroke: ${(props) =>
      props.disabled ? props.theme.color.steelTints.steel40 : props.theme.color.ikssBlue};
  }
`;

export default styledInfo;
