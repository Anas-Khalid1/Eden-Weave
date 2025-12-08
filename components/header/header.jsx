"use client"

import { useEffect, useState, useRef } from "react"
import { TopBar } from "./top-bar"
import { MiddleBar } from "./middle-bar"
import { NavigationBar } from "./navigation-bar"
import { MobileSidebar } from "./mobile-sidebar"

export function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const navRef = useRef(null)
  const [navInitialTop, setNavInitialTop] = useState(0)

  useEffect(() => {
    if (navRef.current) {
      setNavInitialTop(navRef.current.offsetTop)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsSticky(scrollY >= navInitialTop && navInitialTop > 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navInitialTop])

  return (
    <>
      <header ref={headerRef} className="relative bg-transparent">
        <div className="hidden lg:block">
          <TopBar />
        </div>

        <div className="hidden lg:block">
          <MiddleBar />
        </div>

        {/* Navigation bar wrapper - handles sticky behavior */}
        <div
          ref={navRef}
          className={`
            transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
            ${isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"}
          `}
        >
          <div
            className={`
              transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
              ${isSticky ? "px-0" : "lg:px-10 px-0"}
            `}
          >
            <NavigationBar isSticky={isSticky} onMenuToggle={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {isSticky && <div className="h-16" />}

      <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
