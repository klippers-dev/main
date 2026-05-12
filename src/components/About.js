import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const handleReadMore = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="about" id="about">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>We Make Creativity Work for Your Brand!</h3>
            <p>
              Ours is a team of creatives that is brainstorming on great ideas,{' '}
              <strong>all. the. time.</strong> With our skills put together, you
              get an ensemble capable of doing anything and everything your brand
              needs.
            </p>
            <p>
              We specialize in transforming your digital presence into a powerful
              business tool. From concept to deployment, we deliver excellence.
            </p>
            <button className="btn-primary" onClick={handleReadMore}>Read More</button>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h4>Creative Design</h4>
              <p>Stunning visuals that captivate your audience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Performance</h4>
              <p>Lightning-fast and optimized solutions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h4>Security</h4>
              <p>Enterprise-grade security for your data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>Scalability</h4>
              <p>Grows with your business needs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
