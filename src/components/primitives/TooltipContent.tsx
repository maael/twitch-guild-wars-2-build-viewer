import React from 'react'
import Tip from './Tip'
import { modifierMap, rarityColourMap } from '../../util/dataMaps'
import { getFactText, tidyDescriptions } from '../../util/tooltips'

export function Item({
  equipment,
  equipmentById,
  slot,
}: {
  equipment?: any
  equipmentById: Map<number, any>
  slot: string
}) {
  const item = equipment.get(slot)
  if (!item) return null
  const icon = item.skin?.icon || item.item?.icon
  const upgrades = (item.upgrades || []).map((i) => equipmentById.get(i))
  const infusions = (item.infusions || []).map((i) => equipmentById.get(i))
  const TipHtml = (
    <div>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '0.9rem',
          color: rarityColourMap[item.item?.rarity] || rarityColourMap.Basic,
        }}
      >
        {item.item?.name}
      </div>
      {item.skin ? (
        <div
          style={{
            fontSize: '0.8rem',
            marginBottom: '0.2em',
          }}
        >
          Skin: {item.skin.name}
        </div>
      ) : null}
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
            <p style={{ fontSize: '0.9rem' }}>{u.name}</p>
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
            <p style={{ fontSize: '0.9rem' }}>{u.name}</p>
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
      <img src={icon} height={35} width={40} />
    </Tip>
  )
}

export function Skill({ skills, id }: { skills?: any; id?: number }) {
  const item = skills.get(id)
  if (!item) return null
  const TipHtml = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <div style={{ fontWeight: 'bold', color: 'var(--color-tooltip-title)' }}>{item.name}</div>
      <p style={{ fontSize: '0.8rem' }} dangerouslySetInnerHTML={{ __html: tidyDescriptions(item.description) }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {(item.facts || []).map((f, i) => (
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

export function Trait({ traits, id }: { traits?: any; id?: number }) {
  const item = traits.get(id)
  if (!item) return null
  const TipHtml = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <div style={{ fontWeight: 'bold', color: 'var(--color-tooltip-title)' }}>{item.name}</div>
      {item.description ? (
        <p style={{ fontSize: '0.9rem' }} dangerouslySetInnerHTML={{ __html: tidyDescriptions(item.description) }} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {(item.facts || []).map((f, i) => (
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
