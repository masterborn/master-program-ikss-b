import { Header4, Header5 } from '@root/components/typography/headers';
import Image from 'next/image';
import styled from 'styled-components';

export const ProjectArticle = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 997px;
  height: auto;
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
  height: auto;
  width: 100%;
  padding: 64px 102px 66px 103px;
`;
export const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  margin-bottom: 32px;
`;

export const ProjectDate = styled(Header5)`
  color: ${(props) => props.theme.color.steel};
`;

export const ProjectTitle = styled(Header4)`
  margin: 0 24px 0 0;
`;

export const ProjectImage = styled(Image)`
  border-radius: 16px 16px 0 0;
`;
