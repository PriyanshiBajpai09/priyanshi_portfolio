import React from 'react';
import './skills.css';
import WebDesign from '../../assets/website-design.png';
import Machine from '../../assets/machine-learning.jpeg';
import Cyber from '../../assets/cyber.png';


const Skills = () => {
  return (
    <section id='skills'>
      <h1 className="skillTitle">Skills</h1>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>Building dynamic, responsive websites with a focus on performance, functionality, and user experience using modern web technologies like HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </div>

      <div className='skillBars'>
        <div className='skillBar'>
          <img src={Machine} alt='Machine' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Machine Learning</h2>
            <p>Implementing predictive models and algorithms for fraud detection and other use cases.</p>
          </div>
        </div>
      </div>

      <div className='skillBars'>
        <div className='skillBar'>
          <img src={Cyber} alt='Cyber' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Cybersecurity</h2>
            <p>Developing secure systems and applications, focusing on preventing vulnerabilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
