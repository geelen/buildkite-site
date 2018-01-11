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
    <h1>Case Studies</h1>
    {caseStudies.map((caseStudy, index) => (
      <CaseStudyCallout caseStudy={caseStudy} key={index} />
    ))}
  </Page>
))