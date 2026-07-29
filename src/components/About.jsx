import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I'm a second-year Computer Science student at NUST with a strong
            interest in full stack development, artificial intelligence, and
            database systems. I enjoy building practical software that solves
            real-world problems while continuously learning new technologies.
          </p>

          <p>
            Alongside academics, I've held leadership positions that strengthened
            my communication, teamwork, and organisational skills. I believe the
            best way to learn is by building real projects and challenging
            myself with new technologies.
          </p>
        </div>

        <div className="about-cards">

          <div className="card">
            <h3>🎓 Education</h3>
            <p>BS Computer Science</p>
            <p>NUST</p>
          </div>

          <div className="card">
            <h3>💻 Interests</h3>
            <p>Full Stack Development</p>
            <p>Artificial Intelligence</p>
            <p>Databases</p>
          </div>

          <div className="card">
            <h3>🏆 Leadership</h3>
            <p>Director of Student Welfare & Support</p>
            <p>Student Counsellor</p>
          </div>

          <div className="card">
            <h3>📍 Currently</h3>
            <p>Building full-stack applications</p>
            <p>Learning modern backend technologies</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;