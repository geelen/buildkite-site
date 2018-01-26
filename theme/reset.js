import { injectGlobal } from 'styled-components';

import { styles as fontStyles } from './fonts'

injectGlobal`
  ${fontStyles}

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
