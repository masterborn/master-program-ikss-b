import styled from 'styled-components';
import { Header3, Header4 } from '@root/styles/typography/headers';

export const ProjectSection = styled.section(
  ({ theme: { medias } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  height: auto;
  width: 997px;
  margin-top: 180px;
  a {
    margin-top: 32px;

    color: inherit;
    text-decoration: none;
  }

  @media ${medias.mobile} {
    width: 100%;
    max-width: 550px;
    padding: 0 24px 0 24px;
    margin-top: 30px;

    a {
      align-self: center;
      margin-top: 16px;
    }
  }
`,
);

export const SectionHeader = styled.h3(
  ({ theme, theme: { medias } }) => `
  margin-bottom: 32px;
  ${Header3(theme)};

  @media ${medias.mobile} {
    ${Header4(theme)};
    margin-bottom: 24px;
  }
`,
);
