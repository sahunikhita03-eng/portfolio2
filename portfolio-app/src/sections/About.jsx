import { Code2, Brain, Rocket, Users } from 'lucide-react';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  const stats = [
    { number: `${resumeData.projects.length}+`, label: 'Projects', icon: Rocket },
    { number: `${resumeData.skills['Programming Languages'].length}`, label: 'Languages', icon: Code2 },
    { number: `${resumeData.research.length}`, label: 'Research', icon: Brain },
    { number: `${resumeData.activities.length}`, label: 'Activities', icon: Users },
  ];

  return (
    <AnimatedSection id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>{resumeData.about}</p>
            <p style={{ color: 'var(--text-muted)' }}>
              Currently pursuing my B.Tech in CSE at NIST University with a CGPA of{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>8.62</strong>. I'm actively
              involved in the Cloud Computing Club and have organized technical workshops,
              blending my technical skills with leadership.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
