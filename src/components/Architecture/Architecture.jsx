import { motion } from 'framer-motion';
import './Architecture.css';

const Architecture = () => {
  const techStack = [
    {
      layer: 'Frontend',
      technology: 'React.js',
      description: 'Modern, component-based UI library for building interactive user interfaces',
      features: ['Component-based architecture', 'Virtual DOM', 'Hooks & State Management', 'Responsive Design']
    },
    {
      layer: 'Backend',
      technology: 'Golang',
      description: 'High-performance, compiled language perfect for building scalable APIs',
      features: ['Fast compilation', 'Concurrent programming', 'RESTful API', 'Microservices ready']
    },
    {
      layer: 'Database',
      technology: 'PostgreSQL',
      description: 'Powerful, open-source relational database with advanced features',
      features: ['ACID compliant', 'JSON support', 'Full-text search', 'Scalable & reliable']
    },
    {
      layer: '3rd Party',
      technology: 'SMTP',
      description: 'Email service integration for notifications and communications',
      features: ['Email notifications', 'Transactional emails', 'Contact form handling', 'Automated messaging']
    }
  ];

  return (
    <section id="architecture" className="architecture">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>System Architecture</h2>
          <p className="section-subtitle">
            Modern, scalable architecture built with industry-leading technologies
          </p>
        </motion.div>

        <motion.div 
          className="architecture-diagram"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/architecture-diagram.png" alt="System Architecture Diagram" />
        </motion.div>

        <div className="tech-stack-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.layer}
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="tech-header">
                <span className="tech-layer">{tech.layer}</span>
                <h3 className="tech-name">{tech.technology}</h3>
              </div>
              <p className="tech-description">{tech.description}</p>
              <ul className="tech-features">
                {tech.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
