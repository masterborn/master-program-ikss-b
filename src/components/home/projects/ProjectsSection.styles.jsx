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
  }
`;

export const SectionHeader = styled(Header3)`
  margin-bottom: 32px;

  @media (max-width: 550px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const ProjectsButtonsContainer = styled.div`
  display: flex;
  width: auto;
  height: 48px;
  margin-bottom: 64px;
  border-radius: 26px;
  @media (max-width: 550px) {
    min-width: 300px;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
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
  background-color: ${(props) =>
    props.clicked ? props.theme.color.ikssBlue : props.theme.color.blueTints.blue10};
  font-weight: 700;
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 550px) {
    height: 31px;
    width: auto;
    padding: 9px 16px;
    font-size: 10px;
    line-height: 13px;

    &:first-child {
      margin: 0 100px 12px 100px;
    }
    &:last-child {
      margin: 0 0 0 12px;
    }
  }
  @media (max-width: 380px) {
    width: 130px;
  }
`;
