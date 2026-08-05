import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <span className="section-label">Things I've built</span>
        <h2>Featured Projects</h2>
        <p>
          A selection of projects I've built while exploring front-end,
          full-stack development, authentication, APIs, and modern web
          technologies.
        </p>
      </div>

      <div className="project-container">

        {/* Task Manager */}
        <div className="project-card">
          <div className="project-number">01</div>

          <h3>📋 Task Manager</h3>

          <p>
            A full-stack task management application built with React,
            Express, PostgreSQL, and JWT authentication. Users can securely
            create, update, and manage tasks through a modern interface.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>JWT</span>
          </div>
        </div>

        {/* NovaForms */}
        <div className="project-card">
          <div className="project-number">02</div>

          <h3>🚀 NovaForms</h3>

          <p>
            An embeddable lead-generation platform that enables websites to
            collect, validate, and manage form submissions through a secure
            backend dashboard.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>REST API</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Chasing Wonder */}
        <div className="project-card">
          <div className="project-number">03</div>

          <h3>✨ Chasing Wonder</h3>

          <p>
            An ongoing web project created from an internship assignment and
            personal interest. The project explores how thoughtful design and
            interactive experiences can turn curiosity into a meaningful
            digital experience.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Authentication Flow */}
        <div className="project-card">
          <div className="project-number">04</div>

          <h3>🔐 Authentication Flow</h3>

          <p>
            A full-stack authentication system implementing user signup and
            login, client-side validation, secure password handling, token
            based authentication, protected routes, and logout functionality.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>JWT</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
