import styled from 'styled-components'

import Button from 'components/Button'
import Link from 'components/Link'

const Wrapper = styled.div`
  display: flex;
  margin: ${({ noMargin, theme }) => noMargin ? 0 : theme.outerSpacing.s1} 0;
  flex-wrap: wrap;
`

const InfoPane = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  flex: 4 1 280px;
  padding: ${({ theme }) => theme.innerSpacing.s2};
`

const Logo = styled.img`
  width: 260px;
  max-width: 100%;
`

const Info = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s2} 0;
`

const Summary = styled.p`
  margin-top: ${({ theme }) => theme.textSpacing.s2};
  margin-bottom: ${({ theme }) => theme.textSpacing.s3};
`

const ResultPane = styled.div`
  flex: 1 2 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: ${({ theme }) => theme.innerSpacing.s2};
  background-color: rgba(0,0,0,.06);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, .75) 0%, rgba(255, 255, 255, .75) 100%),
                    url(${({ picture }) => picture});
  background-size: auto 100%;
  background-size: cover;
  line-height: 1;
`

const ResultNumber = styled.span`
  display: block;
  font-size: 48px;
  font-weight: 800;
`

const ResultLabel = styled.span`
  font-weight: 600;
  display: block;
  max-width: 11em;
`

export default ({ caseStudy, noMargin }) => (
  <Wrapper noMargin={noMargin}>
    <InfoPane>
      <h2>
        <Link href={caseStudy.pathname}>
          <a>
            <Logo
              src={caseStudy.logoImage}
              alt={caseStudy.team}
            />
          </a>
        </Link>
      </h2>

      <Info>{caseStudy.industry} - {caseStudy.teamSize}</Info>

      <Summary>{caseStudy.summaryWords}</Summary>

      <Link href={caseStudy.pathname} prefetch>
        <Button>
          Read the Case Study
        </Button>
      </Link>
    </InfoPane>

    <ResultPane
      picture={caseStudy.indexBackgroundImage}
    >
      {caseStudy.results.map((result) => (
        <div key={result.label}>
          <ResultNumber>
            {result.number + result.unit}
          </ResultNumber>
          <ResultLabel>{result.label}</ResultLabel>
        </div>
      ))}
    </ResultPane>
  </Wrapper>
)