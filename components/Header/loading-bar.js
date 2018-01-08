import NProgress from 'nprogress'
import Router from 'next/router'
import { injectGlobal } from 'styled-components'

import { colors } from '../../theme'

const noticeableDelay = 200;
var noticeableDelayTimeout = null;

const showProgressBar = function() {
  // We only want to show the loading bar if they've been waiting 100ms, because
  // some pages are pre-fetched and ready to go
  if (noticeableDelayTimeout) clearTimeout(noticeableDelayTimeout)
  noticeableDelayTimeout = setTimeout(function() { NProgress.start() }, noticeableDelay)
}

const finishProgressBar = function() {
  if (noticeableDelayTimeout) clearTimeout(noticeableDelayTimeout)
  NProgress.done()
}

Router.onRouteChangeStart = () => showProgressBar()
Router.onRouteChangeComplete = () => finishProgressBar()
Router.onRouteChangeError = () => finishProgressBar()

injectGlobal`
  #nprogress { pointer-events: none; }
  #nprogress .bar {
    background: ${colors.text.green};
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`