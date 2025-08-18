import { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-brand">Sampson Reginald Aduboffour</h2>
            <p className="footer-tagline">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="social-links">
            <a 
              href="https://https://github.com/Kaakyire9" 
              className="social-link social-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>🐙</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/reginald-aduboffour" 
              className="social-link social-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💼</span>
            </a>
            <a 
              href="mailto:r.aduboffour@gmail.com" 
              className="social-link social-email"
            >
              <span>📧</span>
            </a>
            <a 
              href="https://twitter.com" 
              className="social-link social-twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>🐦</span>
            </a>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-links">
              <a href="#home" className="footer-nav-link">Home</a>
              <a href="#about" className="footer-nav-link">About</a>
              <a href="#projects" className="footer-nav-link">Projects</a>
              <a href="#contact" className="footer-nav-link">Contact</a>
            </div>
          </nav>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 Reginald. All rights reserved.
            </div>
            <div className="footer-tech">
              Made with <span className="footer-heart">❤️</span> using
              <div className="footer-tech-links">
                <a href="https://react.dev" className="footer-tech-link">React</a>
                <a href="https://tailwindcss.com" className="footer-tech-link">Tailwind CSS</a>
                <a href="https://vitejs.dev" className="footer-tech-link">Vite</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}