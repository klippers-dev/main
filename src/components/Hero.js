import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Humanizing Your <span>Digital Presence</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            We build and scale innovative digital products that resonate, engage, and solve real-world problems.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-buttons">
            <button className="btn-primary" onClick={handleGetStarted}>Let's Talk</button>
            <button className="btn-outline" onClick={handleLearnMore}>Our Products</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="image-decoration glass-panel">
            <img src="/images/hero_team.png" alt="Our diverse team collaborating" className="hero-main-image" />
          </div>
          <div className="experience-badge glass-panel">
            <span className="years">2+</span>
            <span className="text">Years of<br />Excellence</span>
          </div>
        </motion.div>
      </div>
      <div className="hero-blur-circle"></div>
    </section>
  );
};

export default Hero;
