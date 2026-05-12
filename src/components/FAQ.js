import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How much will it cost?',
      answer:
        'To get a better idea of the cost of what you want to build, give us a quick phone call. We\'ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we\'ll be able to give you a ballpark figure.',
    },
    {
      question: 'How long it takes to design?',
      answer:
        'The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.',
    },
    {
      question: 'How do I associate with Klippers?',
      answer:
        'The process begins when you contact us with your requirements. We analyze your requirements and respond to you. On the basis of the further discussion, you can choose an engagement model that suits you the best.',
    },
    {
      question: 'What all are included in Engineering Projects?',
      answer:
        'Our engineering projects include AI, ML and Deep Learning–based solutions, along with software development projects. We provide complete support from project development and implementation to documentation and final submission.',
    },
    {
      question: 'Can you help my current site look more professional?',
      answer:
        'Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really wonders!',
    },
    {
      question: 'When do I pay?',
      answer:
        'For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs.',
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
          Find answers to common questions about our services
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
