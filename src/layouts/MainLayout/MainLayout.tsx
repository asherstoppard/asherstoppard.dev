'use client'

import { PropsWithChildren } from 'react'
import { SiteFooter, SiteHeader, Theme } from '@/components'

export const MainLayout = ({ children }: PropsWithChildren) => (
  <Theme>
    <SiteHeader />
    {children}
    <SiteFooter />
  </Theme>
)
