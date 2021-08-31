import { Header4, Header5 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';
import styled from 'styled-components';

export const ProjectArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: ${(props) => (props.isOnGrid ? '588px' : '997px')};
  height: auto;
  margin-bottom: ${(props) => (props.isOnGrid ? '24px' : '56px')};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  @media (max-width: 550px) {
    width: 100%;
  }
  a {
    margin-top: ${(props) => (props.isOnGrid ? '24px' : '32px')};

    color: inherit;
    text-decoration: none;
  }
  &:nth-child(2n) {
    order: ${(props) => props.isOnGrid && 2};
  }
  &:nth-child(2n + 1) {
    order: ${(props) => props.isOnGrid && 1};
  }
`;
export const ProjectMediaContainer = styled.div`
  border-radius: 16px 16px 0 0;
  height: auto;
  width: 100%;
  @media (max-width: 550px) {
    height: auto;
  }
`;
export const ProjectSummary = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: ${(props) => (props.isOnGrid ? '32px 32px 40px 32px' : '64px 102px 66px 103px')};
  @media (max-width: 550px) {
    padding: 24px 26px 32px 24px;
  }
`;
export const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  margin-bottom: ${(props) => (props.isOnGrid ? '28px' : '32px')};
  @media (max-width: 550px) {
    text-align: left;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ProjectDate = styled(Header5)`
  color: ${(props) => props.theme.color.steel};

  @media (max-width: 550px) {
    font-size: 14px;
    line-height: 17.57px;
    weight: 700;
  }
`;

export const ProjectTitle = styled(Header4)`
  margin: 0 24px 0 0;
  @media (max-width: 550px) {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 24px;
  }
`;
export const ProjectDescription = styled(ParagraphBody)`
  @media (max-width: 550px) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
  @media (max-width: 550px) {
    max-width: 100%;
    height: auto;
  }
`;
