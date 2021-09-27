import styled from 'styled-components';

import StyledPrimaryButton from '@buttons/primaryButton/StyledPrimaryButton';

const StyledCtaButton = styled(StyledPrimaryButton)(
  ({ theme: { medias } }) => `
  @media ${medias.mobile} {
    height: 3.6rem;
    padding: .9rem 1.6rem;
  }
`,
);

export default StyledCtaButton;
