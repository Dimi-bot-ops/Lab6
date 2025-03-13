import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header role="banner">
      <nav>
        <ul>
          <li><Link to="/" aria-label="Home page">Home</Link></li>
          <li><Link to="/about" aria-label="About page">About</Link></li>
          <li><Link to="/projects" aria-label="Projects page">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
