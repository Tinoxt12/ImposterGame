"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './UI/Card'

export default function Reveal({ players, roles, startingPlayer, onComplete }: { players: string[]; roles: Record<string,{role:'imposter'|'civilian'; word:string|null}>; startingPlayer?: string | null; onComplete: () => void }){
  // compute order starting from startingPlayer if provided
  const startIndex = startingPlayer ? players.findIndex(p=>p===startingPlayer) : 0
  const order = startIndex && startIndex > 0 ? [...players.slice(startIndex), ...players.slice(0,startIndex)] : players
  const [index, setIndex] = useState(0)
  const [seen, setSeen] = useState<Record<number,boolean>>({})

  function reveal(){
    setSeen({...seen, [index]: true})
  }

  function next(){
    if (index+1 >= players.length) return onComplete()
    setIndex(i=>i+1)
  }

  const name = order[index]
  const data = roles[name]

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-4">
      <div className="text-sm text-muted">Pass the phone to</div>
      <Card name={name} className="">
        {!seen[index] ? (
          <div className="text-center">
            <div className="text-sm text-muted">Tap to reveal your role</div>
            <button onClick={reveal} className="mt-6 w-full p-4 rounded-lg bg-primary text-white font-semibold">Reveal</button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-sm text-muted">Role</div>
            <div className={`text-2xl font-bold ${data.role === 'imposter' ? 'imposter-text' : ''}`}>{data.role === 'imposter' ? 'Imposter' : 'Civilian'}</div>
                   <div className="text-sm text-muted mt-2">{data.role === 'imposter' ? 'Hint' : 'Secret'}</div>
            <div className="word-bubble mx-auto mt-2">{data.word ?? '—'}</div>
            <div className="mt-4 text-xs text-muted">Hide screen and pass phone</div>
            <button onClick={next} className="mt-3 w-full p-3 rounded bg-surface text-text font-semibold">Done</button>
          </div>
        )}
      </Card>
    </motion.div>
  )
}
