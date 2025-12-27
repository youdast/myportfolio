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
        const data = await portfolioService.getProjects();
        setProjects(data.data || data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects');
        // Fallback data with sample projects
        setProjects([
          {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23667eea" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EE-Commerce%3C/text%3E%3C/svg%3E',
            category: 'Web',
            tech_stack: ['Laravel', 'Vue.js', 'MySQL'],
            github_url: 'https://github.com',
            demo_url: 'https://demo.com'
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management with real-time updates',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23764ba2" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ETask Manager%3C/text%3E%3C/svg%3E',
            category: 'App & Web',
            tech_stack: ['Go', 'React', 'PostgreSQL'],
            github_url: 'https://github.com',
            demo_url: 'https://demo.com'
          },
          {
            id: 3,
            title: 'API Gateway Service',
            description: 'Microservices API gateway with rate limiting',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%2348cae4" width="600" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EAPI Gateway%3C/text%3E%3C/svg%3E',
            category: 'Web',
            tech_stack: ['Go', 'Redis', 'Docker'],
            github_url: 'https://github.com',
            demo_url: null
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
                    {project.github_url && (
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View on GitHub"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.demo_url && (
                      <a 
                        href={project.demo_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View live demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.tech_stack && project.tech_stack.length > 0 && (
                  <div className="project-tech">
                    {project.tech_stack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
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
