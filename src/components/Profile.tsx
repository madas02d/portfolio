import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img className="profile_pic" src="/assets/Profile_pic.png" alt="Jean Damascene" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h3 className="title">Jean Damascene Mbiturimana</h3>
        <p className="section__text__p2">Frontend and Backend Developer | Computer Science Professional | IT Support Specialist</p>
        <div className="section__text__description">
          <p>Experienced developer with a background in Computer Science and IT Support. Skilled in designing and developing responsive web applications using modern frontend technologies (HTML, CSS, JavaScript, React) and backend frameworks (Node.js, Express, NoSQL).

In addition, I have hands-on experience in IT support, including troubleshooting, system maintenance, and user assistance across both hardware and software. My academic background in computer science, combined with practical experience in the IT industry, provides me with a solid understanding of IT infrastructures and modern software solutions.</p>
        </div>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/assets/CV.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/assets/Lebenslauf.pdf')}
          >
            Download Germany CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = '#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="icon"
            onClick={() => window.open('https://linkedin.com/in/mbiturimana-jean-damascene')}
          />
          <img
            src="/assets/github.png"
            alt="GitHub"
            className="icon"
            onClick={() => window.open('https://github.com/madas02d')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile; 