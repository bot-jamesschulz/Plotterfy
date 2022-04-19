import { createGlobalStyle } from 'styled-components';
 
// Global background
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #112426;
    background-image: url('/speaker4.svg');
    background-position: 25% 75%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 35%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;