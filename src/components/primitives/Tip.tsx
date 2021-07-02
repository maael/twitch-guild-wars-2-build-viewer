import React, { useContext } from 'react'
import { Tooltip as Tippy } from 'react-tippy'
import { TwitchContext } from '../context/Twitch'

const Tip: React.FC<{ html: JSX.Element }> = ({ html, children }) => {
  const { ctx } = useContext(TwitchContext)
  return (
    <Tippy
      position="top"
      animateFill={false}
      arrow={true}
      arrowSize="big"
      duration={150}
      animation="fade"
      html={html}
      style={{ cursor: 'pointer' }}
      theme={ctx.theme}
    >
      {children}
    </Tippy>
  )
}

export default Tip
