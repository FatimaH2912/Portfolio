import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>📋 Task Manager</h3>

          <p>
            A full-stack task management application built with React,
            Express, PostgreSQL and JWT Authentication. Users can create,
            update and manage tasks securely through a modern interface.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>JWT</span>
          </div>


        </div>

        <div className="project-card">
          <h3>🚀 NovaForms</h3>

          <p>
            An embeddable lead-generation platform that enables websites to
            collect, validate and manage form submissions through a secure
            backend dashboard.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>REST API</span>
            <span>JavaScript</span>
          </div>

        
        </div>

      </div>
    </section>
  );
}

export default Projects;