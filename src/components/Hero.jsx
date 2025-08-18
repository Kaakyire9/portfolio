import './Hero.css';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-container">
      {/* Dynamic Animated Background */}
      <div className="hero-background"></div>
      
      {/* Floating Particles */}
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      <div className="hero-particle"></div>
      
      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Reginald</span> 👋
        </h1>
        
        <p className="hero-subtitle">
          Full Stack Developer | React & Django | Passionate about building modern, scalable web applications that make a difference
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            View My Work
          </a>
          <a href="/cv.pdf" className="hero-btn hero-btn-secondary">
            Download CV
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToNext}>
        <span>Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}
