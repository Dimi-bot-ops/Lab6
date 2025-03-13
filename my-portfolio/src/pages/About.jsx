import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="description">
          <h2>About Me</h2>
          <p>
            Still a long way to go, but almost there at the same time. These are my skills and certifications.
          </p>
          <h3>Certificates and Studies</h3>
          <ul>
            <li>IELTS and Cambridge English Certification</li>
            <li>High School Diploma</li>
          </ul>
          <h3>Languages Known</h3>
          <ul>
            <li>English (Fluent)</li>
            <li>Serbian (Native)</li>
          </ul>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>C#</li>
            <li>Unity</li>
            <li>Unreal engine</li>
            <li>Godot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
