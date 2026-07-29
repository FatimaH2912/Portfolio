import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Fatima Haroon</h1>

        <h2> A Computer Science Student at NUST</h2>

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