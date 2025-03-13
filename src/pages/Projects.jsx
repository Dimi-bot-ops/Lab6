import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="description">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I've worked on. Each project showcases different skills and technologies that I have mastered over time.
          </p>
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Project 1: Steam Video Game - Slender Myth - Currently ongoing</strong>
              <p>A video game set in the SlenderMan universe, set to release this year</p>
            </li>
            <li>
              <strong>Video Game - Amissa's Chronicles</strong>
              <p>Early concept for a procedurally generated video game</p>
            </li>
            <li>
              <strong>Project 3: Video game - Unnamed platformer</strong>
              <p>A game made for a school project aimed to test a device that can control a player in game using brain waves</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
