import Page, { page } from 'components/Page'
import CaseStudyCallout from 'components/CaseStudyCallout'

import caseStudies from './_data'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Case Studies"
    title="Case Studies"
    description="TODO"
    loggedIn={loggedIn}
    >
    {caseStudies.map((caseStudy) => (
      <CaseStudyCallout
        caseStudy={caseStudy}
        key={caseStudy.pathname}
      />
    ))}
  </Page>
))