import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import * as theme from '../../theme'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const nprogressCss = css`
  #nprogress { pointer-events: none; }
  #nprogress .bar {
    background: ${theme.colors.text.green};
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`

export default () => (
  <Head>
    <style>{nprogressCss}</style>
  </Head>
) 