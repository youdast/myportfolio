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
            <h3>System Analyst And Software Engineer</h3>
            <p className="about-description">
              Writing well designed, testable, efficient code by using best software development practices.
              I am passionate about my work and able to analyze business or user needs and design technical 
              solutions that suit those needs through to the development process.
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

            <p className="about-summary">
              I am proficient in multiple programming languages and can work individually or in groups. 
              I have expertise in Golang and PHP, along with modern web technologies and cloud platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
