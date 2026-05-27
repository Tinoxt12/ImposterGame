"use client"
import { useState } from 'react'
import Setup from '../components/Setup'
import Reveal from '../components/Reveal'
import DiscussionPrompt from '../components/DiscussionPrompt'
import Results from '../components/Results'

export default function Page() {
  const [players, setPlayers] = useState<string[]>([])
  const [mode, setMode] = useState<'Easy' | 'Hard'>('Easy')
  const [phase, setPhase] = useState<'setup' | 'reveal' | 'discussion' | 'results'>('setup')
  const [round, setRound] = useState(1)
  const [roles, setRoles] = useState<Record<string, { role: 'imposter' | 'civilian'; word: string | null }>>({})
  const [startingPlayer, setStartingPlayer] = useState<string | null>(null)

  return (
    <div className="ui-card diagonal-pattern p-4 rounded-2xl shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>Imposter</h1>
      </div>
      {phase === 'setup' && (
        <Setup
          players={players}
          setPlayers={setPlayers}
          mode={mode}
          setMode={setMode}
          onStart={(assigned, starter) => {
            setRoles(assigned)
            setStartingPlayer(starter)
            setPhase('reveal')
          }}
        />
      )}
      {phase === 'reveal' && (
        <Reveal
          players={players}
          roles={roles}
          startingPlayer={startingPlayer}
          onComplete={() => setPhase('discussion')}
        />
      )}
      {phase === 'discussion' && (
        <DiscussionPrompt onContinue={() => setPhase('results')} />
      )}
      {phase === 'results' && (
        <Results roles={roles} onNext={() => {
          setRound((r) => r + 1)
          setPhase('setup')
          setPlayers([])
          setRoles({})
        }} />
      )}
    </div>
  )
}
