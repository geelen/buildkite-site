import Link from 'next/link'

import Page, { page } from 'components/Page'

import caseStudies from './_data'

export default function caseStudyPage(pathname) {
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.pathname == pathname);

  return page(({ loggedIn }) => (
    <Page
      headTitle={caseStudy.headTitle}
      loggedIn={loggedIn}
    >
      <p>
        <Link href="/case-studies">
          <a>Case Studies</a>
        </Link>
      </p>
      <h1>{caseStudy.team}</h1>
      <p>{caseStudy.industry} - {caseStudy.teamSize}</p>
      <img src={caseStudy.photoOne.image} alt={caseStudy.photoOne.alt} />
      <img src={caseStudy.photoTwo.image} alt={caseStudy.photoTwo.alt} />
    </Page>
  ))
}