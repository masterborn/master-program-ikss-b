import styled from 'styled-components';

const styledInputContainer = styled.div(
  ({ withIcon }) => `
  display: flex;
  align-items: center;
  margin-right: ${withIcon && `1.0rem`};
  min-height: 4.8rem;
`,
);

export default styledInputContainer;
