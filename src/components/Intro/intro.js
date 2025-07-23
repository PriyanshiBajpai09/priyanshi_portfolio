import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="introText">
          {" "}
          Hi, I am <span className="introName">Priyanshi,</span>
          <br />a Web Developer.
        </span>
        <p className="introPara">
          Welcome to my portfolio, where I showcase my journey
          <br />
          in crafting responsive, user-centric websites and applications
          <br />
          using modern web technologies. <br />
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg"></img>Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg"></img>
    </section>
  );
};

export default Intro;
