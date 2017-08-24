
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import theme from '../theme'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <ThemeProvider theme={theme}>
        <html>
          <Head>
            <title>Buildkite</title>
            <style>{theme.root}</style>
            {styleTags}
          </Head>
          <body>
            <div className='root'>
              {main}
            </div>
            <NextScript />
          </body>
        </html>
      </ThemeProvider>
    )
  }
}