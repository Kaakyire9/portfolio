import './About.css';

export default function About() {
  return (
    <section id="about" className="about-container py-20">
      <div className="container mx-auto px-6 about-content">
        <h2 className="about-title">
          About Me
        </h2>
        <p className="about-description">
          I'm a passionate developer with a background in teaching and technology.
          Skilled in React, Tailwind, Python, Django, and databases. I love building tools
          that solve real-world problems and help people achieve more.
        </p>

        <div className="skills-grid">
          <span className="skill-tag skill-react">React</span>
          <span className="skill-tag skill-python">Python</span>
          <span className="skill-tag skill-django">Django</span>
          <span className="skill-tag skill-javascript">JavaScript</span>
          <span className="skill-tag skill-tailwind">Tailwind</span>
        </div>
      </div>
    </section>
  );
}
