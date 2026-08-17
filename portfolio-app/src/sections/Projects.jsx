import { ExternalLink, Shield, BookOpen } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import resumeData from '../data/resumeData';
import AnimatedSection from '../components/AnimatedSection';

const projectIcons = {
  'Women Safety AI': Shield,
  'Phone Book Management System': BookOpen,
};

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Things I've built</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and problem-solving approach
          </p>
        </div>

        <div className="projects-grid">
          {resumeData.projects.map((project, i) => {
            const IconComponent = projectIcons[project.title] || BookOpen;
            return (
              <AnimatedSection key={project.title} delay={i * 0.15}>
                <div className="glass-card project-card">
                  <div className="project-card-top">
                    <div className="project-icon">
                      <IconComponent size={48} />
                    </div>
                    {project.featured && (
                      <span className="project-featured-badge">Featured</span>
                    )}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-problem">
                    <strong style={{ color: 'var(--accent-purple)' }}>Problem: </strong>
                    {project.problem}
                  </div>

                  <div className="project-techs">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <GithubIcon size={16} />
                        Source Code
                      </a>
                    )}
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
