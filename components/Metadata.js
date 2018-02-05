const stringifyReactComponent = (component) => {
  debugger

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

export default ({ headTitle, headDescription, description/*, image, imageAlt*/ }) => {
  let availableDescription = (headDescription || description)

  debugger

  if (React.isValidElement(availableDescription)) {
    availableDescription = stringifyReactComponent(availableDescription)
  }

  return (
    <React.Fragment>
      {availableDescription && (
        <meta name="description" content={availableDescription} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={headTitle} />
      {availableDescription && (
        <meta property="og:description" content={availableDescription} />
      )}
      <meta property="og:site_name" content="Buildkite" />
      <meta property="og:locale" content="en_US" />
    </React.Fragment>
  )
}
