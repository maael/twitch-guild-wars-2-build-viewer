import { useCallback, useContext, useEffect, useState } from 'react'
import { TwitchContext } from '../context/Twitch'

export default function useBuildData() {
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
  return {
    eliteSpec,
    character,
    equipment,
    equipmentById,
    skills,
    traits,
    specializations,
    gamemode,
  }
}
