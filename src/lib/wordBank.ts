export type Category =
  | 'Nature'
  | 'Sport'

export type WordEntry = {
  term: string
  category: Category
  hint?: string
}

export const categories: Category[] = [
  'Nature',
  'Sport'
]

const words: WordEntry[] = [
  { term: 'Eagle', category: 'Nature', hint: 'Wings' },
  { term: 'River', category: 'Nature', hint: 'Flows' },
  { term: 'Mountain', category: 'Nature', hint: 'High' },
  { term: 'Forest', category: 'Nature', hint: 'Trees' },
  { term: 'Storm', category: 'Nature', hint: 'Loud' },
  { term: 'Volcano', category: 'Nature', hint: 'Hot' },
  { term: 'Shark', category: 'Nature', hint: 'Teeth' },
  { term: 'Desert', category: 'Nature', hint: 'Dry' },
  { term: 'Waterfall', category: 'Nature', hint: 'Crash' },
  { term: 'Cave', category: 'Nature', hint: 'Dark' },
  { term: 'Glacier', category: 'Nature', hint: 'Cold' },
  { term: 'Tornado', category: 'Nature', hint: 'Spin' },
  { term: 'Coral', category: 'Nature', hint: 'Reef' },
  { term: 'Wolf', category: 'Nature', hint: 'Howl' },
  { term: 'Sunset', category: 'Nature', hint: 'Orange' },

  { term: 'Football', category: 'Sport', hint: 'Goals' },
  { term: 'Tennis', category: 'Sport', hint: 'Net' },
  { term: 'Swimming', category: 'Sport', hint: 'Wet' },
  { term: 'Boxing', category: 'Sport', hint: 'Fists' },
  { term: 'Cricket', category: 'Sport', hint: 'Bat' },
  { term: 'Skiing', category: 'Sport', hint: 'Slope' },
  { term: 'Basketball', category: 'Sport', hint: 'Hoop' },
  { term: 'Cycling', category: 'Sport', hint: 'Pedal' },
  { term: 'Rugby', category: 'Sport', hint: 'Tackle' },
  { term: 'Gymnastics', category: 'Sport', hint: 'Flip' },
  { term: 'Golf', category: 'Sport', hint: 'Swing' },
  { term: 'Rowing', category: 'Sport', hint: 'Oars' },
  { term: 'Darts', category: 'Sport', hint: 'Throw' },
  { term: 'Weightlifting', category: 'Sport', hint: 'Heavy' },
  { term: 'Archery', category: 'Sport', hint: 'Arrow' }
]

const RECENT_KEY = 'imposter_recent_words'
const MAX_RECENT = 16

function loadRecent(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(RECENT_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveRecent(wordsArr: string[]) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(wordsArr.slice(-MAX_RECENT)))
  } catch {
    // ignore
  }
}

function chooseRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

export function pickWord(category: Category) {
  const recent = loadRecent()
  const pool = words.filter((word) => word.category === category)
  const fresh = pool.filter((word) => !recent.includes(word.term))
  const choice = chooseRandom(fresh.length ? fresh : pool)
  saveRecent([...recent.filter((term) => term !== choice.term), choice.term])
  return choice.term
}

export function pickDecoy(original: string, category: Category) {
  const pool = words.filter((word) => word.category === category && word.term !== original)
  if (!pool.length) {
    const fallback = words.filter((word) => word.term !== original)
    return chooseRandom(fallback).term
  }
  return chooseRandom(pool).term
}

function pickCloserDecoy(original: string, category: Category) {
  const pool = words.filter((word) => word.category === category && word.term !== original)
  if (!pool.length) return pickDecoy(original, category)
  const sorted = pool.sort((a, b) => a.term.length - b.term.length)
  const sameLength = sorted.filter((entry) => Math.abs(entry.term.length - original.length) <= 6)
  return chooseRandom(sameLength.length ? sameLength : pool).term
}

export function makeHint(original: string) {
  if (!original) return ''
  const letters = original.split('')
  const alphaIdxs = letters.map((ch, i) => /[a-zA-Z]/.test(ch) ? i : -1).filter(i => i >= 0)
  if (alphaIdxs.length <= 2) return original.replace(/[A-Za-z]/g, '_')
  const first = alphaIdxs[0]
  const last = alphaIdxs[alphaIdxs.length - 1]
  const middle = alphaIdxs[Math.floor(alphaIdxs.length / 2)]
  return letters.map((ch, i) => {
    if (!/[a-zA-Z]/.test(ch)) return ch
    if (i === first || i === last || i === middle) return ch
    return '_'
  }).join('')
}

export function getHintFor(word: string) {
  const entry = words.find((w) => w.term.toLowerCase() === word.toLowerCase())
  if (entry && entry.hint) return entry.hint
  return makeHint(word)
}

export function randomWordForMode(category: Category, mode: string) {
  if (mode === 'Easy') return { word: pickWord(category), decoy: null }
  if (mode === 'Hard') {
    const word = pickWord(category)
    const decoy = pickCloserDecoy(word, category)
    return { word, decoy }
  }
  const word = pickWord(category)
  return { word, decoy: null }
}
