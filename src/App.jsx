import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="hero">
        <p className="eyebrow">Hello, I’m</p>
        <h1>Trisha Rajeev</h1>
        <h2>BCA Student • Cybersecurity Learner and Aspiring Digital Investigator</h2>
        <p>
          I enjoy learning cybersecurity, digital forensics and building simple web projects.I like learning new things, playing around with code, and occasionally falling into a totally unnecessary rabbit hole because one question somehow turned into seventeen.
        </p>
        <a className="btn" href="#projects">View Projects</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a BCA student interested in cybersecurity, digital forensics and technology.
          I’m also someone who believes that learning never really stops. Technology changes constantly, and cybersecurity changes even faster. Today’s secure system can become tomorrow’s vulnerability, which means there is always something new to learn, investigate, and experiment with.
          Beyond cybersecurity, I’m a person who likes to keep things interesting. I can be serious when something matters, but I also believe life is better when you can laugh at your own mistakes
          I am currently improving my practical and technical skills.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
          <span>Cybersecurity</span>
          <span>Computer networks</span>
          <span>Linux</span>
        </div>
      </section>

      <Projects />

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: trisharajeevv@gmail.com</p>
        <p>GitHub: github.com/yourusername</p>
      </section>

      <footer>© 2026 Your Name. All rights reserved.</footer>
    </>
  );
}

export default App;
