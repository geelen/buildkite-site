import Br from 'components/Br'
import Page, { page } from 'components/Page'
import CaseStudyCallout from 'components/CaseStudyCallout'

import caseStudies from './_data'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Case Studies"
    title="Case Studies"
    description={<span>See the results from some of <Br maxWidth='30em'/> the teams using Buildkite.</span>}
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