import { NavLink } from "react-router-dom"
import { useState } from "react"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-500 rounded-md px-3 py-2'
      : 'text-black hover:text-rose-400 rounded-md px-3 py-2'

  return (
    <nav>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between md:justify-start'>
          {/* Logo - centered on mobile, left on desktop */}
          <div className='flex-1 flex justify-center md:justify-start'>
            <NavLink className='transition-transform hover:scale-105' to='/'>
              <span className='text-black text-4xl font-extrabold tracking-wider font-title'>
                perrie
              </span>
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:flex space-x-4 text-2xl font-extrabold tracking-wider lowercase font-title'>
            <NavLink to='/about' className={linkClass}>About</NavLink>
            <NavLink to='/projects' className={linkClass}>Projects</NavLink>
            <NavLink to='/art' className={linkClass}>Art</NavLink>
          </div>

          {/* Mobile menu button - right aligned */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-emerald-400 hover:text-rose-400 p-2'
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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

        {/* Mobile menu dropdown - right aligned */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='flex flex-col items-end space-y-2 px-2 pt-2 pb-3 text-xl font-extrabold tracking-wider lowercase font-title'>
              <NavLink 
                to='/about' 
                className={linkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                About
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
