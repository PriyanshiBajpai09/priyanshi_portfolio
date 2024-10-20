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
    
        emailjs.sendForm('service_slmb1co', 'template_6lr94vg', form.current, { publicKey: 'RgSAJmBzpweifgHP4',})
          .then(
            () => {
              console.log('SUCCESS!');
              
              alert('email sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactPage'>
        <div id='projects'>
            <h1 className='contactPageTitle'>Projects</h1>
            <p className='projectDesc'>
                Here are some of the projects I've worked on, showcasing my expertise in various technologies and fields.
            </p>
            <div className='projectCards'>
                <div className='projectCard'>
                    <h2 className='projectTitle'>Sports Academy Website</h2>
                    <p className='projectDescription'>Developed a full-stack website for a sports academy using Java for both the front-end and back-end.Integrated user registration, session management, and event scheduling functionalities.</p>
                </div>
                <div className='projectCard'>
                    <h2 className='projectTitle'>Credit Fraud Detection using Machine Learning</h2>
                    <p className='projectDescription'>Developed a machine learning model to detect fraudulent transactions, enhancing financial security.</p>
                </div>
                <div className='projectCard'>
                    <h2 className='projectTitle'>Jumbled Word Game with Finite State Machine (FSM)</h2>
                    <p className='projectDescription'>Designed an interactive word puzzle game using FSM concepts, improving problem-solving skills and logic.</p>
                </div>
                <div className='projectCard'>
                    <h2 className='projectTitle'>Data Analysis on SDG8</h2>
                    <p className='projectDescription'>Analyzed and visualized data related to Sustainable Development Goal 8, focusing on economic growth and decent work.</p>
                </div>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>

                <input type='text' className='name' placeholder='Your Name' name='form_name'></input>
                <input type='email' className='email' placeholder='Your Email' name='your_email'></input>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link'></img>
                    <img src={TwitterIcon} alt='Twitter' className='link'></img>
                    <img src={YoutubeIcon} alt='Youtube' className='link'></img>
                    <img src={InstagramIcon} alt='Instagram' className='link'></img>

                </div>


            </form>




        </div>
    </section>
  )
}

export default Contact;
