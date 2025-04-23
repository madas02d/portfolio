import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="/assets/about-pic.png"
            alt="Jean Damascene"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/assets/experience.png"
                alt="Experience"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Web Development<br />IT Support</p>
            </div>
            <div className="details-container">
              <img
                src="/assets/education.png"
                alt="Education"
                className="icon"
              />
              <h3>Education</h3>
              <p>Web Development Training (DCI)<br />Bachelor of Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Based in Winsen (Luhe), Germany, I am a passionate Full-Stack Developer with experience in both frontend and backend development. 
              I completed my Bachelor's in Computer Science from ULK (Kigali Independent University) and am currently enhancing my skills through 
              Digital Career Institute's Web Development program. I have hands-on experience with version control (Git/GitHub), full-stack development 
              workflow, and testing/debugging practices. My technical expertise includes HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and 
              various databases including MongoDB and MySQL.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow"
        className="icon arrow"
        onClick={() => window.location.href = '#experience'}
      />
    </section>
  );
};

export default About; 