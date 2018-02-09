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
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
          <meta name="theme-color" content="#00D974" />
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-43649972-1', 'auto');
                ga('send', 'pageview');
              `
            }}
          />
        </body>
      </html>
    )
  }
}