import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:yudasign@gmail.com">yudasign@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiGithub />
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/youdast" target="_blank" rel="noopener noreferrer">
                  github.com/youdast
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiLinkedin />
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Indonesia</p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:yudasign@gmail.com" className="btn btn-primary">
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
