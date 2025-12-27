import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioService from '../../services/portfolioService';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await portfolioService.getSkills();
        setSkills(data.data || data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch skills:', err);
        setError('Failed to load skills');
        // Fallback data
        setSkills([
          { id: 1, name: 'Go Language', category: 'Backend' },
          { id: 2, name: 'PHP', category: 'Backend' },
          { id: 3, name: 'Laravel', category: 'Framework' },
          { id: 4, name: 'Docker', category: 'DevOps' },
          { id: 5, name: 'MySQL', category: 'Database' },
          { id: 6, name: 'PostgreSQL', category: 'Database' },
          { id: 7, name: 'MongoDB', category: 'Database' },
          { id: 8, name: 'Redis', category: 'Cache' },
          { id: 9, name: 'JavaScript', category: 'Frontend' },
          { id: 10, name: 'React', category: 'Frontend' },
          { id: 11, name: 'Git', category: 'Tools' },
          { id: 12, name: 'Kafka', category: 'Message Queue' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>SKILLS</h2>
          <p className="section-subtitle">
            "Programming isn’t about what you know; it’s about what you can figure out." – Chris Pine
          </p>
        </motion.div>

        {error && (
          <div className="error-message">
            <p>{error} - Showing sample data</p>
          </div>
        )}

        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-tag"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
