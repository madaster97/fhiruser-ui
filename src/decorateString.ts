type DecoratePlain<T> = (plain: string) => T
type DecorateCapture<T> = (capture: string) => T
type ParsedElement = { type: 'plain' | 'decorated'; text: string }

const SplitOnce = (
  match: string,
  text: string
): { head: string; tail: string } => {
  const index = text.indexOf(match)
  return {
    head: text.substring(0, index),
    tail: text.substring(index + match.length)
  }
}

type RecurseResult = {
  newMatches: string[]
  newText: string
  newAccumulated: ParsedElement[]
}
const ParseRecursive = (
  oldMatches: string[],
  oldText: string,
  oldAccumulated: ParsedElement[]
): RecurseResult => {
  const newMatches = Array.from(oldMatches)
  const match = newMatches.shift()
  if (match !== undefined) {
    // Assume head and tail are not null since the regex informed the match
    const { head, tail } = SplitOnce(match, oldText)
    const newAccumulated: ParsedElement[] = [
      ...oldAccumulated,
      { type: 'plain', text: head },
      { type: 'decorated', text: match }
    ]
    return ParseRecursive(newMatches, tail, newAccumulated)
  } else {
    return { newMatches: [], newAccumulated: oldAccumulated, newText: oldText }
  }
}

const CaptureAndDecorate = <T>(
  regex: RegExp,
  plain: DecoratePlain<T>,
  capture: DecorateCapture<T>,
  text: string
): T[] => {
  const matches = text.match(regex)
  if (matches !== null) {
    const { newAccumulated, newText } = ParseRecursive(matches, text, [])
    const finalElements: ParsedElement[] = [
      ...newAccumulated,
      { type: 'plain', text: newText }
    ]
    return finalElements.map((el) => {
      const fn = el.type === 'decorated' ? capture : plain
      return fn(el.text)
    })
  } else {
    return [plain(text)]
  }
}
export default CaptureAndDecorate
