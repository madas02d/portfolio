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
        <p className="section__text__p2">Frontend- und Backend-Entwickler | Informatik-Professional</p>
        <div className="section__text__description">
          <p>Skilled in designing and developing responsive web applications using frontend technologies (HTML, CSS, JavaScript, React) and backend frameworks (Node.js, Express, NoSQL).</p>
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