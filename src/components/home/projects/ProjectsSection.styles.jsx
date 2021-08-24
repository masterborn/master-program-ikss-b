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
`;

export const SectionHeader = styled(Header3)`
  margin-bottom: 32px;
`;
export const ProjectsButtonsContainer = styled.div`
  display: flex;
  width: auto;
  height: 48px;
  margin-bottom: 64px;
  border-radius: 26px;
  background-color: ${(props) => props.theme.color.blueTints.blue10};
`;
export const ProjectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 14px 24px;
  border: none;
  border-radius: 26px;
  color: ${(props) => (props.clicked ? props.theme.color.white : props.theme.color.navy)};
  background-color: ${(props) => (props.clicked ? props.theme.color.ikssBlue : 'inherit')};
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;
`;
