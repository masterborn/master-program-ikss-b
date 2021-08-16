import styled from 'styled-components';

const StyledLayout = styled.div`
  ${(props) => (props.isMobile ? '' : 'min-width: 1185px')};
  max-width: 1440px;
  width: 100%;

  margin: 0 auto;
`;

export default StyledLayout;
