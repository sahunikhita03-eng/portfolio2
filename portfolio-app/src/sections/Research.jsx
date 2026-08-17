import { FlaskConical } from 'lucide-react';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function Research() {
  return (
    <AnimatedSection id="research" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Exploring the unknown</span>
          <h2 className="section-title">Research Work</h2>
          <p className="section-subtitle">
            Active research exploring cutting-edge topics in AI and human-computer interaction
          </p>
        </div>

        {resumeData.research.map((item, i) => (
          <AnimatedSection key={i} delay={0.1}>
            <div className="glass-card research-card">
              <div className="research-status">
                <FlaskConical size={14} />
                {item.status}
              </div>
              <h3 className="research-title">{item.title}</h3>
              <p className="research-description">{item.description}</p>
              <ul className="research-highlights">
                {item.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}
