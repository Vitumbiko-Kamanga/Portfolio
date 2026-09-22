import Reveal from './Reveal.jsx'

const PROJECTS = [
  {
    title: 'LectureLens',
    badge: 'Capstone · In Progress',
    badgeClass: 'badge-progress',
    desc: 'AI-powered mobile app that transcribes lectures in real time and enriches detected academic references with citation metadata.',
    tags: ['React Native', 'Node.js', 'spaCy / Hugging Face', 'PostgreSQL'],
  },
  {
    title: 'MUBAS Student Assessment System',
    badge: 'Completed',
    badgeClass: 'badge-done',
    desc: 'Full-stack web app matching an academic ER schema, with JWT auth, role-based portals, and weighted grade classifications.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Campus Room & Resource Booking System',
    badge: 'In Progress',
    badgeClass: 'badge-progress',
    desc: 'Semester-long Java project for the advanced course CIT-PRG-407, covering unit testing, collections, streams, and Spring.',
    tags: ['Java', 'Spring Framework', 'Servlets / JSP'],
  },
  {
    title: 'Multi-Vendor Marketplace',
    badge: 'Concept',
    badgeClass: 'badge-concept',
    desc: "A marketplace for independent Malawian vendors, with product recommendations based on buyer browsing behavior.",
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <div className="page active">
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="wrap">
          <Reveal><span className="eyebrow-tag">Projects</span></Reveal>
          <Reveal as="h2" delay={70} style={{ fontSize: 'clamp(1.7rem,3.5vw,2.4rem)', maxWidth: '20ch', marginBottom: '0.8rem' }}>
            Ideas turned into working software
          </Reveal>
          <Reveal as="p" delay={120} style={{ color: 'var(--ink-dim)', maxWidth: '56ch', marginBottom: '2.5rem' }}>
            A selection of academic and personal projects: chosen to show how I approach real
            problems with software.
          </Reveal>

          <div className="project-grid">
            {PROJECTS.map((p) => (
              <Reveal className="card project-card" key={p.title} delay={90 * (PROJECTS.indexOf(p) % 3)}>
                <div className="project-top">
                  <h3>{p.title}</h3>
                  <span className={`badge ${p.badgeClass}`}>{p.badge}</span>
                </div>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
