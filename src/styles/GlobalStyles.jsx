import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
body{
  overflow: ${(props) => props.isContactModalOpened && 'hidden'};
}
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fontFamily.main}
  }
`;

export default GlobalStyles;
