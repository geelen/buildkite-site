export default ({ heading, description, url, buttonTitle }) => (
  <section>
    <h1>{heading}</h1>
    <p>{description}</p>
    <p><a href={url}>{buttonTitle}</a></p>
  </section>
)