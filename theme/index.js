import { css } from 'styled-components'

const root = css`
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
`

const innerSpacing = {
  s1: '20px',
  s2: '40px',
  negative: {
    s1: '-20px',
  },
};

const outerSpacing = {
  s1: '100px',
  s2: '150px',
  s3: '200px',
  s4: '300px',
};

const textSpacing = {
  s1: '.5rem',
};

const maxWidthContainer = css`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const colors = {
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

const textStyles = {
  mainCallout: css`
    fontSize: 48px;
    lineHeight: 1.1;
    fontWeight: 900;
  `,
  bodyCopy: css`
    fontSize: 18px;
  `,
  bodyCopySmall: css`
    fontSize: 16px;
  `,
  bodyCopyLarge: css`
    fontSize: 24px;
  `,
  thirdLevelHeading: css`
    fontSize: 24px;
    fontWeight: bold;
  `
}

const button = {
  normal: css`
    display: inline-block;
    backgroundColor: ${colors.backgrounds.black};
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

const grid = {
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

const images = {
  screenshots: css`
    box-shadow: 0 4px 8px 2px rgba(0,0,0,.1),
                0 0 2px rgba(0,0,0,.2)';
  `
}

export default {
  root: root,
  button: button,
  colors: colors,
  innerSpacing: innerSpacing,
  outerSpacing: outerSpacing,
  textSpacing: textSpacing,
  maxWidthContainer: maxWidthContainer,
  grid: grid,
  textStyles: textStyles,
  images: images
}