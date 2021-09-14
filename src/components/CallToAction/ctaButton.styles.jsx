import StyledPrimaryButton from '@root/components/buttons/primaryButton/StyledPrimaryButton';
import styled from 'styled-components';

const StyledCtaButton = styled(StyledPrimaryButton)(
  ({ theme: { medias } }) => `
  @media ${medias.mobile} {
    height: 36px;
    padding: 9px 16px;
  }
`,
);

export default StyledCtaButton;
