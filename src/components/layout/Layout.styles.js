import styled from 'styled-components';

export const StyledLayout = styled.div`
  width: 1440px;
  margin: 0 auto;

  @media (max-width: 550px) {
    min-width: 300px;
    width: auto;
  }

  #main {
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
`;

export const BackgroundGradient = styled.div`
  width: 100%;
  height: 464px;

  position: absolute;
  z-index: -1;

  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
`;
