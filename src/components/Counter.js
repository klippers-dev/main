import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaGift, FaUsers, FaAward } from 'react-icons/fa';
import './Counter.css';

const Counter = () => {
  const [counters, setCounters] = useState({
    hours: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });

  const stats = [
    {
      icon: <FaClock />,
      target: 13500,
      label: 'Working Hours',
      color: '#ff6b6b',
      key: 'hours',
    },
    {
      icon: <FaGift />,
      target: 20,
      label: 'Completed Projects',
      color: '#4ecdc4',
      key: 'projects',
    },
    {
      icon: <FaUsers />,
      target: 48,
      label: 'Happy Clients',
      color: '#ffd93d',
      key: 'clients',
    },
    {
      icon: <FaAward />,
      target: 10,
      label: 'Awards Received',
      color: '#a8e6cf',
      key: 'awards',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        hours:
          prev.hours < 13500 ? prev.hours + 270 : 13500,
        projects: prev.projects < 20 ? prev.projects + 1 : 20,
        clients: prev.clients < 48 ? prev.clients + 1 : 48,
        awards: prev.awards < 10 ? prev.awards + 1 : 10,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="counter-section">
      <div className="container-custom">
        <motion.div
          className="counters-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="counter-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="counter-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="counter-value">
                {counters[stat.key].toLocaleString()}
                {stat.key === 'hours' && '+'}
              </div>
              <div className="counter-label">{stat.label}</div>
              <div
                className="counter-bg"
                style={{ backgroundColor: stat.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Counter;
