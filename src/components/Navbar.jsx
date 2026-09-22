import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <nav>
      <NavLink
        to="/"
        className="brand"
        onClick={() => setOpen(false)}
      >
        Vitumbiko <span>Kamanga</span>
      </NavLink>

      <div className="nav-controls">
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>

        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
