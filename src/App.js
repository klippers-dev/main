import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Careers from './components/Careers';

import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Privacy from './components/Privacy';
import Products from './components/Products';
import ScrollToTop from './components/ScrollToTop';
import Terms from './components/Terms';
import Testimonials from './components/Testimonials';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Testimonials />

      <Contact />
      <FAQ />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router>
      <div className="App" style={{ opacity: isLoaded ? 1 : 0.5, transition: 'opacity 0.5s ease-in' }}>
        <CustomCursor />
        <AnimatedBackground />
        
        {/* Everything goes inside a relative wrapper with z-index 1 so it sits above the fixed z-index 0 background */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="noise-overlay"></div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
