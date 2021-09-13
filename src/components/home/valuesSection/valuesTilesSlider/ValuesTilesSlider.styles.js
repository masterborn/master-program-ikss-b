import styled from 'styled-components';

export const ValuesTilesContainer = styled.div`
  max-width: 100vw;
  min-width: 300px;
  margin-top: 60px;

  .slider {
    width: 100%;
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;

    position: relative;
    bottom: 50px;

    border: 1px solid #1889e9;
    background-color: transparent;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #1889e9;
  }
`;

export const ValuesTilesWrapper = styled.div`
  width: 100%;

  height: 470px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
