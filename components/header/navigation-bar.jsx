"use client"

import { Search, Menu } from "lucide-react"

const navItems = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#" },
  { name: "Events", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact Us", href: "#" },
]

export function NavigationBar({ isSticky, onMenuToggle }) {
  return (
    <div
      className={`
        bg-white/95 backdrop-blur-sm shadow-md py-2
        transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
        ${isSticky ? "rounded-none" : " lg:rounded-[10px] rounded-none"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="lg:hidden flex items-center gap-3">
            <img src="/logo.png" alt="Eden Weave Foundation" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation - Updated colors to navy blue and gold */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-5 text-sm font-medium transition-colors ${
                  item.active ? "text-[#1e3a5f]" : "text-gray-800 hover:text-[#1e3a5f]"
                }`}
              >
                {item.name}
                {item.active && <span className="absolute bottom-4 left-0 right-0 h-0.5 bg-[#c4a35a]" />}
              </a>
            ))}
          </nav>

          {/* Right side icons - Updated hover color */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:text-[#1e3a5f] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden p-2 hover:text-[#1e3a5f] transition-colors"
              onClick={onMenuToggle}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
