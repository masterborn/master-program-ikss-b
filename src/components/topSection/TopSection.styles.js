import { Header1 } from '@root/styles/typography/headers';
import { ParagraphBody } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const TopSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.isOnCooperationPage ? '583px' : 'auto')};

  height: auto;
  text-align: center;
  @media (max-width: 550px) {
    padding: 0 24px;
    width: auto;
  }
`;
export const TopSectionImage = styled.img`
  margin-top: 64px;

  @media (max-width: 550px) {
    margin-top: 32px;
  }
`;

export const TopSectionHeader = styled(Header1)`
  margin-top: 16px;

  @media (max-width: 550px) {
    margin-top: 8px;
    font-size: 32px;
    line-height: 44px;
  }
`;

export const TopSectionDescription = styled(ParagraphBody)`
  margin-top: 32px;
  max-width: 996px;
  height: 96px;

  @media (max-width: 550px) {
    width: 100%;
    height: auto;

    margin-top: 24px;
    font-size: 14px;
    line-height: 28px;
  }
`;
