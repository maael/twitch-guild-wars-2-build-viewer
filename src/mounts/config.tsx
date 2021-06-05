import React from 'react'
import ReactDOM from 'react-dom'
import Config from '../pages/config'
import TwitchContext from '../components/context/Twitch'

console.info('[mount] Config')

ReactDOM.render(
  <TwitchContext>
    <Config />
  </TwitchContext>,
  document.querySelector('#app')
)
