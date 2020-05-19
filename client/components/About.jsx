import React from 'react';

export default function About () {
    return (
        
        <div>

        <div className='AboutHeader'>
          <h1>Brian Price</h1>
          <h2>Software Engineer</h2>
        </div>

        <div className='IconsRow'>

        <div className='Iconscol'>
        <a href='https://linkedin.com/in/brian-price88' target="_blank">
        <img src='assets/Linkedin.svg' alt='LinkedIn logo'/>
        </a>
        </div>

        <div className='Iconscol' id='Icon2'>

        <a href='https://github.com/brianprice88' target="_blank">
        <img src='assets/GitHub.png' alt='LinkedIn logo'/>
        </a>
        </div>

        <div className='Iconscol' id='Icon3'>
        <a href='https://angel.co/u/brian-price-15' target="_blank">
        <img src='assets/AngelList.png' alt='AngelList logo'/>
        </a>
        </div>

        </div>

        </div>
    )
}