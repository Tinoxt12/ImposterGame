"use client"
import Card from './UI/Card'

export default function DiscussionPrompt({ onContinue }: { onContinue: () => void }){
  return (
    <div className="space-y-4">
      <Card name={undefined} className="mx-auto">
        <div className="text-center space-y-4">
          <div className="text-lg font-semibold">You can start discussing now</div>
          <div className="text-sm text-muted">When your group is ready, reveal who the Imposter was.</div>
          <button onClick={onContinue} className="mt-3 w-full p-3 rounded bg-primary text-white font-semibold">Reveal Imposter</button>
        </div>
      </Card>
    </div>
  )
}
