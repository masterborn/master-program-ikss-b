import styled from 'styled-components';

export const Masonry = styled.div(
  ({ theme: { medias } }) => `
  display:  block;
  column-count: 2;
  column-gap: 24px;

  width: 120.0rem;



  @media ${medias.mobile} {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 0 2.4rem 0 2.4rem;
  
  }
`,
);

export const ProjectsMasonryContainer = styled.section(
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
