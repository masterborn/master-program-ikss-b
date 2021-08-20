import styled from 'styled-components';

const styledInputContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.withIcon && `margin-right: 10px;`}
  min-height: 48px;
`;

export default styledInputContainer;
