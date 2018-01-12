import { css } from 'styled-components';

import './reset';

export const innerSpacing = {
  s0: '10px',
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
  s2: '1rem'
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
  margin-top: 10px;
  margin-bottom: ${outerSpacing.s3};

  @media (min-width: 350px) {
    margin-top: 30px;
  }

  @media (min-width: 640px) {
    margin-top: 60px;
  }

  @media (min-width: 960px) {
    margin-top: ${outerSpacing.s2};
  }
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
    font-size: ${fontSizes.extraLarge};
    line-height: 1.1;
    font-weight: 800;

    @media (min-width: 350px) {
      font-size: ${fontSizes.giant};
    }
  `,
  bodyCopy: css`
    font-size: ${fontSizes.regular};
    font-weight: normal;
  `,
  bodyCopySmall: css`
    font-size: ${fontSizes.small};
  `,
  bodyCopyLarge: css`
    font-size: 20px;

    @media (min-width: 350px) {
      font-size: ${fontSizes.large};
    }
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
    text-decoration: underline;
    color: ${colors.text.subdued};
  `,
  navigationHyperlink: css`
    text-decoration: none;
    color: ${props => props.active ? colors.text.green : 'black'};
    transition: color ${timings.color};
    will-change: color;

    &:hover, &:focus {
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