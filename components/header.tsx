"use client"

import { Menu, PencilRuler } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border shadow bg-background fixed w-full top-0 z-50">
      <div className="flex justify-center items-center py-2 px-2 gap-2 text-white bg-primary">
        <PencilRuler className="w-20 sm:w-min" /> This website is under construction. Details presented here are subject to change!
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/">
          <div className="flex items-center gap-1">
            <img className="h-12 invert" src="/nitk.png" alt="" />
            <span className="font-bold text-lg">IDEA Factory</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/team" className="text-sm hover:text-primary transition">
            Our Team
          </a>
          <a href="#" className="text-sm hover:text-primary transition">
            Facilities
          </a>
          <a href="#" className="text-sm hover:text-primary transition">
            Creation Spaces
          </a>
          <a href="#" className="text-sm hover:text-primary transition">
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu size={24} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border p-4 bg-card">
          <div className="flex flex-col gap-4">
            <a href="/team" className="text-sm hover:text-primary">
              Our Team
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Facilities
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Creation Spaces
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      )}

    </header>
  )
}
