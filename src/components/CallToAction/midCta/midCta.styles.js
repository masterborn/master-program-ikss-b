import styled from 'styled-components';
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
  padding-bottom: 113px;
  padding-top: 115px;

  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.blueTints.blue10};

  @media (max-width: 550px) {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`;

export const MidCtaHeader = styled(Header3)`
  text-align: center;
  margin-bottom: 32px;
  @media (max-width: 550px) {
    width: 100%;
    padding: 0 31px;
    margin-top: 0;
    margin-bottom: 24px;

    font-size: 18px;
    line-height: 24px;
  }
`;
