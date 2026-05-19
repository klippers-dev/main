import React, { useState, useEffect, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = ['home', 'about', 'products', 'contact', 'faq'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src="/images/Klippers.png" alt="Klippers Logo" className="logo-img" />
          <span className="logo-text">Klippers</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDark ? <FaSun size={20} color="#ff7e67" /> : <FaMoon size={20} color="#0a192f" />}
          </button>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item} className="nav-item">
              {location.pathname === '/' ? (
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              ) : (
                <a
                  href={`/#${item}`}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
