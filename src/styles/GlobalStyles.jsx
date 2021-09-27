import { Header1, Header2, Header3, Header4, Header5 } from '@typography/headers';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 62.5%;
}

html{
  scroll-behavior: smooth;
}
body{
  overflow: ${(props) => (props.theme.isModalOpened || props.theme.hideOverflowOnBody) && 'hidden'};
}
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fontFamily.main}
  }

  h1{
    ${Header1};
  }
  h2{
    ${Header2};
  }
  h3{
    ${Header3};
  }
  h4{
    ${Header4};
  }
  h5{
    ${Header5};
  }
`;

export default GlobalStyles;
