import { css } from 'styled-components'

export const root = css`
  @font-face {
    font-family: BK-Circular;
    src: url(/static/fonts/lineto-circular-book.woff2) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(/static/fonts/lineto-circular-bold.woff2) format("woff2");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: BK-Circular;
    src: url(/static/fonts/lineto-circular-black.woff2) format("woff2");
    font-weight: 900;
    font-style: normal;
  }
  
  :root {
    font-family: BK-Circular, -apple-system, BlinkMacSystemFont;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
  :root, body {
    margin: 0;
    padding: 0;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
`

export const innerSpacing = {
  s1: '20px',
  s2: '40px',
  negative: {
    s1: '-20px',
  },
};

export const outerSpacing = {
  s1: '100px',
  s2: '150px',
  s3: '200px',
  s4: '300px',
};

export const textSpacing = {
  s1: '.5rem',
};

export const maxWidthContainer = css`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const colors = {
  backgrounds: {
    black: '#333',
    blackHover: 'black',
    grey: '#F8F8F8',
    greyHover: '#F1F1F1',
  },
  text: {
    subdued: '#777777',
    black: 'black',
    green: '#14CC80',
    white: 'white',
  }
};

export const textStyles = {
  mainCallout: css`
    font-size: 48px;
    line-height: 1.1;
    font-weight: 900;
  `,
  bodyCopy: css`
    font-size: 18px;
  `,
  bodyCopySmall: css`
    font-size: 16px;
  `,
  bodyCopyLarge: css`
    font-size: 24px;
  `,
  thirdLevelHeading: css`
    font-size: 24px;
    font-weight: bold;
  `
}

export const button = {
  normal: css`
    display: inline-block;
    background-color: ${colors.backgrounds.black};
    color: ${colors.text.white};
    padding-left: ${innerSpacing.s1},
    padding-right: ${innerSpacing.s1},
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: bold;
    border-radius: 3px;
    text-decoration: none;
    :hover {
      backgroundColor: ${colors.backgrounds.blackHover}
    }
  `
}

export const grid = {
  container: css`
    display: flex;
    margin-left: ${innerSpacing.negative.s1};
  `,
  cell: css`
    padding-left: ${innerSpacing.s1};
    margin-bottom: ${innerSpacing.s1};
  `,
  width: {
    oneThird: '33.4%',
    twoThirds: '66.6%'
  }
}

export const images = {
  screenshots: css`
    box-shadow: 0 4px 8px 2px rgba(0,0,0,.1),
                0 0 2px rgba(0,0,0,.2)';
  `
}