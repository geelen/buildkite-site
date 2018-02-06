import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((Component) => (props) =>
      sheet.collectStyles(<Component {...props} />
      ))
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-43649972-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-43649972-1');
              `
            }}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
          <meta name="theme-color" content="#00D974" />
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}