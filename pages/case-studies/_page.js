import styled from 'styled-components'

import Callout from 'components/Callout'
import CaseStudyCallout from 'components/CaseStudyCallout'
import Link from 'components/Link'
import { OffscreenH2 } from 'components/OffscreenHeading'
import Page, { page } from 'components/Page'

import caseStudies from './_data'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const HeadingContainer = FlexContainer.extend`
  align-items: center;
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
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
    max-width: 33em;
    margin: ${({ theme }) => theme.textSpacing.s2} 0;
    a {
      ${({ theme }) => theme.textStyles.navigationHyperlink}
      font-weight: bold;
    }
  }
`

const ImageCell = styled.div`
  flex: 1 2 150px;
`

const LogoCell = ImageCell.extend`
  margin-left: ${({ theme }) => theme.innerSpacing.s2};
  @media (max-width: 620px) {
    margin-top: ${({ theme }) => theme.innerSpacing.s2};
    margin-left: 0;
  }
`

const ResultsCell = ImageCell.extend`
  display: grid;
  align-self: flex-start;
  grid-gap: ${({ theme }) => theme.textSpacing.s1};
`

const ResultItem = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s1} ${({ theme }) => theme.innerSpacing.s1} calc(${({ theme }) => theme.innerSpacing.s1} + .5em) calc(${({ theme }) => theme.innerSpacing.s1} + .5em);
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  line-height: 1;
`

const ResultValue = styled.span`
  font-size: 36px;
  font-weight: 800;
  line-height: 1;
`

const ResultNumber = styled.span`
  font-size: 72px;
  margin-right: .05em;
`

const ResultLabel = styled.span`
  font-weight: 600;
  display: block;
  max-width: 11em;
`

const TeamLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
`

const Logo = styled.img`
  width: 200px;
  max-width: 100%;
`

const Testimonial = styled.figure`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
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
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};

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
  // Split out current and other case studies
  const { caseStudy, otherCaseStudies } = caseStudies.reduce(
    (acc, study) => {
      if (study.pathname == pathname) {
        acc.caseStudy = study;
      } else {
        acc.otherCaseStudies.push(study);
      }

      return acc;
    },
    {
      caseStudy: null,
      otherCaseStudies: []
    }
  );

  return page(({ loggedIn }) => (
    <Page
      title="Case Studies"
      headTitle={caseStudy.headTitle}
      loggedIn={loggedIn}
    >
      <HeadingContainer>
        <TextCell>
          <h1>{caseStudy.team}</h1>
          <p>{caseStudy.industry} - {caseStudy.teamSize}</p>
        </TextCell>

        <LogoCell>
          <Logo
            src={caseStudy.logoImage}
            alt={`${caseStudy.team} logo`}
          />
        </LogoCell>
      </HeadingContainer>

      <SpacedFlexContainer>
        <CaseStudyWords>
          {caseStudy.words}
        </CaseStudyWords>

        <ResultsCell>
          {caseStudy.results.map((result, index) => (
            <ResultItem key={index}>
              <ResultValue>
                <ResultNumber>{result.number}</ResultNumber>{result.unit}
              </ResultValue><br/>
              <ResultLabel>{result.label}</ResultLabel>
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

      <Callout
        grey
        heading="Talk to our team"
        description="Send us an email if you’d like to chat about how Buildkite could help you."
        url="mailto:sales@buildkite.com"
        buttonTitle="Email sales@buildkite.com"
      />

      <OffscreenH2>More case studies</OffscreenH2>

      {otherCaseStudies.slice(0, 3).map((otherCaseStudy) => (
        <CaseStudyCallout
          caseStudy={otherCaseStudy}
          key={otherCaseStudy.pathname}
        />
      ))}
    </Page>
  ))
}