import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *, *::after, *::before{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }
    
    body{
        padding-left: 100px;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }
  
`;

export default GlobalStyle;
