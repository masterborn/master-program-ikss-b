import styled from 'styled-components';

export const Masonry = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: ${(props) => `${props.columnWidth}px`};
  width: 1200px;

  &&::before,
  &&:after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 1;
  }

  @media (max-width: 550px) {
    height: auto;
    width: 100%;
    padding: 0 24px 0 24px;
  }
`;

export const ProjectsMasonryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 38px;

  @media (max-width: 550px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const CtaMockup = styled.div`
  margin: 20px 0 90px 0;
  width: 1200px;
  height: 352px;
  background-color: red;
`;
