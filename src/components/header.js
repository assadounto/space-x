import React from 'react';
import '../../src/App.css'
import {NavLink,Link} from 'react-router-dom'
import logo from'../../src/planet.png'
function Header(){
    return (
        <nav className="header">
            <div><img src={logo} alt="Logo" /></div>
            <div className="navbar-brand" href="spacebar">Space Travelers' Hub</div>
            <div className='Cont'>
            <NavLink to='/' href="spacebar/rockets"	style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}
	>Rockets</NavLink>
            <Link to='/misions' className="Missions" href="#">Missions</Link>
            <Link to='/my-profiles' className="My-Profile" href="">My Profile</Link>
            </div>
            </nav>
    )
}

export default Header;