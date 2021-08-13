import styled from 'styled-components';

const StyledLayout = styled.div`
  ${(props) => props.isMobile && 'min-width: 1185px'};
  width: fit-content;
`;

export default StyledLayout;
