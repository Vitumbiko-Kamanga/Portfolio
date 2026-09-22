import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile-photo.png'
import Reveal from './Reveal.jsx'

const TECH = [
  { label: 'React' }, { label: 'React Native' },
  { label: 'Node.js' }, { label: 'Python' },
  { label: 'Golang' }, { label: 'PostgreSQL' },
  { label: 'Firebase' }, { label: 'NLP' },
  { label: 'Networking' }, { label: 'Git & GitHub' },
]

export default function Home() {
  const gridRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      TECH.forEach((_, i) => setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * 65))
      observer.disconnect()
    }, { threshold: 0.2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page active">
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow-tag">Final-Year IT Student. MUBAS</span>
              <h1>Software, built with <span className="accent-text">intent.</span></h1>
              <p className="lede">
                I'm Vitumbiko Kamanga a mobile &amp; web developer building full-stack and
                AI-powered software that solves real, local problems.
              </p>
              <div className="terminal-line"><span className="prompt">$</span> git clone Vitumbiko-K.git</div>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/projects">View my work</Link>
                <Link className="btn btn-coral" to="/contact">Get in touch</Link>
              </div>
            </Reveal>

            <Reveal className="photo-blob-wrap" delay={120}>
              <div className="photo-frame">
                <img src={profilePhoto} alt="Vitumbiko Kamanga" />
              </div>
            </Reveal>
          </div>

          <Reveal className="tech-grid-wrap" delay={180}>
            <div className="tech-grid-title">Technologies I use</div>
            <div className="tech-grid" ref={gridRef}>
              {TECH.map((t, i) => (
                <div key={t.label} className={`tech-item${i < visibleCount ? ' visible' : ''}`}>
                  <span className="label">{t.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="card status-card">
            <div className="status-dot" />
            <div><h3>Currently building &amp; learning</h3><p>Final-year Information Technology student at Malawi University of Business and Applied Sciences (MUBAS), expected to graduate in 2027. Currently developing an AI-powered mobile capstone project.</p></div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="kicker">About</span>
            <h2>Building at the intersection of software &amp; systems</h2>
          </Reveal>
          <Reveal as="p" className="narrow intro-copy" delay={100}>
            My background spans full-stack and mobile development alongside coursework in networking,
            database management, and telecommunications: giving me a <span className="highlight-coral">practical, systems-level understanding</span> of how software is built, connected, and supported in the real world.
          </Reveal>
          <Reveal as="div" delay={160}><Link className="btn btn-ghost" to="/about">More about me</Link></Reveal>
        </div>
      </section>
    </div>
  )
}
