import styled from 'styled-components'

import Link from 'components/Link'
import Page, { page } from 'components/Page'

import caseStudies from './_data'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const HeadingContainer = FlexContainer.extend`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const SpacedFlexContainer = FlexContainer.extend`
  margin: ${({ theme }) => theme.innerSpacing.s1} -${({ theme }) => theme.innerSpacing.s1};

  > * {
    margin: 0 ${({ theme }) => theme.innerSpacing.s1};
  }
`

const TextCell = styled.div`
  flex: 3 1 280px;
`

const CaseStudyWords = TextCell.extend`
  color: ${({ theme }) => theme.colors.text.subdued};

  > p {
    margin: ${({ theme }) => theme.textSpacing.s1} 0;
  }
`

const ImageCell = styled.div`
  flex: 1 2 150px;
`

const ResultsCell = ImageCell.extend`
  display: grid;
  align-items: center;
  grid-gap: ${({ theme }) => theme.innerSpacing.s1};
`

const ResultItem = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s1};
`

const ResultNumber = styled.span`
  font-size: 48px;
  font-weight: 800;
`

const TeamLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
`

const Logo = styled.img`
  width: 300px;
  max-width: 100%;
`

const Testimonial = styled.figure`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
  margin-top: ${({ theme }) => theme.innerSpacing.s1};
  overflow: hidden;
  position: relative;
  min-height: 16rem;

  &:before {
    content: '“';
    color: white;
    font-size: 288px;
    line-height: 1;
    position: absolute;
    top: -.2em;
    left: .1em;
    pointer-events: none;
  }
`

const Quotation = styled.blockquote`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  font-weight: normal;
  flex: 1 1 280px;
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.textSpacing.s2};

  @media (min-width: 620px) {
    margin-top: 0;
    margin-bottom: 60px;
  }
`

const Attribution = styled.figcaption`
  flex: 1 0 200px;

  @media (min-width: 620px) {
    flex-grow: 0;
    align-self: flex-end;
    margin-top: 60px;
  }
`

const Headshot = styled.img`
  width: 90px;
  max-width: 100%;
`

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 540px) {
    max-height: 400px;
    position: relative;
    margin-top: -10px;
  }

  @media (min-width: 620px) {
    margin-top: -50px;
  }
`

// NOTE: The following three elements, <ImageItemCell/>, <CellImage/> and
// <ImageItem/> work around bugs in browser flexbox implementations which cause
// images which are automatically sized within flex containers to take up their
// entire container. To avoid this, we hide the image element itself and instead
// employ a `contain`ed background image aligned to the center bottom.

const ImageItemCell = styled.div`
  flex: 1 1 250px;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 540px) {
    background: url(${({ src }) => src}) center bottom / contain no-repeat;
  }
`

const CellImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  @media (min-width: 540px) {
    opacity: 0;
  }
`

const ImageItem = ({ src, alt, ...props }) => (
  <ImageItemCell src={src} {...props}>
    <CellImage src={src} alt={alt} />
  </ImageItemCell>
)

export default function caseStudyPage(pathname) {
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.pathname == pathname);

  return page(({ loggedIn }) => (
    <Page
      title="Case Studies"
      headTitle={caseStudy.headTitle}
      loggedIn={loggedIn}
    >
      <HeadingContainer>
        <TextCell>
          <p>Case Study</p>
          <h1>
            <Link href={caseStudy.link.url} passHref>
              <TeamLink>{caseStudy.team}</TeamLink>
            </Link>
          </h1>
          <p>{caseStudy.industry} - {caseStudy.teamSize}</p>
        </TextCell>

        <ImageCell>
          <Logo
            src={caseStudy.logoImage}
            alt={`${caseStudy.team} logo`}
          />
        </ImageCell>
      </HeadingContainer>

      <SpacedFlexContainer>
        <CaseStudyWords>
          {caseStudy.words}
        </CaseStudyWords>

        <ResultsCell>
          {caseStudy.results.map((result, index) => (
            <ResultItem key={index}>
              <ResultNumber>
                {result.number}{result.unit}
              </ResultNumber><br/>
              {result.label}
            </ResultItem>
          ))}
        </ResultsCell>
      </SpacedFlexContainer>

      <Testimonial>
        <Quotation>
          {caseStudy.testimonial.testimonial}
        </Quotation>
        <Attribution>
          <Headshot
            src={caseStudy.testimonial.headshotImage}
            alt={caseStudy.testimonial.name}
          />
          <p>
            {caseStudy.testimonial.name}
            <br/>
            {caseStudy.testimonial.title}
          </p>
        </Attribution>
      </Testimonial>

      <ImageGrid>
        <ImageItem
          src={caseStudy.photoOne.image}
          alt={caseStudy.photoOne.alt}
        />
        <ImageItem
          src={caseStudy.photoTwo.image}
          alt={caseStudy.photoTwo.alt}
        />
      </ImageGrid>
    </Page>
  ))
}