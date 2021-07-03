import React, { useContext, useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { TwitchContext } from '../components/context/Twitch'
import useLocalstorage from '../components/hooks/useLocalstorage'

export default function Index() {
  const { twitch, config } = useContext(TwitchContext)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
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
      try {
        if (!apiKey) {
          throw new Error('No API Key')
        }
        try {
          setError('')
          const res = await fetch(
            `https://api.guildwars2.com/v2/characters?access_token=${encodeURIComponent(apiKey)}&ids=all`
          )
          if (res.ok) {
            const data = await res.json()
            setCharactersByKey((c) => ({ ...c, [apiKey]: data }))
          } else {
            throw new Error('There was a problem getting characters')
          }
        } catch {
          throw new Error('There was a problem getting characters')
        }
      } catch (e) {
        setError(e.message)
      }
    },
    [setCharactersByKey]
  )
  useEffect(() => {
    getData(apiKey)
  }, [apiKey, getData])
  const save = useCallback(
    (e) => {
      setSaved(false)
      e.preventDefault()
      const newConfig = {
        ...config.broadcaster,
        apiKey: (apiKey || '').trim(),
        character: (character || characters[0]?.name || '').trim(),
        gamemode: (gamemode || 'pve').trim().toLowerCase(),
      }
      twitch.configuration.set('broadcaster', '1.0', JSON.stringify(newConfig))
      setSaved(true)
    },
    [apiKey, character, gamemode, config.broadcaster, twitch, characters, setSaved]
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
              target="_blank"
              rel="noreferer noorigin noreferrer"
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
              setError('')
              const key = (formRef.current?.elements as any).apiKey.value
              if (!key) {
                setError('Requires an API key')
                return
              }
              getData(key)
            }}
          >
            Fetch Characters
          </button>
          <button
            type="reset"
            onClick={() => {
              setSaved(false)
              twitch.configuration.set('broadcaster', '1.0', JSON.stringify({}))
              setSaved(true)
            }}
          >
            Clear
          </button>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5 }}
        >
          {saved ? (
            <div
              style={{
                backgroundColor: '#34D399',
                border: '1px solid #065F46',
                color: '#065F46',
                display: 'inline-block',
                padding: '2px 5px',
                borderRadius: '0.3rem',
              }}
            >
              Saved
            </div>
          ) : null}
          {error ? (
            <div
              style={{
                backgroundColor: '#F87171',
                border: '1px solid #991B1B',
                color: '#991B1B',
                display: 'inline-block',
                padding: '2px 5px',
                borderRadius: '0.3rem',
              }}
            >
              Error: {error}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  )
}
