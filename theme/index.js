import { css } from 'styled-components';

import './reset';

export const cssLerp = (property, minValue, minWidth, maxValue, maxWidth) => css`
  ${property}: ${minValue};

  // linearly scale font size from minFontSize to maxFontSize between minPageWidth and maxPageWidth
  ${property}: calc(${minValue} + (${maxValue.replace('px', '')} - ${minValue.replace('px', '')}) / (${maxWidth.replace('px', '')} - ${minWidth.replace('px', '')}) * (100vw - ${minWidth}));

  @media (max-width: ${minWidth}) {
    ${property}: ${minValue};
  }

  @media (min-width: ${maxWidth}) {
    ${property}: ${maxValue};
  }
`

export const dynamicFontSize = (...args) => cssLerp('font-size', ...args);

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
  padding-left: ${innerSpacing.s1};
  padding-right: ${innerSpacing.s1};
`;

export const pageContainer = css`
  ${maxWidthContainer}

  ${cssLerp('margin-top', '10px', '0px', outerSpacing.s2, '960px')}
  ${cssLerp('margin-bottom', '10px', '0px', outerSpacing.s3, '960px')}
`

export const colors = {
  backgrounds: {
    black: '#333',
    blackHover: 'black',
    grey: '#F8F8F8',
    greyHover: '#F1F1F1',
    green: '#00D974',
    greenHover: '#00BB64'
  },
  text: {
    subdued: '#777777',
    black: 'black',
    green: '#14CC80',
    white: 'white',
  }
};

const fontSizes = {
  small: '16px',
  regular: '18px',
  large: '24px',
  extraLarge: '36px',
  giant: '48px'
}

export const timings = {
  color: '300ms'
}

export const textStyles = {
  mainCallout: css`
    line-height: 1.1;
    font-weight: 800;

    ${dynamicFontSize(fontSizes.extraLarge, '320px', fontSizes.giant, '960px')}
  `,
  bodyCopy: css`
    font-size: ${fontSizes.regular};
    font-weight: normal;
  `,
  bodyCopySmall: css`
    font-size: ${fontSizes.small};
  `,
  bodyCopyLarge: css`
    ${dynamicFontSize('20px', '320px', fontSizes.large, '960px')}
  `,
  secondLevelHeading: css`
    font-size: ${fontSizes.extraLarge};
    font-weight: 800;
  `,
  thirdLevelHeading: css`
    font-size: ${fontSizes.large};
    font-weight: bold;
  `,
  hyperlink: css`
    text-decoration: none;
    color: ${props => props.active ? colors.text.green : 'black'};
    transition: color ${timings.color};
    will-change: color;

    &:hover {
      color: ${colors.text.green};
    }
  `
}

export const images = {
  screenshots: css`
    box-shadow: 0 4px 8px 2px rgba(0,0,0,.1),
                0 0 2px rgba(0,0,0,.2);
  `
}

export const boxShadows = {
  menuBar: '0 0 15px rgba(0, 0, 0, 0.1)'
}

// Adapted from https://labs.ssbbartgroup.com/index.php/Offscreen_Text
//
// Without `white-space`, certain assistive technologies will announce a
// sentence as if it has no whitespace between words */
export const offscreen = css`
  position: absolute;
  clip-path: inset(50%);
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  white-space: nowrap;
`