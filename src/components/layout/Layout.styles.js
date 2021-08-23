import styled from 'styled-components';

export const StyledLayout = styled.div`
  ${(props) => (props.isMobile ? '' : 'width: 1440px')};

  margin: 0 auto;

  #main > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
`;
