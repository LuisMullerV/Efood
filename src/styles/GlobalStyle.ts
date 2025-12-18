import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background: #fff;
    color: #111;
  }
  a { color: inherit; }
  button { font-family: inherit; }
`
