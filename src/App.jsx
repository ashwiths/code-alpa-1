import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section with Background Image */}
      <section id="home">
        <div className="home-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I am a passionate web developer skilled in modern web technologies.</p>
          <a href="#contact" className="cta-btn">Get In Touch</a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-container">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill-item">
              <h3>HTML</h3>
              <p>Building strong web structures using HTML5.</p>
            </div>
            <div className="skill-item">
              <h3>CSS</h3>
              <p>Crafting beautiful layouts with CSS3.</p>
            </div>
            <div className="skill-item">
              <h3>JavaScript</h3>
              <p>Creating interactive experiences with JavaScript.</p>
            </div>
            <div className="skill-item">
              <h3>React</h3>
              <p>Building dynamic web applications with React.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-container">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio built with React.js to showcase my work.</p>
            </div>
            <div className="project-item">
              <h3>E-Commerce Website</h3>
              <p>An online shopping platform built using React and Node.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-container">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
