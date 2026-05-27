"use client"
import { ReactNode } from 'react'

export default function Card({
  name,
  children,
  color = 'primary',
  className = ''
}: {
  name?: string
  children?: ReactNode
  color?: 'primary' | 'accent' | 'party' | 'neutral'
  className?: string
}){
  const bg = color === 'primary' ? 'bg-[linear-gradient(180deg,#22C55E,#16A34A)]' : 'bg-[linear-gradient(180deg,#06B6D4,#0891B2)]'
  return (
    <div className={`ui-card diagonal-pattern p-6 rounded-xl ${className}`}>
      <div className="flex justify-center">
        {name ? <div className="pill">{name}</div> : null}
      </div>
      <div className="mt-6 ui-card-inner">
        {children}
      </div>
    </div>
  )
}
