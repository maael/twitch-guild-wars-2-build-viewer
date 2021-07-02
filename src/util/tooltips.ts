export function getFactText(t: any) {
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

export function tidyDescriptions(d: string) {
  const tidied = (d || '')
    .replace(/<c(.+?)>/g, (_match, content) => {
      return `<span class='description-${content.replace(/^=@/, '').trim()}'>`
    })
    .replace(/<\/c>/g, '</span>')
    .replace(/<c.+?>(.+?)<\/c>/g, (_, content) => content)
    .replace(/\\n/g, '<br>')
  return tidied
}
