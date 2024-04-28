import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin:0;
    padding:0;
  }

  a {
    text-decoration:none;
  }

  button{
    border: none;
    background: inherit;
    outline: none;
  }

  input{
    outline: none;
  }
`;

export default GlobalStyles;
