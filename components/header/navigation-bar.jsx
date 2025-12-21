"use client";

import { Search, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export function NavigationBar({ isSticky, onMenuToggle }) {
  const pathname = usePathname();

  return (
    <div
      className={`
        bg-white backdrop-blur-sm shadow-md py-2
        transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
        ${isSticky ? "rounded-none" : " lg:rounded-[5px] rounded-none"}
      `}
    >
      <div
        className={`mx-auto px-4 lg:px-8 transition-all duration-700 ${
          isSticky ? "max-w-full" : "max-w-7xl"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo - Only show on mobile or when sticky */}
          <div
            className={`flex items-center gap-3 transition-all duration-700 ${
              isSticky ? "lg:flex" : "lg:hidden"
            }`}
          >
            <Link href="/">
            <img
              src="/assets/logo-header.png"
              alt="Eden Weave Foundation"
              className={`w-auto transition-all duration-700 ${
                isSticky ? "h-16" : "h-16"
              }`}
            />
            </Link>
          </div>

          {/* Desktop Navigation - Updated colors to navy blue and gold */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              // Handle both with and without trailing slash
              const isActive =
                pathname === item.href || pathname === `${item.href}/`;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#1e3a5f]"
                      : "text-gray-800 hover:text-[#1e3a5f]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-4 left-0 right-0 h-0.5 bg-[#c4a35a]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side - Search (when not sticky) or Donate button (when sticky) */}
          <div className="flex items-center  gap-2">
            {/* Search Button - Hide when sticky */}
            {/* <button
              className={`p-2 hover:text-[#1e3a5f] transition-all duration-700 ${
                isSticky ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              <Search className="w-5 h-5" />
            </button> */}

            {/* Donate Button - Show when sticky with animation */}
            <div
              className={`hidden lg:block transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                isSticky
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95 pointer-events-none"
              }`}
            >
              <Link href="/donate" className="bg-[#c4a35a] hover:bg-[#b8963f] text-white px-6 py-2.5 rounded font-semibold tracking-wider transition-colors whitespace-nowrap">
                DONATE
              </Link>
            </div>

            {/* Mobile Menu Button */}
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
  );
}
