import styled from 'styled-components'

export const LastUpdated = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  text-align: center;
`

export default styled.div`
  li, p {
    max-width: 40em;
  }
  h2, h3 {
    margin: ${({ theme }) => theme.innerSpacing.s2} 0 ${({ theme }) => theme.innerSpacing.s1} 0;
  }
  h2, h3, ol li:before {
    ${({ theme }) => theme.textStyles.thirdLevelHeading}
  }
  ol, li { margin: 0; padding: 0; }

  .PrivacyPolicy__heading-list {
    counter-reset: section;
    .PrivacyPolicy__list {
      margin-top: ${({ theme }) => theme.innerSpacing.s1};
    }
    > li {
      margin: ${({ theme }) => theme.innerSpacing.s2} 0;
      list-style: none;
      > h2, > h3 {
        display: inline;
      }
      &:before {
        counter-increment: section;
        content: counter(section, decimal) ". ";
        font-weight: 600;
        margin-right: .25em;
        margin-bottom: .5em;
      }
    }
  }

  .PrivacyPolicy__heading-list--extra {
    counter-reset: extrasection;
    > li {
      &:before {
        counter-increment: extrasection;
        content: counter(extrasection, upper-alpha) ". ";
      }
    }
    .PrivacyPolicy__list {
      > li {
        &:before {
          content: counter(extrasection, upper-alpha) "." counter(section, decimal) ". ";
        }
      }
    }
  }

  /* Counts A, B, C, etc */
  .PrivacyPolicy__extras-heading-list {
    counter-reset: section;
  }

  .PrivacyPolicy__list {
    counter-reset: section;
    li {
      list-style-type: none;
      position: relative;
      margin-left: 0;
      padding-left: 2.5rem;
      margin-top: ${({ theme }) => theme.textSpacing.s1};
      &:before {
        counter-increment: section;
        position: absolute;
        left: 0;
        font-weight: 400;
        font-size: 1rem;
        content: counters(section, ".") ". ";
      }
      ol {
        counter-reset: subsection;
        li {
          padding-left: 2rem;
        }
        li:before {
          counter-increment: subsection;
          content: "(" counter(subsection, lower-alpha) ") ";
        }
        li ol {
          counter-reset: subsubsection;
          li:before {
            counter-increment: subsubsection;
            content: counter(subsubsection, lower-roman) ". ";
          }
        }
      }
    }
  }
`