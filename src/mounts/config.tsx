import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import Config from '../pages/config'
import TwitchContext from '../components/context/Twitch'
import ErrorBoundary from '../components/primitives/ErrorBoundary'
import { VERSION } from '../util/constants'

console.info('[mount] Config')

try {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    release: VERSION,
    environment: 'production',
  })
} catch (e) {
  console.error('[sentry]', e)
}

ReactDOM.render(
  <ErrorBoundary>
    <TwitchContext>
      <Config />
    </TwitchContext>
  </ErrorBoundary>,
  document.querySelector('#app')
)
