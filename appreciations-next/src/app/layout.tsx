import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Appréciations Anglais',
  description: 'Outil de bulletins scolaires pour professeurs d\'anglais',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
