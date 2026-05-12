import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '3d4579f7-d332-4e25-a33c-a1c25b900d3e');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', 'New Contact Form Submission');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        console.log('Response:', result);
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      console.error('Form Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-map glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sVijayawada,Andhra+Pradesh,India"
              width="100%"
              height="400"
              style={{ border: 'none', borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.form
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input"
            ></textarea>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <div className="form-message success">✅ Message sent successfully!</div>
            )}
            {formStatus === 'error' && (
              <div className="form-message error">❌ Error sending message. Please try again.</div>
            )}
          </motion.form>
        </div>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-card glass-panel">
            <h4>📍 Location</h4>
            <p>Vijayawada, Andhra Pradesh, India</p>
          </div>
          <div className="info-card glass-panel">
            <h4>✉️ Email</h4>
            <p>contactklippers@gmail.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
