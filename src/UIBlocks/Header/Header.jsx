import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-1.png'
import { Menu, Search, CircleX, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { setSearch } from '@/data/slices/JobSlice'
import { setUserData } from '@/data/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { clearTokens } from '@/data/indexed/IndexedService'
import { toast, Toaster } from 'sonner'

function Header() {

  const { role, isLoggedIn } = useSelector(state => state.user)
  const { search, jobs, searchedJobs } = useSelector(state => state.job)
  const dispatch = useDispatch()
  const accountMenuRef = useRef(null)
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const closeAccountMenu = () => setIsAccountMenuOpen(false)

  const roleLabel = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User'

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleLogout = async () => {
    await clearTokens()
    dispatch(setUserData({ isLoggedIn: false, role: null }))
    closeAccountMenu()
    closeMenu()
    toast('user logged out successfully', {
      action: {
        label: <X />,
        onClick: () => console.log('logged out!'),
      },
    });
    navigate('/')
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-950 to-black backdrop-blur-md">

        <div className="container mx-auto flex h-16 items-center justify-between px-4">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-8">

            <NavLink to="/" onClick={closeMenu} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/20">
                <img src={logo} alt="HireFlow" className="object-cover w-full h-full" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                HireFlow
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {isLoggedIn && <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Dashboard
              </NavLink>}

              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Browse Jobs
              </NavLink>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* Desktop Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                className="h-10 w-72 rounded-full bg-white/5 border border-white/10 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {(role === 'HR' && isLoggedIn) && <Button asChild className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-6 shadow-lg">
                <NavLink to="/post-job">Post a Job</NavLink>
              </Button>}

              <div className="relative" ref={accountMenuRef}>
                <Button
                  variant={'outline'}
                  onClick={() => setIsAccountMenuOpen(prev => !prev)}
                  className="text-gray-300 hover:text-white rounded-full h-11 w-11"
                >
                  {<User color='black' />}
                </Button>

                <div className={`absolute right-0 mt-2 w-64 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-sm shadow-2xl transition-all duration-200 ${isAccountMenuOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                  <div className="p-4">
                    {isLoggedIn ? (
                      <>
                        <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                          Signed in as {roleLabel}
                        </div>
                        <NavLink
                          to="/dashboard"
                          onClick={closeAccountMenu}
                          className="mt-2 block rounded-2xl px-3 py-2 text-white hover:bg-white/10"
                        >
                          My Account
                        </NavLink>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="mt-2 w-full rounded-2xl px-3 py-2 text-left text-gray-300 hover:bg-white/10"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                          Account options
                        </div>
                        <NavLink
                          to="/signin"
                          onClick={closeAccountMenu}
                          className="mt-2 block rounded-2xl px-3 py-2 text-white hover:bg-white/10"
                        >
                          Sign In
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white"
            >
              {isOpen ? <CircleX size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-slate-900 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">

          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="w-full h-10 rounded-full bg-white/5 border border-white/10 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col gap-4">
            {isLoggedIn && (
              <NavLink
                to="/dashboard"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white font-semibold"
              >
                Dashboard
              </NavLink>
            )}

            <NavLink
              to="/jobs"
              onClick={closeMenu}
              className="text-gray-300 hover:text-white font-semibold"
            >
              Browse Jobs
            </NavLink>

            {!isLoggedIn && (
              <NavLink
                to="/signin"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white font-semibold"
              >
                Sign In
              </NavLink>
            )}

            {isLoggedIn && (
              <>
                <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                  Signed in as {roleLabel}
                </div>
                <NavLink
                  to="/dashboard"
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-white font-semibold"
                >
                  My Account
                </NavLink>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-left text-gray-300 hover:text-white font-semibold"
                >
                  Logout
                </button>
              </>
            )}

            {(role === 'HR' && isLoggedIn) && (
              <NavLink
                to="/post-job"
                onClick={closeMenu}
                className="inline-flex h-10 items-center justify-center rounded-full bg-indigo-600 px-4 text-white font-semibold hover:bg-indigo-500"
              >
                Post a Job
              </NavLink>
            )}
          </nav>

          {/* Job Count */}
          <div className="text-sm text-gray-400 pt-4 border-t border-white/10">
            Total jobs: {searchedJobs?.length || jobs?.length}
          </div>

        </div>
      </div>
      <div>
        <Toaster position='top-center'></Toaster>
      </div>
    </>
  )
}


export default Header