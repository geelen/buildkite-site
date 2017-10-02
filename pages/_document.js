import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import * as theme from 'theme'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(Component => props =>
      sheet.collectStyles(<Component {...props} />
    ))
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }

  render () {
    return (
      <html lang="en-US">
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
          <meta name="theme-color" content="#da936a" />
          <style dangerouslySetInnerHTML={{ __html: theme.reset }} />
        </Head>
        <body>
          <div className='root'>
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}