import { useState } from 'react';
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setNewsletterStatus('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '3d4579f7-d332-4e25-a33c-a1c25b900d3e');
      formDataToSend.append('email', newsletterEmail);
      formDataToSend.append('subject', 'New Newsletter Subscriber');
      formDataToSend.append('message', `New subscriber: ${newsletterEmail}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus(''), 3000);
      } else {
        console.log('Response:', result);
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus(''), 3000);
      }
    } catch (error) {
      console.error('Newsletter Error:', error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(''), 3000);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container-custom">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>About Us</h4>
              <ul>
                <li>
                  <a href="/#home">
                    <FaArrowRight /> Home
                  </a>
                </li>
                <li>
                  <a href="/#about">
                    <FaArrowRight /> About us
                  </a>
                </li>

                <li>
                  <a href="/#products">
                    <FaArrowRight /> Our products
                  </a>
                </li>
                <li>
                  <RouterLink to="/terms">
                    <FaArrowRight /> Terms & condition
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/privacy">
                    <FaArrowRight /> Privacy policy
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <RouterLink to="/careers">
                    <FaArrowRight /> Career
                  </RouterLink>
                </li>
                <li>
                  <a href="/#contact">
                    <FaArrowRight /> Contact
                  </a>
                </li>
                <li>
                  <a href="/#faq">
                    <FaArrowRight /> FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Us</h4>
              <p className="contact-info">
                <strong>Location:</strong>
                {/* <br /> */}
                Vijayawada, Andhra Pradesh, India
              </p>
              <p className="contact-info">
                <strong>Email:</strong>
                {/* <br /> */}
                contactklippers@gmail.com
              </p>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon-x">X</span>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/the_klippers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="newsletter">
                <h5>Subscribe</h5>
                <p>Get latest updates delivered to your inbox</p>
                <form onSubmit={handleNewsletterSubmit}>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" disabled={isSubscribing}>
                    {isSubscribing ? '...' : '→'}
                  </button>
                </form>
                {newsletterStatus === 'success' && (
                  <p className="newsletter-message success">✅ Subscribed!</p>
                )}
                {newsletterStatus === 'error' && (
                  <p className="newsletter-message error">❌ Error subscribing</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-custom">
          <p className="copyright">
            Copyright © 2025 Klippers. All Rights Reserved. | Designed & Developed with ❤️ by Klippers Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
