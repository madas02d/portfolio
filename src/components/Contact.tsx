import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="/assets/email.png"
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:mb.damascene24@gmail.com">mb.damascene24@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="/assets/phone.png"
            alt="Phone"
            className="icon contact-icon"
          />
          <p><a href="tel:+4917680820274">+49 176 80820274</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="/assets/location.png"
            alt="Location"
            className="icon contact-icon"
          />
          <p><a href="https://www.google.com/maps/place/21423+Winsen+Luhe/@53.516667,9.25,15z/data=!4m5!3m4!1s0x47b18f5200000001:0x118905c47c000000!8m2!3d53.516667!4d9.25" target="_blank" rel="noopener noreferrer">21423 Winsen (Luhe), Germany</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p><a href="https://linkedin.com/in/mbiturimana-jean-damascene" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 