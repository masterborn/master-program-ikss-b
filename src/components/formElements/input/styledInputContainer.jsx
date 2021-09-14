import styled from 'styled-components';

const styledInputContainer = styled.div(
  ({ withIcon }) => `
  display: flex;
  align-items: center;
  margin-right: ${withIcon && `10px`};
  min-height: 48px;
`,
);

export default styledInputContainer;
