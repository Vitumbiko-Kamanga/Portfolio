import profilePhoto from '../assets/profile-photo.png'
import Reveal from './Reveal.jsx'

const COURSEWORK = ['Database Management', 'Computer Networking', 'Telecommunications', 'SLA Drafting', 'Web Technologies', 'Advanced Java (Spring, Servlets/JSP)', 'Server Administration', 'Microelectronics', 'Computer Hardware', 'Systems Analysis & Design']
const SKILLS = {
  'Frontend & Mobile': [{ name: 'React', level: 80, tag: 'Proficient' }, { name: 'React Native', level: 75, tag: 'Proficient' }],
  'Backend & Languages': [{ name: 'Node.js', level: 75, tag: 'Proficient' }, { name: 'Python', level: 65, tag: 'Comfortable' }, { name: 'Golang', level: 45, tag: 'Learning' }],
  'Data & Systems': [{ name: 'SQL / PostgreSQL', level: 70, tag: 'Proficient' }, { name: 'Git & GitHub', level: 80, tag: 'Proficient' }],
  'Networking & Telecom': [{ name: 'Computer Networking', level: 70, tag: 'Comfortable' }, { name: 'Telecommunications', level: 65, tag: 'Comfortable' }],
}
const TIMELINE = [
  { date: 'Aug 2026', title: 'Shipped MUBAS Student Assessment System', desc: 'Full-stack web app with JWT auth and role-based portals for admin, lecturer, and student use.' },
  { date: 'Aug 2026', title: 'Started CIT-PRG-407 (Advanced Java)', desc: "Began the Campus Room & Resource Booking System as the course's semester-long project." },
  { date: 'Ongoing', title: 'Developing LectureLens (Capstone)', desc: 'AI-powered mobile app transcribing lectures in real time and enriching academic references with citation metadata.' },
]

export default function About() {
  return <div className="page active">
    <section className="page-hero"><div className="wrap"><span className="eyebrow-tag">About me</span><h1>Building useful software with a <span className="accent-text">systems mindset.</span></h1><p>Full-stack and mobile development, backed by a foundation in networking, databases and telecommunications.</p></div></section>

    <section><div className="wrap"><div className="about-grid">
      <Reveal className="photo-frame about-photo"><img src={profilePhoto} alt="Vitumbiko Kamanga" /></Reveal>
      <Reveal className="about-copy" delay={100}>
        <span className="kicker">Profile</span>
        <h2>Final-year IT student passionate about building software that solves real problems.</h2>
        <p>My background spans full-stack and mobile development: React, React Native, Node.js, Python, and Golang, alongside coursework in networking, database management, telecommunications, and SLA drafting.</p>
        <p>My capstone project is an AI-powered mobile app that transcribes lectures in real time and enriches academic references with citation data, combining NLP, speech-to-text, and mobile engineering.</p>
        <p>Open to internships, freelance work, and entry-level opportunities in software or mobile development.</p>
      </Reveal>
    </div></div></section>

    <section><div className="wrap"><Reveal className="section-head"><span className="kicker">Education</span><h2>MUBAS: Information Technology</h2></Reveal>
      <Reveal className="card education-card" delay={80}><div className="edu-item"><div className="edu-mark" /><div><strong>Malawi University of Business and Applied Sciences (MUBAS)</strong><span>Bachelor's Degree in Information Technology · Expected graduation 2027</span></div></div><div className="coursework-tags">{COURSEWORK.map((c) => <span className="tag" key={c}>{c}</span>)}</div></Reveal>
    </div></section>

    <section><div className="wrap"><Reveal className="section-head"><span className="kicker">Skills</span><h2>What I build with</h2></Reveal>
      <div className="skill-groups">{Object.entries(SKILLS).map(([group, items], gi) => <Reveal as="div" className="skill-group" key={group} delay={gi * 80}><h4>{group}</h4>{items.map((s) => <div className="skill-row" key={s.name}><div className="skill-row-label"><span>{s.name}</span><span>{s.tag}</span></div><div className="skill-bar-track"><div className="skill-bar-fill" style={{ width: `${s.level}%` }} /></div></div>)}</Reveal>)}</div>
      <p className="note">Skill levels are indicative and can be updated as experience grows.</p>
    </div></section>

    <section><div className="wrap"><Reveal className="section-head"><span className="kicker">Progress log</span><h2>Where I've been building</h2></Reveal>
      <Reveal className="timeline" delay={80}>{TIMELINE.map((t) => <div className="tl-item" key={t.title}><div className="tl-date">{t.date}</div><div className="tl-title">{t.title}</div><div className="tl-desc">{t.desc}</div></div>)}</Reveal>
    </div></section>
  </div>
}
