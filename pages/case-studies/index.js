import Link from 'next/link'

import Page, { page } from 'components/Page'
import Button from 'components/Button'

import caseStudies from './_data'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Case Studies"
    title="Case Studies"
    description="TODO"
    loggedIn={loggedIn}
    >
    <h1>Case Studies</h1>
    {caseStudies.map((caseStudy, index) => (
      <div key={index}>
        <h2>
          <Link href={caseStudy.pathname}>
            <a><img src={caseStudy.logoImage} alt={caseStudy.team} width={300} /></a>
          </Link>
        </h2>

        <p>{caseStudy.industry} - {caseStudy.teamSize}</p>

        <p>{caseStudy.summaryWords}</p>

        <Link href={caseStudy.pathname} passHref>
          <Button>{caseStudy.team} Case Study</Button>
        </Link>

        <div style={{ backgroundImage: `url(${caseStudy.indexBackgroundImage})` }}>
          {caseStudy.results.map((result, index) => (
            <div key={index}>
              {result.number}
              {result.unit}
              {' '}
              {result.label}
            </div>
          ))}
        </div>
      </div>
    ))}
  </Page>
))