import React from 'react'
import * as Sentry from '@sentry/react'

function FallbackComponent(props) {
  console.info(props)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <p>An error has occured</p>
      <p>Error ID: {props.eventId}</p>
      <a>
        Get in contact with me on{' '}
        <a
          style={{ color: 'var(--color-mesmer)' }}
          href="https://reddit.com/user/Maael"
          target="_blank"
          rel="noreferrer"
        >
          Reddit
        </a>{' '}
        or email me
      </a>
    </div>
  )
}

const ErrorBoundary: React.FC = ({ children }) => (
  <Sentry.ErrorBoundary fallback={FallbackComponent}>{children}</Sentry.ErrorBoundary>
)

export default ErrorBoundary
