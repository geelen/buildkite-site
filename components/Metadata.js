const fallbackOpenGraphImage = require('../assets/images/open-graph/default.png')
const fallbackDescription = "Lightning fast testing and delivery for all your software projects"

const stringifyReactComponent = (component) => {
  // This does the equivalent of a "textContent" on the React element
  if (component.props && component.props.children) {
    if (typeof component.props.children === 'string') {
      return component.props.children
    }

    return component.props.children.map((child) => {
      if (React.isValidElement(child)) {
        // [Ralph Wiggum voice] I'm a recursive function!
        return stringifyReactComponent(child)
      } else if ('string' === typeof child) {
        return child
      }
    }).join('')
  }
}

export default (props) => {
  const {
    siteOrigin,
    headTitle,
    headImageAlt,
    imageAlt,
    openGraphType,
    video
  } = props

  let description = (props.headDescription || props.description)

  if (React.isValidElement(description)) {
    description = stringifyReactComponent(description)
  }

  let image = props.headImage || props.image || fallbackOpenGraphImage

  if (image && image.indexOf('://') < 4) {
    image = siteOrigin + image
  }

  return (
    <React.Fragment>
      <meta name="description" content={description || fallbackDescription} />
      <meta property="og:type" content={openGraphType || (video ? 'video.other' : 'website')} />
      <meta property="og:title" content={headTitle} />
      <meta property="og:description" content={description || fallbackDescription} />
      {video && (
        <meta property="og:video" content={video} />
      )}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={headImageAlt || imageAlt || description || fallbackDescription} />
      <meta property="og:site_name" content="Buildkite" />
      <meta property="og:locale" content="en_US" />
    </React.Fragment>
  )
}
