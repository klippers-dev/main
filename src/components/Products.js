import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGamepad,
  FaUtensils,
  FaLock,
} from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const handleProductContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      icon: <FaEnvelope />,
      title: 'Digital Invitations',
      description:
        'Create beautiful, customized digital wedding invitations that are eco-friendly and easy to share. Perfect for leaving lasting impressions on your guests.',
      color: '#a8e6cf',
    },
    {
      icon: <FaGamepad />,
      title: 'KRACKO',
      description:
        'An exciting 4-digit number guessing game featuring Practice, Dual Player, and Multiplayer modes. Combine logic and strategy to outsmart your opponents.',
      color: '#ff6b6b',
    },
    {
      icon: <FaUtensils />,
      title: 'Tabletap',
      description:
        'A digital menu platform that helps restaurants create QR codes for customers. Simplify menu browsing and ordering while managing menus efficiently.',
      color: '#ffd93d',
    },
    {
      icon: <FaLock />,
      title: 'Specter',
      description:
        'A secure password manager stored locally in your system cache with encryption. Share and download passwords safely with master password protection.',
      color: '#9b59b6',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="products" id="products">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h2>

        <p className="section-subtitle">
          Explore our innovative product solutions designed to transform your experiences and simplify your life.
        </p>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="product-icon" style={{ color: product.color }}>
                {product.icon}
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button className="product-btn" onClick={handleProductContact}>
                Learn More
              </button>
              {product.title === 'KRACKO' && (
                <a
                  href="https://kracko.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-external-link"
                >
                  Access
                </a>
              )}
              {product.title === 'Digital Invitations' && (
                <a
                  href="https://wedding-invitation-nu-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-external-link"
                >
                  Access
                </a>
              )}
              {product.title === 'Tabletap' && (
                <a
                  href="https://tabletap-klippers.web.app/owner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-external-link"
                >
                  Access
                </a>
              )}
              {product.title === 'Specter' && (
                <a
                  href="https://specter-klip.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-external-link"
                >
                  Access
                </a>
              )}
              <div
                className="icon-accent"
                style={{ backgroundColor: product.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
