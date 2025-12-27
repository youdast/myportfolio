import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-photo">
            <img 
              src="/profile-img.png" 
              alt="Yuda Satria"
              className="profile-image"
            />
          </div>

          <div className="about-info">
            <h3>Software Engineer</h3>
            <p className="about-description">
              Writing well designed, testable, efficient code by using best software development practices.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Yuda Satria</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Degree:</span>
                <span className="detail-value">Bachelor of Informatics Engineering</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">yudasign@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
