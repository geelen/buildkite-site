export const ActionGrid = ({ children }) => (
  <nav>
    {children}
  </nav>
)

export const ActionGridItem = ({ heading, description, url, buttonTitle }) => (
  <a href={url}>
    <section>
      <h1>{heading}</h1>
      <p>{description}</p>
      <p>{buttonTitle}</p>
    </section>
  </a>
)