import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Site from './components/Site.jsx'

ReactDOM.render(
    <BrowserRouter>
        <Site />
    </BrowserRouter>,
    document.getElementById('site'))