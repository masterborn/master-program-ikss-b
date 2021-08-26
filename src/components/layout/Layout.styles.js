import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: 1440px;

  @media (max-width: 550px) {
    min-width: 300px;
    width: auto;
  }

  #main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
