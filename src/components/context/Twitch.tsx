import React, { useEffect, useState, createContext } from 'react'

interface TwitchAuth {
  channelId: string
  clientId: string
  token: string
  userId: string
}

interface TwitchContext {
  game: string
  isVideoAdShowing: boolean
  language: string
  mode: string
  playbackMode: string
  theme: 'dark' | 'light'
}

export const TwitchContext = createContext<{
  ctx: Partial<TwitchContext>
  auth: Partial<TwitchAuth>
  config: { broadcaster: any }
  twitch?: any
}>({ ctx: {}, auth: {}, config: { broadcaster: {} } })

const TwitchContextWrapper: React.FC = ({ children }) => {
  const [ctx, setCtx] = useState<Partial<TwitchContext>>({})
  const [auth, setAuth] = useState<Partial<TwitchAuth>>({})
  const [config, setConfig] = useState({ broadcaster: {} })
  const [twitch, setTwitch] = useState()
  useEffect(() => {
    const twitchExt = (window as any).Twitch?.ext
    if (!twitchExt) {
      console.warn('Twitch not loaded')
      return
    }
    setTwitch(twitchExt)
    console.info(twitchExt, twitchExt.configuration)
    setConfig({ broadcaster: JSON.parse(twitchExt.configuration.broadcaster?.content || '{}') })
    twitchExt.configuration.onChanged((e) => {
      console.info('conf', e)
      setConfig({ broadcaster: JSON.parse(twitchExt.configuration.broadcaster?.content || '{}') })
    })
    twitchExt.onAuthorized((e: TwitchAuth) => {
      setAuth(e)
      if (!twitchExt.configuration.broadcaster) {
        twitchExt.configuration.set('broadcaster', '1.0', '{}')
      }
    })
    twitchExt.onContext((e: TwitchContext) => {
      document.body.classList.toggle('dark', e.theme === 'dark')
      setCtx(e)
    })
  }, [])
  return <TwitchContext.Provider value={{ ctx, auth, config, twitch }}>{children}</TwitchContext.Provider>
}

export default TwitchContextWrapper
