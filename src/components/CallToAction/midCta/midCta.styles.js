import styled from 'styled-components';
import StyledPrimaryButton from '../../buttons/primaryButton/StyledPrimaryButton';
import { Header3 } from '../../typography/headers';

export const MidCtaContainer = styled.div`
  /* just for display testing */
  margin: 120px 0 120px 0;

  width: 1200px;
  height: 352px;

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 24px;
    height: auto;
  }
`;

export const CtaOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 16px;

  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.blueTints.blue10};
`;

export const MidCtaHeader = styled(Header3)`
  text-align: center;
  margin-top: 115px;
  @media (max-width: 550px) {
    width: 100%;
    padding: 0 31px;
    margin-top: 56px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const MidCtaButton = styled(StyledPrimaryButton)`
  margin-top: 32px;
  @media (max-width: 550px) {
    height: 36px;
    margin-top: 24px;
    margin-bottom: 56px;
    padding: 9px 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;
