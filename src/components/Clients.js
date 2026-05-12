import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: "Bunker's Bell", image: '/images/Bunker\'s Bell.jpg' },
    { name: 'Client 2', image: '/images/image.png' },
    { name: 'Client 3', image: '/images/image.png' },
    { name: 'Client 4', image: '/images/image.png' },
    { name: 'Client 5', image: '/images/image.png' },
    { name: 'Client 6', image: '/images/image.png' },
    { name: 'Client 7', image: '/images/image.png' },
    { name: 'Client 8', image: '/images/image.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const totalItems = clients.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      items.push(clients[(currentIndex + i) % totalItems]);
    }
    return items;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <section className="clients">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h2>

        <p className="section-subtitle">
          We don't just build software, we build your business
        </p>

        <div className="clients-carousel-wrapper">
          <button className="carousel-button prev" onClick={handlePrev} aria-label="Previous">
            ❮
          </button>

          <div className="clients-carousel">
            <AnimatePresence mode="wait">
              {getVisibleItems().map((client, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="client-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={client.image} alt={client.name} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button className="carousel-button next" onClick={handleNext} aria-label="Next">
            ❯
          </button>
        </div>

        <div className="carousel-indicators">
          {clients.map((_, index) => (
            <motion.div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
