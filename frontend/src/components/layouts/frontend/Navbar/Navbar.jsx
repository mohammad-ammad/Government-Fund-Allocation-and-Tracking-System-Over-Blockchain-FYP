import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div className='nav__wrapper'>
     <div className='nav__logo'>GFATS</div>
     <div className='nav__links'>
         <div><Link to="/" className='nav_anchor'>Home</Link></div>
         <div><Link to="/about" className='nav_anchor'>About</Link></div>
         <div><Link to="/sign-up" className='nav_anchor'>Sign Up</Link></div>
         <div><Link to="/sign-in" className='nav_anchor'>Sign In</Link></div>
     </div>
    </div>
  );
}

export default Navbar;
