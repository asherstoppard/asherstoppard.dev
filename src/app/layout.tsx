import { PropsWithChildren, ReactNode } from 'react'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfitFont = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Asher Stoppard',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={outfitFont.className}>{children}</body>
    </html>
  )
}
