import React from 'react'
import ReactDOM from 'react-dom'
import Panel from '../pages/panel'
import TwitchContext from '../components/context/Twitch'

console.info('[mount] Panel')

ReactDOM.render(
  <TwitchContext>
    <Panel />
  </TwitchContext>,
  document.querySelector('#app')
)
