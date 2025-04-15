import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${({ theme }) => theme.colors?.background};
    color: ${({ theme }) => theme.colors?.text};
    scroll-behavior: smooth;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style-type: none;
    padding-left: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button, input, textarea {
    font-family: inherit;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
