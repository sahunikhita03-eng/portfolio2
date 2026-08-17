import { GraduationCap } from 'lucide-react';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function Education() {
  return (
    <AnimatedSection id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// My academic journey</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline">
          {resumeData.education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="glass-card timeline-card">
                  <span className="timeline-date">{edu.duration}</span>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <p className="timeline-company">{edu.institution}</p>
                  <div className="timeline-score">
                    <GraduationCap size={14} />
                    {edu.score}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
