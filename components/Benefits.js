import styled from 'styled-components'
import { Masonry, Brick } from 'components/Masonry'
import { SubSectionHeader } from 'components/sections/sections'

import healthCoverIcon from 'assets/images/careers/streamline-icon-hospital-house@48x48.svg'
import homeOfficeIcon from 'assets/images/careers/streamline-icon-office-desk@48x48.svg'
import learningIcon from 'assets/images/careers/streamline-icon-tools-box@48x48.svg'
import parentalLeaveIcon from 'assets/images/careers/streamline-icon-baby-care-body@48x48.svg'
import profitShareIcon from 'assets/images/careers/streamline-icon-saving-piggy-dollars@48x48-2.svg'
import wellnessIcon from 'assets/images/careers/streamline-icon-messages-bubble-smile@48x48.svg'

const BenefitsBrick = styled(Brick)`
  background: url(${(props) => props.icon}) 0 1.6rem no-repeat;
  padding-left: 70px;
`

export const CareersParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
`

export default () => (
  <Masonry>
    <BenefitsBrick
      icon={learningIcon}
    >
      <SubSectionHeader>Learning & development</SubSectionHeader>
      <CareersParagraph>Invest in your personal and professional development with a yearly budget of AU$5,000 to spend on travel, conferences, workshops, courses, and books.</CareersParagraph>
    </BenefitsBrick>
    <BenefitsBrick
      icon={healthCoverIcon}
    >
      <SubSectionHeader>Health cover</SubSectionHeader>
      <CareersParagraph>We’ll make sure that you and your family have access to comprehensive health and hospital cover, no matter which country you live in.</CareersParagraph>
    </BenefitsBrick>
    <BenefitsBrick
      icon={parentalLeaveIcon}
    >
      <SubSectionHeader>Parental leave</SubSectionHeader>
      <CareersParagraph>Take time out to set up a new family, with 6 months of paid leave if you’re the primary carer, and 3 months if you’re secondary. You can use it flexibly, change between primary and secondary, and take the same leave for a still birth. We also keep paying super/401k for 6 months if you take unpaid leave.</CareersParagraph>
    </BenefitsBrick>
    <BenefitsBrick
      icon={homeOfficeIcon}
    >
      <SubSectionHeader>Home office & coworking</SubSectionHeader>
      <CareersParagraph>Set yourself up with a great work environment, either at home or in a co-working space, with a budget of AU$3000 for a desk and chair, and a new computer and phone every 24 months. We’ll also cover the cost of plants, art, or anything else you need to set yourself up with a beautiful and productive work environment.</CareersParagraph>
    </BenefitsBrick>
    <BenefitsBrick
      icon={wellnessIcon}
    >
      <SubSectionHeader>Wellness & paid time off</SubSectionHeader>
      <CareersParagraph>Take care of your health and wellbeing away from the screen, with 6 weeks of paid leave per year, the ability to take time out of work for fitness, and a budget of AU$2000 per year to spend on things like yoga, climbing, personal training, or a day at the zoo.</CareersParagraph>
    </BenefitsBrick>
    <BenefitsBrick
      icon={profitShareIcon}
    >
      <SubSectionHeader>Profit share & ownership</SubSectionHeader>
      <CareersParagraph>Share in the company’s success, and have a stake in what you’re helping to build. Everyone on the team receives a percentage share of the company profits each quarter, and an equity stake through our employee share program.</CareersParagraph>
    </BenefitsBrick>
  </Masonry>
)
