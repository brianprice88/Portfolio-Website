import React from 'react';
import ContactForm from './ContactForm.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx'

export default function Site () {
    return (
    <div>

        <div id='About'>
        <About />
        </div>
        
        <div id='Projects'>
        <Projects />
        </div>

        <div id='Resume'>
        <iframe id='displayResume' src='assets/BrianPriceResume.pdf'></iframe>
        </div>

        <div id='ContactForm'>
        <ContactForm />
        </div>
    </div>
    )
}