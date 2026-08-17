import { Code2, Globe, Database, Cpu, Wrench } from 'lucide-react';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

const categoryIcons = {
  'Programming Languages': Code2,
  'Data Structures & Algorithms': Cpu,
  'Web Technologies': Globe,
  'APIs & Services': Database,
  'Tools & Platforms': Wrench,
};

export default function Skills() {
  const skillCategories = Object.entries(resumeData.skills);

  return (
    <AnimatedSection id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// What I work with</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I've worked with across my projects and academics
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(([category, skills], i) => {
            const IconComponent = categoryIcons[category] || Code2;
            return (
              <AnimatedSection key={category} delay={i * 0.1}>
                <div className="glass-card skill-category">
                  <div className="skill-category-header">
                    <div className="skill-category-icon">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="skill-category-title">{category}</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
