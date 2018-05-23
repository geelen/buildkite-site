import Br from 'components/Br'
import Page, { page } from 'components/Page'
import CaseStudyCallout from 'components/CaseStudyCallout'

import caseStudies from './_data'

export default page((props) => (
  <Page
    headTitle="Buildkite Case Studies"
    title="Case Studies"
    description={
      <>
        See the results from some of <Br maxWidth="30em" />
        the teams using Buildkite.
      </>
    }
    {...props}
  >
    {caseStudies.map((caseStudy) => (
      <CaseStudyCallout
        caseStudy={caseStudy}
        key={caseStudy.pathname}
      />
    ))}
  </Page>
))