import { Header3 } from '@root/components/typography/headers';
import { ParagraphBody } from '@root/components/typography/paragraphs';
import styled from 'styled-components';

export const BottomCtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 635px;
  height: auto;
  margin: 148px 0;

  @media (max-width: 550px) {
    height: auto;
    margin: 103px 0;
    width: 100%;
    padding: 0 24px;
  }
`;

export const BottomCtaHeader = styled(Header3)`
  text-align: center;
  margin-bottom: 32px;
  @media (max-width: 550px) {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const BottomCtaText = styled(ParagraphBody)`
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 550px) {
    margin-bottom: 16px;
  }
`;
