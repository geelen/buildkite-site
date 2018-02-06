const fallbackOpenGraphImage = require('../assets/images/open-graph/default.png')
const fallbackOpenGraphImageAlt = "Lightning fast testing and delivery for all your software projects"

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
    headTitle,
    headImage,
    headImageAlt,
    image,
    imageAlt
  } = props

  let description = (props.headDescription || props.description)

  if (React.isValidElement(description)) {
    description = stringifyReactComponent(description)
  }

  return (
    <React.Fragment>
      {description && (
        <meta name="description" content={description} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={headTitle} />
      {description && (
        <meta property="og:description" content={description} />
      )}
      <meta property="og:image" content={headImage || image || fallbackOpenGraphImage} />
      <meta property="og:image:alt" content={headImageAlt || imageAlt || fallbackOpenGraphImageAlt} />
      <meta property="og:site_name" content="Buildkite" />
      <meta property="og:locale" content="en_US" />
    </React.Fragment>
  )
}
