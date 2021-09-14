import styled from 'styled-components';

export const StyledLayout = styled.div(
  ({ theme: { medias } }) => `
  width: 100%;
  min-width: 1440px;
  margin: 0 auto;

  @media ${medias.mobile} {
    min-width: 300px;
    width: 100%;
  }

  #main {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,
);

export const PageWrapper = styled.div`
  width: 100%;
`;

export const PageContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const TopBackgroundGradient = styled.div`
  width: 100%;
  height: 464px;

  position: absolute;
  z-index: -1;

  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
`;

export const BottomBackgroundGradient = styled.div(
  ({ theme: { medias }, isOnHomepage }) => `
  width: 100%;
  height: 994px;

  position: absolute;
  bottom: ${isOnHomepage ? '324px' : '0'};
  z-index: -1;

  background: linear-gradient(0deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
  @media ${medias.mobile} {
    height: 770px;
    bottom: ${isOnHomepage ? '206px' : '0'};

  }
`,
);
