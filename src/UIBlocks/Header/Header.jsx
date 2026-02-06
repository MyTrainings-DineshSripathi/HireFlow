import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-1.png'
import { LayoutDashboard, LogIn, Menu, Search, Briefcase } from 'lucide-react'
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Left Section: Branding & Primary Nav */}
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-2.5 transition-all hover:opacity-90">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-primary/20 overflow-hidden">
              <img src={logo} alt="HireFlow" className="scale-200 object-cover object-center" /> 
              {/* brightness-0 invert makes your logo white to pop against the indigo bg */}
            </div>
            <span className="text-xl font-extrabold tracking-tight text-foreground">
              HireFlow
            </span>
          </NavLink>

          {/* Desktop Navigation - Subtle Visual Flow */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  isActive 
                    ? 'bg-accent text-primary' 
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`
              }
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            
            <NavLink 
              to="/jobs" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  isActive 
                    ? 'bg-accent text-primary' 
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`
              }
            >
              <Briefcase className="h-4 w-4" />
              Browse Jobs
            </NavLink>
          </nav>
        </div>

        {/* Right Section: Global Search & Auth */}
        <div className="flex items-center gap-4">
          {/* Search Bar with Muted Palette */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="search" 
              placeholder="Search jobs, companies..." 
              className="h-10 w-72 rounded-full border border-input bg-muted/30 pl-10 pr-4 text-sm transition-all focus:bg-background focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 border-l border-border pl-4">
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex font-semibold text-muted-foreground hover:text-primary">
              <NavLink to="/signin">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </NavLink>
            </Button>
            
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/25 rounded-full px-6">
              Post a Job
            </Button>
            
            <Button variant="outline" size="icon" className="md:hidden border-none bg-secondary">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header