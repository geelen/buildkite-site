import styled from 'styled-components'

export default styled.div`
  color: ${({ theme }) => theme.colors.text.subdued};
  line-height: 1.5;
  margin: 0 auto;
  max-width: 40em;

  h3 {
    ${({ theme }) => theme.textStyles.bodyCopy}
    font-weight: 700;
    margin: ${({ theme }) => theme.innerSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
  }

  p, ul {
    margin: ${({ theme }) => theme.textSpacing.s3} 0 ${({ theme }) => theme.textSpacing.s1};
  }

  h3 + ul {
    margin-top: ${({ theme }) => theme.textSpacing.s1};
  }

  ul {
    padding: 0;

    li {
      list-style-type: square;
      margin: 0 0 ${({ theme }) => theme.textSpacing.s1} ${({ theme }) => theme.textSpacing.s3};
      padding: 0;
    }
  }

  th {
    text-align: left;
    vertical-align: top;
    white-space: nowrap;
  }

  td {
    padding:
      0
      0
      ${({ theme }) => theme.textSpacing.s1}
      ${({ theme }) => theme.textSpacing.s1};
  }
`
