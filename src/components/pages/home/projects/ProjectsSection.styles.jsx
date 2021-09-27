import styled from 'styled-components';

import { Header4 } from '@typography/headers';

export const ProjectSection = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  height: auto;
  width: 99.7rem;
  margin-top: 18.0rem;
  margin-bottom: -0.8rem;
  a {
    color: inherit;
    text-decoration: none;
  }

  @media ${medias.mobile} {
    width: 100%;
    max-width: 55.0rem;
    padding: 0 2.4rem 0 2.4rem;
    margin-top: 3.0rem;
    margin-bottom: -2rem;

    a {
      align-self: center;
    }
  }
`,
);

export const SectionHeader = styled.h3(
  ({ theme: { medias } }) => `
  margin-bottom: 3.2rem;

  @media ${medias.mobile} {
    ${Header4};
    margin-bottom: 2.4rem;
  }
`,
);
