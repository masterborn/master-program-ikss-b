import StyledPrimaryButton from '@root/components/buttons/primaryButton/StyledPrimaryButton';
import styled from 'styled-components';

const StyledCtaButton = styled(StyledPrimaryButton)`
  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 36px;
    padding: 9px 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export default StyledCtaButton;
