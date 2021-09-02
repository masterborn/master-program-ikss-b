import styled from 'styled-components';
import { Header3 } from '@root/components/typography/headers';

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

    a {
      align-self: center;
      margin-top: 16px;
    }
  }
`;

export const SectionHeader = styled(Header3)`
  margin-bottom: 32px;

  @media (max-width: 550px) {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;
