import styled from 'styled-components'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

import questionsImage from '../assets/images/contact/questions.jpg'
import feedbackImage from '../assets/images/contact/feedback.jpg'
import vulnerabilityImage from '../assets/images/security/vulnerability.jpg'
import sayhelloImage from '../assets/images/contact/sayhello.jpg'

import facebookLogoImage from '../assets/images/contact/facebook-logo.svg'
import githubLogoImage from '../assets/images/contact/github-logo.svg'
import keybaseLogoImage from '../assets/images/contact/keybase-logo.svg'
import twitterLogoImage from '../assets/images/contact/twitter-logo.svg'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  padding-top: ${({ theme }) => theme.outerSpacing.s1};
  padding-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: center;
`

const Header = styled.h1`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const SocialAnchor = styled.a`
  margin: ${({ theme }) => theme.textSpacing.s1};
`

const SocialImage = styled.img`
  width: 45px;
  vertical-align: middle;
  filter: grayscale(100%);
  transition: filter ${({ theme }) => theme.timings.color};
  &:hover {
    filter: none;
  }
`

const SocialLink = ({ href, src, alt }) => (
  <SocialAnchor href={href}>
    <SocialImage src={src} alt={alt} />
  </SocialAnchor>
)

export default page((props) => (
  <Page
    headTitle="Contact Buildkite"
    headDescription="Buildkite contact details."
    title="Contact Us"
    description="We’d love to hear from you."
    {...props}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Questions & Support"
        image={questionsImage}
        imageWidth={433}
        imageAlt="Question mark"
        description="Things not going smoothly, or need a hand? Our team is here to help."
        url="/support"
        buttonTitle="Get Support"
      />
      <ActionGridItem
        heading="Feedback & Suggestions"
        image={feedbackImage}
        imageWidth={466}
        imageAlt="Post-it note"
        description="Have some feedback or an idea? Let us know in our feedback forum."
        url="https://forum.buildkite.community/c/feature-requests"
        external
        buttonTitle="Post a Topic"
      />
      <ActionGridItem
        heading="Report a Vulnerability"
        image={vulnerabilityImage}
        imageAlt="Two people holding a bug they found inside a computer"
        description="Found a security issue? Request an invite to our bug bounty program."
        url="/security"
        buttonTitle="See Security Docs"
      />
      <ActionGridItem
        heading="Say Hello!"
        image={sayhelloImage}
        imageAlt="People waving hello"
        description="For press enquiries, or anything else you need, drop us a line and we’ll help."
        url="mailto:hello@buildkite.com"
        buttonTitle="Email hello@buildkite.com"
      />
    </ActionGrid>

    <Section>
      <Header>Find us on…</Header>
      <SocialLink
        href="https://twitter.com/buildkite"
        src={twitterLogoImage}
        alt="Twitter"
      />
      <SocialLink
        href="https://github.com/buildkite"
        src={githubLogoImage}
        alt="GitHub"
      />
      <SocialLink
        href="https://keybase.io/buildkite"
        src={keybaseLogoImage}
        alt="Keybase"
      />
      <SocialLink
        href="https://www.facebook.com/buildkite/"
        src={facebookLogoImage}
        alt="Facebook"
      />
    </Section>

    <Callout
      heading="Anything else?"
      description="Our friendly support team can help."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
))