import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

function Header() {
  return (
    <>
      <nav className="header">
        <div><img src={logo} alt="Logo" /></div>
        <div className="navbar-brand">Space Travelers Hub</div>
        <div className="Cont">
          <NavLink
            to="/"
            className="nav-item"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { color: 'blue' })}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/misions"
            className="nav-item"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { color: 'blue' })}
          >
            Missions

          </NavLink>
          <NavLink
            to="/my-profiles"
            className="nav-item"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { color: 'blue' })}
          >
            My Profile

          </NavLink>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Header;
