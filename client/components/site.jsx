import React from 'react';
import ContactForm from './ContactForm.jsx';
import Projects from './Projects.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Resume from './Resume.jsx';
import Error from './Error.jsx';
import { Route, Switch } from 'react-router-dom';

export default function Site() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Projects' component={Projects} />
                <Route path='/Resume' component={Resume} />
                <Route path='/Contact' component={ContactForm} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}