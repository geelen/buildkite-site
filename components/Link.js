import Link from 'next/link'
import React, { Children } from 'react'

// Our own Link higher order component. It differs from the standard Next one in
// the following ways:
//   * It always sets passHref
//   * It adds an 'external' prop
//
// We could probably get away with not having this component if we didn't mix
// Next and non-Next page requests on buildkite.com

export default ({ href, external, children }) => {
  // This will return the first child, if multiple are provided it will throw an error
  const child = Children.only(children)

  if (external) {
    // External links just render the child (usually an <a> tag) but setting the href
    return React.cloneElement(child, { href: href })
  }
  // Internal links (to Next.js pages) just pass through to Next’s Link which
  // does lots of things for us, including prefetching etc
  return React.createElement(
    Link,
    { href: href, passHref: true },
    children
  )

}
