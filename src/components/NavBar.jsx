import { NavLink } from "react-router-dom"
import { useState } from "react"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-500 rounded-md px-3 py-2'
      : 'text-black hover:text-rose-400 rounded-md px-3 py-2'

  return (
    <nav className="relative">
      <div className='mx-auto w-[80vw] md:max-w-6xl'>
        
        <div className='flex h-16 items-center'>
          {/* Logo - centered on mobile, left on desktop */}
          <div className='flex-1 flex justify-center md:justify-start translate-x-5 md:translate-x-0'>
            <NavLink className='transition-transform hover:scale-105' to='/'>
              <span className='text-black text-4xl font-extrabold tracking-wider font-title'>
                perrie
              </span>
            </NavLink>
          </div>

          {/* Desktop menu - right aligned */}
          <div className='hidden md:flex flex-none space-x-4 text-2xl font-extrabold tracking-wider lowercase font-title'>
            <NavLink to='/about' className={linkClass}>About</NavLink>
            <NavLink to='/resume' className={linkClass}>Resume</NavLink>
            <NavLink to='/projects' className={linkClass}>Projects</NavLink>
            <NavLink to='/art' className={linkClass}>Art</NavLink>
          </div>

          {/* Mobile menu button - right aligned */}
          <div className='md:hidden flex-none'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-stone-950 hover:text-rose-400 py-2 mt-1'
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className='md:hidden fixed inset-0 z-50 bg-white/95'>
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className='absolute top-11 right-10 text-stone-950 hover:text-rose-400 py-2'
              aria-label="Close menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className='flex flex-col items-center justify-center h-full space-y-8 text-2xl font-extrabold tracking-wider lowercase font-title'>
              <NavLink 
                to='/about' 
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to='/resume' 
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </NavLink>
              <NavLink 
                to='/projects' 
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to='/art' 
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Art
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
