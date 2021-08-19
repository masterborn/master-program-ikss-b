import { Header3, Header4, Header5 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  height: 1261px;
  width: 997px;
  margin-top: 180px;
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

export const ProjectArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 997px;
  height: 969px;
  margin-bottom: 56px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
`;
export const ProjectMediaContainer = styled.div`
  border-radius: 16px 16px 0 0;
  background-color: black;
  height: 579px;
  width: 100%;
`;
export const ProjectSummary = styled.div`
  display: flex;
  flex-direction: column;
  height: 390px;
  width: 100%;
  padding: 64px 102px 66px 103px;

  a {
    margin-top: auto;

    color: inherit;
    text-decoration: none;
  }
`;
export const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
`;

export const ProjectDate = styled(Header5)`
  color: ${(props) => props.theme.color.steel};
`;

export const ProjectTitle = styled(Header4)`
  margin: 0 24px 0 0;
`;
export const ProjectDescription = styled(ParagraphBody)`
  margin: 32px 0 32px 0;
  margin-bottom: 32px;
`;

export const ProjectImage = styled(Image)`
  border-radius: 16px 16px 0 0;
`;
