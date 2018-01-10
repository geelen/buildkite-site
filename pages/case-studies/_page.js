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

      <p>
        <Link href={caseStudy.link.url}>
          <a>{caseStudy.link.label}</a>
        </Link>
      </p>

      <p>{caseStudy.industry} - {caseStudy.teamSize}</p>
      
      <hr/>

      {caseStudy.words}

      <hr/>

      <blockquote>
        <p>{caseStudy.testimonial.testimonial}</p>
        <footer>
          <cite>
            <img src={caseStudy.testimonial.headshotImage} alt={caseStudy.testimonial.name}/>
            <p>
              {caseStudy.testimonial.name}
              <br/>
              {caseStudy.testimonial.title}
            </p>
          </cite>
        </footer>
      </blockquote>

      <hr/>

      {caseStudy.results.map((result, index) => (
        <div key={index}>
          {result.number}
          {result.unit}
          {' '}
          {result.label}
        </div>
      ))}

      <hr/>

      <img src={caseStudy.photoOne.image} alt={caseStudy.photoOne.alt} />
      <img src={caseStudy.photoTwo.image} alt={caseStudy.photoTwo.alt} />
    </Page>
  ))
}