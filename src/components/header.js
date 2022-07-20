import React from 'react';
import '../../src/App.css'
import {NavLink,Link} from 'react-router-dom'
import logo from'../../src/planet.png'
function Header(){
    return (
        <><nav className="header">
            <div><img src={logo} alt="Logo" /></div>
            <div className="navbar-brand" href="spacebar">Space Travelers' Hub</div>
            <div className='Cont'>
                <NavLink to='/' className="nav-item" style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
                >Rockets</NavLink>
                <Link to='/misions' className="nav-item" href="#">Missions</Link>
                <Link to='/my-profiles' className="nav-item" href="">My Profile</Link>
            </div>
        </nav><hr /></>
    )
}

export default Header;
