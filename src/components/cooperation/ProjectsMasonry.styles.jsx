import styled from 'styled-components';

export const Masonry = styled.div(
  ({ theme: { medias }, columnWidth }) => `
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: ${columnWidth}px;
  width: 1200px;

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
    padding: 0 24px 0 24px;
  }
`,
);

export const ProjectsMasonryContainer = styled.div(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 80px;

  @media ${medias.mobile} {
    margin-top: 40px;
    width: 100%;
  }
`,
);

export const CtaMockup = styled.div`
  margin: 20px 0 90px 0;
  width: 1200px;
  height: 352px;
  background-color: red;
`;
