import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src = "PXL_20250313_190210117.jpg" alt="Dimitrije Krstic" className="profile-image" />
        <div className="description">
          <h2>Welcome to this assignment</h2>
          <p>
            This is the portfolio website made by Dimitrije Krtic, a person who shouldn't be allowed to code frontend by law. I am a passionate game developer, have a major obsession with coding and art of any kind, and
            hope to make coding both my carrer and hobby if I can. My biggest achievement is almost being done with university. I am from Serbia, a country that most don't know exist, and a future Canadian citizen. I also love Chess, video games, 
            and Dungeons and Dragons
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
