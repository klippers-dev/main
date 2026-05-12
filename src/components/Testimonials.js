import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Bhuvana',
      position: 'Tech Lead',
      text: 'Klippers transformed our digital presence completely. Highly professional and results-driven team!',
      rating: 5,
    },
    {
      name: 'Chandra',
      position: 'MD, Bunker\'s Bell',
      text: 'Outstanding service! They delivered exactly what we needed on time and within budget.',
      rating: 5,
    },
    {
      name: 'Abhishek',
      position: 'Startup Founder',
      text: 'The team is incredibly talented and easy to work with. Highly recommended!',
      rating: 5,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="testimonials">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>

        <p className="section-subtitle">
          What our clients have to say about us
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
