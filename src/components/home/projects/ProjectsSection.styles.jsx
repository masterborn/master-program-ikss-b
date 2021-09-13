import styled from 'styled-components';
import { Header3, Header4 } from '@root/styles/typography/headers';

export const ProjectSection = styled.section`
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

  @media (max-width: 550px) {
    width: 100%;
    max-width: 550px;
    padding: 0 24px 0 24px;
    margin-top: 30px;

    a {
      align-self: center;
      margin-top: 16px;
    }
  }
`;

export const SectionHeader = styled.h3`
  margin-bottom: 32px;
  ${Header3}

  @media (max-width: 550px) {
    ${Header4}
    margin-bottom: 24px;
  }
`;
