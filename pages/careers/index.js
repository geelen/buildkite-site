import styled from 'styled-components'
import Br from 'components/Br'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

import Page, { page } from 'components/Page'
import { Masonry, Brick } from 'components/Masonry'
import Callout from 'components/Callout'

import headOfficeImage from '../../assets/images/about/head-office.jpg'

export default page((props) => (
  <Page
    headTitle="Work at Buildkite"
    image={headOfficeImage}
    imageAlt="Person looking at points around a globe"
    imageHeight="220"
    imageWidth="374"
    title="Work at Buildkite"
    description={
      <>
        Build tools for the best <Br maxWidth="30em" />
        software teams in the world.
      </>
    }
    {...props}
  >

    <Callout
      heading="Get in touch"
      description="If you've got any questions or want to be notified of new positions, say hi &mdash; we'd love to hear from you."
      url="mailto:careers@buildkite.com"
      buttonTitle="Email careers@buildkite.com"
    />
  </Page>
))
