import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaBolt, FaShieldAlt, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const handleReadMore = () => {
    const element = document.getElementById('products');
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
            <h3>We Build Products That Matter!</h3>
            <p>
              Ours is a team of creators and engineers brainstorming on great ideas,{' '}
              <strong>all. the. time.</strong> With our combined skills, we build
              innovative digital products designed to simplify and enhance your daily life.
            </p>
            <p>
              We specialize in transforming complex challenges into seamless, powerful
              solutions. From concept to deployment, we deliver excellence in every product.
            </p>
            <button className="btn-primary" onClick={handleReadMore}>View Products</button>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            <div className="feature-card">
              <div className="feature-icon"><FaPalette /></div>
              <h4>Creative Design</h4>
              <p>Stunning visuals that captivate and engage users</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBolt /></div>
              <h4>Performance</h4>
              <p>Lightning-fast and optimized architectures</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaShieldAlt /></div>
              <h4>Security</h4>
              <p>Enterprise-grade security built into every product</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaRocket /></div>
              <h4>Scalability</h4>
              <p>Engineered to grow seamlessly with user demands</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
