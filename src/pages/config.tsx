import React, { useContext, useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { TwitchContext } from '../components/context/Twitch'
import useLocalstorage from '../components/hooks/useLocalstorage'

export default function Index() {
  const { twitch, config } = useContext(TwitchContext)
  const [apiKey, setApiKey] = useState(() => config.broadcaster.apiKey || '')
  const [character, setCharacter] = useState(() => config.broadcaster.character || '')
  const [gamemode, setGamemode] = useState(() => config.broadcaster.gamemode || 'pve')
  const [charactersByKey, setCharactersByKey] = useLocalstorage<{ [k: string]: any[] }>(
    'twitch-gw2-build-characters-v1',
    {}
  )
  const characters = useMemo(() => (charactersByKey || {})[apiKey] || [], [apiKey, charactersByKey])
  useEffect(() => {
    if (!apiKey) setApiKey(config.broadcaster.apiKey || apiKey)
  }, [apiKey, config.broadcaster.apiKey])
  useEffect(() => {
    if (!character) setCharacter(config.broadcaster.character || character)
  }, [character, config.broadcaster.character])
  useEffect(() => {
    setGamemode(config.broadcaster.gamemode || gamemode)
  }, [gamemode, config.broadcaster.gamemode])
  const getData = useCallback(
    async (apiKey) => {
      if (!apiKey) return
      const res = await fetch(
        `https://api.guildwars2.com/v2/characters?access_token=${encodeURIComponent(apiKey)}&ids=all`
      )
      if (res.ok) {
        const data = await res.json()
        setCharactersByKey((c) => ({ ...c, [apiKey]: data }))
      }
    },
    [setCharactersByKey]
  )
  useEffect(() => {
    getData(apiKey)
  }, [apiKey, getData])
  const save = useCallback(
    (e) => {
      e.preventDefault()
      const newConfig = {
        ...config.broadcaster,
        apiKey: (apiKey || '').trim(),
        character: (character || characters[0]?.name || '').trim(),
        gamemode: (gamemode || 'pve').trim().toLowerCase(),
      }
      twitch.configuration.set('broadcaster', '1.0', JSON.stringify(newConfig))
    },
    [apiKey, character, gamemode, config.broadcaster, twitch, characters]
  )
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div>
      <h2>Config</h2>
      <small style={{ position: 'relative', top: -5 }}>
        After making changes here, make sure to save, and then you will need to refresh to see them.
      </small>
      <form ref={formRef} onSubmit={save} style={{ flexDirection: 'column', display: 'flex', gap: 10 }}>
        <div style={{ flexDirection: 'column', display: 'flex', gap: 2 }}>
          <input name="apiKey" placeholder="API key..." value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          <small>
            You can get an API key from{' '}
            <a
              href="https://account.arena.net/applications"
              style={{ color: 'lightblue', textDecoration: 'underline' }}
            >
              here
            </a>
            , with the "account", "characters", "unlocks", and "builds" permissions.
          </small>
        </div>
        <div style={{ flexDirection: 'column', display: 'flex', gap: 2 }}>
          <select name="character" value={character} onChange={(e) => setCharacter(e.target.value)}>
            {characters.length === 0 ? <option disabled>Loading...</option> : null}
            {characters.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          <small>
            Guild Wars 2 doesn't let us know current character, so you have to set it manually. Add an API Key and press
            "Fetch Characters" to load the possible characters.
          </small>
        </div>
        <div style={{ flexDirection: 'column', display: 'flex', gap: 2 }}>
          <select name="gamemode" value={gamemode} onChange={(e) => setGamemode(e.target.value)}>
            <option value="pve">PvE</option>
            <option value="pvp">PvP</option>
            <option value="wvw">WvW</option>
          </select>
          <small>This is the gamemode you want to show information for.</small>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              const key = (formRef.current?.elements as any).apiKey.value
              if (!key) return
              getData(key)
            }}
          >
            Fetch Characters
          </button>
          <button
            type="reset"
            onClick={() => {
              twitch.configuration.set('broadcaster', '1.0', JSON.stringify({}))
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}
