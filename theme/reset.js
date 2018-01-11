import { injectGlobal } from 'styled-components';

const woffBookPath = require('../assets/fonts/lineto-circular-book.woff2');
const woffBoldPath = require('../assets/fonts/lineto-circular-bold.woff2');
const woffBlackPath = require('../assets/fonts/lineto-circular-black.woff2');

injectGlobal`
  @font-face {
    font-family: BK-Circular;
    src: url(${woffBookPath}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(${woffBoldPath}) format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(${woffBlackPath}) format("woff2");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  :root {
    font-family: BK-Circular, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  /* Resets for relevant elements */
  
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre,
  ul,
  ol,
  li {
    margin: 0;
  }

  ul, ol, li {
    padding: 0;
    list-style: none;
  }
`;
