import React from 'react';
import ContactForm from './ContactForm.jsx';
import Projects from './Projects.jsx'

export default function Site () {
    return (
    <div>
        <div id='Projects'>
        < Projects />
        </div>

        <div id='ContactForm'>
        < ContactForm />
        </div>
    </div>
    )
}