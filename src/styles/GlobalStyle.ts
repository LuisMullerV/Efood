import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body { height: 100%; overflow-x: hidden; }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: #fff;
    color: #111;
  }

  a { color: inherit; }
  button { font-family: inherit; }
`
