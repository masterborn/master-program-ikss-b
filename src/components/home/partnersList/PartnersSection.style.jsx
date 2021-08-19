import { Header3 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';
import styled from 'styled-components';

export const LogosSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1134px;
  height: 556px;
  margin-top: 148px;
`;
export const PartnersHeader = styled(Header3)`
  margin-bottom: 32px;
`;

export const PartnersDescription = styled(ParagraphBody)`
  text-align: center;
  width: 635px;
  height: 64px;
  margin-bottom: 80px;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  height: 336px;
  width: 1134px; ;
`;
export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 226px;
  height: 112px;
  cursor: pointer;
`;
