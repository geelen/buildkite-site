import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { Grid, Cell } from 'components/Grid'

const PlanCurrencyNote = styled.p`
  text-align: center;
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin-top: calc(-1 * (${({ theme }) => theme.outerSpacing.s2} - 30px));
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
`

const PlanSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -${({ theme }) => theme.innerSpacing.s0};
`

const PlanBox = styled.div`
  flex: 1 0 300px;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
  margin: ${({ theme }) => theme.innerSpacing.s0};
`

const PlanName = styled.h2`
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const PlanDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
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
  text-align: center;
  margin-top: ${({ theme }) => theme.textSpacing.s3};
`

const PriceBox = styled.div`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  display: flex;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.5;
`

const PriceValue = styled.span`
  font-size: 48px;
  font-weight: normal;
  line-height: 1;
`

const PricePeriod = styled.span`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  font-weight: 800;
  line-height: 1;
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
      $<PriceValue>{value}</PriceValue>
    </PriceBox>
    <PricePeriod>{period}</PricePeriod>
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

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Pricing"
    title="Pricing"
    description="TODO"
    loggedIn={loggedIn}
  >
    <PlanCurrencyNote>All prices are in USD</PlanCurrencyNote>
    <PlanSection>
      {/* <Plan
        name="Free Plan"
        description="For open-source projects, development agencies, and teaching organizations."
        inclusions={[
          'Unlimited agents',
          'Unlimited builds',
          'Unlimited artifacts'
        ]}
      /> */}
      <Plan
        name="Standard Plan"
        inclusions={[
          'Unlimited agents',
          'Unlimited builds',
          'Unlimited artifacts',
          'Priority email support',
          'Free 30 day trial',
          'Teams',
          'SSO',
          'Annual payment discount of 20%'
        ]}
        pricing={
          <Price
            value={15}
            period={
              <React.Fragment>
                per user<br/>
                per month
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
          'Includes 100 users',
          '$29 per additional user',
          'Unlimited agents',
          'Unlimited builds',
          'Unlimited artifacts',
          'Priority email support',
          'Free 30 day trial',
          'Teams',
          'SSO',
          'Audit log',
          'Live support via chat',
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

    <div>
      <h2>Frequently Asked Questions</h2>

      <Grid columns='12rem'>
        <Cell>
          <h3>What is an agent?</h3>
          <p>A build agent runs on your machine, and is capable of running a single build job at one time. You can run as many agents as you wish, and Buildkite will coordinate the work between them.</p>
        </Cell>
        <Cell>
          <h3>Students &amp; teachers</h3>
          <p>We offer free accounts for all students and teachers. Simply create your account and email support.</p>
        </Cell>
        <Cell>
          <h3>Non-profits &amp; charities</h3>
          <p>We offer heavy discounts for non-profit and charity organizations. Email support to see how we can help you.</p>
        </Cell>
        <Cell>
          <h3>Open-source</h3>
          <p>We offer free accounts for open-source. Sign up, create the organization for your project, and email support.</p>
        </Cell>
      </Grid>
    </div>
  </Page>
))