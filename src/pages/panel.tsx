import React, { useContext } from 'react'
import { TwitchContext } from '../components/context/Twitch'
import useBuildData from '../components/hooks/useBuildData'
import useBuildTemplateString from '../components/hooks/useBuildTemplateString'
import useCopyToClipboard from '../components/hooks/useCopyToClipboard'
import Title from '../components/primitives/Title'
import { Trait, Skill, Item } from '../components/primitives/TooltipContent'

export default function Index() {
  const { config } = useContext(TwitchContext)
  const { character, eliteSpec, equipment, gamemode, equipmentById, skills, specializations, traits } = useBuildData()
  const buildTemplateString = useBuildTemplateString(character, traits, gamemode)
  const [copied, copy] = useCopyToClipboard(buildTemplateString)
  return (
    <div style={{ padding: 5, marginTop: -6, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {character ? (
        <>
          <Title style={{ color: `var(--color-${character.profession?.toLowerCase()})` }}>
            {character.name} ({eliteSpec ? eliteSpec.name : character.profession})
          </Title>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
            {gamemode === 'pvp' ? null : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
                <Item equipment={equipment} equipmentById={equipmentById} slot="Helm" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="Shoulders" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="Coat" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="Gloves" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="Leggings" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="Boots" />
              </div>
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: gamemode === 'pvp' ? 5 : 45,
                alignItems: 'center',
              }}
            >
              {gamemode === 'pvp' ? null : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Backpack" />
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Accessory1" />
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Accessory2" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Amulet" />
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Ring1" />
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Ring2" />
                  </div>
                </div>
              )}
              {gamemode === 'pvp' ? (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                  <Item equipment={equipment} equipmentById={equipmentById} slot="PvP_Amulet" />
                  <Item equipment={equipment} equipmentById={equipmentById} slot="PvP_Rune" />
                </div>
              ) : null}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                  <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponA1" />
                  <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponA2" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                  <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponB1" />
                  <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponB2" />
                </div>
              </div>
            </div>
          </div>
          {character.skills ? (
            <>
              <Title>Skills</Title>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center' }}>
                <Skill skills={skills} id={character.skills[gamemode]?.heal} />
                <Skill skills={skills} id={character.skills[gamemode]?.utilities[0]} />
                <Skill skills={skills} id={character.skills[gamemode]?.utilities[1]} />
                <Skill skills={skills} id={character.skills[gamemode]?.utilities[2]} />
                <Skill skills={skills} id={character.skills[gamemode]?.elite} />
              </div>
            </>
          ) : null}
          {character.specializations ? (
            <>
              <Title>Traits</Title>
              {character.specializations[gamemode]?.map((spec) => (
                <div key={spec.id}>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center' }}>
                    <div style={{ flex: 1 }}>{specializations.get(spec.id)?.name}</div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center', flex: 2 }}>
                      {spec.traits.map((t) => (
                        <Trait key={t} traits={traits} id={t} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : null}
          <button
            style={{
              textAlign: 'right',
              fontSize: '0.7rem',
              position: 'absolute',
              bottom: 4,
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: 0.8,
              cursor: 'copy',
              padding: '1px 2px',
              lineHeight: '0.7rem',
            }}
            onClick={copy}
          >
            {copied ? 'Copied!' : 'Copy Build Template'}
          </button>
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {config.broadcaster.apiKey ? 'Loading' : 'Not configured'}
        </div>
      )}
    </div>
  )
}
