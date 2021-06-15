import React, { useContext, useCallback, useEffect, useState, useRef } from 'react'
import { TwitchContext } from '../components/context/Twitch'

export default function Index() {
  const { twitch, config } = useContext(TwitchContext)
  const [characters, setCharacters] = useState<any>([])
  const getData = useCallback(async (apiKey) => {
    if (!apiKey) return
    const res = await fetch(
      `https://api.guildwars2.com/v2/characters?access_token=${encodeURIComponent(apiKey)}&ids=all`
    )
    if (res.ok) {
      const data = await res.json()
      setCharacters(data)
    }
  }, [])
  useEffect(() => {
    getData(config.broadcaster.apiKey)
  }, [config.broadcaster.apiKey, getData])
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div>
      <h2>Config</h2>
      <small style={{ position: 'relative', top: -5 }}>
        After making changes here, make sure to save, and then you will need to refresh to see them.
      </small>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          const newConfig = {
            ...config.broadcaster,
            apiKey: (e as any).target.elements.apiKey.value.trim(),
            character: (e as any).target.elements.character.value.trim(),
            gamemode: (e as any).target.elements.gamemode.value.trim().toLowerCase(),
          }
          twitch.configuration.set('broadcaster', '1.0', JSON.stringify(newConfig))
        }}
        style={{ flexDirection: 'column', display: 'flex', gap: 10 }}
      >
        <div style={{ flexDirection: 'column', display: 'flex', gap: 2 }}>
          <input name="apiKey" placeholder="API key..." defaultValue={config.broadcaster.apiKey} />
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
          <select name="character">
            {characters.length === 0 ? <option disabled>Loading...</option> : null}
            {characters.map((c) => (
              <option key={c.name} value={c.name} selected={config.broadcaster.character === c.name}>
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
          <select name="gamemode">
            <option value="pve" selected={config.broadcaster.gamemode === 'pve'}>
              PvE
            </option>
            <option value="pvp" selected={config.broadcaster.gamemode === 'pvp'}>
              PvP
            </option>
            <option value="wvw" selected={config.broadcaster.gamemode === 'wvw'}>
              WvW
            </option>
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
