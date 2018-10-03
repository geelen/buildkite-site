import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ req, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((Component) => (props) =>
      sheet.collectStyles(<Component {...props} />
      ))
    const styles = sheet.getStyleElement()
    return { ...page, styles, req }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover" />
          <meta name="theme-color" content="#00D974" />
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
          {this.renderAnalytics()}
        </body>
      </html>
    )
  }

  renderAnalytics() {
    if (!this.props.req.loggedIn) {
      return (
        <>
          <script
            async
            src="https://www.google-analytics.com/analytics.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                ga('create', 'UA-43649972-1', 'auto');
                ga('send', 'pageview');
              `
            }}
          />
        </>
      )
    }
  }
}
