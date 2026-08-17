import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

export default function Activities() {
  return (
    <AnimatedSection id="activities" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Beyond the code</span>
          <h2 className="section-title">Leadership & Activities</h2>
          <p className="section-subtitle">
            Clubs, leadership roles, and extracurricular involvement
          </p>
        </div>

        <div className="activities-grid">
          {resumeData.activities.map((activity, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card activity-card">
                <h3 className="activity-role">{activity.role}</h3>
                <p className="activity-org">{activity.organization}</p>
                <ul className="activity-highlights">
                  {activity.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
