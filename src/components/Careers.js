import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from './Contact';
import './Careers.css';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="careers" id="careers">
        <div className="container-custom">
          <motion.div
            className="careers-content"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1>Join Our Team</h1>
            <p className="careers-subtitle">We're excited to have you here!</p>

            <div className="careers-message">
              <p>
                At the moment, we aren't actively hiring for new positions. However, we are truly pleased to have you here and are grateful for your interest in Klippers.
              </p>

              <p>
                We believe in growing together as a community and organization. While we're not currently opening new roles, we're constantly evolving and expanding our team as our business grows.
              </p>

              <p>
                If you're passionate about working with us or have an exciting opportunity to discuss, please don't hesitate to get in touch. We'd love to hear from you!
              </p>

              <div className="careers-highlight">
                <p>
                  <strong>Let's Stay Connected!</strong>
                  <br />
                  Keep an eye on us for future opportunities. We shall grow together and achieve great things.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Careers;
