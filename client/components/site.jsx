import React, {lazy} from 'react';
import Navbar from './Navbar.jsx';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home.jsx'));
const Projects = lazy(() => import('./Projects.jsx'));
const Resume = lazy(() => import('./Resume.jsx'));
const ContactForm = lazy(() => import('./ContactForm.jsx'));
const Error = lazy(() => import('./Error.jsx'));



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