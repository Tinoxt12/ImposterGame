"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  categories,
  Category,
  randomWordForMode,
  getHintFor
} from '../lib/wordBank'

export default function Setup({ players, setPlayers, mode, setMode, onStart }: {
  players: string[]
  setPlayers: (p: string[]) => void
  mode: string
  setMode: (m: string) => void
  onStart: (assigned: Record<string,{role:'imposter'|'civilian'; word: string|null}>, startingPlayer: string) => void
}) {
  const [count, setCount] = useState(Math.max(3, Math.min(8, players.length || 4)))
  const [names, setNames] = useState<string[]>(() => {
    if (players.length) return players
    return Array.from({ length: count }, (_, i) => `Player ${i + 1}`)
  })
  const [category, setCategory] = useState<Category>(categories[0])
  const [starterPreview, setStarterPreview] = useState<string | null>(null)

  useEffect(() => {
    setNames((prev) => {
      const next = prev.slice(0, count)
      while (next.length < count) next.push(`Player ${next.length + 1}`)
      return next
    })
  }, [count])

  // sound helper
  function clickSound(){
    try{
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = 'sine'
      o.frequency.value = 520
      g.gain.value = 0.04
      o.connect(g); g.connect(ctx.destination)
      o.start();
      setTimeout(()=>{ o.stop(); ctx.close() }, 120)
    }catch(e){}
  }

  function vibrate() { if (navigator.vibrate) navigator.vibrate(40) }

  function updateCount(delta:number){
    const n = Math.max(3, Math.min(8, count + delta))
    setCount(n)
    clickSound(); vibrate()
  }

  function setNameAt(i:number, v:string){
    setNames((prev)=>{
      const copy = [...prev]
      copy[i] = v
      return copy
    })
  }

  function randomizeStarter(){
    clickSound(); vibrate()
    const idx = Math.floor(Math.random() * names.length)
    const starter = names[idx]
    setStarterPreview(starter)
    return starter
  }

  function start(){
    if (names.length < 3) return alert('Require 3–8 players')
    const assigned: Record<string, any> = {}
    const result = randomWordForMode(category, mode)
    // pick one imposter, or two if 6 or more players
    let impIndices: number[] = []
    if (names.length >= 6) {
      const first = Math.floor(Math.random() * names.length)
      let second = Math.floor(Math.random() * names.length)
      while (second === first) second = Math.floor(Math.random() * names.length)
      impIndices = [first, second]
    } else {
      impIndices = [Math.floor(Math.random() * names.length)]
    }

    names.forEach((p, i) => {
      const role = impIndices.includes(i) ? 'imposter' : 'civilian'
      assigned[p] = {
        role,
        // civilians get the full word, imposters get a hint (use explicit hint when available)
        word: role === 'civilian' ? result.word : getHintFor(result.word)
      }
    })
    const starter = randomizeStarter()
    setPlayers(names)
    clickSound(); vibrate()
    onStart(assigned, starter)
  }

  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1,y:0}} className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-400">Player Count</div>
          <div className="text-2xl font-semibold">{count}</div>
        </div>
        <div className="flex gap-3">
          <button onClick={()=>updateCount(-1)} className="w-16 h-16 rounded-full bg-white/5 text-xl">−</button>
          <button onClick={()=>updateCount(1)} className="w-16 h-16 rounded-full bg-white/5 text-xl">+</button>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-400">Names</div>
        <div className="mt-2 space-y-2">
          {names.slice(0, count).map((n,i)=>(
            <input key={i} value={n} onChange={(e)=>setNameAt(i,e.target.value)} className="w-full p-3 rounded bg-black/10" />
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-400">Category</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => { setCategory(cat); clickSound(); vibrate() }} className={`p-3 rounded text-left ${category === cat ? 'bg-primary text-white' : 'bg-white/5 text-text'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>


      <div>
        <div className="text-sm text-gray-400">Mode</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {['Easy','Hard'].map(m=> (
            <button key={m} onClick={()=>{ setMode(m); clickSound(); vibrate() }} className={`p-3 rounded text-left ${mode===m? 'bg-primary text-white':'bg-white/5 text-text'}`}>
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button onClick={start} className="w-full p-4 rounded bg-primary text-white text-lg">Start Game</button>
        <button onClick={() => randomizeStarter()} className="w-full p-3 rounded bg-white/5">Randomize Starting Player</button>
        {starterPreview ? <div className="text-sm text-gray-400">Preview: {starterPreview}</div> : null}
      </div>
    </motion.div>
  )
}
