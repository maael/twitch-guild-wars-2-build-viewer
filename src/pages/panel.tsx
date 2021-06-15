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
          embellishedEquipment.set('PvP_Rune', { item: equipmentData.get(characterData.equipment_pvp.rune) })
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
    <div style={{ padding: 5, marginTop: -6 }}>
      {character ? (
        <>
          <Title>
            {character.name} ({eliteSpec ? eliteSpec.name : character.profession})
          </Title>
          <Title>Equipment</Title>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
            {gamemode === 'pvp' ? null : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
                <Item2 equipment={equipment} slot="Helm" />
                <Item2 equipment={equipment} slot="Shoulders" />
                <Item2 equipment={equipment} slot="Coat" />
                <Item2 equipment={equipment} slot="Gloves" />
                <Item2 equipment={equipment} slot="Leggings" />
                <Item2 equipment={equipment} slot="Boots" />
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
                    <Item2 equipment={equipment} slot="Backpack" />
                    <Item2 equipment={equipment} slot="Accessory1" />
                    <Item2 equipment={equipment} slot="Accessory2" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                    <Item2 equipment={equipment} slot="Ring1" />
                    <Item2 equipment={equipment} slot="Ring2" />
                    <Item2 equipment={equipment} slot="Amulet" />
                  </div>
                </div>
              )}
              {gamemode === 'pvp' ? (
                <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                  <Item2 equipment={equipment} slot="PvP_Amulet" />
                  <Item2 equipment={equipment} slot="PvP_Rune" />
                </div>
              ) : null}
              <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                <Item2 equipment={equipment} slot="WeaponA1" />
                <Item2 equipment={equipment} slot="WeaponA2" />
                <Item2 equipment={equipment} slot="WeaponB1" />
              </div>
            </div>
          </div>
          <Title>Skills</Title>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center' }}>
            <Skill skills={skills} id={character.skills[gamemode].heal} />
            <Skill skills={skills} id={character.skills[gamemode].utilities[0]} />
            <Skill skills={skills} id={character.skills[gamemode].utilities[1]} />
            <Skill skills={skills} id={character.skills[gamemode].utilities[2]} />
            <Skill skills={skills} id={character.skills[gamemode].elite} />
          </div>
          <Title>Traits</Title>
          {character.specializations[gamemode].map((spec) => (
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
      ) : (
        <div>{config.broadcaster.apiKey ? 'Loading' : 'Not configured'}</div>
      )}
    </div>
  )
}

function tidyDescriptions(d: string) {
  return (d || '').replace(/<c.+?>(.+?)<\/c>/g, (_, content) => content).replace(/<br\\?>/g, '\n')
}

const Title: React.FC = ({ children }) => {
  return (
    <h2
      style={{
        fontSize: '1rem',
        lineHeight: '1rem',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 8,
      }}
    >
      {children}
    </h2>
  )
}

function Item2({ equipment, slot }: { equipment?: any; slot: string }) {
  const { ctx } = useContext(TwitchContext)
  const item = equipment.get(slot)
  if (!item) return null
  const TipHtml = (
    <div>
      <div
        style={{
          fontWeight: 'bold',
          marginBottom: '0.5em',
          color: rarityColourMap[item.item?.rarity] || rarityColourMap.Basic,
          textShadow: ['Legendary', 'Basic', undefined].includes(item.item?.rarity)
            ? '0px 0px 10px #ffffff'
            : undefined,
        }}
      >
        {item.item?.name}
      </div>
      <div>
        {Object.entries(item.stats?.attributes || {}).map(([k, v]) => (
          <div key={k}>
            {v} {modifierMap[k] || k}
          </div>
        ))}
        {Object.entries(item.item?.attributes || {}).map(([k, v]) => (
          <div key={k}>
            {v} {modifierMap[k] || k}
          </div>
        ))}
        {(item.item?.details?.infix_upgrade?.attributes || []).map((i) => (
          <div key={i.attribute}>
            {i.modifier} {modifierMap[i.attribute] || i.attribute}
          </div>
        ))}
        {(item.item?.details?.bonuses || []).map((i, j) => (
          <div key={j}>{i}</div>
        ))}
      </div>
    </div>
  )
  return (
    <Tippy
      animateFill={false}
      arrow={true}
      duration={150}
      animation="fade"
      html={TipHtml}
      style={{ cursor: 'pointer' }}
      theme={ctx.theme}
    >
      <img src={item?.item.icon} height={35} width={40} />
    </Tippy>
  )
}

function Skill({ skills, id }: { skills?: any; id?: number }) {
  const { ctx } = useContext(TwitchContext)
  const item = skills.get(id)
  if (!item) return null
  const TipHtml = (
    <div>
      <div style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>{item.name}</div>
      <div style={{ maxWidth: 200 }}>{tidyDescriptions(item.description)}</div>
    </div>
  )
  return (
    <Tippy
      animateFill={false}
      arrow={true}
      duration={150}
      animation="fade"
      html={TipHtml}
      style={{ cursor: 'pointer' }}
      theme={ctx.theme}
    >
      <img src={item?.icon} height={40} width={40} />
    </Tippy>
  )
}

function Trait({ traits, id }: { traits?: any; id?: number }) {
  const { ctx } = useContext(TwitchContext)
  const item = traits.get(id)
  if (!item) return null
  const TipHtml = (
    <div>
      <div style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>{item.name}</div>
      {item.description ? (
        <div>{tidyDescriptions(item.description)}</div>
      ) : (
        <div>
          {item.facts.map((f, i) => (
            <div key={i}>{f.description || f.text}</div>
          ))}
        </div>
      )}
    </div>
  )
  return (
    <Tippy
      animateFill={false}
      arrow={true}
      duration={150}
      animation="fade"
      html={TipHtml}
      style={{ cursor: 'pointer' }}
      theme={ctx.theme}
    >
      <img src={item?.icon} height={30} width={30} />
    </Tippy>
  )
}
