import { Header3 } from '@root/styles/typography/headers';
import { ParagraphBody } from '@root/styles/typography/paragraphs';
import styled from 'styled-components';

export const LogosSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1134px;
  height: auto;
  margin-top: 148px;

  @media (max-width: 550px) {
    width: 100%;
    max-width: 550px;
    padding: 0 26px 0 26px;
    height: auto;
  } ;
`;
export const PartnersHeader = styled(Header3)`
  margin-bottom: 32px;

  @media (max-width: 500px) {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const PartnersDescription = styled(ParagraphBody)`
  text-align: center;
  width: 635px;
  height: 64px;

  @media (max-width: 550px) {
    font-size: 14px;
    line-height: 28px;
    width: 100%;
    max-width: 550px;
    height: auto;
    min-height: 112px;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  height: auto;
  width: 1134px;
  margin-top: 80px;

  @media (max-width: 550px) {
    width: 100%;
    max-width: 550px;
    margin-top: 32px;
    min-height: 302px;
    height: auto;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 226px;
  height: 112px;

  @media (max-width: 550px) {
    width: calc(100% / 3);
    height: auto;
    margin-bottom: 30px;

    & a,
    img {
      width: 85%;
      height: auto;
      min-height: 35px;
      max-height: 40px;
    }
  } ;
`;
