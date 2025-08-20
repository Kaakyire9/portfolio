import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Event Management Site",
      description: "A full-stack event management platform for organizing and hosting events.",
      image: "/images/eventia.png",
      tech: ["HTML", "CSS", "JavaScript", "Django", "PostgreSQL"],
      github: "https://github.com/Kaakyire9/Eventia",
      live: "https://eventia-dfe1ce6afa74.herokuapp.com/"
    },
    {
      id: 2,
      title: "Professional CV Builder",
      description: "A comprehensive, professional CV builder with cutting-edge collaboration features that rival tools like Google Docs.",
      image: "/images/kwickcv.png",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Kaakyire9/kwickcv",
      live: "https://kwickcv.vercel.app"
    },
    {
      id: 3,
      title: "Diversity & Inclusion Platform",
      description: "A platform aimed at promoting diversity and inclusion in the workplace through resources, training, and community engagement.",
      image: "/images/diversity-inclusion.png",
      tech: ["HTML", "CSS3", "Bootstrap"],
      github: "https://github.com/Project1-Diversity-Inclusion",
      live: "https://kaakyire9.github.io/Project1-Diversity-Inclusion/"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "/images/portfolio.png",
      tech: ["React", "CSS3", "tailwind", "vite"],
      github: "https://github.com/Kaakyire9/portfolio",
      live: "https://portfolio-opal-zeta-ag7mu21uuj.vercel.app"
    }
  ];

  const getTechClass = (tech) => {
    const techMap = {
      'React': 'tech-react',
      'Django': 'tech-django',
      'JavaScript': 'tech-javascript',
      'Node.js': 'tech-nodejs',
      'PostgreSQL': 'tech-postgresql',
      'MongoDB': 'tech-mongodb',
      'CSS3': 'tech-css3',
      'API': 'tech-api'
    };
    return techMap[tech] || 'tech-api';
  };

  return (
    <section id="projects" className="projects-container py-20 px-4">
      <div className="projects-content max-w-6xl mx-auto">
        <h2 className="projects-title">
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-tags">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className={`tech-tag ${getTechClass(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn btn-github"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn btn-demo"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}