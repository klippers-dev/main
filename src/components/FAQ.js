import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I access your products?',
      answer:
        'You can access our products directly through the links provided in the Our Products section. Most of our products are web-based and can be accessed from any modern browser without downloading any software.',
    },
    {
      question: 'Are your products free to use?',
      answer:
        'Many of our products like Specter and Kracko offer free tiers or are completely free to use. For enterprise solutions like Tabletap, we offer custom pricing tailored to your restaurant\'s specific needs.',
    },
    {
      question: 'Do you provide support for your products?',
      answer:
        'Yes! We are dedicated to ensuring you have a smooth experience. If you encounter any issues or have questions while using our products, you can reach out to us through the Contact section below.',
    },
    {
      question: 'Is my data secure when using your products?',
      answer:
        'Security is our top priority. Products like Specter are designed with local encryption, meaning your sensitive data never leaves your device. All our platforms follow industry-standard security protocols.',
    },
    {
      question: 'Can I request a new feature for a product?',
      answer:
        'Absolutely! We are constantly evolving our products based on user feedback. If you have an idea that could improve the experience, please let us know through our contact form.',
    },
    {
      question: 'Do you build custom products for clients?',
      answer:
        'While our primary focus is developing our own innovative product suite, we occasionally collaborate on exciting ventures. Feel free to contact us to discuss any unique opportunities.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container-custom">
        <motion.h2
          className="section-heading faq-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="section-subtitle">
          Find answers to common questions about our products
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item glass-panel"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className={`faq-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-body"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
