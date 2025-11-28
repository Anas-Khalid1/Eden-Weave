"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

const navItems = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#" },
  { name: "Events", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact Us", href: "#" },
]

export function MobileSidebar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]
          transition-opacity duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Sidebar - Updated to navy blue theme */}
      <div
        className={`
          fixed inset-0 z-[101] bg-[#1e3a5f]
          transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header - Updated logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Eden Weave Foundation" className="h-12 w-auto" />
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-[#c4a35a] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation - Updated colors */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    block py-4 text-lg font-medium border-b border-white/20
                    transition-all duration-300 ease-out
                    ${item.active ? "text-[#c4a35a]" : "text-white hover:text-[#c4a35a] hover:pl-2"}
                  `}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Donate Button - Updated to gold color */}
          <div className="p-6 border-t border-white/20">
            <button className="w-full bg-[#c4a35a] hover:bg-[#b8963f] text-white py-4 rounded font-semibold tracking-wider transition-colors">
              DONATE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
