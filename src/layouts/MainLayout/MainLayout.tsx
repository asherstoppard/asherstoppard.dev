'use client'

import { PropsWithChildren } from 'react'
import { SiteFooter, Theme } from '@/components'

export const MainLayout = ({ children }: PropsWithChildren) => (
  <Theme>
    {children}
    <SiteFooter />
  </Theme>
)
