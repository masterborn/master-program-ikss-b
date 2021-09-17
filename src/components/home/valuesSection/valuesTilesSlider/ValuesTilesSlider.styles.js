import styled from 'styled-components';

export const ValuesTilesContainer = styled.div`
  width: 100%;
  margin-top: 6rem;

  .slider {
    width: 100%;
  }
  .swiper-pagination-bullet {
    width: 1.6rem;
    height: 1.6rem;

    position: relative;
    bottom: 0;

    border: 1px solid #1889e9;
    background-color: transparent;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #1889e9;
  }
`;

export const ValuesTilesWrapper = styled.div`
  max-width: 100vw;
  height: 47rem;
  display: flex;
  justify-content: center;
`;
