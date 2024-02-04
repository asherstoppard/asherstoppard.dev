import React, { useState, useEffect } from 'react'
import { SHeader, SHeaderContainer, SLink, SLogo, SNav, SNavTrigger } from './SiteHeader.styled'

export const SiteHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isNavOpen, toggleNav] = useState(false)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const isCondensed = scrollPosition > 0

  return (
    <SHeader isCondensed={isCondensed} isNavOpen={isNavOpen}>
      <SHeaderContainer>
        <SLogo href="/">
          <img src="/images/main-logo.svg" alt="Asher Stoppard Limited - Logo" />
        </SLogo>
        <SNav isNavOpen={isNavOpen}>
          <SLink href="mailto:asher@asherstoppard.com">
            <i className="fa fa-envelope-o" /> asher@asherstoppard.com
          </SLink>
        </SNav>
        <SNavTrigger onClick={() => toggleNav(!isNavOpen)}>
          <i className={`fa fa-${isNavOpen ? 'times' : 'bars'}`} />
        </SNavTrigger>
      </SHeaderContainer>
    </SHeader>
  )
}

export default SiteHeader
