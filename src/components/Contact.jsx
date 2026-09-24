import { useState } from 'react'
import Reveal from './Reveal.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import {
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const EMAIL = 'vitukamanga03@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    subject: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = `Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
Email: ${form.email}

${form.message}`

    const subject = form.subject || 'Portfolio contact form'

    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="page active">

      {/* CONTACT */}
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="wrap">

          <Reveal className="contact-panel">

            {/* CONTACT INFORMATION */}
            <div className="contact-info">

              <h2>
                Contact <span>Me</span>
              </h2>

              <p>
                I'm a final-year IT student and mobile &amp; web developer,
                open to internships, freelance work, and entry-level
                opportunities. Have a project in mind or a role to discuss?
                Send a message and I'll get back to you.
              </p>

              {/* SOCIAL / CONTACT ICONS */}
              <div className="social-row">

                {/* Phone */}
                <a
                  className="social-icon"
                  href="tel:+265984531996"
                  aria-label="Call Vitumbiko"
                  title="Call"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>

                {/* Email */}
                <a
                  className="social-icon"
                  href={`mailto:${EMAIL}`}
                  aria-label="Send an email"
                  title="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>

                {/* LinkedIn */}
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/vitumbiko-kamanga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                {/* GitHub */}
                <a
                  className="social-icon"
                  href="https://github.com/Vitumbiko-Kamanga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

              </div>

            </div>


            {/* CONTACT FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <input
                  className="form-field"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-field"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />

              </div>


              <div className="form-row">

                <input
                  className="form-field"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />

                <input
                  className="form-field"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />

              </div>


              <input
                className="form-field"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />


              <textarea
                className="form-field"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />


              <button
                className="form-submit"
                type="submit"
              >
                Submit
              </button>

            </form>

          </Reveal>

        </div>
      </section>

    </div>
  )
}