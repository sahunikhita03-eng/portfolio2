import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const { personal } = resumeData;

  return (
    <AnimatedSection id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Let's connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, internship
            opportunities, or ways to contribute to your team. Feel free to reach out!
          </p>

          <div className="contact-links">
            <a
              href={`mailto:${personal.email}`}
              className="contact-link"
            >
              <Mail size={18} />
              {personal.email}
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <GithubIcon size={18} />
              GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="contact-link"
            >
              <Phone size={18} />
              {personal.phone}
            </a>

            <span className="contact-link" style={{ cursor: 'default' }}>
              <MapPin size={18} />
              {personal.location}
            </span>
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="btn btn-primary"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
