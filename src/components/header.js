import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../planet.png';

function Header() {
  return (
    <nav className="header">
      <div><img src={logo} alt="Logo" /></div>
      <div className="navbar-brand" href="spacebar">Space Travelers' Hub</div>
      <div className="Cont">
        <Link to="/" className="Rockets" href="spacebar/rockets">Rockets</Link>
        <Link to="/misions" className="Missions" href="#">Missions</Link>
        <Link to="/my-profiles" className="My-Profile" href="">My Profile</Link>
      </div>
    </nav>
  );
}

export default Header;
