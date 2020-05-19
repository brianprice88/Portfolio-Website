import React from 'react'

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
        <div className = 'topnav' id='myTopnav'>
        <a href='#About'>About</a>
        <a href='#Projects'>Projects</a>
        <a href='#Resume'>Resume</a>
        <a href='#ContactForm'>Contact</a>
        <a className='icon' onClick = {toggleNavbar}>&#9776;</a>      
        </div>
    )
}