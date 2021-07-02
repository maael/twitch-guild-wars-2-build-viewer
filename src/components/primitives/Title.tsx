import * as React from 'react'

const Title: React.FC<{ style?: React.CSSProperties }> = ({ children, style }) => {
  return (
    <h2
      style={{
        fontSize: '1rem',
        lineHeight: '1rem',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 8,
        ...style,
      }}
    >
      {children}
    </h2>
  )
}

export default Title
