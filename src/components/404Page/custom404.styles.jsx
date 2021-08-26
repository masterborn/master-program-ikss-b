import styled from 'styled-components';
import StyledPrimaryButton from '../buttons/primaryButton/StyledPrimaryButton';
import { Header1 } from '../typography/headers';
import { ParagraphBody } from '../typography/paragraphs';
import IKKSErrorImage from './IKKSErrorImage';

export const IKKSContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 116px;
  margin-bottom: -65px;
  width: 100%;
  height: auto;
  @media (max-width: 550px) {
    margin-top: 207px;
    margin-bottom: 0;
    height: 51vw;
    min-height: 136px;
    width: 100%;
  }
`;

export const IKKSLogo = styled(IKKSErrorImage)`
  @media (max-width: 550px) {
    height: auto;
    width: auto;
  }
`;

export const ErrorMessage = styled(Header1)`
  margin-bottom: 32px;
  @media (max-width: 550px) {
    font-size: 40px;
    line-height: 56px;
  }
`;
export const ErrorDescription = styled(ParagraphBody)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 32px;
  @media (max-width: 550px) {
    text-align: center;
    display: inline;
    font-size: 14px;
    line-height: 28px;
  }
`;

export const GetBackButton = styled(StyledPrimaryButton)`
  height: 36px;
  padding: 9px 16px;
  font-size: 14px;
  line-height: 18px;
`;
