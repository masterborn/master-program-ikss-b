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

export const TopBackgroundGradient = styled.div`
  width: 100%;
  height: ${(props) => (props.isMobile ? '464px' : '464px')};

  position: absolute;
  z-index: -1;

  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
`;

export const BottomBackgroundGradient = styled.div`
  width: 100%;
  height: ${(props) => (props.isMobile ? '770px' : '994px')};

  position: absolute;
  bottom: ${(props) => (props.isHomepage ? '324px' : '0')};
  z-index: -1;

  background: linear-gradient(0deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%); ;
`;
