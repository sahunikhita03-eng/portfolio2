import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Where I've worked</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional experience and internships
          </p>
        </div>

        <div className="timeline">
          {resumeData.experience.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="glass-card timeline-card">
                  <span className="timeline-date">{exp.duration}</span>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-highlights">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
