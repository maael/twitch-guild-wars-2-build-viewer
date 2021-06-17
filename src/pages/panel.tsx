import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Tooltip as Tippy } from 'react-tippy'
import { TwitchContext } from '../components/context/Twitch'

const modifierMap = {
  BoonDuration: 'Concentration',
  ConditionDamage: 'Condition Damage',
  ConditionDuration: 'Expertise',
  CritDamage: 'Ferocity',
  HealingPower: 'Healing Power',
}

const rarityColourMap = {
  Basic: '#000000',
  Fine: '#62A4DA',
  Masterwork: '#1a9306',
  Rare: '#fcd00b',
  Exotic: '#ffa405',
  Ascended: '#fb3e8d',
  Legendary: '#4C139D',
}

export default function Index() {
  const { config } = useContext(TwitchContext)
  const [character, setCharacter] = useState<any>()
  const [equipment, setEquipment] = useState<Map<string, any>>(new Map())
  const [equipmentById, setEquipmentById] = useState<Map<number, any>>(new Map())
  const [skills, setSkills] = useState<Map<number, any>>(new Map())
  const [traits, setTraits] = useState<Map<number, any>>(new Map())
  const [specializations, setSpecializations] = useState<Map<number, any>>(new Map())
  const gamemode = config.broadcaster.gamemode || 'pve'
  const getData = useCallback(
    async (apiKey) => {
      try {
        if (!apiKey) return
        const res = await fetch(
          `https://cachedproxy.xyz/api/gw2-build/${encodeURIComponent(apiKey)}/${config.broadcaster.character}`
        )
        if (res.ok) {
          const data = await res.json()
          const characterData = data.characterData
          const equipmentData = new Map(data.equipmentData)
          const skinData = new Map(data.skinData)
          const skillData = new Map(data.skillData)
          const traitData = new Map(data.traitData)
          const specializationData = new Map(data.specializationData)
          const amuletData = data.amuletData
          setCharacter(characterData)
          const embellishedEquipment = new Map<string, any>(
            characterData.equipment.map((e) => [
              e.slot,
              { ...e, item: equipmentData.get(e.id), skin: skinData.get(e.skin) },
            ])
          )
          embellishedEquipment.set('PvP_Amulet', { item: amuletData })
          if (characterData.equipment_pvp) {
            embellishedEquipment.set('PvP_Rune', { item: equipmentData.get(characterData.equipment_pvp.rune) })
          }
          setEquipmentById(equipmentData as any)
          setEquipment(embellishedEquipment)
          setSkills(skillData as any)
          setTraits(traitData as any)
          setSpecializations(specializationData as any)
        } else {
          console.error('Not okay', res.status, res.ok, (await res.text()) || 'Empty')
        }
      } catch (e) {
        console.error('Not okay', e)
      }
    },
    [config.broadcaster.character]
  )
  useEffect(() => {
    getData(config.broadcaster.apiKey)
  }, [config.broadcaster.apiKey, getData])
  const eliteSpec = [...specializations.values()].find(({ elite }) => elite)
  return (
    <div style={{ padding: 5, marginTop: -6, overflow: 'hidden' }}>
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
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Ring1" />
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Ring2" />
                    <Item equipment={equipment} equipmentById={equipmentById} slot="Amulet" />
                  </div>
                </div>
              )}
              {gamemode === 'pvp' ? (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                  <Item equipment={equipment} equipmentById={equipmentById} slot="PvP_Amulet" />
                  <Item equipment={equipment} equipmentById={equipmentById} slot="PvP_Rune" />
                </div>
              ) : null}
              <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponA1" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponA2" />
                <Item equipment={equipment} equipmentById={equipmentById} slot="WeaponB1" />
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
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {config.broadcaster.apiKey ? 'Loading' : 'Not configured'}
        </div>
      )}
    </div>
  )
}

function tidyDescriptions(d: string) {
  const tidied = (d || '')
    .replace(/<c(.+?)>/g, (_match, content) => {
      return `<span class='description-${content.replace(/^=@/, '').trim()}'>`
    })
    .replace(/<\/c>/g, '</span>')
    .replace(/<c.+?>(.+?)<\/c>/g, (_, content) => content)
    .replace(/\\n/g, '<br>')
  return tidied
}

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

function Item({ equipment, equipmentById, slot }: { equipment?: any; equipmentById: Map<number, any>; slot: string }) {
  const item = equipment.get(slot)
  if (!item) return null
  const upgrades = (item.upgrades || []).map((i) => equipmentById.get(i))
  const infusions = (item.infusions || []).map((i) => equipmentById.get(i))
  const TipHtml = (
    <div>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '0.9rem',
          marginBottom: '0.2em',
          color: rarityColourMap[item.item?.rarity] || rarityColourMap.Basic,
          textShadow: ['Legendary', 'Basic', undefined].includes(item.item?.rarity)
            ? '0px 0px 10px #ffffff'
            : undefined,
        }}
      >
        {item.item?.name}
      </div>
      <div style={{ fontSize: '0.8rem' }}>
        {Object.entries(item.stats?.attributes || {}).map(([k, v]) => (
          <div key={k}>
            + {v} {modifierMap[k] || k}
          </div>
        ))}
        {Object.entries(item.item?.attributes || {}).map(([k, v]) => (
          <div key={k}>
            + {v} {modifierMap[k] || k}
          </div>
        ))}
        {(item.item?.details?.infix_upgrade?.attributes || []).map((i) => (
          <div key={i.attribute}>
            + {i.modifier} {modifierMap[i.attribute] || i.attribute}
          </div>
        ))}
        {(item.item?.details?.bonuses || []).map((i, j) => (
          <div key={j}>{i}</div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {upgrades.map((u) => (
          <div key={u.id} style={{ color: rarityColourMap[u.rarity] }}>
            <p>{u.name}</p>
            <p
              style={{ fontSize: '0.8rem' }}
              dangerouslySetInnerHTML={{ __html: tidyDescriptions(u.details?.infix_upgrade?.buff?.description) }}
            />
            <p style={{ fontSize: '0.7rem' }} dangerouslySetInnerHTML={{ __html: u.details?.bonuses?.join('<br>') }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {infusions.map((u) => (
          <div key={u.id} style={{ color: rarityColourMap[u.rarity] }}>
            <p>{u.name}</p>
            <p
              style={{ fontSize: '0.8rem' }}
              dangerouslySetInnerHTML={{ __html: tidyDescriptions(u.details?.infix_upgrade?.buff?.description) }}
            />
            <p style={{ fontSize: '0.7rem' }} dangerouslySetInnerHTML={{ __html: u.details?.bonuses?.join('<br>') }} />
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <Tip html={TipHtml}>
      <img src={item?.item.icon} height={35} width={40} />
    </Tip>
  )
}

function Skill({ skills, id }: { skills?: any; id?: number }) {
  const item = skills.get(id)
  if (!item) return null
  const TipHtml = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <div style={{ fontWeight: 'bold', color: 'var(--color-tooltip-title)' }}>{item.name}</div>
      <p style={{ fontSize: '0.8rem' }} dangerouslySetInnerHTML={{ __html: tidyDescriptions(item.description) }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {item.facts.map((f, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            {f.icon ? <img height={25} width={25} src={f.icon} /> : null}
            <div style={{ textAlign: 'left', fontSize: '0.8rem' }}>{getFactText(f)}</div>
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <Tip html={TipHtml}>
      <img src={item?.icon} height={40} width={40} />
    </Tip>
  )
}

function getFactText(t: any) {
  if (t.percent) {
    return `${t.text}: ${t.percent}%`
  } else if (t.distance) {
    return `${t.text}: ${t.distance}`
  } else if (t.status) {
    return `${t.status} (${t.duration}s): ${t.description}`
  } else if (t.type === 'Number' || t.type === 'Recharge') {
    return `${t.text}: ${t.value}`
  } else {
    return t.description || t.text
  }
}

function Trait({ traits, id }: { traits?: any; id?: number }) {
  const item = traits.get(id)
  if (!item) return null
  const TipHtml = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <div style={{ fontWeight: 'bold', color: 'var(--color-tooltip-title)' }}>{item.name}</div>
      {item.description ? (
        <p style={{ fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: tidyDescriptions(item.description) }} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {item.facts.map((f, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
              {f.icon ? <img height={25} width={25} src={f.icon} /> : null}
              <div style={{ textAlign: 'left', fontSize: '0.8rem' }}>{getFactText(f)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  return (
    <Tip html={TipHtml}>
      <img src={item?.icon} height={30} width={30} />
    </Tip>
  )
}
