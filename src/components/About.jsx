import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-intro">
          <span className="about-label">A little about me</span>

          <h2>
            Building things, <span>learning constantly.</span>
          </h2>

          <p>
            I'm a second-year Computer Science student at NUST with a strong
            interest in front-end and full-stack development. I enjoy turning
            ideas into practical, user-friendly applications using technologies
            like React, Tailwind CSS, Node.js, and databases.
          </p>

          <p>
            I'm a firm believer that the best way to learn is to build. From
            academic projects to personal experiments, I enjoy taking on
            challenges that push me to understand how things work and create
            something meaningful along the way.
          </p>

          <div className="about-tech">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Node.js</span>
            <span>Databases</span>
          </div>
        </div>

        <div className="about-cards">

          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <p>BS Computer Science</p>
            <p>NUST</p>
          </div>

          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Building</h3>
            <p>Front-End & Full-Stack</p>
            <p>Web Applications</p>
          </div>

          <div className="card">
            <div className="card-icon">🚀</div>
            <h3>Exploring</h3>
            <p>AI & Backend</p>
            <p>Modern Technologies</p>
          </div>

          <div className="card">
            <div className="card-icon">🤝</div>
            <h3>Beyond Code</h3>
            <p>Leadership & Teamwork</p>
            <p>Community Building</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

