import React from "react";
import "./skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiC, SiMysql, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h2 className="section-title">Tech Stack</h2>
      <div className="card-container">
        <div className="tech-card">
          <div className="skill-item">
            <SiC className="icon" /> <span>C</span>
          </div>
          <div className="skill-item">
            <DiJava className="icon" /> <span>Java</span>
          </div>
          <div className="skill-item">
            <FaJs className="icon" /> <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaReact className="icon" /> <span>React</span>
          </div>
          <div className="skill-item">
            <FaHtml5 className="icon" /> <span>HTML</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="icon" /> <span>CSS</span>
          </div>
          <div className="skill-item">
            <SiMysql className="icon" /> <span>MySQL</span>
          </div>
          <div className="skill-item">
            <SiMongodb className="icon" /> <span>MongoDB</span>
          </div>
        </div>
      </div>

      <h2 id="experience" className="section-title">Experience</h2>
      <div className="card-container">
        <div className="experience-card">
          <h3>Summer Intern – Precursor Info Tech Pvt. Ltd.</h3>
          <p>
            <strong>🗓️ June 2024 – July 2024</strong>
          </p>
          <p>
            📍Mahanagar, Lucknow, Uttar Pradesh
          </p>
          <ul>
            <li>
              Developed a full-stack Sports Academy web application using HTML,
              CSS, JavaScript, JSP, Servlets, and Java.
            </li>
            <li>
              Implemented user authentication and managed MySQL databases using
              JDBC and Java Servlets.
            </li>
            <li>
              Applied secure coding practices, input validation, and basic
              session management.
            </li>
            <li>
              Gained hands-on experience with Core & Advanced Java, debugging,
              OOP, and web app lifecycle.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
