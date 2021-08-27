import styled from 'styled-components';
import StyledPrimaryButton from '../buttons/primaryButton/StyledPrimaryButton';

const CtaButton = styled(StyledPrimaryButton)`
  @media (max-width: 550px) {
    padding: 9px 16px;
    height: 36px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export default CtaButton;
