import styled from 'styled-components'

import Button from 'components/Button'
import Link from 'components/Link'

const Wrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.outerSpacing.s1} 0;
  flex-wrap: wrap;
`

const InfoPane = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  flex: 4 1 280px;
  padding: ${({ theme }) => theme.innerSpacing.s2};
`

const ResultPane = styled.div`
  flex: 1 2 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: ${({ theme }) => theme.innerSpacing.s2};
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, .75) 0%, rgba(255, 255, 255, .75) 100%), url(${({ picture }) => picture});
  background-size: auto 100%;
  background-size: cover;
`

export default ({ caseStudy }) => (
  <Wrapper>
    <InfoPane>
      <h2>
        <Link href={caseStudy.pathname}>
          <a><img src={caseStudy.logoImage} alt={caseStudy.team} width={300} /></a>
        </Link>
      </h2>

      <p>{caseStudy.industry} - {caseStudy.teamSize}</p>

      <p>{caseStudy.summaryWords}</p>

      <Link href={caseStudy.pathname} prefetch>
        <Button>{caseStudy.team} Case Study</Button>
      </Link>
    </InfoPane>

    <ResultPane
      picture={caseStudy.indexBackgroundImage}
    >
      {caseStudy.results.map((result, index) => (
        <div key={index}>
          {result.number}
          {result.unit}
          {' '}
          {result.label}
        </div>
      ))}
    </ResultPane>
  </Wrapper>
)