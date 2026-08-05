import "./App.css";
import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/About.css";
import "./components/Projects.css";
import "./components/Contact.css";
import "./components/Footer.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;