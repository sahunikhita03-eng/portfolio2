import { FileDown } from 'lucide-react';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function Resume() {
  return (
    <AnimatedSection className="section resume-section">
      <div className="container">
        <div className="glass-card resume-cta">
          <div className="section-header" style={{ marginBottom: '24px' }}>
            <span className="section-label">// Want the full picture?</span>
            <h2 className="section-title">Download My Resume</h2>
          </div>
          <p>
            Get the complete overview of my skills, projects, and experience in a
            single document.
          </p>
          <a
            href={resumeData.personal.resumeFile}
            download
            className="btn btn-primary"
          >
            <FileDown size={18} />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
