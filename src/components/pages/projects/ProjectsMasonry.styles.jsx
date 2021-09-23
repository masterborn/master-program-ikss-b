import styled from 'styled-components';

export const Masonry = styled.div(
  ({ theme: { medias }, columnWidth }) => `
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: ${columnWidth}px;
  width: 120.0rem;

  &&::before,
  &&:after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 1;
  }

  @media ${medias.mobile} {
    height: auto;
    width: 100%;
    padding: 0 2.4rem 0 2.4rem;
  
  }
`,
);

export const ProjectsMasonryContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8.0rem;

  @media ${medias.mobile} {
    margin-top: 4.0rem;
    width: 100%;
  }
`,
);

export const CtaMockup = styled.div`
  margin: 2rem 0 9rem 0;
  width: 120rem;
  height: 35.2rem;
  background-color: red;
`;