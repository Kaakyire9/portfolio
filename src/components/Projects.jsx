import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, shopping cart, and payment integration.",
      image: "https://via.placeholder.com/400x200",
      tech: ["React", "Django", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://via.placeholder.com/400x200",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides current conditions and forecasts with interactive maps.",
      image: "https://via.placeholder.com/400x200",
      tech: ["JavaScript", "CSS3", "API"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://via.placeholder.com/400x200",
      tech: ["React", "CSS3", "Node.js"],
      github: "https://github.com",
      live: "https://example.com"
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