"use client"
import { motion } from 'framer-motion'
import Card from './UI/Card'

export default function Results({ roles, onNext }: { roles: Record<string,{role:'imposter'|'civilian'; word:string|null}>; onNext: () => void }){
  const imps = Object.entries(roles).filter(([_,v])=>v.role==='imposter').map(([name])=>name)
  const title = imps.length > 1 ? 'Imposters' : 'Imposter'
  const namesDisplay = imps.length ? imps.join(', ') : 'Unknown'

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-4 text-center">
      <div className="text-sm text-muted">In-person play: discuss and vote</div>
      <Card name={title} className="mx-auto">
        <div className="text-center">
          <div className="word-bubble mx-auto imposter-text">{namesDisplay}</div>
        </div>
      </Card>
      <div>
        <button onClick={onNext} className="w-full p-3 rounded bg-primary text-white font-semibold">Next Round</button>
      </div>
    </motion.div>
  )
}
