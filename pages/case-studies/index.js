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
        <h2><img src={caseStudy.logoImage} alt={caseStudy.team} width={300} /></h2>
        <p>{caseStudy.industry} - {caseStudy.teamSize}</p>
        <Link href={caseStudy.pathname} passHref>
          <Button>{caseStudy.team} Case Study</Button>
        </Link>
      </div>
    ))}
  </Page>
))