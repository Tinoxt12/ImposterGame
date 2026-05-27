import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Imposter — Pass & Play',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-bg1 to-bg2 text-white font-sans p-4">
          <div className="max-w-md mx-auto">{children}</div>
        </div>
      </body>
    </html>
  )
}
