import { PropsWithChildren, ReactNode } from 'react'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

const outfitFont = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Asher Stoppard',
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={outfitFont.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
)
