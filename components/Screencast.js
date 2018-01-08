import Link from 'next/link'
import styled from 'styled-components'

const placeholderImage = require('../assets/images/screencasts/placeholder.png')

const ScreenshotImage = styled.img`
  width: 800px;
  max-width: 100%;
`

const NextUpImage = styled.img`
  width: 400px;
  max-width: 100%;
`

// Slightly different header to a normal page
export default ({ screencast, nextScreencast }) => (
  <div>
    <p>
      <Link href="/screencasts">
        <a>Screencasts</a>
      </Link>
    </p>

    <h1>{screencast.title}</h1>

    <ScreenshotImage src={placeholderImage} />

    <p>Related documentation: ...</p>
    <h2>Next up…</h2>

    <Link href={nextScreencast.href}>
      <a>
        <h2>{nextScreencast.title}</h2>
        <NextUpImage src={placeholderImage} />
        <p>Duration: 90s</p>
      </a>
    </Link>
  </div>
)