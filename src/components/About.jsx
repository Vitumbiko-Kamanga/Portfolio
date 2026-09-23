import profilePhoto from '../assets/profile-photo.png'
import Reveal from './Reveal.jsx'

const COURSEWORK = [
  'Database Management',
  'Computer Networking',
  'Telecommunications',
  'SLA Drafting',
  'Web Technologies',
  'Advanced Java (Spring, Servlets/JSP)',
  'Server Administration',
  'Microelectronics',
  'Computer Hardware',
  'Systems Analysis & Design'
]

const SKILLS = {
  'Frontend & Mobile': [
    { name: 'React', level: 80, tag: 'Proficient' },
    { name: 'React Native', level: 75, tag: 'Proficient' }
  ],

  'Backend & Languages': [
    { name: 'Node.js', level: 75, tag: 'Proficient' },
    { name: 'Python', level: 65, tag: 'Comfortable' },
    { name: 'Golang', level: 45, tag: 'Learning' }
  ],

  'Data & Systems': [
    { name: 'SQL / PostgreSQL', level: 70, tag: 'Proficient' },
    { name: 'Git & GitHub', level: 80, tag: 'Proficient' }
  ],

  'Networking & Telecom': [
    { name: 'Computer Networking', level: 70, tag: 'Comfortable' },
    { name: 'Telecommunications', level: 65, tag: 'Comfortable' }
  ]
}

const TIMELINE = [
  {
    date: 'Aug 2026',
    title: 'Shipped MUBAS Student Assessment System',
    desc: 'Full-stack web app with JWT auth and role-based portals for admin, lecturer, and student use.'
  },

  {
    date: 'Aug 2026',
    title: 'Started CIT-PRG-407 (Advanced Java)',
    desc: "Began the Campus Room & Resource Booking System as the course's semester-long project."
  },

  {
    date: 'Ongoing',
    title: 'Developing LectureLens (Capstone)',
    desc: 'AI-powered mobile app transcribing lectures in real time and enriching academic references with citation metadata.'
  }
]

export default function About() {
  return (
    <div className="page active">

      {/* =====================================================
          PAGE INTRO
          ===================================================== */}

      <section className="page-hero">
        <div className="wrap">

          <span className="eyebrow-tag">
            About me
          </span>

          <h1>
            Building useful software with a{' '}
            <span className="accent-text">
              systems mindset.
            </span>
          </h1>

          <p>
            Full-stack and mobile development, backed by a foundation in
            networking, databases and telecommunications.
          </p>

        </div>
      </section>


      {/* =====================================================
          PROFILE
          ===================================================== */}

      <section className="about-section">
        <div className="wrap">

          <div className="about-grid">

            <Reveal className="photo-frame about-photo">

              <img
                src={profilePhoto}
                alt="Vitumbiko Kamanga"
              />

            </Reveal>


            <Reveal
              className="about-copy"
              delay={100}
            >

              <span className="kicker">
                Profile
              </span>

              <h2>
                Final-year IT student passionate about building
                software that solves real problems.
              </h2>

              <div className="about-prose">

                <p>
                  I am an Information Technology student focused on
                  full-stack and mobile development, with practical
                  experience working with React, React Native, Node.js,
                  Python, and Golang.
                </p>

                <p>
                  My academic background also gives me a broader
                  understanding of databases, networking, telecommunications,
                  server administration, systems analysis, and software
                  engineering. This combination allows me to approach
                  software not only from the development side, but also
                  from the perspective of the systems that support it.
                </p>

                <p>
                  My capstone project is an AI-powered mobile application
                  that transcribes lectures in real time and enriches
                  academic references with citation metadata, combining
                  speech-to-text, natural language processing, and mobile
                  engineering.
                </p>

                <p>
                  I am open to internships, freelance work, collaborative
                  projects, and entry-level opportunities in software and
                  mobile development.
                </p>

              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* =====================================================
          EDUCATION
          ===================================================== */}

      <section className="about-section compact-section">

        <div className="wrap">

          <Reveal className="section-head">

            <span className="kicker">
              Education
            </span>

            <h2>
              Academic background
            </h2>

          </Reveal>


          <div className="education-layout">

            {/* -------------------------------------------------
                LEFT: DEGREE INFORMATION
                ------------------------------------------------- */}

            <Reveal
              className="card education-info"
              delay={80}
            >

              <span className="education-label">
                Current Studies
              </span>

              <h3>
                Malawi University of Business and Applied Sciences
              </h3>

              <p className="education-program">
                Bachelor's Degree in Information Technology
              </p>

              <p className="education-year">
                Expected Graduation: 2027
              </p>

            </Reveal>


            {/* -------------------------------------------------
                RIGHT: COURSE MODULES
                ------------------------------------------------- */}

            <Reveal
              className="card modules-panel"
              delay={160}
            >

              <div className="modules-heading">

                <span className="education-label">
                  Coursework
                </span>

                <h3>
                  Key course modules
                </h3>

              </div>


              <div className="module-grid">

                {COURSEWORK.map((course, index) => (

                  <div
                    className="module-item"
                    key={course}
                  >

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <strong>
                      {course}
                    </strong>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
          ===================================================== */}

      <section className="about-section compact-section">

        <div className="wrap">

          <Reveal className="section-head">

            <span className="kicker">
              Skills
            </span>

            <h2>
              What I build with
            </h2>

          </Reveal>


          <div className="skill-groups">

            {Object.entries(SKILLS).map(
              ([group, items], gi) => (

                <Reveal
                  as="div"
                  className="skill-group"
                  key={group}
                  delay={gi * 80}
                >

                  <h4>
                    {group}
                  </h4>


                  {items.map((skill) => (

                    <div
                      className="skill-row"
                      key={skill.name}
                    >

                      <div className="skill-row-label">

                        <span>
                          {skill.name}
                        </span>

                        <span>
                          {skill.tag}
                        </span>

                      </div>


                      <div className="skill-bar-track">

                        <div
                          className="skill-bar-fill"
                          style={{
                            width: `${skill.level}%`
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </Reveal>

              )
            )}

          </div>


          <p className="note">
            Skill levels are indicative and can be updated as
            experience grows.
          </p>

        </div>

      </section>


      {/* =====================================================
          TIMELINE
          ===================================================== */}

      <section className="about-section compact-section">

        <div className="wrap">

          <Reveal className="section-head">

            <span className="kicker">
              Progress log
            </span>

            <h2>
              Where I've been building
            </h2>

          </Reveal>


          <Reveal
            className="timeline timeline-wrap"
            delay={80}
          >

            {TIMELINE.map((item) => (

              <div
                className="tl-item"
                key={item.title}
              >

                <div className="tl-date">
                  {item.date}
                </div>

                <div className="tl-title">
                  {item.title}
                </div>

                <div className="tl-desc">
                  {item.desc}
                </div>

              </div>

            ))}

          </Reveal>

        </div>

      </section>

    </div>
  )
}