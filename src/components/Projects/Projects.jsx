import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import portfolioService from '../../services/portfolioService';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await portfolioService.getProjects();
        // The API returns { status, code, message, data: [...] }
        setProjects(response.data || []);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects');
        // Fallback data with sample projects matching the new structure
        setProjects([
          {
            id: 1,
            title: 'Training Information System',
            description: 'A desktop application for managing employee training activities',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23667eea" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ETraining System%3C/text%3E%3C/svg%3E',
            role: 'Fullstack Developer',
            tech_stacks: [
              { id: 1, name: 'Go', icon: '' },
              { id: 2, name: 'PHP', icon: '' }
            ],
            source_link: '',
            demo_link: ''
          },
          {
            id: 2,
            title: 'Project Risk Information System',
            description: 'A system for project risk management using the House of Risk methodology.',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23764ba2" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ERisk System%3C/text%3E%3C/svg%3E',
            role: 'Fullstack Developer',
            tech_stacks: [
              { id: 3, name: 'Laravel', icon: '' },
              { id: 4, name: 'MySQL', icon: '' }
            ],
            source_link: '',
            demo_link: ''
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Projects</h2>
          <p className="section-subtitle">
            "Doing the best at this moment puts you in the best place for the next moment." – Oprah Winfrey
          </p>
        </motion.div>

        {error && (
          <div className="error-message">
            <p>{error} - Showing sample data</p>
          </div>
        )}

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img 
                  src={project.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23667eea" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject%3C/text%3E%3C/svg%3E'} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23667eea" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.source_link && (
                      <a 
                        href={project.source_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Source Code"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.demo_link && (
                      <a 
                        href={project.demo_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.role && <p className="project-role">{project.role}</p>}
                <p className="project-description">{project.description}</p>
                
                {project.tech_stacks && project.tech_stacks.length > 0 && (
                  <div className="project-tech">
                    {project.tech_stacks.map((tech, index) => (
                      <span key={tech.id || index} className="tech-tag">{tech.name}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
