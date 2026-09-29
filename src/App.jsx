import "./App.css";
import { Analytics } from "@vercel/analytics/react";

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
          href="/Shivani_Lokhande_Resume.pdf.pdf"
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

          <a
            href="https://github.com/shivanilokh/AI-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>AI Company Knowledge Chatbot</h3>
            <p>
              An AI-powered chatbot built using Python and Streamlit to
              answer questions from company documents.
            </p>
          </a>

          <a
            href="https://github.com/shivanilokh/PowerBI-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Data Analytics Dashboard</h3>
            <p>
              An interactive dashboard built with Python and Streamlit to
              explore data and visualize statistical results.
            </p>
          </a>

          <a
            href="https://github.com/shivanilokh/Machine-Learning-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>Machine Learning Projects</h3>
            <p>
              Machine learning projects focused on data preprocessing,
              model building, evaluation, and practical problem solving.
            </p>
          </a>

        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>
          I'm open to opportunities, collaborations, and interesting
          data projects.
        </p>

        <form
          action="https://formspree.io/f/mppzdbvb"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

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
            href="https://github.com/shivanilokh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <h3>FlyRank AI Internship</h3>

        <a
          href="https://internship.flyrank.ai/verify?id=FR-D11-0D750-99B08&first_name=Shivani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verify Shivani Lokhande's FlyRank AI Internship credential FR-D11-0D750-99B08"
          style={{
            boxSizing: "border-box",
            margin: "0",
            padding: "14px 18px",
            border: "1px solid #DDE4E7",
            background: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
            lineHeight: "1.25",
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            borderRadius: "20px",
            boxShadow: "0 1px 2px rgba(5,31,33,0.05)",
            maxWidth: "100%"
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            style={{
              display: "block",
              flex: "none"
            }}
          >
            <rect width="96" height="96" rx="22" fill="#051F21" />

            <path
              d="M28.2354 74.2202V67.9039C29.6419 68.4369 31.3724 68.7055 33.4311 68.7055C35.3235 68.7055 36.8153 68.2396 37.8979 67.3079C38.9805 66.3762 39.9566 64.8695 40.8218 62.792L42.6887 58.3139L29.8976 29.2879C35.0038 29.2879 39.6028 32.3307 41.5294 36.9893L47.0746 50.3985L56.0126 28.6038C57.9221 23.9452 62.5168 20.894 67.6187 20.894L50.0795 63.5936C48.4556 67.5933 46.5205 70.5102 44.2743 72.3484C42.0281 74.1867 39.1169 75.1058 35.5451 75.1058C32.6212 75.1058 30.1875 74.812 28.2354 74.2244V74.2202Z"
              fill="#54E399"
            />
          </svg>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              minWidth: "0"
            }}
          >
            <span
              style={{
                color: "rgba(5,31,33,0.5)",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
                fontSize: "9px"
              }}
            >
              FlyRank AI Internship
            </span>

            <span
              style={{
                color: "#051F21",
                fontWeight: "600",
                fontSize: "15px"
              }}
            >
              Verified credential
            </span>

            <span
              style={{
                color: "#1A7A4A",
                fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
                fontSize: "11px"
              }}
            >
              FR-D11-0D750-99B08
            </span>
          </span>

          <span
            style={{
              padding: "6px 12px",
              border: "1px solid rgba(84,227,153,0.28)",
              background: "rgba(84,227,153,0.12)",
              color: "#1A7A4A",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginLeft: "8px",
              borderRadius: "9999px",
              fontSize: "12px",
              flex: "none"
            }}
          >
            Verify
          </span>
        </a>
      </footer>

      <Analytics />

    </div>
  );
}

export default App;
