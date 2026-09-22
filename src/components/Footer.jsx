import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-col">
          <h5>Vitumbiko Kamanga</h5>
          <p style={{ color: 'var(--ink-dim)', fontSize: '0.9rem', maxWidth: '28ch' }}>
            Building full-stack, mobile, and AI-powered software.
          </p>
        </div>
        <div className="footer-col">
          <h5>Navigate</h5>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <a href="mailto:vitukamanga03@gmail.com">Email</a>
          <a href="https://github.com/Vitumbiko-Kamanga" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vitumbiko-kamanga" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Vitumbiko Kamanga · Malawi</div>
    </footer>
  )
}
