import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Fatima Haroon</h1>

        <h2> A Computer Science Student at NUST</h2>

        <p className="hero-intro">
          My interests span full-stack development, space, travel, and research.
          I love building practical things, exploring unfamiliar places, and learning
          about the questions that push the boundaries of what we know. I’m working
          toward becoming a full-stack developer today, with the ambition of pursuing
          research in the future.
          </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;