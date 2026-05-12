import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: '/images/team_1.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Roberts',
      role: 'UX/UI Designer',
      image: '/images/team_2.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Priya Patel',
      role: 'Project Manager',
      image: '/images/team_3.png',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="team" id="team">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <p className="section-subtitle">
          The brilliant minds behind our digital solutions.
        </p>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card glass-panel"
              variants={itemVariants}
            >
              <div className="team-img-container">
                <img src={member.image} alt={member.name} className="team-img" />
                <div className="team-social">
                  <a href={member.social.linkedin} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href={member.social.github} aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
