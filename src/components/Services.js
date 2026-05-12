import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  FaDatabase,
  FaLaptop,
  FaMagic,
  FaMobileAlt,
  FaRocket,
} from 'react-icons/fa';
import './Services.css';

const TiltCard = ({ service, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="service-card glass-panel"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="service-icon" style={{ color: service.color }}>
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="service-btn" onClick={onClick}>
        Learn More
      </button>
      <div
        className="icon-accent"
        style={{ backgroundColor: service.color }}
      ></div>
    </motion.div>
  );
};

const Services = () => {
  const handleServiceContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <FaLaptop />,
      title: 'Web App Development',
      description:
        'Our custom web development services include both front-end and back-end development. Whether enhancing an existing app or architecting an enterprise solution.',
      color: 'var(--accent-secondary)',
    },
    {
      icon: <FaDatabase />,
      title: 'Engineering Projects',
      description:
        'End-to-end project development services covering idea selection, design, implementation till final deployment.',
      color: 'var(--accent-primary)',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description:
        'Multi-platform mobile app solutions for both Android and iOS devices using cutting-edge technologies.',
      color: '#4ecdc4',
    },
    {
      icon: <FaMagic />,
      title: 'Digital Marketing',
      description:
        'Increase visibility and engage with your customers at online platforms with our comprehensive digital marketing services.',
      color: '#c7b3e5',
    },
    {
      icon: <FaRocket />,
      title: 'Research Papers',
      description:
        'Complete research assistance from topic selection to methodology development and publication-ready documentation.',
      color: '#ffd93d',
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

  return (
    <section className="services" id="services">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <p className="section-subtitle">
          We help you build high-quality digital solutions and deliver a wide
          range of professional services.
        </p>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <TiltCard service={service} onClick={handleServiceContact} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
