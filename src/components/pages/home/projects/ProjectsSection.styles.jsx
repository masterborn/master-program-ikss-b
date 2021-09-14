import styled from 'styled-components';
import { Header3, Header4 } from '@root/styles/typography/headers';

export const ProjectSection = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  height: auto;
  width: 99.7rem;
  margin-top: 18.0rem;
  a {
    margin-top: 3.2rem;

    color: inherit;
    text-decoration: none;
  }

  @media ${medias.mobile} {
    width: 100%;
    max-width: 55.0rem;
    padding: 0 2.4rem 0 2.4rem;
    margin-top: 3.0rem;

    a {
      align-self: center;
      margin-top: 1.6rem;
    }
  }
`,
);

export const SectionHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;
  ${Header3};

  @media ${medias.mobile} {
    ${Header4};
    margin-bottom: 2.4rem;
  }
`,
);
