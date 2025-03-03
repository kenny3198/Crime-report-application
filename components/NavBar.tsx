'use client'
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <>
        <nav className="fixed top-0 left-0 right-0 text-white border-b border-white/5 backdrop-blur-xl z-50">
           <div className="mx-auto max-w-7xl px-6">
              <div className="flex h-16 items-center justify-between">
                  {/* Logo And Brand */}
                  <div className="flex items-center space-x-3">
                    <Link href={'/'} className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                    <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                    </div>
                    <span className="text-lg font-semibold text-wrap">SafeReport</span>
                    </Link>
                    
                  </div>
                  {/* Navigation Menu */}
                  <div className="hidden md:flex items-center px-6 space-x-6">
                    <Link href={'/submit-report'} className="text-sm text-zinc-400 hover:text-white transition-colors">
                      Submit Report
                    </Link>
                    <Link href={'/track-report'} className="text-sm text-zinc-400 hover:text-white transition-colors">
                      Track Report
                    </Link>
                    <Link href={'/auth/signin'} className="text-sm text-zinc-400 hover:text-white transition-colors">
                      Login
                    </Link>
                    <Link href={'/auth/signout'} className="text-sm text-zinc-400 hover:text-white transition-colors">
                      Register
                    </Link>
                  </div>
                  {/* EMERGENCY BUTTON */}
                  <div className="flex items-center space-x-4">
                    <Link href={'/dashboard'} className="hidden md:flex text-sm text-zinc-400 hover:text-white transition-colors">
                     Dashboard
                    </Link>
                    <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4
                     pr-5 font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                        <span className="rounded-full w-1.5 h-1.5 bg-red-500 animate-pulse"/>
                        Emergency:911
                     </button>
                   {/* Mobile Menu */}
                   <button className="md:hidden p-2 text-zinc-400 hover-text-white "
                    onClick={() => setIsMobileMenuOpen(true)}>
                   <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                   </button>
                  </div>
              </div>
           </div>
        </nav>
        <MobileMenu  isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}/>
        </>
    )
}