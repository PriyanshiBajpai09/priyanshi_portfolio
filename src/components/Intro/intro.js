import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
         <span className='introText'>I am <span className='introName'>Priyanshi,</span><br/>a Web Developer.</span>
         <p className='introPara'>Welcome to my portfolio, showcasing my journey as a passionate <br/> computer science student with a focus on web development, <br/> machine learning, and cybersecurity projects.</p>   
         <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'>
        </img>

    </section>


  )
}

export default Intro;
