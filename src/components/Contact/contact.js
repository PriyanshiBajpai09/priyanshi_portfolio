import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_slmb1co', 'template_6lr94vg', form.current, {
      publicKey: 'RgSAJmBzpweifgHP4',
    }).then(
      () => alert('Email sent!'),
      (error) => console.error('FAILED...', error.text)
    );
  };

  return (
    <section id="contactPage">
      {/* Projects Section */}
      <div id="projects">
        <h1 className="contactPageTitle">Projects</h1>
        <p className="projectDesc">
         
        </p>
        <div className="projectCards">
          {/* Sports Academy */}
          <div className="projectCard">
            <h2 className="projectTitle">Sports Academy Website</h2>
            <p className="projectTech">Java, MySQL, HTML, CSS, JavaScript</p>
            <ul className="projectDescription">
              <li>User registration & event scheduling.</li>
              <li>Admin/member login with Java Servlets & JDBC.</li>
            </ul>
            <a href="https://github.com/your-username/Sports_Academy_Website"
               className="github-link" target="_blank" rel="noopener noreferrer">
              GitHub: Sports_Academy_Website
            </a>
          </div>
          {/* Blogging Website */}
          <div className="projectCard">
            <h2 className="projectTitle">Blogging Website</h2>
            <p className="projectTech">MERN Stack</p>
            <ul className="projectDescription">
              <li>Full CRUD blog platform with auth.</li>
              <li>React frontend & Express/MongoDB backend.</li>
            </ul>
            <a href="https://github.com/your-username/Blogging_Website"
               className="github-link" target="_blank" rel="noopener noreferrer">
              GitHub: Blogging_Website
            </a>
          </div>
          {/* Food Ordering App */}
          <div className="projectCard">
            <h2 className="projectTitle">Food Ordering App</h2>
            <p className="projectTech">React, Redux, Tailwind</p>
            <ul className="projectDescription">
              <li>Swiggy-like UI with live API.</li>
              <li>Cart with Redux Toolkit & responsive design.</li>
            </ul>
            <a href="https://github.com/your-username/Food_Ordering_App"
               className="github-link" target="_blank" rel="noopener noreferrer">
              GitHub: Food_Ordering_App
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="form_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" />
          <button type="submit" className="submitBtn">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="YouTube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
