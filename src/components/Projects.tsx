import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
        <div className="details-container color-container">
            <div className="article-container">
              <img
                src="/assets/tiny-tales.png"
                alt="music player"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Tiny Tales</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/madas02d/storybook')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://storybook-qrb7.onrender.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="/assets/E-commerce.png"
                alt="Blogs"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-commerce</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/madas02d/E-commerce')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://e-commerce-three-gold-65.vercel.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="/assets/project-01.png"
                alt="Blogs"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Blogs</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/madas02d/blogs')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://blogs-8ocw.onrender.com/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="/assets/project-03.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Music Player</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/madas02d/musics_player')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open('https://musics-player-xi.vercel.app/library')}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = '#contact'}
      />
    </section>
  );
};

export default Projects; 