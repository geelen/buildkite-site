import { Section } from 'components/sections/sections'
import { Testimonial, Quotation, Attribution, Headshot, ImageGrid, ImageItem } from 'components/Page/case-study'
import testimonialImage from '../assets/images/careers/team-photo.jpg'
import testimonialAvatar from '../assets/images/about/eleanor.jpg'

export default () => (
  <Section>
    <Testimonial>
      <Quotation>
        Working at Buildkite has given me the freedom to grow and flourish in all aspects of my life, personally and professionally. I’m proud to be a part of such a passionate and supportive team.
      </Quotation>
      <Attribution>
        <Headshot
          src={testimonialAvatar}
          alt="Headshot of Eleanor."
        />
        <p>
          Eleanor
          <br />
          Engineer
        </p>
      </Attribution>
    </Testimonial>

    <ImageGrid>
      <ImageItem />
      <ImageItem
        src={testimonialImage}
        alt="Some of the team on a Zoom video call."
      />
    </ImageGrid>
  </Section>
)