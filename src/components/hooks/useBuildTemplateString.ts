import { useMemo } from 'react'
import BuildTemplate from '../../util/Buildtemplate'
import { professionIdMap } from '../../util/dataMaps'

/**
 * TODO: Add ranger pets, add revenant legends
 */

export default function useBuildTemplateString(character: any, traits: Map<number, any>, gamemode: string) {
  return useMemo(() => {
    try {
      const professionId = professionIdMap[character?.profession]
      const specs = character?.specializations[gamemode] || []

      const build = new BuildTemplate()
      build.profession = professionId

      specs.forEach(({ id, traits: traitIds }, i) => {
        build.specializations[i].id = id
        build.specializations[i].traits = traitIds.map((tId) => {
          const order = traits.get(tId)?.order
          return order > -1 ? order + 1 : 0
        })
      })

      const skills = character?.skills[gamemode]

      build.skills.terrestrial.heal = skills?.heal || 0
      build.skills.terrestrial.utilities = skills?.utilities || []
      build.skills.terrestrial.elite = skills?.elite || 0

      return build.toString()
    } catch (e) {
      if (e.message !== 'btoa is not defined') {
        console.error(e)
      }
      return ''
    }
  }, [character, gamemode, traits])
}
