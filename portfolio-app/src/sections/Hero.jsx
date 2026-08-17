import { useEffect, useState } from 'react';
import { Mail, ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import resumeData from '../data/resumeData';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${8 + Math.random() * 12}s`,
    animationDelay: `${Math.random() * 5}s`,
    size: `${2 + Math.random() * 3}px`,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <section className="hero" id="home">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-glow-3" />
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div
          className="hero-content"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          }}
        >
          <div className="hero-badge">
            <span className="dot" />
            Open to Opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm{' '}
            <span className="gradient-text">{resumeData.personal.name}</span>
          </h1>

          <p className="hero-title">{resumeData.personal.subtitle}</p>

          <p className="hero-description">
            {resumeData.summary.split('.').slice(0, 2).join('.') + '.'}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <ArrowDown size={18} />
              View Projects
            </a>
            <a
              href={resumeData.personal.resumeFile}
              download
              className="btn btn-outline"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
