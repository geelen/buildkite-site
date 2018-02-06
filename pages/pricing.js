import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { Masonry, Brick } from 'components/Masonry'

const PlanCurrencyNote = styled.p`
  text-align: center;
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin-bottom: 50px;

  @media (min-width: 350px) {
    margin-bottom: 60px;
  }

  @media (min-width: 640px) {
    margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  }

  @media (min-width: 960px) {
    margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  }
`

const PlanSection = styled.div`
  display: flex;
  margin: -${({ theme }) => theme.innerSpacing.s0};
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 830px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const PlanBox = styled.div`
  flex: 1 1 250px;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
  margin: ${({ theme }) => theme.innerSpacing.s0};

  @media (min-width: 340px) {
    width: 100%;
    max-width: 320px;
  }

  @media (min-width: 830px) {
    min-width: none;
  }
`

const PlanName = styled.h2`
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const PlanDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const PlanInclusionsHeading = styled.h3`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text.subdued};
  padding-top: ${({ theme }) => theme.textSpacing.s2};
  margin-bottom: ${({ theme }) => theme.textSpacing.s2};
`

const PlanInclusions = styled.ul`
  list-style: none;
  padding: 0;
  margin: -${({ theme }) => theme.textSpacing.s1} 0;

  > li {
    padding: ${({ theme }) => theme.textSpacing.s1} 0;
  }
`

const PriceContainer = styled.div`
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
`

const PriceBox = styled.div`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  font-weight: 600;
  line-height: 1;
`

const PriceCurrency = styled.span`
  font-weight: 800;
  vertical-align: super;
`

const PriceValue = styled.span`
  font-size: 48px;
  padding-left: .05em;
`

const PricePeriod = styled.span`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  font-weight: 800;
  white-space: nowrap;
`

const PriceNotes = styled.div`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.textSpacing.s2};
  max-width: 17em;

  > * {
    margin: ${({ theme }) => theme.textSpacing.s1} 0;
  }
`

const Price = ({ value, period, notes }) => (
  <PriceContainer>
    <PriceBox>
      <PriceCurrency>$</PriceCurrency><PriceValue>{value}</PriceValue>
      {" "}
      <PricePeriod>{period}</PricePeriod>
    </PriceBox>
    {notes && (
      <PriceNotes>{notes}</PriceNotes>
    )}
  </PriceContainer>
)

const Plan = ({ name, description, inclusions, pricing }) => (
  <PlanBox>
    <PlanName>{name}</PlanName>
    {description && (
      <PlanDescription>{description}</PlanDescription>
    )}
    <PlanInclusionsHeading>
      Inclusions
    </PlanInclusionsHeading>
    <PlanInclusions>
      {inclusions.map((inclusion) => (
        <li key={inclusion}>
          {inclusion}
        </li>
      ))}
    </PlanInclusions>
    {pricing}
  </PlanBox>
)

const FAQHeader = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  text-align: center;
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const FAQQuestion = styled.h3`
  ${({ theme }) => theme.textStyles.bodyCopy}
`

const FAQParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy}
  color: ${({ theme }) => theme.colors.text.subdued};
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
`

export default page((props) => (
  <Page
    headTitle="Buildkite Pricing"
    headDescription="Buildkite plan pricing and frequently asked questions."
    title="Pricing"
    {...props}
  >
    <PlanCurrencyNote>All prices are in USD</PlanCurrencyNote>
    <PlanSection>
      <Plan
        name="Free Plan"
        description="For open-source projects, students, and teaching organizations."
        inclusions={[
          'Unlimited agents',
          'Unlimited builds',
          'Unlimited artifacts'
        ]}
      />
      <Plan
        name="Standard Plan"
        inclusions={[
          'Unlimited agents',
          'Unlimited builds',
          'Unlimited artifacts',
          'Priority email support',
          'Free 30 day trial',
          'Teams permissions',
          'Single Sign On'
        ]}
        pricing={
          <Price
            value={15}
            period={
              <React.Fragment>
                per user per month
              </React.Fragment>
            }
            notes={
              <p>Pay annually for a 15% discount</p>
            }
          />
        }
      />
      <Plan
        name="Enterprise Plan"
        inclusions={[
          'Unlimited agents',
          'Unlimited builds',
          'Unlimited artifacts',
          'Priority email support',
          'Free 30 day trial',
          'Teams permissions',
          'Single Sign On',
          'Audit logging',
          'Live chat support',
          'Technical account manager',
          'SLA',
          'Invoice payment'
        ]}
        pricing={
          <Price
            value={2999}
            period="per month"
            notes={
              <React.Fragment>
                <p>Annual payment only</p>
                <p>Includes 100 users. Additional users $29/month (pro-rata)</p>
              </React.Fragment>
            }
          />
        }
      />
    </PlanSection>

    <FAQHeader>Frequently Asked Questions</FAQHeader>

    <Masonry>
      <Brick>
        <FAQQuestion>
          What is an agent?
        </FAQQuestion>
        <FAQParagraph>
          A build agent runs on your machine, and is capable of running a single build job at one time. You can run as many agents as you wish, and Buildkite will coordinate the work between them.
        </FAQParagraph>
      </Brick>
      <Brick>
        <FAQQuestion>
          Students & teachers
        </FAQQuestion>
        <FAQParagraph>
          We offer free accounts for all students and teachers. Simply create your account and email support.
        </FAQParagraph>
      </Brick>
      <Brick>
        <FAQQuestion>
          Non-profits & charities
        </FAQQuestion>
        <FAQParagraph>
          We offer heavy discounts for non-profit and charity organizations. Email support to see how we can help you.
        </FAQParagraph>
      </Brick>
      <Brick>
        <FAQQuestion>
          Open-source
        </FAQQuestion>
        <FAQParagraph>
          We offer free accounts for open-source. Sign up, create the organization for your project, and email support.
        </FAQParagraph>
      </Brick>
    </Masonry>
  </Page>
))