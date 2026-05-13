import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HOME OS Dashboard',
  description: 'Gemeinsames Smart Home Dashboard mit Home Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-[#0b0f14] text-white">{children}</body>
    </html>
  )
}