import "./App.css";

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2>Shivani Lokhande</h2>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Data Analyst Portfolio</h1>

        <h2>Hi, I'm Shivani Lokhande 👋</h2>

        <p>
          I transform raw data into meaningful insights using Python, SQL,
          Excel, Power BI and Machine Learning.
        </p>

        <a
          href="/Shivani_Lokhande_Resume.pdf"
          download
          className="resume-button"
        >
          Download Resume
        </a>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am a Data Analytics and Data Science learner passionate about
          Python, SQL, Machine Learning, and turning data into meaningful
          insights.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="skills-list">
          <span>Python</span>
          <span>SQL</span>
          <span>Excel</span>
          <span>Power BI</span>
          <span>Machine Learning</span>
          <span>Data Analysis</span>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-list">

          <div className="project-card">
            <h3>AI Company Knowledge Chatbot</h3>
            <p>
              An AI-powered chatbot built using Python and Streamlit to
              answer questions from company documents.
            </p>
          </div>

          <div className="project-card">
            <h3>Data Analytics Dashboard</h3>
            <p>
              An interactive dashboard built with Python and Streamlit to
              explore data and visualize statistical results.
            </p>
          </div>

          <div className="project-card">
            <h3>Machine Learning Projects</h3>
            <p>
              Machine learning projects focused on data preprocessing,
              model building, evaluation, and practical problem solving.
            </p>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>
          I'm open to opportunities, collaborations, and interesting
          data projects.
        </p>

        <p>Email: shivlokh@gmail.com</p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/shivanilokhande01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/shivanilokh/flyrank-ml-internship"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;