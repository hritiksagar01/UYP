import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the Register page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* Ensure the logo redirects to the main content page */}
          <Link to="/"> 
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="dropdown">
            <button className="dropbtn">INFO</button>
            <div className="dropdown-content">
              <Link to="/uym2">UYM 2.0</Link>
              <Link to="/uym">UYM</Link>
              <Link to="/members">Members</Link>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">MEDIA</button>
            <div className="dropdown-content">
              <Link to="/photos">Photos</Link>
              <Link to="/videos">Videos</Link>
            </div>
          </li>
          <li><Link to="/news">COMMITTEES</Link></li>
          <li><Link to="/support">SUPPORT</Link></li>
          <li className="dropdown">
            <button className="dropbtn">SOCIALS</button>
            <div className="dropdown-content">
              <a href="https://x.com/UyouthP">X</a>
              <a href="https://www.instagram.com/unitedyouthparliament/">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="https://youtube.com/@unitedyouthparliament?si=UmEG_m_32mciJgA9">YouTube</a>
              <a href="https://www.facebook.com/share/xsQkEYrGGPEmh3Ny/?mibextid=qi2Omg">Facebook</a>
            </div>
          </li>
        </ul>
        <div className="navbar-right">
          <button className="play-now-btn" onClick={handleRegisterClick}>REGISTER NOW</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
