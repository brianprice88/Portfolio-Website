import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    
    function toggleNavbar () {
      let navBar = document.getElementById('myTopnav');
      if (navBar.className === "topnav") {
        navBar.className += " responsive";
      } else {
        navBar.className = "topnav";
      }
    }

    return (
        <div id='Navbar'>
        <div className = 'topnav' id='myTopnav'>
        <Link to='/'>About</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='Resume'>Resume</Link>
        <Link to='/Contact'>Contact</Link>
        <a className='toggleIcon' onClick = {toggleNavbar}>&#9776;</a>      
        </div>
        </div>
    )
}