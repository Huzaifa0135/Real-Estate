"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-[#0A2540] dark:text-[#7CA9D6] tracking-tight">
            Easy<span className="text-[#0070F3] dark:text-[#38BDF8]">Property</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-[#0070F3] transition-colors">
            Projects
          </Link>
          <Link href="/compare" className="text-sm font-medium text-muted-foreground hover:text-[#0070F3] transition-colors">
            Compare
          </Link>
          <Link href="/societies" className="text-sm font-medium text-muted-foreground hover:text-[#0070F3] transition-colors">
            Societies
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium hover:text-[#0070F3] transition-colors">
            Login
          </Link>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md border border-border hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link href="/projects" className="text-sm font-medium hover:text-[#0070F3] transition-colors">
              Projects
            </Link>
            <Link href="/compare" className="text-sm font-medium hover:text-[#0070F3] transition-colors">
              Compare
            </Link>
            <Link href="/societies" className="text-sm font-medium hover:text-[#0070F3] transition-colors">
              Societies
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-[#0070F3] transition-colors">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}